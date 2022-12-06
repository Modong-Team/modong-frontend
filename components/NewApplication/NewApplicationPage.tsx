import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import NewApplicationContent from './NewApplicationContent';
import NewApplicationLayout from './NewApplicationLayout';
import NewApplicationTitle from './NewApplicationTitle';
import { postApplication, patchApplication } from '../../api/application';
import NewApplicationIndicator from './NewApplicationIndicator';
import NewApplicationNavigator from './NewApplicationNavigator';
import NewApplicationButton from './NewApplicationButton';
import { useRouter } from 'next/router';
import { useFormsActions, useFormsValue } from '../../contexts/FormsProviders';
import { postForm, putForm } from '../../api/form';
import BasicModal from '../modals/BasicModal';
import { iconTrash } from '../../constants/icons';
import ModalTypes from '../../constants/modals';

export default function NewApplicationPage() {
	const titleRef = useRef<HTMLInputElement>(null);
	const [essentials, setEssentials] = useState([1, 2, 3]);
	const [emptyTitleError, setEmptyTitleError] = useState(false);
	const [applicationId, setApplicationId] = useState<number | null>(null);
	const [currentPage, setCurrentPage] = useState(-1);
	const [isRemoveModalOpened, setIsRemoveModalOpened] = useState(false);
	const [removeFormIdx, setRemoveFormIdx] = useState(-1);
	const [isComplete, setIsComplete] = useState(false);

	const forms = useFormsValue();
	const actions = useFormsActions();

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
		if (saveSucceed) setIsComplete(true);
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
		setRemoveFormIdx(idx);
		setIsRemoveModalOpened(true);
	};

	const onConfirmRemoveModal = () => {
		if (removeFormIdx === currentPage) onRouteToPage(removeFormIdx - 1);
		else if (removeFormIdx < currentPage) onRouteToPage(currentPage - 1);
		actions.removeForm(removeFormIdx);
		setIsRemoveModalOpened(false);
	};

	return (
		<NewApplicationLayout onSave={onSave} onDone={onDone} isComplete={isComplete}>
			<S.NewApplicationContainer>
				{!isComplete && (
					<NewApplicationTitle
						titleRef={titleRef}
						emptyTitleError={emptyTitleError}
						setEmptyTitleError={setEmptyTitleError}
					/>
				)}
				<NewApplicationIndicator currentPage={currentPage} isComplete={isComplete} />
				<NewApplicationContent
					essentials={essentials}
					setEssentials={setEssentials}
					currentPage={currentPage}
					isComplete={isComplete}
				/>
				{!isComplete && (
					<>
						<NewApplicationNavigator
							onRouteToPage={onRouteToPage}
							onRemove={onRemove}
							currentPage={currentPage}
						/>
						<NewApplicationButton currentPage={currentPage} onNext={onNext} onPrev={onPrev} />
					</>
				)}
			</S.NewApplicationContainer>
			{isRemoveModalOpened && (
				<BasicModal
					icon={iconTrash}
					title='페이지를 삭제할까요?'
					subtitle='삭제된 페이지는 복구가 불가능해요.'
					type={ModalTypes.doubleButton}
					onCancel={() => setIsRemoveModalOpened(false)}
					onConfirm={onConfirmRemoveModal}
				/>
			)}
		</NewApplicationLayout>
	);
}

namespace S {
	export const NewApplicationContainer = styled.div`
		display: grid;
		grid-template-columns: 19.4rem 71.2rem 19.4rem;
		row-gap: 1.6rem;
		width: fit-content;
		margin: 0 auto;
		justify-content: center;
	`;
}
