import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const packages = ['bus', 'fetch-imp', 'core']

export default packages.map((pkg) => ({
  input: `packages/request-${pkg}/src/index.ts`,
  output: [
    {
      file: `packages/request-${pkg}/dist/index.cjs.js`,
      format: 'cjs',
      sourcemap: false
    },
    {
      file: `packages/request-${pkg}/dist/index.esm.js`,
      format: 'esm',
      sourcemap: false
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: `packages/request-${pkg}/dist/types`,
      rootDir: `packages/request-${pkg}/src`
    }),
    terser(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    })
  ],
  external: []
}))
