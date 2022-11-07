import request from './core';

export const getApplicationAll = (clubId: number) => {
	return request({ url: `/application/all?clubId=${clubId}` });
};

export const getApplication = (id: number) => {
	return request({ url: `/application/${id}` });
};

export const postApplication = (clubId: number, title: string) => {
	return request({
		url: `/application?clubId=${clubId}`,
		method: 'POST',
		data: {
			title,
		},
	});
};

export const patchApplication = (id: number, essentialIds: number[]) => {
	return request({
		url: `/application/${id}`,
		method: 'PATCH',
		data: {
			essentialIds,
		},
	});
};
