import { TypeGuardHelper } from '@helpers';

import { ApiResponseStatus } from '@enums';
import { GlobalTypes } from '@customTypes';

describe('Type guard', (): void => {
	beforeEach((): void => {
		jest.spyOn(TypeGuardHelper, 'isApiResponseStatus').mockReturnValue(true);
		jest.spyOn(TypeGuardHelper, 'isFieldApiError').mockReturnValue(true);
	});

	afterEach((): void => {
		jest.restoreAllMocks();
	});

	describe('Is api error', (): void => {
		it('should return false if value is falsy', (): void => {
			const value: null = null;

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(false);
		});

		it('should return false if value is not an object', (): void => {
			const value: number = 123;

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(false);
		});

		it('should return false if value does not have a status field', (): void => {
			const value: object = {};

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(false);
		});

		it('should return false if status in value is not an api response status', (): void => {
			jest.spyOn(TypeGuardHelper, 'isApiResponseStatus').mockReturnValue(false);

			const value: object = { status: 'Unknown' };

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(false);
		});

		it('should return false if value does not have a message field', (): void => {
			const value: object = { status: ApiResponseStatus.SUCCESS };

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(false);
		});

		it('should return false if message in value is not a string', (): void => {
			const value: object = { status: ApiResponseStatus.SUCCESS, message: 123 };

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(false);
		});

		it('should return false if value does not have errors field', (): void => {
			const value: object = { status: ApiResponseStatus.SUCCESS, message: 'Validation error' };

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(false);
		});

		it('should return false if errors in value is not an array', (): void => {
			const value: object = {
				status: ApiResponseStatus.SUCCESS,
				message: 'Validation error',
				errors: 'Invalid errors field',
			};

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(false);
		});

		it('should return false if at least one member of errors field in value is not a field api error', (): void => {
			jest
				.spyOn(TypeGuardHelper, 'isFieldApiError')
				.mockReturnValueOnce(false)
				.mockReturnValue(true);

			const value: object = {
				status: ApiResponseStatus.SUCCESS,
				message: 'Validation error',
				errors: [
					{ field: 'email', message: 123 },
					{ field: 'nickname', message: 'This nickname is already taken' },
				],
			};

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(false);
		});

		it('should return true if value is valid api error', (): void => {
			const value: GlobalTypes.IApiError = {
				status: ApiResponseStatus.SUCCESS,
				message: 'Validation error',
				errors: [
					{ field: 'email', message: 'Must be a valid email' },
					{ field: 'nickname', message: 'This nickname is already taken' },
				],
			};

			const isApiError: boolean = TypeGuardHelper.isApiError(value);

			expect(isApiError).toBe(true);
		});
	});
});
