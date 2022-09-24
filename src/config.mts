import _ from 'lodash';

interface BaseConfig {
	port: number;
}

export interface Config extends BaseConfig {
	dev?: BaseConfig;
}

export function InitConfig(config: Config) {
	if(config.dev) {
		const dev = config.dev;
		delete config.dev;
		const isDev = process.argv.includes('--dev');
		if(isDev)
			_.assign(config, dev);
	}

	return config;
}