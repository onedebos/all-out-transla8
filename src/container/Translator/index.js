import TextArea from '../../components/TextArea/';
import styled from 'styled-components';
import { useTranslatorSlice } from '../../utils/slices/translator/useTranslatorSlice';
import Button from '../../components/Button';
import Error from '../../components/Error';
import constants from './constants';

export default function Translator() {
	const { dispatchSetSrcTxt, srcText, translation, dispatchGetTranslation, targetLangCode, error, dispatchSetError } =
		useTranslatorSlice();
	const { NO_SRC_TEXT_ERR, NO_TRGT_LANG_ERR } = constants;

	const getTranslation = () => {
		dispatchSetError('');
		if (!srcText) return dispatchSetError(NO_SRC_TEXT_ERR);
		if (!targetLangCode) return dispatchSetError(NO_TRGT_LANG_ERR);
		dispatchGetTranslation(srcText, targetLangCode);
	};

	return (
		<TextAreaContainer>
			<TextAreasWrapper>
				<TextArea isTarget={false} onChange={(e) => dispatchSetSrcTxt(e.target.value)} />
				<TextArea isTarget={true} translation={translation} />
			</TextAreasWrapper>
			<Error error={error && error} />
			<HorizontalLine />
			<Button onClick={getTranslation} />
		</TextAreaContainer>
	);
}

const TextAreasWrapper = styled.div`
	display: flex;
	position: relative;
`;

const HorizontalLine = styled.div`
	height: 1px;
	width: 100%;
	margin: 20px 0;
	max-width: 670px;
	background-color: #ddd;
	display: block;
`;

const TextAreaContainer = styled.div``;
