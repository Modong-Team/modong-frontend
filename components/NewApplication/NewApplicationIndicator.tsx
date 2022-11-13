import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

export default function NewApplicationIndicator() {
	return (
		<IndicatorContainer>
			<IndicatorElement>
				<IndicatorCircle>1</IndicatorCircle>
				지원자 정보
			</IndicatorElement>
			<IndicatorElement>
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
		div {
			${Fonts.subtitle14medium}
		}
	}
`;

const IndicatorElement = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	color: ${Colors.gray500};
`;

const IndicatorCircle = styled.div`
	width: 2.4rem;
	height: 2.4rem;
	border-radius: 50%;
	background-color: ${Colors.gray200};
	color: ${Colors.gray500};
	display: flex;
	justify-content: center;
	align-items: center;
`;
