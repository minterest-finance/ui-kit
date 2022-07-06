import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import url from 'rollup-plugin-url'

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            url({
                // by default, rollup-plugin-url will not handle font files
                include: ['**/*.ttf', '**/*.svg'],
                // setting infinite limit will ensure that the files
                // are always bundled with the code, not copied to /dist
                limit: Infinity,
            }),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./module.tsconfig.json" }),
            postcss(),
            terser(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],

        // NEW
        external: [/\.scss$/, /\.css$/,  /\.svg$/,  /\.ttf/, ],
    },
];
