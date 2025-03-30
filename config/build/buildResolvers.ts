import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        alias: {
            "@app/*": `${options.paths.src}/app/*`,
            "@pages/*": `${options.paths.src}/pages/*`,
            "@widgets/*": `${options.paths.src}/widgets/*`,
            "@features/*": `${options.paths.src}/features/*`,
            "@entities/*": `${options.paths.src}/entities/*`,
            "@shared/*": `${options.paths.src}/shared/*`,
        },
        extensions: [".tsx", ".ts", ".js"],
        mainFiles: ["index"],
        modules: [options.paths.src, "node_modules"],
        preferAbsolute: true,
    };
}
