import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgCopy24, svgLink24, svgMore24 } from '../../constants/svgs';
import stopPropagation from '../../utils/stopPropagation';
import KanbanMoreButton from '../buttons/KanbanMoreButton';
import DropDown from '../dropdowns/DropDown';
import { Styles } from '../../constants/styles';
import { useState } from 'react';

export default function MainBoardHeader() {
	const [isOpenDropDown, setIsOpenDropDown] = useState(false);

	const onClickMore = () => setIsOpenDropDown(true);

	const onBlurMore = () => setIsOpenDropDown(false);

	return (
		<BoardHeader>
			<h1>작성한 지원서1</h1>
			<div>
				<BoardLinkLabel>{svgLink24}지원 링크</BoardLinkLabel>
				<BoardClipBoard>www.modong.co.kr/club1{svgCopy24}</BoardClipBoard>
				<BoardVertical>
					<KanbanMoreButton isActive={isOpenDropDown} onClick={onClickMore} onBlur={onBlurMore}>
						{isOpenDropDown && (
							<DropDown
								option1='지원서 수정'
								option2='지원서 삭제'
								onClick1={stopPropagation}
								onClick2={stopPropagation}
								customCSS={`left:0; transform:unset; bottom:-7.6rem; ${Styles.dropDownAlignLeft} div:last-of-type{${Styles.dropDownOptionRed}}`}
							/>
						)}
					</KanbanMoreButton>
				</BoardVertical>
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
