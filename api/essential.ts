import request from './core';
import { ResponseEssential } from '../@types/api/essential';

export const getEssentialAll = () => {
	const url = '/essential/all';
	return request.get<ResponseEssential.GetAll>(url);
};
