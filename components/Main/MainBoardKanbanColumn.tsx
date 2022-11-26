import styled from 'styled-components';
import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import Colors from '../../constants/colors';
import CustomButton from '../buttons/CustomButton';
import Fonts from '../../constants/fonts';
import MainBoardKanbanCard from './MainBoardKanbanCard';
import PageButtons from '../buttons/PageButtons';

export default function MainBoardKanbanColumn() {
	return (
		<ColumnContainer>
			<section>
				<h3>
					지원 접수 <span>8</span>
				</h3>
				<CustomButton buttonSize={ButtonSizes.small} buttonType={ButtonTypes.line}>
					상태 변경
				</CustomButton>
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

const ColumnContainer = styled.div`
	background-color: ${Colors.background};
	max-height: 77.6rem;
	min-height: 58rem;
	height: calc(100vh - 83.2rem + 58rem);
	padding: 0 0.4rem;
	border-radius: 0.8rem;
	display: flex;
	flex-direction: column;
	overflow: scroll;

	> section:first-of-type {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.2rem 1.6rem;

		h3 {
			${Fonts.subtitle16semibold}

			span {
				color: ${Colors.blue500};
				margin-left: 0.2rem;
			}
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
