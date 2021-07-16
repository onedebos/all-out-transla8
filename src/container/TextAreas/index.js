import TextArea from '../../components/TextArea/TextArea';
import styled from 'styled-components';
import { useTranslatorSlice } from '../../utils/slices/translator/useTranslatorSlice';

export default function TextAreas() {

    const {dispatchSetSrcTxt, translation} = useTranslatorSlice()

	return (
		<TextAreaContainer>
			<TextAreasWrapper>
				<TextArea isTarget={false} onChange={ (e)=> dispatchSetSrcTxt(e.target.value)}  />
				<TextArea isTarget={true} translation={translation}  />
			</TextAreasWrapper>
			<HorizontalLine />
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
