import styled from 'styled-components';
import QuestionInput from './QuestionInput';
import { svgCheckQuestion } from '../../constants/svgs';

export default function QuestionCheckboxInput() {
	return (
		<CheckboxElement>
			{svgCheckQuestion}
			<QuestionInput />
		</CheckboxElement>
	);
}

const CheckboxElement = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 1.1rem;
	margin-bottom: 1rem;
`;
