import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import CustomButton from '../buttons/CustomButton';
import { DefaultModalProps } from './props';
import { ButtonTypes, ButtonSizes } from '../../constants/buttons';
import usePreventScroll from '../../hooks/usePreventScroll';

export default function BasicModal({
	icon,
	title,
	subtitle,
	type,
	onCancel,
	onConfirm,
}: DefaultModalProps) {
	usePreventScroll();

	return (
		<S.ModalBackground>
			<S.ModalContainer>
				<S.Icon>{icon}</S.Icon>
				<S.Title>{title}</S.Title>
				<S.Subtitle>{subtitle}</S.Subtitle>
				<S.ButtonWrapper>
					<CustomButton
						buttonSize={ButtonSizes.large}
						buttonType={ButtonTypes.secondary}
						onClick={onCancel}>
						취소
					</CustomButton>
					<CustomButton
						buttonSize={ButtonSizes.large}
						buttonType={ButtonTypes.red}
						onClick={onConfirm}>
						삭제하기
					</CustomButton>
				</S.ButtonWrapper>
			</S.ModalContainer>
		</S.ModalBackground>
	);
}

namespace S {
	export const ModalBackground = styled.div`
		background-color: ${Colors.shade};
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: 0.2s fadeIn;

		@keyframes fadeIn {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	`;

	export const ModalContainer = styled.div`
		width: 50rem;
		padding: 2.4rem;
		padding-top: 4rem;
		text-align: center;
		background-color: ${Colors.white};
		box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.12);
		border-radius: 1.2rem;
	`;

	export const Icon = styled.div`
		${Fonts.heading24bold}
	`;

	export const Title = styled.div`
		${Fonts.heading24bold}
		margin-bottom: 0.4rem;
	`;

	export const Subtitle = styled.div`
		${Fonts.subtitle16medium}
		color: ${Colors.gray700};
		margin-bottom: 2.4rem;
	`;

	export const ButtonWrapper = styled.div`
		display: flex;
		width: 100%;
		gap: 0.8rem;

		button {
			width: 100%;
			text-align: center;
		}
	`;
}
