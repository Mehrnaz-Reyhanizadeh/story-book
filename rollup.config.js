import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/components/Button/Button.tsx", // Update with your component's entry point
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [typescript(), resolve(), commonjs()],
  external: ["react", "react-dom"], // Add any external dependencies here
};
