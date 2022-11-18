import request from './core';
import { QuestionType } from '../@types/client/data';
import { RequestForm, ResponseForm } from '../@types/api/form';

export const getForm = (applicationId: number) => {
	const url = `/form?applicationId=${applicationId}`;
	return request.get<ResponseForm.Get>(url);
};

export const postForm = (applicationId: number, title: string, questions: QuestionType[]) => {
	const url = '/form';
	const data = { applicationId, title, questions } as const;
	return request.post<ResponseForm.Post, RequestForm.Post>(url, data);
};

export const putForm = (id: number, title: string, questions: QuestionType[]) => {
	const url = `/form/${id}`;
	const data = { title, questions } as const;
	return request.put<ResponseForm.Put, RequestForm.Put>(url, data);
};
