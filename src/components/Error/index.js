import styled from 'styled-components';

export default function Error({ error }) {
	return <ErrorStyles aria-label="error-text" data-testid="error-msg">{error}</ErrorStyles>;
}

const ErrorStyles = styled.p`
	color: #ddd;
	margin-top: 10px;
`;
