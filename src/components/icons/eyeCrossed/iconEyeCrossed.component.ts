import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { svgConfig } from '@configs';

@Component({
	selector: 'ctf-icon-eye-crossed',
	templateUrl: './iconEyeCrossed.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEyeCrossed {
	public readonly height: InputSignal<number> = input<number>(svgConfig.eyeCrossed.defaultHeigh);
	public readonly width: InputSignal<number> = input<number>(svgConfig.eyeCrossed.defaultWidth);
}
