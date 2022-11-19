import { ChildrenType } from '../../@types/client/base';

export interface CustomButtonProps extends ChildrenType {
	buttonSize: string;
	buttonType: string;
	isDisabled?: boolean;
}
