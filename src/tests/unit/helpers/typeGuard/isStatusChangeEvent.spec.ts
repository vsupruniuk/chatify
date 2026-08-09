import { FormControl, StatusChangeEvent } from '@angular/forms';

import { TypeGuardHelper } from '@helpers';

describe('Type guard helper', (): void => {
	describe('Is status changed event', (): void => {
		it('should return true if value is instance of status changed event', (): void => {
			const event: StatusChangeEvent = new StatusChangeEvent('VALID', new FormControl());

			const isInstance: boolean = TypeGuardHelper.isStatusChangeEvent(event);

			expect(isInstance).toBe(true);
		});

		it('should return false if value is not an instance of status changed event', (): void => {
			const event: Event = new Event('click');

			const isInstance: boolean = TypeGuardHelper.isStatusChangeEvent(event);

			expect(isInstance).toBe(false);
		});
	});
});
