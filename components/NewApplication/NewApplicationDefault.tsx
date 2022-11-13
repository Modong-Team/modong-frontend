import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgCirclePlus, svgCircleX } from '../../constants/svgs';

export default function NewApplicationDefault() {
	return (
		<>
			<h2>질문 페이지(1)</h2>
			<p>지원자에게 질문하고 싶은 내용을 입력해주세요.</p>
			<DefaultContainer>
				<DefaultInputContainer>
					<h3>주관식</h3>
					<DefaultInputText>
						<input placeholder='질문 제목을 입력해주세요' />
						{svgCircleX}
					</DefaultInputText>
				</DefaultInputContainer>
				<span>{svgCirclePlus}</span>
			</DefaultContainer>
		</>
	);
}

const DefaultContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.52rem;

	& {
		> span {
			margin: 0 auto;
		}
	}
`;

const DefaultInputContainer = styled.div`
	padding: 2.3rem 2.8rem;
	background-color: ${Colors.white};
	border-radius: 0.8rem;
	border: 0.1rem solid ${Colors.gray200};
	margin-top: 2rem;

	& {
		h3 {
			${Fonts.subtitle14semibold}
			margin-bottom: 0.9rem;
		}
	}
`;

const DefaultInputText = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.15rem;
	background-color: ${Colors.white};

	& {
		input {
			${Fonts.body16regular}
			width: 100%;
			background-color: transparent;
			padding: 1rem 0.8rem;
			border: 0.1rem solid ${Colors.gray200};
			border-radius: 0.4rem;
		}
		input::placeholder {
			${Fonts.body16regular}
			color: ${Colors.gray400};
		}
		svg {
			margin-bottom: 0.6rem;
		}
	}
`;
