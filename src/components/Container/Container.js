import styled from 'styled-components';

export default function Container({ children }) {
	return <ContainerStyles>{children}</ContainerStyles>;
}

const ContainerStyles = styled.div`
	max-width: 80%;
	margin: 0 auto;
`;
