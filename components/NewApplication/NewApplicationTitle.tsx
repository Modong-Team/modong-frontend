import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
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
	background-color: ${Colors.white01};
	border: 0.1rem solid ${Colors.border02};
	grid-column: 2/3;

	& {
		input {
			width: 100%;
			/* border-bottom: 0.2rem solid ${Colors.border04}; */
			font-weight: 600;
			font-size: 2.6rem;
			color: ${Colors.black01};
			caret-color: ${Colors.highlight01};
			background-color: ${Colors.white01};

			&::placeholder {
				color: ${Colors.placeholder01};
			}

			&:focus {
				border-color: ${Colors.highlight01};
			}
		}
	}
`;
