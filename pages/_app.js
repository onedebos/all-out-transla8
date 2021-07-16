import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux';
import store from '../src/utils/slices/store';
import HeadMeta from '../src/components/HeadMeta';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<HeadMeta />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;