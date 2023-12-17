//node/libs
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
//types
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
//custom
import { BuildOptions } from "./types/config";

const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name][contenthash:8].css',
            chunkFilename: 'css/[name][contenthash:8].css'
        })
    ]
}

export default buildPlugins;