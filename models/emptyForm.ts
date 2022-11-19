import { FormType } from '../@types/client/data';

export const EmptyForm: FormType = {
	id: null,
	title: '질문 페이지',
	questions: [
		{
			type: 'TextQuestion',
			content: '',
			options: [''],
		},
	],
};
