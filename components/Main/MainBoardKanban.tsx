import styled from 'styled-components';
import FilterButton from '../buttons/FilterButton';
import DropDown from '../dropdowns/DropDown';
import MainBoardKanbanColumn from './MainBoardKanbanColumn';
import { useState } from 'react';
import { Styles } from '../../constants/styles';
import stopPropagation from '../../utils/stopPropagation';

export default function MainBoardKanban() {
	const [isShowTypeFilter, setIsShowTypeFilter] = useState(false);
	const [isShowSortFilter, setIsShowSortFilter] = useState(false);
	const [statusEditModeFor, setStatusEditModeFor] = useState(-1);

	const showTypeFilter = () => setIsShowTypeFilter(true);

	const showSortFilter = () => setIsShowSortFilter(true);

	const hideTypeFilter = () => setIsShowTypeFilter(false);

	const hideSortFilter = () => setIsShowSortFilter(false);

	const toggleStatusEditMode = (idx: number) => {
		if (statusEditModeFor !== idx) setStatusEditModeFor(idx);
		else setStatusEditModeFor(-1);
	};

	return (
		<KanbanContainer>
			<section>
				<FilterButton
					title='모든 지원자'
					onClick={showTypeFilter}
					onBlur={hideTypeFilter}
					isActive={isShowTypeFilter}>
					{isShowTypeFilter && (
						<DropDown
							option1='모든 지원자'
							option2='평가중'
							option3='탈락'
							onClick1={stopPropagation}
							onClick2={stopPropagation}
							onClick3={stopPropagation}
							customCSS={`bottom:-11rem; ${Styles.dropDownAlignLeft} div:last-of-type{${Styles.dropDownOptionRed}}`}
						/>
					)}
				</FilterButton>
				<FilterButton
					title='가나다 순'
					onClick={showSortFilter}
					onBlur={hideSortFilter}
					isActive={isShowSortFilter}>
					{isShowSortFilter && (
						<DropDown
							option1='가나다 순'
							option2='높은 평점 순'
							option3='낮은 평점 순'
							onClick1={stopPropagation}
							onClick2={stopPropagation}
							onClick3={stopPropagation}
							customCSS={`bottom:-11rem; ${Styles.dropDownAlignLeft}`}
						/>
					)}
				</FilterButton>
			</section>
			<section>
				<MainBoardKanbanColumn
					isStatusEditMode={statusEditModeFor === 0}
					isOtherStatusEditMode={statusEditModeFor !== 0 && statusEditModeFor !== -1}
					onClickStatusEdit={() => toggleStatusEditMode(0)}
				/>
				<MainBoardKanbanColumn
					isStatusEditMode={statusEditModeFor === 1}
					isOtherStatusEditMode={statusEditModeFor !== 1 && statusEditModeFor !== -1}
					onClickStatusEdit={() => toggleStatusEditMode(1)}
				/>
				<MainBoardKanbanColumn
					isStatusEditMode={statusEditModeFor === 2}
					isOtherStatusEditMode={statusEditModeFor !== 2 && statusEditModeFor !== -1}
					onClickStatusEdit={() => toggleStatusEditMode(2)}
				/>
				<MainBoardKanbanColumn
					isStatusEditMode={statusEditModeFor === 3}
					isOtherStatusEditMode={statusEditModeFor !== 3 && statusEditModeFor !== -1}
					onClickStatusEdit={() => toggleStatusEditMode(3)}
				/>
			</section>
		</KanbanContainer>
	);
}

const KanbanContainer = styled.div`
	> section:first-of-type {
		padding: 1.6rem 0;
		display: flex;
		gap: 0.6rem;
	}

	> section:nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		padding-bottom: 3.2rem;
	}
`;
