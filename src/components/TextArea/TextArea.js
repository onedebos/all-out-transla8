import styled from 'styled-components';

export default function TextArea({ isTarget, translation }) {
	return (
		<TextAreaWrapper
			isTarget={isTarget}
			rows="4"
			cols="50"
			disabled={isTarget ? true : false}
			placeholder={!isTarget ? 'Start Typing...' : ''}
		>
			{translation ? translation : ''}
		</TextAreaWrapper>
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
