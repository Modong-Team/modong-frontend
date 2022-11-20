import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { ChildrenType } from '../@types/client/base';
import { FormsActionsType } from '../@types/client/context';
import { FormType, QuestionType } from '../@types/client/data';
import { EmptyForm } from '../models/emptyForm';
import { EmptyQuestion } from '../models/emptyQuestion';
import deepCopyObject from '../utils/deepCopyObject';

const FormsValueContext = createContext<FormType[]>([] as any);
const FormsActionsContext = createContext<FormsActionsType>([] as any);

export default function FormsProviders({ children }: ChildrenType) {
	const [forms, setForms] = useState<FormType[]>([deepCopyObject<FormType>(EmptyForm)]);
	const actions = {
		updateFormTitle(formIdx: number, title: string) {
			const copy = deepCopyObject<FormType[]>(forms);
			copy[formIdx].title = title;
			setForms(copy);
		},
		updateQuestionContent(formIdx: number, questionIdx: number, content: string) {
			const copy = deepCopyObject<FormType[]>(forms);
			copy[formIdx].questions[questionIdx].content = content;
			setForms(copy);
		},
		updateQuestionOption(formIdx: number, questionIdx: number, optionIdx: number, option: string) {
			const copy = deepCopyObject<FormType[]>(forms);
			copy[formIdx].questions[questionIdx].options[optionIdx] = option;
			setForms(copy);
		},
		removeQuestion(formIdx: number, questionIdx: number) {
			if (forms[formIdx].questions.length === 1) return;
			const copy = deepCopyObject<FormType[]>(forms);
			copy[formIdx].questions.splice(questionIdx, 1);
			setForms(copy);
		},
		removeQuestionOption(formIdx: number, questionIdx: number, optionIdx: number) {
			if (forms[formIdx].questions[questionIdx].options.length === 1) return;
			const copy = deepCopyObject<FormType[]>(forms);
			copy[formIdx].questions[questionIdx].options.splice(optionIdx, 1);
			setForms(copy);
		},
		removeForm(formIdx: number) {
			const copy = deepCopyObject<FormType[]>(forms);
			copy.splice(formIdx, 1);
			setForms(copy);
		},
		createQuestion(formIdx: number, questionType: string) {
			const copy = deepCopyObject<FormType[]>(forms);
			const emptyQuestion = deepCopyObject<QuestionType>(EmptyQuestion);
			const newQuestion = { ...emptyQuestion, type: questionType };
			copy[formIdx].questions.push(newQuestion);
			setForms(copy);
		},
		createQuestionOption(formIdx: number, questionIdx: number) {
			const copy = deepCopyObject<FormType[]>(forms);
			copy[formIdx].questions[questionIdx].options.push('');
			setForms(copy);
		},
		createForm() {
			const copy = deepCopyObject<FormType[]>(forms);
			copy.push(deepCopyObject<FormType>(EmptyForm));
			setForms(copy);
		},
	};

	return (
		<FormsActionsContext.Provider value={actions}>
			<FormsValueContext.Provider value={forms}>{children}</FormsValueContext.Provider>
		</FormsActionsContext.Provider>
	);
}

export function useFormsValue() {
	const value = useContext(FormsValueContext);
	if (value === undefined) throw new Error('FormsValueContext.Provider is Missing');
	return value;
}

export function useFormsActions() {
	const value = useContext(FormsActionsContext);
	if (value === undefined) throw new Error('FormsActionsContext.Provider is Missing');
	return value;
}
