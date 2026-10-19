import { TypeGuardHelper } from '@helpers';
import { HttpErrorResponse } from '@angular/common/http';

describe('Type guard', (): void => {
	describe('Is http error response', (): void => {
		it('should return false if error is not an instance of http error response', (): void => {
			const value: Error = new Error('Unknown error');

			const isHttpErrorResponse: boolean = TypeGuardHelper.isHttpErrorResponse(value);

			expect(isHttpErrorResponse).toBe(false);
		});

		it('should return true if error is not an instance of http error response', (): void => {
			const value: Error = new HttpErrorResponse({ error: { message: 'Unknown error' } });

			const isHttpErrorResponse: boolean = TypeGuardHelper.isHttpErrorResponse(value);

			expect(isHttpErrorResponse).toBe(true);
		});
	});
});
