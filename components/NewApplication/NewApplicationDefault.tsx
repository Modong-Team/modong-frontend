import React from 'react';
import styled from 'styled-components';
import { svgCirclePlus, svgPencil, svgTick, svgCheckBox } from '../../constants/svgs';
import { NewApplicationDefaultProps } from './props';
import { useState } from 'react';
import SectionTitleInput from '../Inputs/SectionTitleInput';
import { Questions } from '../../constants/questions';
import QuestionBox from '../boxes/QuestionBox';
import { useFormsActions } from '../../contexts/FormsProviders';
import { Placeholders } from '../../constants/placeholders';
import DropDown from '../dropdowns/DropDown';

export default function NewApplicationDefault({ form, formIdx }: NewApplicationDefaultProps) {
	const [showMenu, setShowMenu] = useState(false);
	const actions = useFormsActions();

	const onClickMenu = () => setShowMenu(true);
	const onBlur = () => setShowMenu(false);

	const onChangeFormTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		actions.updateFormTitle(formIdx, e.target.value);
	};

	const onCreateQuestion = (e: React.MouseEvent<HTMLDivElement>, questionType: string) => {
		e.stopPropagation();
		actions.createQuestion(formIdx, questionType);
		setShowMenu(false);
	};

	return (
		<>
			<h2>
				<SectionTitleInput
					value={form.title as string}
					onChange={onChangeFormTitle}
					placeholder={Placeholders.form}
				/>
			</h2>
			<p>지원자에게 질문하고 싶은 내용을 입력해주세요.</p>
			<DefaultContainer>
				{form.questions.map((v, i) => (
					<QuestionBox
						questionType={Questions[v.type]}
						key={i}
						question={v}
						formIdx={formIdx}
						questionIdx={i}
					/>
				))}
				<NewQuestionButton onClick={onClickMenu} onBlur={onBlur}>
					<span>{svgCirclePlus}</span>
					{showMenu && (
						<DropDown
							svg1={svgPencil}
							svg2={svgTick}
							svg3={svgCheckBox}
							option1={'주관식'}
							option2={'단일 선택'}
							option3={'복수 선택'}
							onClick1={(e) => onCreateQuestion(e, Questions.TextQuestion)}
							onClick2={(e) => onCreateQuestion(e, Questions.RadioQuestion)}
							onClick3={(e) => onCreateQuestion(e, Questions.CheckboxQuestion)}
						/>
					)}
				</NewQuestionButton>
			</DefaultContainer>
		</>
	);
}

const DefaultContainer = styled.div`
	display: flex;
	flex-direction: column;

	& {
		> span {
			margin: 0 auto;
		}
	}
`;

const NewQuestionButton = styled.button`
	position: relative;
	text-align: center;
	width: fit-content;
	margin: 0 auto;
	margin-top: 2.52rem;
`;
