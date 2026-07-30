import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ctf-signup-form',
	imports: [],
	templateUrl: './signupForm.component.html',
	styleUrl: './signupForm.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupForm {}
