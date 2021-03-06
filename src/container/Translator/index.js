import TextArea from '../../components/TextArea/';
import styled from 'styled-components';
import { useTranslatorSlice } from '../../utils/slices/translator/useTranslatorSlice';
import Button from '../../components/Button';
import Error from '../../components/Error';
import constants from './constants';

export default function Translator() {
	const { dispatchSetSrcTxt, srcText, translation, dispatchGetTranslation, targetLangCode, error, dispatchSetError,loading, swapTargets } =
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
			<TextAreasWrapper swapTargets={swapTargets} data-testid="textareas-wrapper">
				<TextArea isTarget={false} onChange={(e) => dispatchSetSrcTxt(e.target.value)} />
				<TextArea isTarget={true} translation={!loading ? translation : "Translating..."} />
			</TextAreasWrapper>
			<Error error={error && error} />
			<HorizontalLine />
			<Button loading={loading} onClick={getTranslation} />
		</TextAreaContainer>
	);
}

const TextAreasWrapper = styled.div`
	display: flex;
	position: relative;
	flex-direction: ${(props) => (props.swapTargets ? 'row-reverse' : 'row')};
	justify-content: ${(props) => (props.swapTargets ? 'flex-end' : 'normal')};
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
