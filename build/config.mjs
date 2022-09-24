import _ from 'lodash';
export function InitConfig(config) {
    if (config.dev) {
        const dev = config.dev;
        delete config.dev;
        const isDev = process.argv.includes('--dev');
        if (isDev)
            _.assign(config, dev);
    }
    return config;
}
