import { BuildOptions } from "./types/config";
import { Configuration } from "webpack-dev-server";

const buildDevServer = ({ port }: BuildOptions): Configuration => {
    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}

export default buildDevServer;