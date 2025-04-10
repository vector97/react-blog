import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): Configuration {
    return {
        historyApiFallback: true,
        hot: true,
        open: true,
        port: options.port,
    };
}
