import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgCircleX } from '../../constants/svgs';
import { InputElementProps } from './styled';
import { QuestionInputProps } from './props';

export default function QuestionInput({ isError }: QuestionInputProps) {
	return (
		<>
			<InputElement isError={isError || false}>
				<input />
				{svgCircleX}
			</InputElement>
			{isError && <Error>내용을 입력해주세요.</Error>}
		</>
	);
}

const InputElement = styled.div<InputElementProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.15rem;
	background-color: ${Colors.white};
	flex-grow: 1;

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
	}
`;

const Error = styled.div`
	${Fonts.body12medium}
	color: ${Colors.red};
	margin-top: 0.4rem;
	margin-bottom: 0.1rem;
`;
