import { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets/index.js';

const config: Config = {
	...createCjsPreset(),
	rootDir: '.',
	roots: ['./src'],
	moduleNameMapper: {
		'@components/(.*)': '<rootDir>/src/components/$1',
		'@components': '<rootDir>/src/components/index',

		'@configs/(.*)': '<rootDir>/src/configs/$1',
		'@configs': '<rootDir>/src/configs/index',

		'@containers/(.*)': '<rootDir>/src/containers/$1',
		'@containers': '<rootDir>/src/containers/index',

		'@custom-types/(.*)': '<rootDir>/src/types/$1',
		'@custom-types': '<rootDir>/src/types/index',

		'@enums/(.*)': '<rootDir>/src/enums/$1',
		'@enums': '<rootDir>/src/enums/index',

		'@helpers/(.*)': '<rootDir>/src/helpers/$1',
		'@helpers': '<rootDir>/src/helpers/index',

		'@pages/(.*)': '<rootDir>/src/pages/$1',
		'@pages': '<rootDir>/src/pages/index',

		'@services/(.*)': '<rootDir>/src/services/$1',
		'@services': '<rootDir>/src/services/index',
	},
	verbose: true,
	testEnvironment: 'jsdom',
	moduleDirectories: ['node_modules', 'src', 'dist'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	collectCoverage: true,
	coverageProvider: 'v8',
	collectCoverageFrom: [
		'src/**/*.{ts,html,scss}',

		'!src/main.ts',
		'!src/index.html',
		'!src/**/*.d.ts',

		'!src/configs/**',
		'!src/enums/**',
		'!src/tests/**',
		'!src/types/**',
	],
	testMatch: ['<rootDir>/src/tests/unit/**/*.spec.ts'],
};

export default config;
