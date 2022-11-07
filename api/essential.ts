import request from './core';

export const getEssentialAll = () => {
	return request({ url: '/essential/all' });
};
