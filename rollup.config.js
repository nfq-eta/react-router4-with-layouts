import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postCss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    'react',
    'react-dom',
    'prop-types',
    'react-router-dom',
  ],
  plugins: [
    postCss({}),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
};
