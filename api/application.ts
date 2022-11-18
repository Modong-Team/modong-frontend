import request from './core';
import { RequestApplication, ResponseApplication } from '../@types/api/application';

export const getApplicationAll = (clubId: number) => {
	const url = `/application/all?clubId=${clubId}`;
	return request.get<ResponseApplication.GetAll>(url);
};

export const getApplication = (id: number) => {
	const url = `/application/${id}`;
	return request.get<ResponseApplication.Get>(url);
};

export const postApplication = (clubId: number, title: string) => {
	const url = `/application?clubId=${clubId}`;
	const data = { title } as const;
	return request.post<ResponseApplication.Post, RequestApplication.Post>(url, data);
};

export const patchApplication = (id: number, essentialIds: number[]) => {
	const url = `/application/${id}`;
	const data = { essentialIds } as const;
	return request.patch<ResponseApplication.Patch, RequestApplication.Patch>(url, data);
};
