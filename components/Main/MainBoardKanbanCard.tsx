import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgStar16, svgUser16, svgMore24 } from '../../constants/svgs';
export default function MainBoardKanbanCard() {
	return (
		<CardContainer>
			<div>
				<h3>박병진</h3>
				<div>{svgMore24}</div>
			</div>
			<div>
				<h4>2022. 11. 2</h4>
				<div>
					<StatusPin>{svgStar16}9.3</StatusPin>
					<StatusPin>{svgUser16}3/3</StatusPin>
				</div>
			</div>
		</CardContainer>
	);
}

const CardContainer = styled.div`
	min-width: 23.2rem;
	max-width: 31.2rem;
	width: calc(16.67vw - 0.8rem);
	background-color: ${Colors.white};
	border-radius: 0.8rem;
	border: 0.1rem solid ${Colors.gray200};
	padding: 1.6rem;
	padding-bottom: 1.5rem;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;

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
				color: ${Colors.gray500};
			}

			> div {
				display: flex;
				gap: 0.4rem;
			}
		}
	}
`;

const StatusPin = styled.div`
	${Fonts.body12medium}
	padding: 0.3rem 0.8rem;
	border-radius: 2rem;
	display: flex;
	align-items: center;
	gap: 0.3rem;

	svg {
		position: relative;
	}

	&:first-of-type {
		background-color: ${Colors.blue100};
	}

	&:nth-of-type(2) {
		background-color: ${Colors.gray100};
	}
`;