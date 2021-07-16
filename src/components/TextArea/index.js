import styled from 'styled-components';
import constants from '../../container/LanguagesSelector/constants'

export default function TextArea({ isTarget, translation, onChange }) {

	const {SRC_LANG, TRGT_LANG} = constants

	return (
		<TextAreaWrapper
			aria-label="text"
			isTarget={isTarget}
			rows="4"
			cols="50"
			disabled={isTarget ? true : false}
			placeholder={!isTarget ? 'Start Typing...' : ''}
			defaultValue={translation ? translation : ''}
			onChange={onChange && onChange}
			data-testid={isTarget ? TRGT_LANG + '-textarea' : SRC_LANG + '-textarea'}
		/>
	);
}

const TextAreaWrapper = styled.textarea`
	margin-top: 20px;
	border-radius: 8px;
	width: 100%;
	max-width: 330px;
	margin-right: 10px;
	padding: 10px;
	font-size: 24px;
	background-color: ${(props) => (props.isTarget ? '#f8f9fa' : '')};
`;
