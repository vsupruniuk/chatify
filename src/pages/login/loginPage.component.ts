import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ctf-login-page',
	templateUrl: './loginPage.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {}
