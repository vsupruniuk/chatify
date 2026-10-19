import { TypeGuardHelper } from '@helpers';

import { ApiResponseStatus } from '@enums';

describe('Type guard helper', (): void => {
	describe('Is api response ', (): void => {
		it('should return false if value is not an api response status', (): void => {
			const value: string = 'Unknown';

			const isApiResponseStatus: boolean = TypeGuardHelper.isApiResponseStatus(value);

			expect(isApiResponseStatus).toBe(false);
		});

		it('should return true if value is api response status', (): void => {
			const value: ApiResponseStatus = ApiResponseStatus.SUCCESS;

			const isApiResponseStatus: boolean = TypeGuardHelper.isApiResponseStatus(value);

			expect(isApiResponseStatus).toBe(true);
		});
	});
});
