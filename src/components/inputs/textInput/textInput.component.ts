import {
	ChangeDetectionStrategy,
	Component,
	computed,
	input,
	InputSignal,
	output,
	OutputEmitterRef,
	Signal,
	Type,
} from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { inputIconsConfig } from '@configs';

import { Color } from '@enums';

import { IconExclamationMark } from '@components/icons';

import { IconsTypes, InputsTypes } from '@customTypes';

@Component({
	selector: 'ctf-text-input',
	imports: [NgComponentOutlet, IconExclamationMark, ReactiveFormsModule],
	templateUrl: './textInput.component.html',
	styleUrl: './textInput.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInput {
	public readonly inputId: InputSignal<string> = input.required<string>();
	public readonly name: InputSignal<string> = input.required<string>();
	public readonly placeholder: InputSignal<string> = input.required<string>();
	public readonly formControlInstance: InputSignal<FormControl<string>> =
		input.required<FormControl<string>>();

	public readonly label: InputSignal<string> = input<string>('');
	public readonly errorMessage: InputSignal<string> = input<string>('');
	public readonly maxlength: InputSignal<number | null> = input<number | null>(null);
	public readonly type: InputSignal<InputsTypes.TTextInputType> =
		input<InputsTypes.TTextInputType>('text');
	public readonly autocomplete: InputSignal<InputsTypes.TAutocomplete> =
		input<InputsTypes.TAutocomplete>('off');

	public readonly isValid: InputSignal<boolean> = input<boolean>(false);
	public readonly isDisabled: InputSignal<boolean> = input<boolean>(false);
	public readonly isRequired: InputSignal<boolean> = input<boolean>(false);
	public readonly isRightIconClickable: InputSignal<boolean> = input<boolean>(false);
	public readonly disableCopyAndPaste: InputSignal<boolean> = input<boolean>(false);

	public readonly leftIconName: InputSignal<IconsTypes.TIconName | null> =
		input<IconsTypes.TIconName | null>(null);
	public readonly rightIconName: InputSignal<IconsTypes.TIconName | null> =
		input<IconsTypes.TIconName | null>(null);

	public readonly rightIconClicked: OutputEmitterRef<PointerEvent> = output<PointerEvent>();
	public readonly blurred: OutputEmitterRef<FocusEvent> = output<FocusEvent>();

	protected readonly requirementLabel: Signal<string> = computed<string>(() =>
		this.isRequired() ? '*' : '(Optional)',
	);

	protected readonly hasError: Signal<boolean> = computed<boolean>(() =>
		Boolean(this.errorMessage()),
	);
	protected readonly hasLeftIcon: Signal<boolean> = computed<boolean>(() =>
		Boolean(this.leftIconName()),
	);
	protected readonly hasRightIcon: Signal<boolean> = computed<boolean>(() =>
		Boolean(this.rightIconName()),
	);

	protected readonly leftIcon: Signal<Type<unknown> | null> = computed<Type<unknown> | null>(() => {
		const iconName: IconsTypes.TIconName | null = this.leftIconName();

		if (!iconName) {
			return null;
		}

		return inputIconsConfig[iconName];
	});

	protected readonly rightIcon: Signal<Type<unknown> | null> = computed<Type<unknown> | null>(
		() => {
			const iconName: IconsTypes.TIconName | null = this.rightIconName();

			if (!iconName) {
				return null;
			}

			return inputIconsConfig[iconName];
		},
	);

	protected readonly leftIconInputs: Signal<Record<string, unknown>> = computed<
		Record<string, unknown>
	>(() => {
		const inputs = {
			width: 14,
			height: 14,
			color: Color.TEXT_FAINT,
		};

		if (this.isValid()) {
			inputs.color = Color.ACCENT;
		}

		if (this.hasError()) {
			inputs.color = Color.ERROR_LIGHT;
		}

		return inputs;
	});

	protected readonly rightIconInputs: Record<string, unknown> = {
		width: 14,
		height: 14,
	};

	protected preventCopyAndPaste(event: ClipboardEvent): void {
		if (this.disableCopyAndPaste()) {
			event.preventDefault();
		}
	}
}
