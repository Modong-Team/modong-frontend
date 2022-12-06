import styled from 'styled-components';
import QuestionInput from './QuestionInput';
import { svgRadioQuestion } from '../../constants/svgs';
import { QuestionRadioInputProps } from './props';
import { useFormsActions } from '../../contexts/FormsProviders';

export default function QuestionRadioInput({
	question,
	formIdx,
	questionIdx,
	optionIdx,
}: QuestionRadioInputProps) {
	const actions = useFormsActions();

	const onChangeQuestionOption = (e: React.ChangeEvent<HTMLInputElement>) => {
		actions.updateQuestionOption(formIdx, questionIdx, optionIdx, e.target.value);
	};

	const onRemoveQuestionOption = () => {
		actions.removeQuestionOption(formIdx, questionIdx, optionIdx);
	};

	return (
		<S.RadioElement>
			{svgRadioQuestion}
			<QuestionInput
				onChange={onChangeQuestionOption}
				onRemove={onRemoveQuestionOption}
				placeholder={`선택${optionIdx + 1}`}
				value={question.options[optionIdx]}
			/>
		</S.RadioElement>
	);
}

namespace S {
	export const RadioElement = styled.div`
		display: flex;
		align-items: center;
		width: 100%;
		gap: 1.1rem;
		margin-bottom: 1rem;
	`;
}
