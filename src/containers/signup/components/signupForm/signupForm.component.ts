import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ctf-signup-form',
	templateUrl: './signupForm.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupForm {}
