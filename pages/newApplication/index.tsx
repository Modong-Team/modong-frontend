import NewApplicationPage from '../../components/NewApplication/NewApplicationPage';
import FormsProviders from '../../contexts/FormsProviders';

export default function index() {
	return (
		<FormsProviders>
			<NewApplicationPage />
		</FormsProviders>
	);
}
