import copy from 'rollup-plugin-copy';
import typescript from 'rollup-plugin-typescript2';
import { dts } from 'rollup-plugin-dts';

export default [
	{
		input: 'src/Potree.js',
		treeshake: false,
		output: {
			file: 'dist/potree.js',
			format: 'umd',
			name: 'Potree',
			sourcemap: true,
		},
		plugins: [
			copy({
				targets: [
					// 复制的源文件夹及其所有子文件
					{ src: 'resources', dest: 'dist' },
					{ src: 'libs', dest: 'dist' },
				],
			}),
		]
	},
	{
		input: 'src/workers/BinaryDecoderWorker.js',
		output: {
			file: 'dist/workers/BinaryDecoderWorker.js',
			format: 'es',
			name: 'Potree',
			sourcemap: false
		}
	},
	{
		input: 'src/modules/loader/2.0/DecoderWorker.js',
		output: {
			file: 'dist/workers/2.0/DecoderWorker.js',
			format: 'es',
			name: 'Potree',
			sourcemap: false
		}
	},
	{
		input: 'src/modules/loader/2.0/DecoderWorker_brotli.js',
		output: {
			file: 'dist/workers/2.0/DecoderWorker_brotli.js',
			format: 'es',
			name: 'Potree',
			sourcemap: false
		}
	},
]