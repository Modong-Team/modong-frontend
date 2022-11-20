export interface TabElementWrapperProps {
	isActive: boolean;
}

export interface EssentialElementWrapperProps {
	isNotEssential?: boolean;
	isFixedEssential?: boolean;
}

export interface ButtonProps {
	isHidden?: boolean;
}

export interface NavigatorElementProps {
	isCurrent?: boolean;
}

export interface IndicatorElementProps {
	isHighlighted?: boolean;
}

export interface TitleContainerProps {
	isFocused?: boolean;
	isError?: boolean;
}

export interface HeaderButtonProps {
	isComplete: boolean;
}
