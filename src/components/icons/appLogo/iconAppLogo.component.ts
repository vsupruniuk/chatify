import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { svgConfig } from '@configs';

@Component({
	selector: 'ctf-icon-app-logo',
	templateUrl: './iconAppLogo.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAppLogo {
	public readonly width: InputSignal<number> = input<number>(svgConfig.appLogo.defaultWidth);
	public readonly height: InputSignal<number> = input<number>(svgConfig.appLogo.defaultHeigh);
}
