'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var copy = require('rollup-plugin-copy');
require('rollup-plugin-typescript2');
require('rollup-plugin-dts');

var rollup_config = [
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
					{ src: 'resources', dest: 'dist/potree' },
					{ src: 'libs', dest: 'dist/potree' },
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
];

exports.default = rollup_config;
