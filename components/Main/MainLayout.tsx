import { ChildrenType } from '../../@types/client/base';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import MainSidebar from './MainSidebar';
import { Styles } from '../../constants/styles';

export default function MainLayout({ children }: ChildrenType) {
	return (
		<S.LayoutContainer>
			<MainHeader />
			<MainSidebar />
			<S.MainContainer>{children}</S.MainContainer>
		</S.LayoutContainer>
	);
}

namespace S {
	export const LayoutContainer = styled.div`
		width: 100vw;
		position: relative;
	`;

	export const MainContainer = styled.div`
		margin-top: ${Styles.headerHeight};
		margin-left: clamp(22rem, 15.28vw, 27.2rem);
		height: calc(100vh - ${Styles.headerHeight});
		position: relative;
	`;
}
