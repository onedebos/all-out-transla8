export default {
	post: async (text, targetLang) => {
		const data = {
			auth_key: '5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx',
			text: text,
			target_lang: targetLang,
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
		return translations
	},
};
