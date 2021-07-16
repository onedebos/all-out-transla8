/**
 * @jest-environment jsdom
 */
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/slices/store';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Translator from './';
import constants from '../LanguagesSelector/constants';

afterEach(() => {
	cleanup();
});

describe('<Translator />', () => {
	const { SRC_LANG, TRGT_LANG } = constants;

	it('renders the Translator component successfully without crashing', () => {
		render(
			<Provider store={store}>
				<Translator />
			</Provider>
		);
	});

	it('allows the user type in a source text to be translated', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<Translator />
			</Provider>
		);
		const textAreaInput = getByTestId(SRC_LANG + '-textarea');
		fireEvent.change(textAreaInput, { target: { value: 'Hello, World!' } });
		expect(textAreaInput.value).toBe('Hello, World!');
	});

	it('matches snapshot', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<Translator />
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
