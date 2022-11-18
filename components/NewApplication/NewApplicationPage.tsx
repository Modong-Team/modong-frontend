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

export default function NewApplicationPage() {
	const titleRef = useRef<HTMLInputElement>(null);
	const [essentials, setEssentials] = useState([1, 2, 3]);
	const [currentSection, setCurrentSection] = useState(0);
	const [sections, setSections] = useState([...DummySections]);
	const [sectionsLength, setSectionsLength] = useState(0);
	const [removedSections, setRemovedSections] = useState([]);
	const [emptyTitleError, setEmptyTitleError] = useState(false);

	useEffect(() => {
		setSectionsLength(sections.length);
	}, [sections]);

	const onDone = async () => {
		const title = titleRef.current!.value;
		if (!title) {
			setEmptyTitleError(true);
			return;
		} else setEmptyTitleError(false);

		const post = await postApplication(1, title)
			.then(async (res) => {
				console.log(res);
				const id = res?.id;
				if (id) {
					const patch = await patchApplication(id, essentials).then(console.log);
				} else throw new Error('POST /application Failed');
			})
			.catch(console.log);
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
		<NewApplicationLayout onDone={onDone}>
			<NewApplicationContainer>
				<NewApplicationTitle titleRef={titleRef} emptyTitleError={emptyTitleError} />
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
