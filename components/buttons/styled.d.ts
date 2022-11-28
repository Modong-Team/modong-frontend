export interface ButtonElementProps {
	buttonSize: string;
	buttonType: string;
	isDisabled?: boolean;
	margin?: string;
	isHidden?: boolean;
}

export interface FilterContainerProps {
	isActive: boolean;
}

export interface MoreContainerProps {
	isActive: boolean;
	isDisabled?: boolean;
}

export interface CheckboxContainerProps {
	isActive: boolean;
}
