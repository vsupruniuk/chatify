import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { svgConfig } from '@configs';

@Component({
	selector: 'ctf-icon-check-mark',
	templateUrl: './iconCheckMark.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCheckMark {
	public readonly height: InputSignal<number> = input<number>(svgConfig.checkMark.defaultHeigh);
	public readonly width: InputSignal<number> = input<number>(svgConfig.checkMark.defaultWidth);
}
