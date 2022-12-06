import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgChecked, svgUnChecked, svgCheckedBlue } from '../../constants/svgs';
import { EssentialElementWrapperProps } from './styled';
import { EssentialElementProps, NewApplicationEssentialProps } from './props';
import { useEffect, useState } from 'react';
import { getEssentialAll } from '../../api/essential';
import { ResponseEssential } from '../../@types/api/essential';
import useAPI from '../../hooks/useAPI';

export default function NewApplicationEssential({
	essentials,
	setEssentials,
}: NewApplicationEssentialProps) {
	const [essentialsList, setEssentialsList] = useState<ResponseEssential.GetAll>([]);

	useEffect(() => {
		useAPI(getEssentialAll, setEssentialsList);
	}, []);

	const setIsEssential = (element: number) => {
		if (essentials.includes(element)) setEssentials(essentials.filter((v) => v !== element));
		else setEssentials([...essentials, element]);
	};

	return (
		<>
			<h2>지원자 정보</h2>
			<S.EssentialContainer>
				<S.Description>
					아래 3가지 항목은 지원자들에게 기본적으로 제출받는 항목입니다.
				</S.Description>
				{essentialsList
					.filter((v) => v.isFixed)
					.map((v, i) => {
						return (
							<EssentialElement key={i} isFixedEssential={true}>
								{v.content}
							</EssentialElement>
						);
					})}
				<S.Description>지원자에게 추가로 제출받을 항목을 선택해 주세요.</S.Description>
				{essentialsList
					.filter((v) => !v.isFixed)
					.map((v, i) => {
						return (
							<EssentialElement
								key={i}
								onClick={() => setIsEssential(v.id)}
								isNotEssential={!essentials.includes(v.id)}>
								{v.content}
							</EssentialElement>
						);
					})}
			</S.EssentialContainer>
		</>
	);
}

const EssentialElement = ({
	children,
	onClick,
	isNotEssential,
	isFixedEssential,
}: EssentialElementProps) => {
	return (
		<S.EssentialElementWrapper
			onClick={onClick}
			isNotEssential={isNotEssential}
			isFixedEssential={isFixedEssential}>
			{
				<span>
					{!isFixedEssential ? (isNotEssential ? svgUnChecked : svgCheckedBlue) : svgChecked}
				</span>
			}
			{children}
		</S.EssentialElementWrapper>
	);
};

namespace S {
	export const EssentialContainer = styled.div`
		display: flex;
		flex-direction: column;
	`;

	export const EssentialElementWrapper = styled.div<EssentialElementWrapperProps>`
		${Fonts.subtitle16semibold}
		height: 4.8rem;
		padding: 0 2.15rem;
		border-radius: 0.8rem;
		border: 0.1rem solid ${Colors.gray200};
		color: ${Colors.gray900};
		display: flex;
		align-items: center;
		gap: 1.15rem;
		cursor: ${(props) => (!props.isFixedEssential ? 'pointer' : '')};
		margin-bottom: 1rem;
		transition: 0.3s ease;

		& {
			> span {
				display: flex;
			}
			:last-child {
				margin-bottom: 0;
			}
		}

		&:hover {
			background-color: ${(props) => (!props.isFixedEssential ? Colors.gray100 : '')};
			border-color: ${(props) => (!props.isFixedEssential ? Colors.gray300 : '')};
			transition: 0.3s ease;

			> span svg path:first-child {
				fill: ${(props) => props.isNotEssential && Colors.gray300};
				transition: 0.3s ease;
			}
		}
	`;

	export const Description = styled.p`
		margin-bottom: 0.8rem;

		&:nth-of-type(2) {
			margin-top: 1.4rem;
		}
	`;
}
