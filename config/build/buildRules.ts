//node/libs
import path from "path";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
//types
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
//custom

const buildRules = ({ mode }: BuildOptions): RuleSetRule[] => {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Вместо style-loader из-за бага при котором Safari не отображает source map
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        modules: {
                            auto: (resPath: string) => resPath.includes('.module.'),
                            localIdentName: mode === 'development' ? '[path]:[name]__[local]' : '[hash:base64:8]',
                        },
                    },
                },
                // Compiles Sass to CSS
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    },
                }
            ],
        },
    ];
};

export default buildRules;