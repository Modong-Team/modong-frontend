import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgCircleX } from '../../constants/svgs';
import { InputElementProps } from './styled';
import { QuestionInputProps } from './props';
import { useState, useEffect, useRef, MutableRefObject } from 'react';

export default function QuestionInput({
	onChange,
	onRemove,
	isError,
	placeholder,
	value,
}: QuestionInputProps) {
	const [isEmpty, setIsEmpty] = useState(true);
	const valueRef = useRef() as MutableRefObject<HTMLInputElement>;

	const checkIsEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			setIsEmpty(true);
			e.target.value = placeholder;
			onChange(e);
		} else setIsEmpty(false);
	};

	const removeEmptyPlaceholder = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (isEmpty) {
			e.target.value = '';
			onChange(e);
			setIsEmpty(false);
		}
	};

	useEffect(() => {
		valueRef.current.focus();
		valueRef.current.blur();
	}, []);

	return (
		<>
			<InputElement isError={isError || false} isEmpty={isEmpty}>
				<input
					value={value}
					onChange={onChange}
					onBlur={checkIsEmpty}
					onFocus={removeEmptyPlaceholder}
					ref={valueRef}
				/>
				<span onClick={onRemove}>{svgCircleX}</span>
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

	span {
		display: flex;
		cursor: pointer;
	}

	input {
		${Fonts.body16regular}
		width: 100%;
		background-color: transparent;
		padding: 1rem 0.8rem;
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 0.4rem;
		caret-color: ${Colors.blue500};
		color: ${(props) => (props.isEmpty ? Colors.gray400 : '')};

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

		border-color: ${(props) => (props.isError ? Colors.red500 : '')};
	}
`;

const Error = styled.div`
	${Fonts.body12medium}
	color: ${Colors.red500};
	margin-top: 0.4rem;
	margin-bottom: 0.1rem;
`;
