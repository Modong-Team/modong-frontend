export default async function copyToClipBoard(text: string) {
	await navigator.clipboard.writeText(text);
}
