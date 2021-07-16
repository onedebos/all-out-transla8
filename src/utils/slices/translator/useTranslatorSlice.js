import { useDispatch, useSelector } from 'react-redux';
import { getTranslation, setSrcLangCode, setTargetLangCode, setSrcText, translatorSelector, setError } from './translatorSlice';

const useTranslatorSlice = () => {
	const dispatch = useDispatch();
	const { error, loading,  translation, srcText, targetLangCode } = useSelector(translatorSelector);

	return {
		dispatchGetTranslation: (srcText, targetLangCode) => dispatch(getTranslation(srcText, targetLangCode)),
        dispatchSetLangCode: (langCode) => dispatch(setSrcLangCode(langCode)),
        dispatchSetTrgtLangCode: (langCode) => dispatch(setTargetLangCode(langCode)),
        dispatchSetSrcTxt: (srcText) => dispatch(setSrcText(srcText)),
		dispatchSetError: (error) => dispatch(setError(error)),
		loading,
		error,
        translation,
		srcText,
		targetLangCode
	};
};

export { useTranslatorSlice };