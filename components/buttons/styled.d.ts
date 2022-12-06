type CommonProps = {
	isActive: boolean;
	isDisabled?: boolean;
};

export type ButtonElementProps = Pick<CommonProps, 'isDisabled'> & {
	buttonSize: string;
	buttonType: string;
	margin?: string;
	isHidden?: boolean;
};

export type FilterContainerProps = Pick<CommonProps, 'isActive'> & {};

export type MoreContainerProps = CommonProps & {};

export type CheckboxContainerProps = Pick<CommonProps, 'isActive'> & {};
