import React from 'react';
import { QuestionType } from '../../@types/client/data';

export interface SectionTitleInputProps {
	value: string;
	onChange: React.ChangeEventHandler;
	placeholder: string;
}

export interface QuestionInputProps {
	onChange: React.ChangeEventHandler;
	onRemove: () => void;
	isError?: boolean;
	placeholder: string;
	value?: string;
}

export interface QuestionRadioInputProps {
	question: QuestionType;
	formIdx: number;
	questionIdx: number;
	optionIdx: number;
}

export interface QuestionCheckboxInputProps {
	question: QuestionType;
	formIdx: number;
	questionIdx: number;
	optionIdx: number;
}
