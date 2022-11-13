import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { NewApplicationIndicatorProps } from './propsTypes';
import { IndicatorElementProps } from './styledTypes';

export default function NewApplicationIndicator({ currentSection }: NewApplicationIndicatorProps) {
	return (
		<IndicatorContainer>
			<IndicatorElement isHighlighted={currentSection === 0}>
				<IndicatorCircle>1</IndicatorCircle>
				지원자 정보
			</IndicatorElement>
			<IndicatorElement isHighlighted={currentSection !== 0}>
				<IndicatorCircle>2</IndicatorCircle>질문 등록
			</IndicatorElement>
			<IndicatorElement>
				<IndicatorCircle>3</IndicatorCircle>작성 완료
			</IndicatorElement>
		</IndicatorContainer>
	);
}

const IndicatorContainer = styled.section`
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
	color: ${(props) => (props.isHighlighted ? Colors.gray950 : Colors.gray500)};

	& {
		> div {
			background-color: ${(props) => (props.isHighlighted ? Colors.blue500 : '')};
			color: ${(props) => (props.isHighlighted ? Colors.white : '')};
		}
	}
`;

const IndicatorCircle = styled.div`
	${Fonts.button12medium}
	width: 2.4rem;
	height: 2.4rem;
	border-radius: 50%;
	background-color: ${Colors.gray200};
	color: ${Colors.gray500};
	display: flex;
	justify-content: center;
	align-items: center;
`;
