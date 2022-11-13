import styled from 'styled-components';
import Colors from '../../constants/colors';
import NewApplicationHeader from './NewApplicationHeader';
import { NewApplicationLayoutProps } from './propsTypes';

export default function NewApplicationLayout({ children, onDone }: NewApplicationLayoutProps) {
	return (
		<LayoutContainer>
			<NewApplicationHeader onDone={onDone} />
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
