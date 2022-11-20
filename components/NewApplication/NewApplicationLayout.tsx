import styled from 'styled-components';
import Colors from '../../constants/colors';
import NewApplicationHeader from './NewApplicationHeader';
import { NewApplicationLayoutProps } from './props';

export default function NewApplicationLayout({
	children,
	onSave,
	onDone,
	isComplete,
}: NewApplicationLayoutProps) {
	return (
		<LayoutContainer>
			<NewApplicationHeader onSave={onSave} onDone={onDone} isComplete={isComplete} />
			<MainContainer>{children}</MainContainer>
		</LayoutContainer>
	);
}

const LayoutContainer = styled.div``;

const MainContainer = styled.div`
	background-color: ${Colors.background};
	min-height: calc(100vh - 8rem);
	padding: 4rem 0;
`;
