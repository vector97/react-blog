import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import type { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const mode = env.mode || "development";

    const port = env.port || 3000;

    const isDev = mode === "development";

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
    });
};
