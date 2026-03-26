import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from '@configs';

import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
