import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import NewApplicationDefault from './NewApplicationDefault';
import NewApplicationEssential from './NewApplicationEssential';
import { NewApplicationContentProps } from './propsTypes';

export default function NewApplicationContent({
	essentials,
	setEssentials,
	currentSection,
	section,
}: NewApplicationContentProps) {
	return (
		<ContentContainer>
			<FormContainer>
				{!currentSection ? (
					<NewApplicationEssential essentials={essentials} setEssentials={setEssentials} />
				) : (
					<NewApplicationDefault section={section} />
				)}
			</FormContainer>
		</ContentContainer>
	);
}

const ContentContainer = styled.div``;

const FormContainer = styled.div`
	background-color: ${Colors.white};
	border: 0.1rem solid ${Colors.gray200};
	border-radius: 0.8rem;
	padding: 4rem;

	& {
		h2 {
			${Fonts.heading24bold}
			color: ${Colors.gray900};
			margin-bottom: 2.4rem;
		}
		p {
			${Fonts.subtitle14medium}
		}
	}
`;
