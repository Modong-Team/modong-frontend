import { ChildrenType } from '../../@types/client/base';

export interface CustomButtonProps extends ChildrenType {
	onClick?: () => void;
	buttonSize: string;
	buttonType: string;
	isDisabled?: boolean;
	margin?: string;
}
