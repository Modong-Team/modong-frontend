import { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import { svgPlus, svgX } from '../../constants/svgs';
import NewApplicationDefault from './NewApplicationDefault';
import NewApplicationEssential from './NewApplicationEssential';
import { TabElementWrapperProps } from './styledTypes';
import { NewApplicationContentProps, TabElementProps } from './propsTypes';

export default function NewApplicationContent({
	essentials,
	setEssentials,
}: NewApplicationContentProps) {
	return (
		<ContentContainer>
			<FormContainer>
				<NewApplicationEssential essentials={essentials} setEssentials={setEssentials} />
			</FormContainer>
		</ContentContainer>
	);
}

const ContentContainer = styled.div`
	& {
		svg {
			cursor: pointer;
		}
	}
`;

const FormContainer = styled.div`
	background-color: ${Colors.white01};
	border: 0.1rem solid ${Colors.border02};
	border-top: none;
	border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
	padding: 4rem;

	& {
		h2 {
			font-weight: 700;
			font-size: 2.8rem;
			margin-bottom: 1.2rem;
		}

		p {
			font-weight: 600;
			font-size: 1.8rem;
			color: ${Colors.black03};
			line-height: 140%;
			margin-bottom: 3.2rem;
		}
	}
`;
