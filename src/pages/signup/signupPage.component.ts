import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SignupContainer } from '@containers/signup';

@Component({
	selector: 'ctf-signup-page',
	imports: [SignupContainer],
	templateUrl: './signupPage.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage {}
