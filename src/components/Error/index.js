import styled from 'styled-components';

export default function Error({ error }) {
	return <ErrorStyles aria-label="error-text" data-testid="error-msg">{error}</ErrorStyles>;
}

const ErrorStyles = styled.p`
	color: #827d7d;
	margin-top: 10px;
`;
