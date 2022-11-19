import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import QuestionInput from '../Inputs/QuestionInput';
import QuestionRadioInput from '../Inputs/QuestionRadioInput';
import { QuestionBoxProps } from './props';
import { Questions } from '../../constants/questions';
import QuestionCheckboxInput from '../Inputs/QuestionCheckboxInput';
import CustomButton from '../buttons/CustomButton';
import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import { svgCirclePlus } from '../../constants/svgs';

export default function QuestionBox({ questionType, isError }: QuestionBoxProps) {
	return (
		<QuestionBoxContainer>
			<h3>{questionType}</h3>
			<QuestionInput isError={isError} />
			{questionType !== Questions.TextQuestion ? <h3>선택항목</h3> : ''}
			{questionType === Questions.RadioQuestion ? (
				<QuestionRadioInput />
			) : questionType === Questions.CheckboxQuestion ? (
				<QuestionCheckboxInput />
			) : (
				''
			)}
			{questionType !== Questions.TextQuestion ? (
				<CustomButton
					buttonSize={ButtonSizes.medium}
					buttonType={ButtonTypes.line}
					margin='0 0 0 3rem'>
					{svgCirclePlus} 항목 추가
				</CustomButton>
			) : (
				''
			)}
		</QuestionBoxContainer>
	);
}

const QuestionBoxContainer = styled.div`
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
