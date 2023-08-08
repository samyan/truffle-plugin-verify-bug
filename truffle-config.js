const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'MNEMONIC_WORDS';

module.exports = {
	networks: {
		development: {
			host: 'localhost',
			port: 8545,
			network_id: '*', // Match any network id
			gas: 5000000,
		},
		sepolia: {
			provider: () => {
				return new HDWalletProvider(mnemonic, 'API_KEY');
			},
			network_id: 11155111,
			gas: 4000000,
		},
	},
	compilers: {
		solc: {
			version: '0.8.19',
			settings: {
				optimizer: {
					enabled: true,
					runs: 200,
				},
			},
		},
	},
	plugins: ['truffle-contract-size', 'truffle-plugin-verify'],
	api_keys: {
		etherscan: 'API_KEY',
		polygonscan: 'API_KEY',
	},
};
