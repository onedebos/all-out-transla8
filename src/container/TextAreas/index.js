import TextArea from '../../components/TextArea/TextArea';
import styled from 'styled-components';

export default function TextAreas() {
	return (
		<TextAreaContainer>
			<TextAreasWrapper>
				<TextArea isTarget={false} />
				<TextArea isTarget={true} />
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
