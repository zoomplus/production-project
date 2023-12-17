//node/libs
import path from "path";
//types
import { Configuration } from "webpack";
import { BuildEnv } from "./config/build/types/config";
//custom
import buildWebpackConfig from "./config/build/buildWebpackConfig";

export default ({ mode, port }: BuildEnv): Configuration => {
    return buildWebpackConfig({
        port: port || 3000,
        mode: mode || 'development',
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
        },
    });
};