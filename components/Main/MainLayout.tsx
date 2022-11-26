import { ChildrenType } from '../../@types/client/base';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import MainSidebar from './MainSidebar';
import { Styles } from '../../constants/styles';

export default function MainLayout({ children }: ChildrenType) {
	return (
		<LayoutContainer>
			<MainHeader />
			<MainSidebar />
			<MainContainer>{children}</MainContainer>
		</LayoutContainer>
	);
}

const LayoutContainer = styled.div`
	width: 100vw;
	position: relative;
`;

const MainContainer = styled.div`
	margin-top: ${Styles.headerHeight};
	margin-left: ${Styles.sidebarWidth};
	height: calc(100vh - ${Styles.headerHeight});
	position: relative;
`;
