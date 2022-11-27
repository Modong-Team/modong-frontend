import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgCopy24, svgLink24, svgMore24 } from '../../constants/svgs';

export default function MainBoardHeader() {
	return (
		<BoardHeader>
			<h1>작성한 지원서1</h1>
			<div>
				<BoardLinkLabel>{svgLink24}지원 링크</BoardLinkLabel>
				<BoardClipBoard>www.modong.co.kr/club1{svgCopy24}</BoardClipBoard>
				<BoardVertical>{svgMore24}</BoardVertical>
			</div>
		</BoardHeader>
	);
}

const BoardHeader = styled.div`
	padding: 1.6rem 0rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.1rem solid ${Colors.gray200};

	h1 {
		${Fonts.heading26bold}
	}

	> div {
		display: flex;
		gap: 1.6rem;
		align-items: center;
	}
`;

const BoardLinkLabel = styled.div`
	${Fonts.button14bold}
	display: flex;
	align-items: center;
	gap: 0.4rem;

	svg {
		position: relative;
		top: -0.1rem;
	}
`;

const BoardClipBoard = styled.div`
	${Fonts.body14regular}
	border-radius: 0.8rem;
	color: ${Colors.gray800};
	background-color: ${Colors.gray200};
	padding: 0.8rem 1.6rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 25.4rem;
	margin-right: 1.2rem;
	cursor: pointer;
`;

const BoardVertical = styled.div`
	cursor: pointer;
`;
