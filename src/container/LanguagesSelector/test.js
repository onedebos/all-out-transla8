/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguagesSelector from './';

afterEach(() => {
	cleanup();
});

describe('<LanguagesSelector />', () => {
	it('renders the LanguageSelect component successfully without crashing', () => {
		render(<LanguagesSelector />);
	});
});
