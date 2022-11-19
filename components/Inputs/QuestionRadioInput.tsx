import styled from 'styled-components';
import QuestionInput from './QuestionInput';
import { svgRadioQuestion } from '../../constants/svgs';

export default function QuestionRadioInput() {
	return (
		<RadioElement>
			{svgRadioQuestion}
			<QuestionInput />
		</RadioElement>
	);
}

const RadioElement = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 1.1rem;
	margin-bottom: 1rem;
`;
