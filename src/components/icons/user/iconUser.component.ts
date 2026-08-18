import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { svgConfig } from '@configs';

import { Color } from '@enums';

@Component({
	selector: 'ctf-icon-user',
	templateUrl: './iconUser.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUser {
	public readonly height: InputSignal<number> = input<number>(svgConfig.user.defaultHeigh);
	public readonly width: InputSignal<number> = input<number>(svgConfig.user.defaultWidth);
	public readonly color: InputSignal<Color> = input<Color>(svgConfig.user.defaultColor);
}
