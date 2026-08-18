import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { svgConfig } from '@configs';

import { Color } from '@enums';

@Component({
	selector: 'ctf-icon-lock',
	templateUrl: './iconLock.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLock {
	public readonly height: InputSignal<number> = input<number>(svgConfig.lock.defaultHeigh);
	public readonly width: InputSignal<number> = input<number>(svgConfig.lock.defaultWidth);
	public readonly color: InputSignal<Color> = input<Color>(svgConfig.lock.defaultColor);
}
