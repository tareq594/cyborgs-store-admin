// config used by dashboard client side only
module.exports = {
	// dashboard UI language
	language: process.env.LANGUAGE || 'شق',
	apiBaseUrl:
		process.env.API_BASE_URL || 'https://api.demo.store.cyborgstech.com/api/v1',
	apiWebSocketUrl:
		process.env.API_WEB_SOCKET_URL || 'wss://ws.demo.store.cyborgstech.com',
	developerMode: process.env.DEVELOPER_MODE || true
};
