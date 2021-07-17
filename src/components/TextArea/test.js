/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import TextArea from '.';
import constants from '../../container/LanguagesSelector/constants';

afterEach(() => {
	cleanup();
});

describe('<TextArea />', () => {
	const { TRGT_LANG } = constants;

	it('renders the TextArea component successfully without crashing', () => {
		render(<TextArea isTarget={false} />);
	});

	it('renders the correct translation text', () => {
		const { getByTestId } = render(<TextArea isTarget={true} translation="Hallo, Welt" />);
		const translation = getByTestId(TRGT_LANG + '-textarea');
		expect(translation).toHaveTextContent('Hallo, Welt');
	});

	it('matches snapshot', () => {
		const tree = renderer.create(<TextArea />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
