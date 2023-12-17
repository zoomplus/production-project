import {BuildOptions} from "./types/config";
import { Configuration } from "webpack";
import buildRules from "./buildRules";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import buildDevServer from "./buildDevServer";

const buildWebpackConfig = (options: BuildOptions): Configuration => {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        module: {
            rules: buildRules(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: options.mode === 'development' ? 'inline-source-map' : undefined,
        devServer: options.mode === 'development' ? buildDevServer(options) : undefined,
    }
}

export default buildWebpackConfig;