import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { NewApplicationIndicatorProps } from './props';
import { IndicatorElementProps } from './styled';
import { Styles } from '../../constants/styles';

export default function NewApplicationIndicator({
	currentPage,
	isComplete,
}: NewApplicationIndicatorProps) {
	return (
		<IndicatorContainer>
			<IndicatorElement isHighlighted={!isComplete && currentPage === -1}>
				<IndicatorCircle>1</IndicatorCircle>
				지원자 정보
			</IndicatorElement>
			<IndicatorElement isHighlighted={!isComplete && currentPage !== -1}>
				<IndicatorCircle>2</IndicatorCircle>질문 등록
			</IndicatorElement>
			<IndicatorElement isHighlighted={isComplete}>
				<IndicatorCircle>3</IndicatorCircle>작성 완료
			</IndicatorElement>
		</IndicatorContainer>
	);
}

const IndicatorContainer = styled.section`
	${Styles.stickyIndicatorAndNavigator}
	display: flex;
	flex-direction: column;
	gap: 1.8rem;
	margin-right: 3.2rem;
	grid-column: 1/2;

	& {
		> div {
			${Fonts.subtitle14medium}
		}
	}
`;

const IndicatorElement = styled.div<IndicatorElementProps>`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	margin-left: 6.7rem;
	color: ${(props) => (props.isHighlighted ? Colors.gray950 : Colors.gray500)};
	white-space: nowrap;

	& {
		> div {
			background-color: ${(props) => (props.isHighlighted ? Colors.blue500 : '')};
			color: ${(props) => (props.isHighlighted ? Colors.white : '')};
		}
	}
`;

const IndicatorCircle = styled.div`
	${Fonts.button13medium}
	width: 2.4rem;
	height: 2.4rem;
	border-radius: 50%;
	background-color: ${Colors.gray200};
	color: ${Colors.gray500};
	display: flex;
	justify-content: center;
	align-items: center;
`;
