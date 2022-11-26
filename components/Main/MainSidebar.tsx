import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import Colors from '../../constants/colors';

export default function MainSidebar() {
	return <SidebarContainer>사이드바</SidebarContainer>;
}

const SidebarContainer = styled.div`
	border-right: 0.1rem solid ${Colors.gray200};
	position: fixed;
	width: ${Styles.sidebarWidth};
	top: ${Styles.headerHeight};
	height: calc(100vh - ${Styles.headerHeight});
	z-index: 10;
`;
