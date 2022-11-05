import styled from 'styled-components';
import Colors from '../../constants/colors';

export default function NewApplicationTitle() {
	return (
		<TitleContainer>
			<input type='text' placeholder='지원서 제목을 입력하세요' />
		</TitleContainer>
	);
}

const TitleContainer = styled.div`
	border-radius: 0.8rem;
	padding: 1.6rem 2.4rem;
	background-color: ${Colors.white01};
	border: 0.1rem solid ${Colors.border02};

	& {
		input {
			width: 100%;
			border-bottom: 0.2rem solid ${Colors.border04};
			padding: 1.2rem;
			padding-bottom: 0.8rem;
			font-weight: 700;
			font-size: 3.2rem;
			color: ${Colors.black01};
			caret-color: ${Colors.highlight01};

			&::placeholder {
				color: ${Colors.placeholder01};
			}

			&:focus {
				border-color: ${Colors.highlight01};
			}
		}
	}
`;
