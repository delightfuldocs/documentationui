import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import path from "path/posix";

const { LERNA_ROOT_PATH, LERNA_PACKAGE_NAME } = process.env;

const DIST_DIR = path.join(LERNA_ROOT_PATH, "lib", LERNA_PACKAGE_NAME);

export default {
  input: "src/index.tsx",
  output: [
    {
      file: path.join(DIST_DIR, "index.js"),
      format: "cjs",
      sourcemap: true,
    },
    {
      file: path.join(DIST_DIR, "index.esm.js"),
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
  ],
  external: ["react", "react-dom"],
};
