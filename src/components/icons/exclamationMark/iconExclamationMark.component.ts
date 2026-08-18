import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { svgConfig } from '@configs';

@Component({
	selector: 'ctf-icon-exclamation-mark',
	templateUrl: './iconExclamationMark.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconExclamationMark {
	public readonly height: InputSignal<number> = input<number>(
		svgConfig.exclamationMark.defaultHeigh,
	);
	public readonly width: InputSignal<number> = input<number>(
		svgConfig.exclamationMark.defaultWidth,
	);
}
