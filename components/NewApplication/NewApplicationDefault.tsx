import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgCirclePlus, svgCircleX, svgPencil, svgTick, svgCheckBox } from '../../constants/svgs';
import { NewApplicationDefaultProps } from './props';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import SectionTitleInput from '../Inputs/SectionTitleInput';
import { Questions } from '../../constants/questions';
import QuestionBox from '../boxes/QuestionBox';

export default function NewApplicationDefault({ section }: NewApplicationDefaultProps) {
	const [showMenu, setShowMenu] = useState(false);
	const [title, setTitle] = useInput('질문 페이지');

	const onClickMenu = () => setShowMenu(true);
	const onBlur = () => setShowMenu(false);

	return (
		<>
			<h2>
				<SectionTitleInput
					value={title as string}
					onChange={setTitle as React.ChangeEventHandler}
					placeholder='섹션 제목'
				/>
			</h2>
			<p>지원자에게 질문하고 싶은 내용을 입력해주세요.</p>
			<DefaultContainer>
				<QuestionBox questionType={Questions.RadioQuestion} />
				<NewQuestionButton onClick={onClickMenu} onBlur={onBlur}>
					{svgCirclePlus}
					{showMenu && (
						<QuestionMenu>
							<div>{svgPencil}주관식</div>
							<div>{svgTick}단일 선택</div>
							<div>{svgCheckBox}복수 선택</div>
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
	gap: 2.52rem;

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
