import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconAppLogo } from '@components/icons';

@Component({
	selector: 'ctf-auth-header',
	imports: [IconAppLogo],
	templateUrl: './authHeader.component.html',
	styleUrl: './authHeader.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthHeader {}
