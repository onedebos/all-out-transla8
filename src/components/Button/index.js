import styled from 'styled-components';

export default function Button({ loading = false, onClick }) {
	return (
		<ButtonStyles onClick={onClick} loading={loading ? 1 : 0} data-testid="translate">
			{loading ? 'Translating....' : 'Translate'}
		</ButtonStyles>
	);
}

const ButtonStyles = styled.button`
	width: 150px;
	background-color: ${(props) => (props.loading ? 'rgb(66, 133, 244)' : '#ddd')};
	color:${(props) => (props.loading ? '#fff' : '#000')};
	padding: 10px 0;
	border-radius: 10px;
	font-weight: 600;
	text-align: center;
	transition: 0.3s;

	&:hover {
		background-color: rgb(66, 133, 244);
		color: #fff;
		transition: 0.3s;
	}
`;
