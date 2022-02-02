import { Page } from "./Page";

export type Config = {
    baseUrl: string;
    cachePath: string;
    prefix: string;
    pages: Page[];
    configPath: string;
    authorizationToken: string;
};
