/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import renderer from 'react-test-renderer';
 import TextArea from '.';
 
 afterEach(() => {
     cleanup();
 });
 
 describe('<TextArea />', () => {

     it('renders the Button component successfully without crashing', () => {
         render(<TextArea isTarget={false} />);
     });

    
     it('matches snapshot', () => {
         const tree = renderer.create(<TextArea />).toJSON();
         expect(tree).toMatchSnapshot();
     });
 });
 