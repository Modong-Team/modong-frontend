import styled from 'styled-components';
import Fonts from '../../constants/fonts';
import Colors from '../../constants/colors';
import { svgVertical, svgCopy, svgClipBoard, svgLink } from '../../constants/svgs';

export default function MainBoard() {
	return (
		<BoardContainer>
			<BoardWrapper>
				<BoardHeader>
					<h1>작성한 지원서1</h1>
					<div>
						<BoardLinkLabel>{svgLink}지원 링크</BoardLinkLabel>
						<BoardClipBoard>www.modong.co.kr/club1{svgClipBoard}</BoardClipBoard>
						<BoardVertical>{svgVertical}</BoardVertical>
					</div>
				</BoardHeader>
			</BoardWrapper>
		</BoardContainer>
	);
}

const BoardContainer = styled.div`
	height: 100%;
	overflow: scroll;
`;

const BoardWrapper = styled.div`
	height: 100%;
	width: 69vw;
	min-width: 99.6rem;
	max-width: 131.6rem;
	margin: 0 auto;
`;

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
