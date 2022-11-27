import styled from 'styled-components';
import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import Colors from '../../constants/colors';
import CustomButton from '../buttons/CustomButton';
import Fonts from '../../constants/fonts';
import MainBoardKanbanCard from './MainBoardKanbanCard';
import PageButtons from '../buttons/PageButtons';
import DropDown from '../dropdowns/DropDown';
import { ColumnContainerProps } from './styled';
import { MainBoardKanbanColumnProps } from './props';
import { Styles } from '../../constants/styles';
import stopPropagation from '../../utils/stopPropagation';

export default function MainBoardKanbanColumn({
	isStatusEditMode,
	onClickStatusEdit,
}: MainBoardKanbanColumnProps) {
	return (
		<ColumnContainer isStatusEditMode={isStatusEditMode}>
			<section>
				<h3>
					지원 접수 <span>8</span>
				</h3>
				<span>
					<CustomButton
						buttonSize={ButtonSizes.small}
						buttonType={ButtonTypes.line}
						onClick={onClickStatusEdit}>
						{!isStatusEditMode ? '상태 변경' : '선택 취소'}
					</CustomButton>
					{isStatusEditMode && (
						<DropDown
							option1='이전 단계로'
							option2='다음 단계로'
							option3='탈락'
							onClick1={stopPropagation}
							onClick2={stopPropagation}
							onClick3={stopPropagation}
							customCSS={`${Styles.dropDownAlignRightBottom} transform:translateX(105%); ${Styles.dropDownAlignLeft} div:last-of-type{${Styles.dropDownOptionRed}}`}
						/>
					)}
				</span>
			</section>
			<section>
				<MainBoardKanbanCard isStatusEditMode={isStatusEditMode} />
				<MainBoardKanbanCard isStatusEditMode={isStatusEditMode} />
				<MainBoardKanbanCard isStatusEditMode={isStatusEditMode} />
				<MainBoardKanbanCard isStatusEditMode={isStatusEditMode} />
				<MainBoardKanbanCard isStatusEditMode={isStatusEditMode} />
				<MainBoardKanbanCard isStatusEditMode={isStatusEditMode} />
			</section>
			<section>
				<PageButtons />
			</section>
		</ColumnContainer>
	);
}

const ColumnContainer = styled.div<ColumnContainerProps>`
	background-color: ${(props) => (props.isStatusEditMode ? Colors.blue50 : Colors.background)};
	transition: 0.3s ease;
	transition-property: background-color;
	max-height: 77.6rem;
	min-height: 58rem;
	height: calc(100vh - 83.2rem + 58rem);
	padding: 0 0.4rem;
	border-radius: 0.8rem;
	display: flex;
	flex-direction: column;
	overflow: visible;

	> section:first-of-type {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.2rem 1.6rem;
		position: relative;

		> h3 {
			${Fonts.subtitle16semibold}

			span {
				color: ${Colors.blue500};
				margin-left: 0.2rem;
			}
		}

		> span {
			position: relative;
		}
	}

	> section:nth-of-type(2) {
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		gap: 0.4rem;
		height: 100%;
	}

	> section:nth-of-type(3) {
		padding: 2.6rem 0;

		@media screen and (max-height: 1000px) {
			padding: 1.1rem 0 1.3rem 0;
		}
	}
`;
