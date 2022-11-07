import axios from 'axios';

const request = axios.create({
	baseURL: 'http://modong-backend-dev-env.eba-dstvsrcm.ap-northeast-2.elasticbeanstalk.com/',
	timeout: 2500,
	headers: { 'Content-Type': 'application/json' },
});

request.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	},
);

request.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default request;
