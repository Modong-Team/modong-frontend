export default function copyToClipBoard(text: string) {
	return navigator.clipboard.writeText(text);
}
