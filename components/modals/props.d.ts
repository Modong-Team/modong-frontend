export interface DefaultModalProps {
	icon: string;
	title: string;
	subtitle: string;
	type: string;
	onCancel: () => void;
	onConfirm: () => void;
}
