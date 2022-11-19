export class Questions {
	static TextQuestion = 'TextQuestion';
	static RadioQuestion = 'RadioQuestion';
	static CheckboxQuestion = 'CheckboxQuestion';
	static [key: string]: string;
}

export class QuestionsLabel {
	static TextQuestion = '주관식';
	static RadioQuestion = '단일 선택';
	static CheckboxQuestion = '복수 선택';
	static [key: string]: string;
}
