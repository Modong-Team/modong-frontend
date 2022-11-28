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

export default function MainBoardKanbanCard({
	isStatusEditMode,
	isOtherStatusEditMode,
	isDisabled,
}: MainBoardKanbanCardProps) {
	const [isShowMore, setIsShowMore] = useState(false);
	const [isActiveTemp, setIsActiveTemp] = useState(false);

	const toggleMore = () => setIsShowMore(!isShowMore);

	const hideMore = () => setIsShowMore(false);

	const toggleActiveTemp = () => {
		if (isStatusEditMode && !isDisabled) setIsActiveTemp(!isActiveTemp);
	};

	useEffect(() => {
		if (!isStatusEditMode) setIsActiveTemp(false);
	}, [isStatusEditMode]);

	return (
		<CardContainer
			onClick={toggleActiveTemp}
			isActive={isActiveTemp}
			isDisabled={isDisabled}
			isOtherStatusEditMode={isOtherStatusEditMode}
			isStatusEditMode={isStatusEditMode}>
			<div>
				<h3>박병진</h3>
				{!isStatusEditMode
					? !isOtherStatusEditMode && (
							<KanbanMoreButton
								isActive={isShowMore}
								onClick={toggleMore}
								onBlur={hideMore}
								isDisabled={isDisabled}>
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
					  )
					: !isDisabled && <CheckboxButton isActive={isActiveTemp} />}
			</div>
			<div>
				<h4>2022. 11. 2</h4>
				<div>
					<StatusPin
						isActive={isActiveTemp}
						isDisabled={isDisabled}
						isOtherStatusEditMode={isOtherStatusEditMode}
						isStatusEditMode={isStatusEditMode}>
						{svgStar16}9.3
					</StatusPin>
					<StatusPin
						isActive={isActiveTemp}
						isDisabled={isDisabled}
						isOtherStatusEditMode={isOtherStatusEditMode}
						isStatusEditMode={isStatusEditMode}>
						{svgUser16}3/3
					</StatusPin>
				</div>
			</div>
		</CardContainer>
	);
}

const CardContainer = styled.div<CardContainerProps>`
	min-width: 23.2rem;
	max-width: 31.2rem;
	width: calc(16.67vw - 0.8rem);
	border-radius: 0.8rem;
	padding: 1.6rem;
	padding-bottom: 1.5rem;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: 0.3s ease;
	transition-property: background-color, border-color;
	/* 해당 카드 선택 */
	border: 0.1rem solid ${(props) => (props.isActive ? Colors.blue500 : Colors.gray200)};
	background-color: ${(props) => (props.isActive ? Colors.blue100 : Colors.white)};
	/* 해당 카드 탈락 */
	border-color: ${(props) => props.isDisabled && 'transparent'};
	/* 해당 카드 탈락 & 활성화 된 컬럼 존재 */
	border-color: ${(props) =>
		props.isDisabled && (props.isStatusEditMode || props.isOtherStatusEditMode) && Colors.gray300};
	/* 해당 카드 탈락 & 해당 컬럼 활성화 */
	background-color: ${(props) => props.isDisabled && props.isStatusEditMode && Colors.blue50};
	/* 해당 카드 탈락 & 타 컬럼 활성화 */
	background-color: ${(props) =>
		props.isDisabled && props.isOtherStatusEditMode && Colors.background};
	/* 타 컬럼 활성화 */
	cursor: ${(props) => (props.isOtherStatusEditMode ? '' : 'pointer')};

	@media screen and (max-height: 1000px) {
		padding: 0.8rem 1.6rem;
	}

	&:hover {
		> div:first-of-type {
			> div {
				> svg path:last-of-type {
					fill: ${(props) => !props.isActive && Colors.gray300};
					transition: 0.3s ease;
				}
			}
		}
	}

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:first-of-type {
			h3 {
				${Fonts.heading20bold}
				/* 타 컬럼 활성화 */
				color: ${(props) => props.isOtherStatusEditMode && Colors.gray600};
				/* 해당 카드 탈락 */
				color: ${(props) => props.isDisabled && Colors.gray400};
			}

			> div {
				display: flex;

				> svg path:last-of-type {
					transition: 0.3s ease;
				}
			}
		}

		&:nth-of-type(2) {
			h4 {
				${Fonts.body12medium}
				/* 해당 카드 선택 */
				color: ${(props) => (props.isActive ? Colors.gray700 : Colors.gray500)};
				/* 해당 카드 탈락 */
				color: ${(props) => props.isDisabled && Colors.gray400};
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

		path,
		circle {
			/* 해당 카드 탈락 */
			fill: ${(props) => props.isDisabled && Colors.gray400};
			stroke: ${(props) => props.isDisabled && Colors.gray400};
		}
	}

	&:first-of-type {
		background-color: ${Colors.blue100};
	}

	&:nth-of-type(2) {
		background-color: ${Colors.gray100};
	}

	/* 해당 카드 선택 */
	background-color: ${(props) => props.isActive && Colors.white} !important;
	/* 타 컬럼 활성화 */
	color: ${(props) => props.isOtherStatusEditMode && Colors.gray600} !important;
	/* 해당 카드 탈락 */
	color: ${(props) => props.isDisabled && Colors.gray400} !important;
	background-color: ${(props) => props.isDisabled && Colors.gray100} !important;
	/* 해당 카드 탈락 & 활성화된 컬럼 존재 */
	background-color: ${(props) =>
		props.isDisabled &&
		(props.isStatusEditMode || props.isOtherStatusEditMode) &&
		Colors.gray300} !important;
`;
