import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { SectionTitleInputProps } from './props';

export default function SectionTitleInput({
	value,
	onChange,
	placeholder,
}: SectionTitleInputProps) {
	return (
		<InputContainer>
			<input value={value} onChange={onChange} placeholder={placeholder} />
		</InputContainer>
	);
}

const InputContainer = styled.div`
	input {
		${Fonts.heading24bold}
		color: ${Colors.gray900};
		width: 100%;
		height: 3.5rem;
		padding: 0;
		caret-color: ${Colors.blue500};
		border-bottom: 0.1rem solid ${Colors.white};

		&:hover {
			border-color: ${Colors.gray700};
		}

		&:focus {
			border-color: ${Colors.blue500};
		}

		&::placeholder {
			color: ${Colors.gray500};
		}
	}
`;