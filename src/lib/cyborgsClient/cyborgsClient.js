import RestClientClient from './restClient';

export default class CyborgsApiClient extends RestClientClient {
	static authorizeWithEmailAndPassword = (baseUrl, email, password) => {
		const config = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		};
		return fetch(`${baseUrl}/authorizeWithEmailAndPassword`, config).then(
			RestClient.returnStatusAndJson
		);
	};
}
