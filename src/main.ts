import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from '@configs';

import { AppComponent } from './app.component';

try {
	await bootstrapApplication(AppComponent, appConfig);
} catch (error: unknown) {
	console.error(error);
}
