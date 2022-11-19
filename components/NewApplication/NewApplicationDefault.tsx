import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgCirclePlus, svgPencil, svgTick, svgCheckBox } from '../../constants/svgs';
import { NewApplicationDefaultProps } from './props';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import SectionTitleInput from '../Inputs/SectionTitleInput';
import { Questions } from '../../constants/questions';
import QuestionBox from '../boxes/QuestionBox';
import { useFormsActions } from '../../contexts/FormsProviders';

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
					placeholder='섹션 제목'
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
						<QuestionMenu>
							<div onClick={(e) => onCreateQuestion(e, Questions.TextQuestion)}>
								{svgPencil}주관식
							</div>
							<div onClick={(e) => onCreateQuestion(e, Questions.RadioQuestion)}>
								{svgTick}단일 선택
							</div>
							<div onClick={(e) => onCreateQuestion(e, Questions.CheckboxQuestion)}>
								{svgCheckBox}복수 선택
							</div>
						</QuestionMenu>
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

const QuestionMenu = styled.div`
	white-space: nowrap;
	position: absolute;
	bottom: -10rem;
	left: 50%;
	transform: translateX(-50%);
	text-align: left;
	background-color: ${Colors.white};
	border: 0.1rem solid ${Colors.gray200};
	border-radius: 0.4rem;
	padding: 0.25rem 0;
	box-shadow: 6px 7px 16px rgba(106, 106, 106, 0.17);

	& {
		div {
			${Fonts.subtitle14semibold}
			padding:0.35rem 1.35rem;
			transition: 0.3s ease;
			display: flex;
			align-items: center;
			gap: 0.65rem;

			&:hover {
				background-color: ${Colors.gray100};
				transition: 0.3s ease;
			}
		}
	}
`;
