import Button from '../src/components/Button';
import Container from '../src/components/Container/Container';
import LanguagesSelector from '../src/container/LanguagesSelector';
import Translator from '../src/container/Translator';

export default function Home() {

	return (
		<Container>
			<LanguagesSelector />
			<Translator />
		</Container>
	);
}
