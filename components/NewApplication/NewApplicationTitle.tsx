import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { NewApplicationTitleProps } from './propsTypes';

export default function NewApplicationTitle({ titleRef }: NewApplicationTitleProps) {
	return (
		<TitleContainer>
			<input type='text' placeholder='지원서 제목' ref={titleRef} />
		</TitleContainer>
	);
}

const TitleContainer = styled.div`
	border-radius: 0.8rem;
	padding: 2.2rem 4rem;
	background-color: ${Colors.white};
	border: 0.1rem solid ${Colors.gray200};
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
`;
