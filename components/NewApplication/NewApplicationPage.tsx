import { useRef, useState } from 'react';
import styled from 'styled-components';
import NewApplicationContent from './NewApplicationContent';
import NewApplicationLayout from './NewApplicationLayout';
import NewApplicationTitle from './NewApplicationTitle';
import { postApplication, patchApplication } from '../../api/application';
import NewApplicationIndicator from './NewApplicationIndicator';
import NewApplicationNavigator from './NewApplicationNavigator';

export default function NewApplicationPage() {
	const titleRef = useRef<HTMLInputElement>(null);
	const [essentials, setEssentials] = useState([1, 2, 3, 4, 5, 6]);

	const onDone = async () => {
		const title = titleRef.current!.value;
		const post = await postApplication(1, title)
			.then(async (res) => {
				console.log(res);
				const id = res.data.id;
				const patch = await patchApplication(id, essentials).then(console.log);
			})
			.catch(console.log);
	};

	return (
		<NewApplicationLayout onDone={onDone}>
			<NewApplicationContainer>
				<NewApplicationTitle titleRef={titleRef} />
				<NewApplicationIndicator />
				<NewApplicationContent essentials={essentials} setEssentials={setEssentials} />
				<NewApplicationNavigator />
			</NewApplicationContainer>
		</NewApplicationLayout>
	);
}

const NewApplicationContainer = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	display: grid;
	grid-template-columns: max-content 71.2rem max-content;
	row-gap: 1.6rem;
`;
