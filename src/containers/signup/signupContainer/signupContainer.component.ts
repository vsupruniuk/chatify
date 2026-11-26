import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthSwitch, SignupForm } from '@containers/signup/components';
import { AdaptiveContainer } from '@components/layout';

@Component({
	selector: 'ctf-signup-container',
	imports: [SignupForm, AuthSwitch, AdaptiveContainer],
	templateUrl: './signupContainer.component.html',
	styleUrl: './signupContainer.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupContainer {}
