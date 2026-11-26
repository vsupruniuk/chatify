import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routesConfig, hotToastConfig, storeConfig } from '@configs';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routesConfig),
		provideHttpClient(),
		provideHotToastConfig(hotToastConfig),
		provideStore(storeConfig),
		provideStoreDevtools(),
	],
} as const;
