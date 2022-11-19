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
} from '../../constants/buttons';
import { CustomButtonProps } from './props';
import { ButtonElementProps } from './styled';

export default function CustomButton({
	children,
	buttonSize,
	buttonType,
	isDisabled,
}: CustomButtonProps) {
	return (
		<ButtonElement buttonSize={buttonSize} buttonType={buttonType} isDisabled={isDisabled}>
			{children}
		</ButtonElement>
	);
}

const ButtonElement = styled.button<ButtonElementProps>`
	/********** except bg-color & font-color **********/
	${(props) => Buttons[props.buttonSize]}

	/********** normal **********/
	/* primary */
	${(props) => props.buttonType === ButtonTypes.primary && PrimaryStates.normal}
	/* secondary */
	${(props) => props.buttonType === ButtonTypes.secondary && SecondaryStates.normal}
	/* large-line */
	${(props) =>
		props.buttonSize === ButtonSizes.large &&
		props.buttonType === ButtonTypes.line &&
		LargeLineStates.normal}
	/* medium-line */
	${(props) =>
		props.buttonSize === ButtonSizes.medium &&
		props.buttonType === ButtonTypes.line &&
		MediumLineStates.normal}
	/* red */
	${(props) => props.buttonType === ButtonTypes.red && RedStates.normal}

	/********** hover **********/
	&:hover {
		/* primary */
		${(props) => props.buttonType === ButtonTypes.primary && PrimaryStates.hover}
		/* secondary */
		${(props) => props.buttonType === ButtonTypes.secondary && SecondaryStates.hover}
		/* large-line */
		${(props) =>
			props.buttonSize === ButtonSizes.large &&
			props.buttonType === ButtonTypes.line &&
			LargeLineStates.hover}
		/* medium-line */
		${(props) =>
			props.buttonSize === ButtonSizes.medium &&
			props.buttonType === ButtonTypes.line &&
			MediumLineStates.hover}
		/* red */
		${(props) => props.buttonType === ButtonTypes.red && RedStates.hover}
	}

	/********** active **********/
	&:active {
		/* primary */
		${(props) => props.buttonType === ButtonTypes.primary && PrimaryStates.active}
		/* secondary */
		${(props) => props.buttonType === ButtonTypes.secondary && SecondaryStates.active}
		/* large-line */
		${(props) =>
			props.buttonSize === ButtonSizes.large &&
			props.buttonType === ButtonTypes.line &&
			LargeLineStates.active}
		/* medium-line */
		${(props) =>
			props.buttonSize === ButtonSizes.medium &&
			props.buttonType === ButtonTypes.line &&
			MediumLineStates.active}
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
`;
