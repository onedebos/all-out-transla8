/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import renderer from 'react-test-renderer';
 import Error from './';
 import constants from '../../container/Translator/constants'
 
 afterEach(() => {
     cleanup();
 });
 
 describe('<Error />', () => {

    const {NO_SRC_TEXT_ERR} = constants

     it('renders the Button component successfully without crashing', () => {
         render(<Error error="" />);
     });

     it('renders the correct error text', () => {
         render(<Error error={NO_SRC_TEXT_ERR} />);
         const errorEl = screen.getByTestId('error-msg');
         expect(errorEl).toHaveTextContent(NO_SRC_TEXT_ERR);
     });
 
 
     it('matches snapshot', () => {
         const tree = renderer.create(<Error error={NO_SRC_TEXT_ERR} />).toJSON();
         expect(tree).toMatchSnapshot();
     });
 });
 