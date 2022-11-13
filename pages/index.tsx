import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Colors from '../constants/colors';

const Home: NextPage = () => {
	const router = useRouter();

	const routeToNewApplication = () => {
		router.push('/newApplication');
	};

	return (
		<HomeContainer>
			<NewApplicationBtn onClick={routeToNewApplication}>새로운 지원서 생성</NewApplicationBtn>
		</HomeContainer>
	);
};

const HomeContainer = styled.div`
	background-color: ${Colors.background};
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NewApplicationBtn = styled.button`
	background-color: ${Colors.blue500};
	color: ${Colors.white};
	padding: 1.2rem 1.5rem;
	border-radius: 0.8rem;
	font-size: 2rem;
`;

export default Home;
