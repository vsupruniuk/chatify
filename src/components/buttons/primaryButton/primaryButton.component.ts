import {
	ChangeDetectionStrategy,
	Component,
	input,
	InputSignal,
	output,
	OutputEmitterRef,
} from '@angular/core';

import { ButtonsTypes } from '@customTypes';

@Component({
	selector: 'ctf-primary-button',
	templateUrl: './primaryButton.component.html',
	styleUrl: './primaryButton.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButton {
	public readonly text: InputSignal<string> = input.required<string>();

	public readonly type: InputSignal<ButtonsTypes.TButtonType> =
		input<ButtonsTypes.TButtonType>('button');

	public readonly isDisabled: InputSignal<boolean> = input<boolean>(false);
	public readonly isLoading: InputSignal<boolean> = input<boolean>(false);

	public readonly clicked: OutputEmitterRef<PointerEvent> = output<PointerEvent>();
}
