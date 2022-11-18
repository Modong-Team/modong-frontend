export default async function useAPI(api: () => any, callback: any) {
	const res = await api();
	callback(res);
}
