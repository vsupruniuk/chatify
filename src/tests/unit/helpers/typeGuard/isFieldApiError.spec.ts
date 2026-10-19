import { TypeGuardHelper } from '@helpers';

describe('Type guard', (): void => {
	describe('Is field api error', (): void => {
		it('should return false if falsy value provided', (): void => {
			const value: null = null;

			const isFieldApiError: boolean = TypeGuardHelper.isFieldApiError(value);

			expect(isFieldApiError).toBe(false);
		});

		it('should return false if value is not an object', (): void => {
			const value: number = 12345;

			const isFieldApiError: boolean = TypeGuardHelper.isFieldApiError(value);

			expect(isFieldApiError).toBe(false);
		});

		it('should return false if message is not included in value', (): void => {
			const value: object = { field: 'email' };

			const isFieldApiError: boolean = TypeGuardHelper.isFieldApiError(value);

			expect(isFieldApiError).toBe(false);
		});

		it('should return false if message included in value but it is not a string', (): void => {
			const value: object = { message: 12345, field: 'email' };

			const isFieldApiError: boolean = TypeGuardHelper.isFieldApiError(value);

			expect(isFieldApiError).toBe(false);
		});

		it('should return false if field not included in value', (): void => {
			const value: object = { message: 'Invalid email' };

			const isFieldApiError: boolean = TypeGuardHelper.isFieldApiError(value);

			expect(isFieldApiError).toBe(false);
		});

		it('should return false if field included in value but it is not a null or a string', (): void => {
			const value: object = { message: 'Invalid email' };

			const isFieldApiError: boolean = TypeGuardHelper.isFieldApiError(value);

			expect(isFieldApiError).toBe(false);
		});

		it('should return true if message and field included in value and field is null', (): void => {
			const value: object = { message: 'Invalid email', field: null };

			const isFieldApiError: boolean = TypeGuardHelper.isFieldApiError(value);

			expect(isFieldApiError).toBe(true);
		});

		it('should return true if message and field included in value and field is a string', (): void => {
			const value: object = { message: 'Invalid email', field: 'email' };

			const isFieldApiError: boolean = TypeGuardHelper.isFieldApiError(value);

			expect(isFieldApiError).toBe(true);
		});
	});
});
