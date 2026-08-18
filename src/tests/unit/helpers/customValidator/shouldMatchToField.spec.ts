import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

import { CustomValidator } from '@helpers';

describe('Custom validator helper', (): void => {
	describe('Should match to field', (): void => {
		const formGroup = new FormGroup({
			password: new FormControl(''),
			passwordConfirmation: new FormControl(''),
		});

		it('should return null if form control for target form field does not exist', (): void => {
			const validator: ValidatorFn = CustomValidator.shouldMatchToField('firstName');

			const validationResult: ValidationErrors | null = validator(
				formGroup.controls.passwordConfirmation,
			);

			expect(validationResult).toBeNull();
		});

		it('should return null if current field control value and target field control value are matching', (): void => {
			const password: string = 'Qwerty12345!';

			formGroup.controls.password.setValue(password);
			formGroup.controls.passwordConfirmation.setValue(password);

			const validator: ValidatorFn = CustomValidator.shouldMatchToField('password');

			const validationResult: ValidationErrors | null = validator(
				formGroup.controls.passwordConfirmation,
			);

			expect(validationResult).toBeNull();
		});

		it('should return validation error object if current field control value and target field control value are not matching', (): void => {
			const password: string = 'Qwerty12345!';
			const passwordConfirmation: string = 'Qwerty12';

			formGroup.controls.password.setValue(password);
			formGroup.controls.passwordConfirmation.setValue(passwordConfirmation);

			const validator: ValidatorFn = CustomValidator.shouldMatchToField('password');

			const validationResult: ValidationErrors | null = validator(
				formGroup.controls.passwordConfirmation,
			);

			const expectedErrors: ValidationErrors = {
				shouldMatchToField: {
					currentFieldValue: passwordConfirmation,
					targetFieldValue: password,
				},
			};

			expect(validationResult).toEqual(expectedErrors);
		});
	});
});
