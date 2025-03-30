import { Configuration } from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";
import type { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths, isDev } = options;

    return {
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? "inline-source-map" : undefined,
        entry: paths.entry,
        mode,
        module: {
            rules: buildLoaders(options),
        },
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
    };
}
