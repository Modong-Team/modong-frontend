import styled from 'styled-components';
import Colors from '../../constants/colors';
import NewApplicationHeader from './NewApplicationHeader';
import { IChildren } from '../../interfaces/children';

export default function NewApplicationLayout({ children }: IChildren) {
	return (
		<LayoutContainer>
			<NewApplicationHeader />
			<MainContainer>{children}</MainContainer>
		</LayoutContainer>
	);
}

const LayoutContainer = styled.div``;

const MainContainer = styled.div`
	background-color: ${Colors.background01};
	min-height: calc(100vh - 10rem);
	padding: 4.35rem 0;
`;
