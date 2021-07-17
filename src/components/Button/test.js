/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Button from './';

afterEach(() => {
	cleanup();
});

describe('<Button />', () => {
	it('renders the Button component successfully without crashing', () => {
		render(<Button />);
	});

	it('renders the Button element', () => {
		render(<Button />);
		const btnElement = screen.getByTestId('translate');
		expect(btnElement).toBeInTheDocument();
	});

	it('renders the correct text when loading is false', () => {
		render(<Button loading={false} />);
		const btnElement = screen.getByTestId('translate');
		expect(btnElement).toHaveTextContent('Translate');
	});


	it('has a background color of #ddd by default', () => {
		render(<Button loading={false} />);
		const btnElement = screen.getByTestId('translate');
		expect(btnElement).toHaveStyle({
			'background-color': '#ddd',
		});
	});

	it('has a background color of rgb(66, 133, 244) when loading is true', () => {
		render(<Button loading={true} />);
		const btnElement = screen.getByTestId('translate');
		expect(btnElement).toHaveStyle({
			'background-color': 'rgb(66, 133, 244)',
			color: '#fff',
		});
	});

	it('matches snapshot', () => {
		const tree = renderer.create(<Button loading={false} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
