import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Link } from '@components/navigation';

import { Route } from '@enums';

@Component({
	selector: 'ctf-auth-switch',
	imports: [Link],
	templateUrl: './authSwitch.component.html',
	styleUrl: './authSwitch.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSwitch {
	protected readonly loginUrl: string = `/${Route.LOGIN}`;
}
