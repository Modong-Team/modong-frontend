import { useRef, useState } from 'react';
import styled from 'styled-components';
import NewApplicationContent from './NewApplicationContent';
import NewApplicationLayout from './NewApplicationLayout';
import NewApplicationTitle from './NewApplicationTitle';
import { postApplication, patchApplication } from '../../api/application';

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
				<NewApplicationContent essentials={essentials} setEssentials={setEssentials} />
			</NewApplicationContainer>
		</NewApplicationLayout>
	);
}

const NewApplicationContainer = styled.div`
	width: 69.4rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2.1rem;
`;
