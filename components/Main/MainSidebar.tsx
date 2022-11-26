import styled from 'styled-components';
import { Styles } from '../../constants/styles';
import Colors from '../../constants/colors';
import { svgPerson, svgNewPlus } from '../../constants/svgs';
import Fonts from '../../constants/fonts';
import { useRouter } from 'next/router';

export default function MainSidebar() {
	const router = useRouter();

	const routeToNewApplication = () => {
		router.push('/newApplication');
	};
	return (
		<SidebarContainer>
			<SidebarProfile>
				<ProfileImage>
					<img src='https://user-images.githubusercontent.com/98504939/204071204-d8965b7f-8a6f-4c8f-904a-63bd16447081.jpg' />
				</ProfileImage>
				<h2>동아리 이름</h2>
				<h3>XX대학교 XX동아리/학회</h3>
				<ProfilePopulation>{svgPerson} 3</ProfilePopulation>
			</SidebarProfile>
			<SidebarList>
				<h3>지원서 목록</h3>
				<li>작성한 지원서 1</li>
				<li>작성한 지원서 2</li>
				<button onClick={routeToNewApplication}>{svgNewPlus}새로운 지원서</button>
			</SidebarList>
		</SidebarContainer>
	);
}

const SidebarContainer = styled.div`
	border-right: 0.1rem solid ${Colors.gray200};
	position: fixed;
	top: ${Styles.headerHeight};
	height: calc(100vh - ${Styles.headerHeight});
	z-index: 10;
	width: 15.28vw;
	min-width: 22rem;
	max-width: 27.2rem;
`;

const SidebarProfile = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4rem 2.6rem 2.85rem 2.6rem;
	border-bottom: 0.1rem solid ${Colors.gray200};

	h2 {
		${Fonts.heading18bold}
		color:${Colors.gray950};
		margin-top: 2.4rem;
	}

	h3 {
		${Fonts.body12medium}
		color:${Colors.gray700};
		margin-top: 0.4rem;
	}
`;

const ProfileImage = styled.div`
	width: 9.6rem;
	height: 9.6rem;
	border-radius: 50%;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
	}
`;

const ProfilePopulation = styled.div`
	${Fonts.button16bold}
	color: ${Colors.gray600};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1.9rem;
	gap: 0.35em;

	svg {
		position: relative;
		top: -0.1rem;
	}
`;

const SidebarList = styled.section`
	padding: 2.4rem 1.1rem;
	text-align: center;

	h3 {
		${Fonts.subtitle14semibold}
		padding-bottom:1.2rem;
	}

	li {
		${Fonts.subtitle16semibold}
		color: ${Colors.gray700};
		text-align: left;
		padding: 1.2rem 1.7rem;
		border-radius: 0.8rem;
	}

	li:first-of-type {
		background-color: ${Colors.blue500twenty};
		color: ${Colors.gray990};
	}

	button {
		${Fonts.button16bold}
		padding: 1.2rem 2rem;
		background-color: ${Colors.blue500};
		color: ${Colors.white};
		display: flex;
		gap: 0.4rem;
		border-radius: 5rem;
		margin: 0 auto;
		margin-top: 2.4rem;
		box-shadow: 0px 3px 12px rgba(126, 157, 238, 0.2);

		svg {
			position: relative;
			top: -0.1rem;
		}
	}
`;
