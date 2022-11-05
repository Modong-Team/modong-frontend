import styled from 'styled-components';
import NewApplicationContent from './NewApplicationContent';
import NewApplicationLayout from './NewApplicationLayout';
import NewApplicationTitle from './NewApplicationTitle';

export default function NewApplicationPage() {
	return (
		<NewApplicationLayout>
			<NewApplicationContainer>
				<NewApplicationTitle />
				<NewApplicationContent />
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
