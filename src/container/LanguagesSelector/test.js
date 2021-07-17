/**
 * @jest-environment jsdom
 */
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/slices/store';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import LanguagesSelector from './';
import constants from './constants';

afterEach(() => {
	cleanup();
});

describe('<LanguagesSelector />', () => {
	const { SRC_LANG, TRGT_LANG } = constants;

	it('renders the LanguagesSelector component successfully without crashing', () => {
		render(
			<Provider store={store}>
				<LanguagesSelector />
			</Provider>
		);
	});

	it('allows the user select a different target language like German from the dropdown', () => {
		const { getByTestId, getAllByTestId } = render(
			<Provider store={store}>
				<LanguagesSelector />
			</Provider>
		);

		fireEvent.change(getByTestId(TRGT_LANG), { target: { value: 'DE' } });
		let options = getAllByTestId(TRGT_LANG + '-option');
		expect(options[0].selected).toBeFalsy();
		expect(options[1].selected).toBeFalsy();
		expect(options[2].selected).toBeFalsy();
		expect(options[3].selected).toBeTruthy();
	});

	it('allows the user select only English for the Source text', () => {
		const { getByTestId, getAllByTestId } = render(
			<Provider store={store}>
				<LanguagesSelector />
			</Provider>
		);
		let options = getAllByTestId(SRC_LANG + '-option');
		expect(options.length).toBe(1);
		expect(options[0]).toHaveValue('EN');
	});

	it('swaps the positions of the source and target dropdowns when the user clicks on the arrows', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<LanguagesSelector />
			</Provider>
		);
		const arrowBtn = getByTestId('arrow-btn');
		fireEvent.click(arrowBtn);

		const languagesWrapper = getByTestId('languages-wrapper');
		expect(languagesWrapper).toHaveStyle({
			display: 'flex',
			'flex-direction': 'row-reverse',
			'justify-content': 'flex-end',
		});
	});

	it('matches snapshot', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<LanguagesSelector />
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
