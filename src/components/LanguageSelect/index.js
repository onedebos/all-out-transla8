import styled from 'styled-components';

export default function LanguageSelect({ langType, langOptions, onChange }) {
	return (
		<SelectWrapper>
			<LanguageSelectStyle aria-label="select-language" name={langType} data-testid={langType} onChange={onChange}>
				{langOptions.map((srcLang, index) => (
					<LangStyleOption data-testid={langType + '-option'} key={index} value={srcLang.langCode}>
						{srcLang.lang}
					</LangStyleOption>
				))}
			</LanguageSelectStyle>
		</SelectWrapper>
	);
}

const SelectWrapper = styled.div`
	position: relative;
	max-width: 300px;
	margin-right: 20px;

	&::after {
		content: '▼';
		font-size: 1rem;
		top: 9px;
		right: 15px;
		position: absolute;
		color: #1a73e8;
	}
`;

const LanguageSelectStyle = styled.select`
	border: 1px solid #dfe1e5;
	color: #1a73e8;
	border-radius: 8px;
	padding-left: 18px;
	height: 40px;
	font-size: 14px;
	width: 300px;
	-webkit-appearance: none;
	appearance: none;
`;

const LangStyleOption = styled.option``;
