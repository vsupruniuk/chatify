import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthHeader } from '@containers';
import { SignupContainer } from '@containers/signup';

@Component({
	selector: 'ctf-signup-page',
	imports: [SignupContainer, AuthHeader],
	templateUrl: './signupPage.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage {}
