interface BaseConfig {
    port: number;
}
export interface Config extends BaseConfig {
    dev?: BaseConfig;
}
export declare function InitConfig(config: Config): Config;
export {};
