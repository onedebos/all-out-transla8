import LanguageSelect from '../../components/LanguageSelect';
import constants from './constants';
import styled from 'styled-components';
import { useTranslatorSlice } from '../../utils/slices/translator/useTranslatorSlice';
import { useEffect } from 'react';

export default function LanguagesSelector() {
	const { srcLangOptions, targetLangOptions, SRC_LANG, TRGT_LANG } = constants;

	const { dispatchSetLangCode, dispatchSetTrgtLangCode } = useTranslatorSlice();

	useEffect(() => {
		let mounted = true;

		if (mounted) dispatchSetLangCode('EN-GB');

		return () => (mounted = false);
	}, []);

	return (
		<Wrapper>
			<LanguageSelect langType={SRC_LANG} langOptions={srcLangOptions} />
			<SvgWrapper>
				<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
				</svg>
			</SvgWrapper>
			<LanguageSelect
				langType={TRGT_LANG}
				langOptions={targetLangOptions}
				onChange={(e) => dispatchSetTrgtLangCode(e.target.value)}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
`;

const SvgWrapper = styled.div`
	height: 24px;
	width: 24px;
	fill: #70757a;
	display: inline-block;
	position: relative;
	margin-right: 20px;
	margin-top: 5px;
`;
