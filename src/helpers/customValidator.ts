import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class CustomValidator {
	public static shouldMatchToField(fieldName: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const fieldControl: AbstractControl | null = control.parent?.get(fieldName) ?? null;

			if (!fieldControl) {
				return null;
			}

			const currentFieldValue: unknown = control.value;
			const targetFieldValue: unknown = fieldControl.value;

			if (currentFieldValue === targetFieldValue) {
				return null;
			}

			return {
				shouldMatchToField: {
					currentFieldValue,
					targetFieldValue,
				},
			};
		};
	}
}
