export interface FormsActionsType {
	updateFormTitle(formIdx: number, title: string): void;
	updateQuestionContent(formIdx: number, questionIdx: number, content: string): void;
	updateQuestionOption(
		formIdx: number,
		questionIdx: number,
		optionIdx: number,
		option: string,
	): void;
	removeQuestion(formIdx: number, questionIdx: number): void;
	removeQuestionOption(formIdx: number, questionIdx: number, optionIdx: number): void;
	createQuestion(formIdx: number, questionType: string): void;
	createQuestionOption(formIdx: number, questionIdx: number): void;
}
