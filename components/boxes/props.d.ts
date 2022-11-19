import { QuestionType } from '../../@types/client/data';
export interface QuestionBoxProps {
	questionType: string;
	isError?: boolean;
	question: QuestionType;
	formIdx: number;
	questionIdx: number;
}
