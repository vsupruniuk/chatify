import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	inject,
	OnInit,
	signal,
	WritableSignal,
} from '@angular/core';
import {
	FormBuilder,
	FormControl,
	ReactiveFormsModule,
	StatusChangeEvent,
	Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { TextInput } from '@components/inputs';
import { PrimaryButton } from '@components/buttons';

import { AuthTypes, IconsTypes, InputsTypes } from '@customTypes';

import { errorMessagesConfig, passwordConfig } from '@configs';

import { CustomValidators, TypeGuardHelper } from '@helpers';

@Component({
	selector: 'ctf-signup-form',
	imports: [TextInput, PrimaryButton, ReactiveFormsModule],
	templateUrl: './signupForm.component.html',
	styleUrl: './signupForm.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupForm implements OnInit {
	protected readonly errorMessages: WritableSignal<
		InputsTypes.TErrorMessages<Partial<AuthTypes.IAuthRequest>>
	> = signal<InputsTypes.TErrorMessages<Partial<AuthTypes.IAuthRequest>>>({});

	protected readonly passwordInputType: WritableSignal<InputsTypes.TTextInputType> =
		signal<InputsTypes.TTextInputType>('password');
	protected readonly passwordConfirmationInputType: WritableSignal<InputsTypes.TTextInputType> =
		signal<InputsTypes.TTextInputType>('password');

	protected readonly isRequestLoading: WritableSignal<boolean> = signal<boolean>(false);

	private readonly _formBuilder: FormBuilder = inject(FormBuilder);
	private readonly _destroyRef: DestroyRef = inject(DestroyRef);

	protected readonly signupForm = this._formBuilder.nonNullable.group({
		firstName: ['', [Validators.required, Validators.minLength(3)]],
		lastName: ['', [Validators.minLength(3)]],
		nickname: ['', [Validators.required, Validators.minLength(3)]],
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.pattern(passwordConfig.validationRegExp)]],
		passwordConfirmation: [
			'',
			[Validators.required, CustomValidators.shouldMatchToField('password')],
		],
	});

	protected validateField(fieldName: AuthTypes.TAuthRequestFields): void {
		const control: FormControl = this.signupForm.controls[fieldName];

		const isFieldRequired: boolean = control.hasValidator(Validators.required);
		const hasValue: boolean = Boolean(control.value);
		const hasControlError: boolean = Boolean(this.errorMessages()[fieldName]);

		const shouldAddFieldError: boolean =
			control.invalid && !hasControlError && (isFieldRequired || hasValue);

		if (shouldAddFieldError) {
			this.errorMessages.update(
				(currentValue: InputsTypes.TErrorMessages<Partial<AuthTypes.IAuthRequest>>) => {
					return {
						...currentValue,
						[fieldName]: errorMessagesConfig.signupForm[fieldName],
					};
				},
			);
		}
	}

	protected getFieldError(fieldName: AuthTypes.TAuthRequestFields): string {
		return this.errorMessages()[fieldName] ?? '';
	}

	protected getIsSubmitDisabled(): boolean {
		return this.signupForm.invalid || this.isRequestLoading();
	}

	protected getButtonText(): string {
		return this.isRequestLoading() ? 'Creating your account...' : 'Create Account';
	}

	protected getRightIconName(fieldName: AuthTypes.TAuthRequestFields): IconsTypes.TIconName | null {
		const control: FormControl = this.signupForm.controls[fieldName];

		if (control.valid && control.dirty) {
			return 'checkMark';
		}

		return null;
	}

	protected getPasswordRightIconName(
		fieldName: AuthTypes.TAuthPasswordRequestField,
	): IconsTypes.TIconName {
		if (fieldName === 'password') {
			if (this.passwordInputType() === 'password') {
				return 'eye';
			}

			return 'eyeCrossed';
		}

		if (this.passwordConfirmationInputType() === 'password') {
			return 'eye';
		}

		return 'eyeCrossed';
	}

	protected changePasswordInputType(fieldName: AuthTypes.TAuthPasswordRequestField): void {
		if (fieldName === 'password') {
			this.passwordInputType.update((currentValue: InputsTypes.TTextInputType) =>
				currentValue === 'password' ? 'email' : 'password',
			);
		} else {
			this.passwordConfirmationInputType.update((currentValue: InputsTypes.TTextInputType) =>
				currentValue === 'password' ? 'email' : 'password',
			);
		}
	}

	protected clearFieldErrorIfValid(
		fieldName: AuthTypes.TAuthRequestFields,
		event: StatusChangeEvent,
	): void {
		const errorsCopy = new Map(Object.entries(this.errorMessages()));

		const hasError: boolean = errorsCopy.has(fieldName);

		if (event.status === 'VALID' && hasError) {
			errorsCopy.delete(fieldName);

			this.errorMessages.set(Object.fromEntries(errorsCopy));
		}
	}

	protected signup(event: SubmitEvent): void {
		event.preventDefault();

		this.isRequestLoading.set(true);
		this.signupForm.disable();
	}

	public ngOnInit(): void {
		const controlsEntries = Object.entries(this.signupForm.controls);

		for (const entry of controlsEntries) {
			const [name, control] = entry as [AuthTypes.TAuthRequestFields, FormControl];

			control.events.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((event) => {
				if (TypeGuardHelper.isStatusChangeEvent(event)) {
					this.clearFieldErrorIfValid(name, event);
				}
			});
		}
	}
}
