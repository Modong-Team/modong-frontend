import { FocusEventHandler, MutableRefObject } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import usePlaceholder from '../../hooks/usePlaceholder';
import { SectionTitleInputProps } from './props';
import { InputElementProps } from './styled';

export default function SectionTitleInput({
	value,
	onChange,
	placeholder,
}: SectionTitleInputProps) {
	const [isEmpty, valueRef, onFocus, onBlur] = usePlaceholder(placeholder, onChange);

	return (
		<S.InputContainer isEmpty={isEmpty as boolean}>
			<input
				value={value}
				onChange={onChange}
				ref={valueRef as MutableRefObject<HTMLInputElement>}
				onFocus={onFocus as FocusEventHandler<HTMLInputElement>}
				onBlur={onBlur as FocusEventHandler<HTMLInputElement>}
				placeholder={placeholder}
			/>
		</S.InputContainer>
	);
}

namespace S {
	export const InputContainer = styled.div<InputElementProps>`
		input {
			${Fonts.heading24bold}
			background-color: transparent;
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
}
