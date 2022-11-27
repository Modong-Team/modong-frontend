import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgStar16, svgUser16 } from '../../constants/svgs';
import KanbanMoreButton from '../buttons/KanbanMoreButton';
import DropDown from '../dropdowns/DropDown';
import { Styles } from '../../constants/styles';
import { MainBoardKanbanCardProps } from './props';
import { useState, useEffect } from 'react';
import stopPropagation from '../../utils/stopPropagation';
import CheckboxButton from '../buttons/CheckboxButton';
import { CardContainerProps } from './styled';

export default function MainBoardKanbanCard({ isStatusEditMode }: MainBoardKanbanCardProps) {
	const [isShowMore, setIsShowMore] = useState(false);
	const [isActiveTemp, setIsActiveTemp] = useState(false);

	const toggleMore = () => setIsShowMore(!isShowMore);

	const hideMore = () => setIsShowMore(false);

	const toggleActiveTemp = () => {
		if (isStatusEditMode) setIsActiveTemp(!isActiveTemp);
	};

	useEffect(() => {
		if (!isStatusEditMode) setIsActiveTemp(false);
	}, [isStatusEditMode]);

	return (
		<CardContainer onClick={toggleActiveTemp} isActive={isActiveTemp}>
			<div>
				<h3>박병진</h3>
				{!isStatusEditMode ? (
					<KanbanMoreButton isActive={isShowMore} onClick={toggleMore} onBlur={hideMore}>
						{isShowMore && (
							<DropDown
								option1='선택하기'
								option2='탈락 처리'
								onClick1={stopPropagation}
								onClick2={stopPropagation}
								customCSS={`${Styles.dropDownAlignRightBottom} transform:translate(76%,106%); ${Styles.dropDownAlignLeft} div:last-of-type{${Styles.dropDownOptionRed}}`}
							/>
						)}
					</KanbanMoreButton>
				) : (
					<CheckboxButton isActive={isActiveTemp} />
				)}
			</div>
			<div>
				<h4>2022. 11. 2</h4>
				<div>
					<StatusPin isActive={isActiveTemp}>{svgStar16}9.3</StatusPin>
					<StatusPin isActive={isActiveTemp}>{svgUser16}3/3</StatusPin>
				</div>
			</div>
		</CardContainer>
	);
}

const CardContainer = styled.div<CardContainerProps>`
	min-width: 23.2rem;
	max-width: 31.2rem;
	width: calc(16.67vw - 0.8rem);
	background-color: ${(props) => (props.isActive ? Colors.blue100 : Colors.white)};
	border-radius: 0.8rem;
	border: 0.1rem solid ${(props) => (props.isActive ? Colors.blue500 : Colors.gray200)};
	padding: 1.6rem;
	padding-bottom: 1.5rem;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	transition: 0.3s ease;
	transition-property: background-color, border-color;

	@media screen and (max-height: 1000px) {
		padding: 0.8rem 1.6rem;
	}

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:first-of-type {
			h3 {
				${Fonts.heading20bold}
			}

			> div {
				display: flex;
			}
		}

		&:nth-of-type(2) {
			h4 {
				${Fonts.body12medium}
				color: ${(props) => (props.isActive ? Colors.gray700 : Colors.gray500)};
			}

			> div {
				display: flex;
				gap: 0.4rem;
			}
		}
	}
`;

const StatusPin = styled.div<CardContainerProps>`
	${Fonts.body12medium}
	padding: 0.3rem 0.8rem;
	border-radius: 2rem;
	display: flex;
	align-items: center;
	gap: 0.3rem;
	transition: 0.3s ease;
	transition-property: background-color;

	svg {
		position: relative;
	}

	&:first-of-type {
		background-color: ${Colors.blue100};
	}

	&:nth-of-type(2) {
		background-color: ${Colors.gray100};
	}

	background-color: ${(props) => props.isActive && Colors.white} !important;
`;
