import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { NewApplicationTitleProps } from './props';
import { TitleContainerProps } from './styled';

export default function NewApplicationTitle({
	titleRef,
	emptyTitleError,
	setEmptyTitleError,
}: NewApplicationTitleProps) {
	const [isFocused, setIsFocused] = useState(false);

	const onFocus = () => {
		setIsFocused(true);
		setEmptyTitleError(false);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	return (
		<TitleContainer isFocused={isFocused} isError={emptyTitleError}>
			<Error>{emptyTitleError ? '내용을 입력해주세요.' : ''}</Error>
			<input
				type='text'
				placeholder='지원서 제목'
				ref={titleRef}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</TitleContainer>
	);
}

const TitleContainer = styled.div<TitleContainerProps>`
	position: relative;
	border-radius: 0.8rem;
	padding: 2.2rem 4rem;
	background-color: ${Colors.white};
	border: 0.1rem solid ${(props) => (props.isFocused ? Colors.blue500 : Colors.gray200)};
	grid-column: 2/3;

	& {
		input {
			${Fonts.heading26bold}
			width: 100%;
			color: ${Colors.gray900};
			caret-color: ${Colors.blue500};
			background-color: ${Colors.white};

			&::placeholder {
				color: ${Colors.gray500};
			}
		}
	}

	&:hover {
		border-color: ${(props) => (props.isFocused ? Colors.blue500 : Colors.gray700)};
	}

	border-color: ${(props) => (props.isError ? `${Colors.red500} !important` : '')};
`;

const Error = styled.div`
	${Fonts.body14regular}
	position: absolute;
	top: -2.4rem;
	left: 0;
	color: ${Colors.red500};
`;
