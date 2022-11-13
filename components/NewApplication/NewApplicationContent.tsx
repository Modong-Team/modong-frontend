import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import NewApplicationEssential from './NewApplicationEssential';
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

const ContentContainer = styled.div``;

const FormContainer = styled.div`
	background-color: ${Colors.white};
	border: 0.1rem solid ${Colors.gray200};
	border-top: none;
	border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
	padding: 4rem;

	& {
		h2 {
			${Fonts.heading24bold}
			color: ${Colors.gray900};
		}
	}
`;
