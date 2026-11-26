import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { svgConfig } from '@configs';

import { Color } from '@enums';

@Component({
	selector: 'ctf-icon-at-sign',
	templateUrl: './iconAtSign.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAtSign {
	public readonly height: InputSignal<number> = input<number>(svgConfig.atSign.defaultHeigh);
	public readonly width: InputSignal<number> = input<number>(svgConfig.atSign.defaultWidth);
	public readonly color: InputSignal<Color> = input<Color>(svgConfig.atSign.defaultColor);
}
