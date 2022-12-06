import { QuestionType } from '../../@types/client/data';

export type QuestionBoxProps = {
	questionType: string;
	isError?: boolean;
	question: QuestionType;
	formIdx: number;
	questionIdx: number;
};
