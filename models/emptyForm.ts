import { FormType } from '../@types/client/data';

export const EmptyForm: FormType = {
	title: '질문 페이지',
	questions: [
		{
			type: 'TextQuestion',
			content: '',
			options: [''],
		},
	],
};
