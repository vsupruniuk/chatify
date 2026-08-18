import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { svgConfig } from '@configs';

import { Color } from '@enums';

@Component({
	selector: 'ctf-icon-mail',
	templateUrl: './iconMail.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMail {
	public readonly height: InputSignal<number> = input<number>(svgConfig.mail.defaultHeigh);
	public readonly width: InputSignal<number> = input<number>(svgConfig.mail.defaultWidth);
	public readonly color: InputSignal<Color> = input<Color>(svgConfig.mail.defaultColor);
}
