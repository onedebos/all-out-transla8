/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import renderer from 'react-test-renderer';
 import LanguageSelect from './';
 import constants from '../../container/LanguagesSelector/constants'

 const {srcLangOptions, SRC_LANG,  TRGT_LANG, targetLangOptions} = constants
 
 afterEach(() => {
     cleanup();
 });
 
 describe('<Button />', () => {
     it('renders the LanguageSelect component successfully without crashing', () => {
         render(<LanguageSelect langType={SRC_LANG} langOptions={srcLangOptions} />);
     });

     it('renders only shows English as an option in the source language dropdown', () => {
        render(<LanguageSelect langType={SRC_LANG} langOptions={srcLangOptions} />);
        const langOptions = screen.getByTestId('lang-options');
		expect(langOptions).toBeInTheDocument();
        expect(langOptions).toHaveTextContent('English');
        expect(langOptions).not.toHaveTextContent('Bulgarian');
    });

    it('renders several languages as options in the target language dropdown', () => {
        render(<LanguageSelect langType={TRGT_LANG} langOptions={targetLangOptions} />);
        const langOptions = screen.getByTestId('lang-options');
		expect(langOptions).toBeInTheDocument();
        expect(langOptions).toHaveTextContent('English');
        expect(langOptions).toHaveTextContent('Bulgarian');
        expect(langOptions).toHaveTextContent('German');
        expect(langOptions).toHaveTextContent('French');
    });
 
     
     it('matches snapshot', () => {
         const tree = renderer.create(<LanguageSelect langType={TRGT_LANG} langOptions={targetLangOptions} />).toJSON();
         expect(tree).toMatchSnapshot();
     });
 });
 