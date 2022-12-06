import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import QuestionInput from '../Inputs/QuestionInput';
import QuestionRadioInput from '../Inputs/QuestionRadioInput';
import { QuestionBoxProps } from './props';
import { Questions, QuestionsLabel } from '../../constants/questions';
import QuestionCheckboxInput from '../Inputs/QuestionCheckboxInput';
import CustomButton from '../buttons/CustomButton';
import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import { svgCirclePlusSmall } from '../../constants/svgs';
import { useFormsActions } from '../../contexts/FormsProviders';
import { Placeholders } from '../../constants/placeholders';

export default function QuestionBox({
	questionType,
	isError,
	question,
	formIdx,
	questionIdx,
}: QuestionBoxProps) {
	const actions = useFormsActions();

	const onChangeQuestionContent = (e: React.ChangeEvent<HTMLInputElement>) => {
		actions.updateQuestionContent(formIdx, questionIdx, e.target.value);
	};

	const onRemoveQuestion = () => {
		actions.removeQuestion(formIdx, questionIdx);
	};

	const onCreateQuestionOption = () => {
		actions.createQuestionOption(formIdx, questionIdx);
	};

	return (
		<S.QuestionBoxContainer>
			<h3>{QuestionsLabel[questionType]}</h3>
			<QuestionInput
				isError={isError}
				onChange={onChangeQuestionContent}
				onRemove={onRemoveQuestion}
				placeholder={Placeholders.question}
				value={question.content}
			/>
			{questionType !== Questions.TextQuestion ? <h3>선택항목</h3> : ''}
			{questionType === Questions.RadioQuestion
				? question.options.map((v, i) => (
						<QuestionRadioInput
							question={question}
							formIdx={formIdx}
							questionIdx={questionIdx}
							optionIdx={i}
							key={i}
						/>
				  ))
				: questionType === Questions.CheckboxQuestion
				? question.options.map((v, i) => (
						<QuestionCheckboxInput
							question={question}
							formIdx={formIdx}
							questionIdx={questionIdx}
							optionIdx={i}
							key={i}
						/>
				  ))
				: ''}
			{questionType !== Questions.TextQuestion ? (
				<CustomButton
					onClick={onCreateQuestionOption}
					buttonSize={ButtonSizes.medium}
					buttonType={ButtonTypes.line}
					margin='0 0 0 3rem'>
					{svgCirclePlusSmall} 항목 추가
				</CustomButton>
			) : (
				''
			)}
		</S.QuestionBoxContainer>
	);
}

namespace S {
	export const QuestionBoxContainer = styled.div`
		padding: 2.3rem 2.8rem;
		background-color: ${Colors.white};
		border-radius: 0.8rem;
		border: 0.1rem solid ${Colors.gray200};
		margin-top: 2rem;

		& {
			h3 {
				${Fonts.subtitle14semibold}
				margin-bottom: 0.9rem;

				&:not(:first-child) {
					margin-top: 1.9rem;
				}
			}
		}
	`;
}
