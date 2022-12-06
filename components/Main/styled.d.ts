type CommonProps = {
	isStatusEditMode?: boolean;
};

export type ColumnContainerProps = CommonProps & {};

export type CardContainerProps = CommonProps & {
	isActive: boolean;
	isDisabled?: boolean;
	isOtherStatusEditMode: boolean;
};
