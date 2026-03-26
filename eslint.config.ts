import * as js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import unicornPlugin from 'eslint-plugin-unicorn';

export default defineConfig([
	{
		ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
	},

	{
		files: ['**/*.ts'],
		plugins: { js },
		extends: [
			js.configs.recommended,
			tseslint.configs.strict,
			tseslint.configs.stylistic,
			angular.configs.tsAll,
			prettierConfig,
		],
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
		processor: angular.processInlineTemplates,
		rules: {
			'prettier/prettier': 'error',
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'ctf',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'ctf',
					style: 'kebab-case',
				},
			],
		},
	},

	{
		files: ['**/*.html'],
		plugins: { prettier: prettierPlugin },
		extends: [angular.configs.templateAll, prettierConfig],
		rules: {
			'prettier/prettier': ['error', { parser: 'angular' }],
		},
	},

	{
		plugins: {
			prettier: prettierPlugin,
			unicorn: unicornPlugin,
		},
		rules: {
			'@angular-eslint/template/i18n': 'off',
			'@angular-eslint/template/no-call-expression': 'off',
			'@angular-eslint/component-class-suffix': 'off',

			'@typescript-eslint/no-extraneous-class': 'off',
		},
	},
]);
