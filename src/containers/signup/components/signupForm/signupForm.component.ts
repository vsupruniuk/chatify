import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
	selector: 'ctf-signup-form',
	imports: [],
	templateUrl: './signupForm.component.html',
	styleUrl: './signupForm.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupForm {
	readonly firstName = signal('');

	changeFirstName(event: Event) {
		this.firstName.set((event.target as HTMLInputElement).value);
	}

	test(event: Event) {
		console.log(event);
	}
}
