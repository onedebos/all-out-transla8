import { useDispatch, useSelector } from 'react-redux';
import { getTranslation, setSrcLangCode, setTargetLangCode, setSrcText, translatorSelector } from './translatorSlice';

const useTranslatorSlice = () => {
	const dispatch = useDispatch();
	const { error, loading,  translation } = useSelector(translatorSelector);

	return {
		dispatchGetTranslation: () => dispatch(getTranslation()),
        dispatchSetLangCode: (langCode) => dispatch(setSrcLangCode(langCode)),
        dispatchSetTrgtLangCode: (langCode) => dispatch(setTargetLangCode(langCode)),
        dispatchSetSrcTxt: (srcText) => dispatch(setSrcText(srcText)),
		loading,
		error,
        translation,
	};
};

export { useTranslatorSlice };