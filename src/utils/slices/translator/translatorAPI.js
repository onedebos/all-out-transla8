export default {
	post: async (text, targetLangCode) => {
		const data = {
			auth_key: process.env.NEXT_PUBLIC_AUTH_KEY,
			text,
			target_lang: targetLangCode,
		};

		const formBody = Object.keys(data)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');

		async function postData(url = 'https://api-free.deepl.com/v2/translate') {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formBody,
			});
			return response.json();
		}

		const translations = await postData().then((data) => data);
		return translations;
	},
};
