import Button from '../src/components/Button';
import Container from '../src/components/Container/Container';
import LanguagesSelector from '../src/container/LanguagesSelector';
import TextAreas from '../src/container/TextAreas';

export default function Home() {

	return (
		<Container>
			<LanguagesSelector />
			<TextAreas />
			<Button />
		</Container>
	);
}
