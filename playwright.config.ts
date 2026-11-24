import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './src/tests/e2e',
	fullyParallel: false,
	workers: 1,
	reporter: [
		[
			'html',
			{
				open: 'never',
				outputFolder: 'playwright-report',
			},
		],
	],
	timeout: 60_000,
	outputDir: 'playwright-results',
	use: {
		trace: 'off',
		baseURL: 'http://127.0.0.1:5052',
	},

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] },
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] },
		},
	],

	webServer: {
		command: 'npm run start:dev -- --host 127.0.0.1 --port 5052',
		url: 'http://127.0.0.1:5052',
		reuseExistingServer: false,
	},
});
