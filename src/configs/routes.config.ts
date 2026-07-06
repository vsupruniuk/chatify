import { Routes } from '@angular/router';

import { PageTitle, Route } from '@enums';

export const routesConfig: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: Route.SIGNUP,
	},
	{
		path: Route.SIGNUP,
		title: PageTitle.SIGNUP,
		loadComponent: async () => {
			const module = await import('@pages/signup/signupPage.component');

			return module.SignupPage;
		},
	},
	{
		path: Route.LOGIN,
		title: PageTitle.LOGIN,
		loadComponent: async () => {
			const module = await import('@pages/login/loginPage.component');

			return module.LoginPage;
		},
	},
] as const;
