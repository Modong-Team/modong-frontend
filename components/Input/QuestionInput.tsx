import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgCircleX } from '../../constants/svgs';
import { QuestionInputProps } from './props';
import { QuestionTitleProps } from './styled';

export default function QuestionBox({ questionType, isError }: QuestionInputProps) {
	return (
		<QuestionBoxContainer>
			<h3>{questionType}</h3>
			<QuestionTitle isError={isError || false}>
				<input placeholder='질문 제목을 입력해주세요' />
				{svgCircleX}
			</QuestionTitle>
			{isError && <Error>내용을 입력해주세요.</Error>}
		</QuestionBoxContainer>
	);
}

const QuestionBoxContainer = styled.div`
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

const QuestionTitle = styled.div<QuestionTitleProps>`
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
			caret-color: ${Colors.blue500};

			&:hover {
				border-color: ${Colors.gray700};
			}
			&:focus {
				border-color: ${Colors.blue500};
			}
			&::placeholder {
				${Fonts.body16regular}
				color: ${Colors.gray400};
			}

			border-color: ${(props) => (props.isError ? Colors.red : '')};
		}
		svg {
			margin-bottom: 0.6rem;
		}
	}
`;

const Error = styled.div`
	${Fonts.body12medium}
	color: ${Colors.red};
	margin-top: 0.4rem;
	margin-bottom: 0.1rem;
`;
