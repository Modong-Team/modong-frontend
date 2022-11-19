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
import { useFormsValue } from '../../contexts/FormsProviders';
import { postForm, putForm } from '../../api/form';

export default function NewApplicationPage() {
	const titleRef = useRef<HTMLInputElement>(null);
	const [essentials, setEssentials] = useState([1, 2, 3]);
	const [currentSection, setCurrentSection] = useState(0);
	const [sections, setSections] = useState([...DummySections]);
	const [sectionsLength, setSectionsLength] = useState(0);
	const [emptyTitleError, setEmptyTitleError] = useState(false);
	const [applicationId, setApplicationId] = useState<number | null>(null);
	const forms = useFormsValue();
	const router = useRouter();

	useEffect(() => {
		setSectionsLength(sections.length);
	}, [sections]);

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
		if (currentSection === sections.length - 1)
			setSections([...sections, { title: '질문 페이지' }]);
		setCurrentSection(currentSection + 1);
	};

	const onPrev = () => {
		setCurrentSection(currentSection - 1);
	};

	const onRouteToSection = (idx: number) => {
		setCurrentSection(idx);
	};

	const onRemove = (idx: number) => {
		setSections(sections.filter((v, i) => i !== idx));
		setCurrentSection(Math.max(0, currentSection - 1));
	};

	return (
		<NewApplicationLayout onSave={onSave} onDone={onDone}>
			<NewApplicationContainer>
				<NewApplicationTitle
					titleRef={titleRef}
					emptyTitleError={emptyTitleError}
					setEmptyTitleError={setEmptyTitleError}
				/>
				<NewApplicationIndicator currentSection={currentSection} />
				<NewApplicationContent
					essentials={essentials}
					setEssentials={setEssentials}
					currentSection={currentSection}
					section={sections[currentSection]}
				/>
				<NewApplicationNavigator
					sections={sections}
					currentSection={currentSection}
					onRouteToSection={onRouteToSection}
					onRemove={onRemove}
				/>
				<NewApplicationButton
					currentSection={currentSection}
					sectionsLength={sectionsLength}
					onNext={onNext}
					onPrev={onPrev}
				/>
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
