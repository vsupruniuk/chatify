import { isDevMode } from '@angular/core';
import { StoreDevtoolsOptions } from '@ngrx/store-devtools';

export const storeDevtoolsConfig: StoreDevtoolsOptions = {
	maxAge: 50,
	logOnly: !isDevMode(),
} as const;
