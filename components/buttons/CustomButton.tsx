import styled from 'styled-components';
import {
	Buttons,
	ButtonTypes,
	PrimaryStates,
	SecondaryStates,
	ButtonSizes,
	LargeLineStates,
	MediumLineStates,
	RedStates,
	CommonLineStates,
	SmallLineStates,
} from '../../constants/buttons';
import { CustomButtonProps } from './props';
import { ButtonElementProps } from './styled';

export default function CustomButton({
	children,
	onClick,
	buttonSize,
	buttonType,
	isDisabled,
	margin,
	isHidden,
}: CustomButtonProps) {
	return (
		<ButtonElement
			onClick={onClick}
			buttonSize={buttonSize}
			buttonType={buttonType}
			isDisabled={isDisabled}
			margin={margin}
			isHidden={isHidden}>
			{children}
		</ButtonElement>
	);
}

const ButtonElement = styled.button<ButtonElementProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.47rem;
	margin: ${(props) => props.margin};
	transition: 0.2s ease;

	/********** except bg-color & font-color **********/
	${(props) => Buttons[props.buttonSize]}
	${(props) =>
		props.buttonType === ButtonTypes.line &&
		props.buttonSize === ButtonSizes.medium &&
		Buttons.mediumLine}

	/********** normal **********/
	/* primary */
	${(props) => props.buttonType === ButtonTypes.primary && PrimaryStates.normal}
	/* secondary */
	${(props) => props.buttonType === ButtonTypes.secondary && SecondaryStates.normal}
	/* large-line */
	${(props) =>
		props.buttonType === ButtonTypes.line &&
		props.buttonSize === ButtonSizes.large &&
		LargeLineStates.normal}
	/* medium-line */
	${(props) =>
		props.buttonType === ButtonTypes.line &&
		props.buttonSize === ButtonSizes.medium &&
		MediumLineStates.normal}
	/* small-line */
	${(props) =>
		props.buttonType === ButtonTypes.line &&
		props.buttonSize === ButtonSizes.small &&
		SmallLineStates.normal}
	/* red */
	${(props) => props.buttonType === ButtonTypes.red && RedStates.normal}

	/********** hover **********/
	&:hover {
		transition: 0.2s ease;
		/* primary */
		${(props) => props.buttonType === ButtonTypes.primary && PrimaryStates.hover}
		/* secondary */
		${(props) => props.buttonType === ButtonTypes.secondary && SecondaryStates.hover}
		/* large-line */
		${(props) =>
			props.buttonType === ButtonTypes.line &&
			props.buttonSize === ButtonSizes.large &&
			LargeLineStates.hover}
		/* medium-line */
		${(props) =>
			props.buttonType === ButtonTypes.line &&
			props.buttonSize === ButtonSizes.medium &&
			MediumLineStates.hover}
		/* small-line */
		${(props) =>
			props.buttonType === ButtonTypes.line &&
			props.buttonSize === ButtonSizes.small &&
			SmallLineStates.hover}
		/* red */
		${(props) => props.buttonType === ButtonTypes.red && RedStates.hover}
	}

	/********** active **********/
	&:active {
		transition: 0.2s ease;
		/* primary */
		${(props) => props.buttonType === ButtonTypes.primary && PrimaryStates.active}
		/* secondary */
		${(props) => props.buttonType === ButtonTypes.secondary && SecondaryStates.active}
		/* large-line */
		${(props) =>
			props.buttonType === ButtonTypes.line &&
			props.buttonSize === ButtonSizes.large &&
			LargeLineStates.active}
		/* medium-line */
		${(props) =>
			props.buttonType === ButtonTypes.line &&
			props.buttonSize === ButtonSizes.medium &&
			MediumLineStates.active}
		/* small-line */
		${(props) =>
			props.buttonType === ButtonTypes.line &&
			props.buttonSize === ButtonSizes.small &&
			SmallLineStates.active}
		/* red */
		${(props) => props.buttonType === ButtonTypes.red && RedStates.active}
	}

	/********** disabled **********/
	/* primary */
	${(props) =>
		props.isDisabled && props.buttonType === ButtonTypes.primary && PrimaryStates.disabled}
	/* secondary */
	${(props) =>
		props.isDisabled && props.buttonType === ButtonTypes.secondary && SecondaryStates.disabled}
	/* line */
	${(props) => props.isDisabled && props.buttonType === ButtonTypes.line && CommonLineStates.disabled}
	/* red */
	${(props) => props.isDisabled && props.buttonType === ButtonTypes.red && RedStates.disabled}
	/* svg */
	${(props) => props.isDisabled && 'svg path { fill:white; }'}

	visibility: ${(props) => props.isHidden && 'hidden'};
`;
