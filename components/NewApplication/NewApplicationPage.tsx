import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import NewApplicationContent from './NewApplicationContent';
import NewApplicationLayout from './NewApplicationLayout';
import NewApplicationTitle from './NewApplicationTitle';
import { postApplication, patchApplication } from '../../api/application';
import NewApplicationIndicator from './NewApplicationIndicator';
import NewApplicationNavigator from './NewApplicationNavigator';
import NewApplicationButton from './NewApplicationButton';
import { DummySections } from '../../models/sections';
import { useRouter } from 'next/router';
import { useFormsActions, useFormsValue } from '../../contexts/FormsProviders';
import { postForm, putForm } from '../../api/form';

export default function NewApplicationPage() {
	const titleRef = useRef<HTMLInputElement>(null);
	const [essentials, setEssentials] = useState([1, 2, 3]);
	const [emptyTitleError, setEmptyTitleError] = useState(false);
	const [applicationId, setApplicationId] = useState<number | null>(null);
	const [currentPage, setCurrentPage] = useState(-1);
	const forms = useFormsValue();
	const actions = useFormsActions();
	const router = useRouter();

	const onSave = async () => {
		const title = titleRef.current!.value;
		if (!title) {
			setEmptyTitleError(true);
			return false;
		}

		try {
			let savedApplicationId: number;
			// post new or get saved Id
			if (!applicationId) {
				const post = await postApplication(1, title);
				setApplicationId(post.id);
				savedApplicationId = post.id;
			} else savedApplicationId = applicationId;
			// patch essentials
			const patch = await patchApplication(savedApplicationId, essentials);
			console.log(patch);
			// post forms or put forms
			const postForms = [];
			const promises = forms.map(async (form) => {
				if (form.id) {
					const putFormUsingSavedId = await putForm(form.id, form.title, form.questions);
					postForms.push(putFormUsingSavedId);
				} else {
					const postFormAndSaveId = await postForm(
						savedApplicationId,
						form.title,
						form.questions,
					).then((res) => {
						form.id = res.id;
					});
					postForms.push(postFormAndSaveId);
				}
			});
			// wait for all promises to be fulfilled
			await Promise.all(promises);
			console.log(forms);
		} catch (err) {
			console.log(err);
		}

		return true;
	};

	const onDone = async () => {
		const saveSucceed = await onSave();
		if (saveSucceed) router.push('/');
	};

	const onNext = () => {
		if (currentPage === forms.length - 1) {
			actions.createForm();
		}
		setCurrentPage(currentPage + 1);
	};

	const onPrev = () => {
		setCurrentPage(currentPage - 1);
	};

	const onRouteToPage = (idx: number) => {
		setCurrentPage(idx);
	};

	const onRemove = (idx: number) => {
		if (idx === currentPage) onRouteToPage(idx - 1);
		else if (idx < currentPage) onRouteToPage(currentPage - 1);
		actions.removeForm(idx);
	};

	return (
		<NewApplicationLayout onSave={onSave} onDone={onDone}>
			<NewApplicationContainer>
				<NewApplicationTitle
					titleRef={titleRef}
					emptyTitleError={emptyTitleError}
					setEmptyTitleError={setEmptyTitleError}
				/>
				<NewApplicationIndicator currentPage={currentPage} />

				<NewApplicationContent
					essentials={essentials}
					setEssentials={setEssentials}
					currentPage={currentPage}
				/>
				<NewApplicationNavigator
					onRouteToPage={onRouteToPage}
					onRemove={onRemove}
					currentPage={currentPage}
				/>
				<NewApplicationButton currentPage={currentPage} onNext={onNext} onPrev={onPrev} />
			</NewApplicationContainer>
		</NewApplicationLayout>
	);
}

const NewApplicationContainer = styled.div`
	width: fit-content;
	margin: 0 auto;
	display: grid;
	grid-template-columns: max-content 71.2rem max-content;
	row-gap: 1.6rem;
`;
