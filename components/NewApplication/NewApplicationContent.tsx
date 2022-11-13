import { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import { svgPlus, svgX } from '../../constants/svgs';
import NewApplicationDefault from './NewApplicationDefault';
import NewApplicationEssential from './NewApplicationEssential';
import { TabElementWrapperProps } from './styledTypes';
import { NewApplicationContentProps, TabElementProps } from './propsTypes';

export default function NewApplicationContent({
	essentials,
	setEssentials,
}: NewApplicationContentProps) {
	const [activePage, setActivePage] = useState(0);
	const [pages, setPages] = useState(1);

	const addNewPage = () => {
		setPages(pages + 1);
		setActivePage(pages);
	};

	const removeThisPage = (idx: number) => {
		if (idx === 0) return;
		setPages(pages - 1);
		setActivePage(pages - 2);
	};

	return (
		<ContentContainer>
			{/* <TabContainer>
				<TabElementContainer>
					{Array(pages)
						.fill(0)
						.map((v, i) => (
							<TabElement
								onClickTitle={() => setActivePage(i)}
								onClickX={() => removeThisPage(i)}
								isActive={activePage === i}
								key={i}>
								{i ? `페이지${i}` : '필수정보입력'}
							</TabElement>
						))}
				</TabElementContainer>
				<span onClick={addNewPage}>{svgPlus}</span>
			</TabContainer> */}
			<IndicatorContainer>
				<IndicatorElement>
					<IndicatorCircle>1</IndicatorCircle>
					지원자 정보
				</IndicatorElement>
				<IndicatorElement>
					<IndicatorCircle>2</IndicatorCircle>질문 등록
				</IndicatorElement>
				<IndicatorElement>
					<IndicatorCircle>3</IndicatorCircle>작성 완료
				</IndicatorElement>
			</IndicatorContainer>
			<FormContainer>
				{!activePage ? (
					<NewApplicationEssential essentials={essentials} setEssentials={setEssentials} />
				) : (
					<NewApplicationDefault />
				)}
			</FormContainer>
			<RouterContainer>
				<RouterElement>지원자 정보</RouterElement>
				<RouterElement>지원자 정보</RouterElement>
			</RouterContainer>
		</ContentContainer>
	);
}

const TabElement = ({ children, onClickTitle, onClickX, isActive }: TabElementProps) => {
	return (
		<TabElementWrapper isActive={isActive}>
			<span onClick={onClickTitle}>{children}</span>
			<span onClick={onClickX}>{svgX}</span>
		</TabElementWrapper>
	);
};

const ContentContainer = styled.div`
	display: flex;

	& {
		svg {
			cursor: pointer;
		}
	}
`;

const IndicatorContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.8rem;
	margin-right: 3.2rem;
	flex-shrink: 0;

	& {
		div {
			font-size: 1.4rem;
		}
	}
`;

const IndicatorElement = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	color: ${Colors.gray01};
`;

const IndicatorCircle = styled.div`
	width: 2.4rem;
	height: 2.4rem;
	border-radius: 50%;
	background-color: ${Colors.background06};
	color: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const RouterContainer = styled.section`
	flex-shrink: 0;
	margin-left: 2rem;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const RouterElement = styled.div`
	background-color: ${Colors.background06};
	border: 0.1rem solid ${Colors.border06};
	padding: 1.2rem 1.6rem;
	border-radius: 0.8rem;
	width: 17.4rem;
	color: ${Colors.gray01};
`;

const TabContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.83rem;

	& {
		> span > svg {
			margin-top: 0.45rem;
		}
	}
`;

const TabElementContainer = styled.div`
	display: flex;
	width: fit-content;
	max-width: 95%;
	border: 0.1rem solid ${Colors.border02};
	border-bottom: none;
	border-radius: 0.8rem 0.8rem 0 0;
	background-color: ${Colors.white01};
	overflow: hidden;

	& {
		div:last-child {
			border-right: none;
		}
	}
`;

const TabElementWrapper = styled.div<TabElementWrapperProps>`
	background-color: ${(props) => (props.isActive ? Colors.white01 : Colors.background05)};
	border-right: 0.1rem solid ${Colors.border02};
	padding: 1.2rem 1.6rem;
	padding-bottom: 0.9rem;
	width: fit-content;
	max-width: 100%;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 1.375rem;

	& {
		span {
			cursor: pointer;
		}
	}
`;

const FormContainer = styled.div`
	background-color: ${Colors.white01};
	border: 0.1rem solid ${Colors.border02};
	border-top: none;
	border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
	padding: 4rem;

	& {
		h2 {
			font-weight: 700;
			font-size: 2.8rem;
			margin-bottom: 1.2rem;
		}

		p {
			font-weight: 600;
			font-size: 1.8rem;
			color: ${Colors.black03};
			line-height: 140%;
			margin-bottom: 3.2rem;
		}
	}
`;
