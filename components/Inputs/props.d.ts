import React from 'react';
import { QuestionType } from '../../@types/client/data';

type CommonProps = {
	value: string;
	onChange: React.ChangeEventHandler;
	placeholder: string;
};

type CommonRadioAndCheckboxProps = {
	question: QuestionType;
	formIdx: number;
	questionIdx: number;
	optionIdx: number;
};

export type SectionTitleInputProps = CommonProps & {};

export type QuestionInputProps = CommonProps & {
	onRemove: () => void;
	isError?: boolean;
};

export type QuestionRadioInputProps = CommonRadioAndCheckboxProps & {};

export type QuestionCheckboxInputProps = CommonRadioAndCheckboxProps & {};
