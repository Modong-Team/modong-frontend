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
		<ModalBackground>
			<ModalContainer>
				<Icon>{icon}</Icon>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
				<ButtonWrapper>
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
				</ButtonWrapper>
			</ModalContainer>
		</ModalBackground>
	);
}

const ModalBackground = styled.div`
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

const ModalContainer = styled.div`
	width: 50rem;
	padding: 2.4rem;
	padding-top: 4rem;
	text-align: center;
	background-color: ${Colors.white};
	box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.12);
	border-radius: 1.2rem;
`;

const Icon = styled.div`
	${Fonts.heading24bold}
`;

const Title = styled.div`
	${Fonts.heading24bold}
	margin-bottom: 0.4rem;
`;

const Subtitle = styled.div`
	${Fonts.subtitle16medium}
	color: ${Colors.gray700};
	margin-bottom: 2.4rem;
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 0.8rem;

	button {
		width: 100%;
		text-align: center;
	}
`;
