import { FormType } from '../@types/client/data';
import { Questions } from '../constants/questions';
import { Placeholders } from '../constants/placeholders';

export const EmptyForm: FormType = {
	id: null,
	title: '질문 페이지',
	questions: [
		{
			type: `${Questions.Question}`,
			content: `${Placeholders.question}`,
			options: [''],
		},
	],
};
