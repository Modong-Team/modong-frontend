import styled from 'styled-components';
import QuestionInput from './QuestionInput';
import { svgCheckQuestion } from '../../constants/svgs';
import { QuestionCheckboxInputProps } from './props';
import React from 'react';
import { useFormsActions } from '../../contexts/FormsProviders';

export default function QuestionCheckboxInput({
	question,
	formIdx,
	questionIdx,
	optionIdx,
}: QuestionCheckboxInputProps) {
	const actions = useFormsActions();

	const onChangeQuestionOption = (e: React.ChangeEvent<HTMLInputElement>) => {
		actions.updateQuestionOption(formIdx, questionIdx, optionIdx, e.target.value);
	};

	const onRemoveQuestionOption = () => {
		actions.removeQuestionOption(formIdx, questionIdx, optionIdx);
	};

	return (
		<CheckboxElement>
			{svgCheckQuestion}
			<QuestionInput
				onChange={onChangeQuestionOption}
				onRemove={onRemoveQuestionOption}
				placeholder={`선택${optionIdx + 1}`}
				value={question.options[optionIdx]}
			/>
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
