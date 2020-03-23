// config used by dashboard client side only
module.exports = {
	// dashboard UI language
	language: process.env.LANGUAGE || 'en',
	apiBaseUrl:
		process.env.API_BASE_URL || 'https://api.demo.store.cyborgstech.com/api/v1',
	apiWebSocketUrl: process.env.API_WEB_SOCKET_URL || 'ws://89.40.12.209:8020',
	developerMode: process.env.DEVELOPER_MODE || true
};
