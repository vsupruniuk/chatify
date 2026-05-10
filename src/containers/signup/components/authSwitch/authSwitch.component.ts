import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ctf-auth-switch',
	templateUrl: './authSwitch.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSwitch {}
