import { iconHands } from '../../constants/icons';
import CustomButton from '../buttons/CustomButton';
import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import styled from 'styled-components';
import Fonts from '../../constants/fonts';
import Colors from '../../constants/colors';
import { svgCopy } from '../../constants/svgs';
import copyToClipBoard from '../../utils/copyToClipBoard';
import { useRouter } from 'next/router';

export default function NewApplicationComplete({ url = 'www.modong.com/3H5os4' }) {
	const router = useRouter();

	const onClick = async () => await copyToClipBoard(url);
	const toHome = () => router.push('/main');

	return (
		<S.CompleteContainer>
			<S.Title>
				<S.Icon>{iconHands}</S.Icon>
				공고 생성이 완료되었습니다!
			</S.Title>
			<S.ClipBoard onClick={onClick}>
				{url}
				{svgCopy}
			</S.ClipBoard>
			<S.ButtonWrapper>
				<CustomButton buttonSize={ButtonSizes.medium} buttonType={ButtonTypes.secondary}>
					수정하기
				</CustomButton>
				<CustomButton
					buttonSize={ButtonSizes.medium}
					buttonType={ButtonTypes.primary}
					onClick={toHome}>
					홈으로 돌아가기
				</CustomButton>
			</S.ButtonWrapper>
		</S.CompleteContainer>
	);
}

namespace S {
	export const CompleteContainer = styled.div`
		display: flex;
		flex-direction: column;
		gap: 2.4rem;
		align-items: center;
	`;

	export const Icon = styled.div`
		${Fonts.heading24bold}
		text-align: center;
	`;

	export const Title = styled.div`
		${Fonts.heading24bold}
	`;

	export const ClipBoard = styled.div`
		${Fonts.subtitle16medium}
		background-color: ${Colors.gray100};
		padding: 0.3rem 2.4rem;
		color: ${Colors.gray700};
		border-radius: 0.4rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		cursor: pointer;

		svg {
			position: relative;
			top: -0.07rem;
		}
	`;

	export const ButtonWrapper = styled.div`
		display: flex;
		gap: 1.2rem;
	`;
}
