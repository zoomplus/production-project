//node/libs
//types
import { ResolveOptions } from 'webpack';
import { BuildOptions } from "./types/config";
//custom
const buildResolvers = ({}: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
}

export default buildResolvers;