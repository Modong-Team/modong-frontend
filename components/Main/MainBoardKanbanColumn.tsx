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

export default function MainBoardKanbanColumn({
	isStatusEditMode,
	onClickStatusEdit,
}: MainBoardKanbanColumnProps) {
	const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

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
							customCSS={`left:unset; right:0; transform:translateX(105%); bottom:0; >div{width:9.1rem;} div:last-of-type{color:${Colors.red500}; &:hover{background-color:${Colors.red100}}}`}
						/>
					)}
				</span>
			</section>
			<section>
				<MainBoardKanbanCard />
				<MainBoardKanbanCard />
				<MainBoardKanbanCard />
				<MainBoardKanbanCard />
				<MainBoardKanbanCard />
				<MainBoardKanbanCard />
			</section>
			<section>
				<PageButtons />
			</section>
		</ColumnContainer>
	);
}

const ColumnContainer = styled.div<ColumnContainerProps>`
	background-color: ${(props) => (props.isStatusEditMode ? Colors.blue100 : Colors.background)};
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
		display: flex;
		flex-direction: column;
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
