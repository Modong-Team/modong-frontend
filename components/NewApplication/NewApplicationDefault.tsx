import styled from 'styled-components';
import Colors from '../../constants/colors';
import { svgTrash, svgCirclePlusBig } from '../../constants/svgs';

export default function NewApplicationDefault() {
	return (
		<>
			<h2>새로운 페이지 (임시)</h2>
			<p>
				페이지를 추가하면 주관식 질문이 기본으로 보여져요.
				<br />이 곳에 들어갈 문구는 따로 전달 부탁드려요.
			</p>
			<DefaultContainer>
				<DefaultInputContainer>
					<h3>주관식</h3>
					<DefaultInputText>
						<input placeholder='질문 제목을 입력해주세요' />
						{svgTrash}
					</DefaultInputText>
				</DefaultInputContainer>
				<span>{svgCirclePlusBig}</span>
			</DefaultContainer>
		</>
	);
}

const DefaultContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.79rem;

	& {
		> span {
			margin: 0 auto;
		}
	}
`;

const DefaultInputContainer = styled.div`
	padding: 2.1rem 3.7rem;
	background-color: ${Colors.background02};
	border-radius: 0.8rem;

	& {
		h3 {
			font-weight: 700;
			font-size: 1.4rem;
			margin-bottom: 0.6rem;
		}
	}
`;

const DefaultInputText = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 0.15rem solid ${Colors.border05};
	background-color: ${Colors.background02};

	& {
		input {
			width: 100%;
			background-color: transparent;
			padding: 0;
		}
		input::placeholder {
			font-weight: 700;
			font-size: 1.8rem;
			color: ${Colors.black04};
		}
		svg {
			margin-bottom: 0.6rem;
		}
	}
`;
