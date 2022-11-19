import React from 'react';
import QuestionInput from './QuestionInput';

export interface SectionTitleInputProps {
	value: string;
	onChange: React.ChangeEventHandler;
	placeholder: string;
}

export interface QuestionInputProps {
	questionType: string;
	isError?: boolean;
}
