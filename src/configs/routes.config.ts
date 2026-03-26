import { Routes } from '@angular/router';

import { PageTitle, Route } from '@enums';

import { HelloWorldPage } from '@pages';

export const routesConfig: Routes = [
	{
		path: Route.HELLO_WORLD,
		component: HelloWorldPage,
		title: PageTitle.HELLO_WORLD,
	},
];
