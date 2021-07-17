import { createSlice } from '@reduxjs/toolkit';
import translatorAPI from './translatorAPI';

const translatorSlice = createSlice({
	name: 'translator',
	initialState: {
		loading: false,
		error: null,
		translation: '',
		srcText: '',
		srcLangCode: '',
		targetLangCode: 'BG',
		swapTargets: false,
	},
	reducers: {
		setError: (state, { payload }) => {
			state.error = payload;
		},
		setLoading: (state, { payload }) => {
			state.loading = payload;
		},
		setTranslation: (state, { payload }) => {
			state.translation = payload;
		},
		setSrcText: (state, { payload }) => {
			state.srcText = payload;
		},
		setSrcLangCode: (state, { payload }) => {
			state.srcLangCode = payload;
		},
		setTargetLangCode: (state, { payload }) => {
			state.targetLangCode = payload;
		},
		setSwapTargets: (state, { payload }) => {
			state.swapTargets = payload;
		},
	},
});

export const { setError, setLoading, setTranslation, setSrcText, setSrcLangCode, setTargetLangCode, setSwapTargets } =
	translatorSlice.actions;

export const translatorSelector = (state) => state.translator;

export default translatorSlice.reducer;

// Get translation
export const getTranslation = (srcText, targetLangCode) => {
	return async (dispatch) => {
		dispatch(setLoading(true));
		dispatch(setError(null));

		try {
			const response = await translatorAPI.post(srcText, targetLangCode);
			dispatch(setLoading(false));
			dispatch(setTranslation(response.translations[0].text));
		} catch (error) {
			console.log(error);
			console.log(error.message);
			dispatch(setError(true));
			dispatch(setLoading(false));
		}
	};
};
