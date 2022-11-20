import { QuestionType } from '../@types/client/data';
import { Placeholders } from '../constants/placeholders';

export const EmptyQuestion: QuestionType = {
	type: '',
	content: `${Placeholders.question}`,
	options: [''],
};
