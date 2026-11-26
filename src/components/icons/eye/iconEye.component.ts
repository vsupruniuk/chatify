import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { svgConfig } from '@configs';

@Component({
	selector: 'ctf-icon-eye',
	templateUrl: './iconEye.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEye {
	public readonly height: InputSignal<number> = input<number>(svgConfig.eye.defaultHeigh);
	public readonly width: InputSignal<number> = input<number>(svgConfig.eye.defaultWidth);
}
