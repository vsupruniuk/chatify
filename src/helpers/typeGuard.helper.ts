import { StatusChangeEvent } from '@angular/forms';

export class TypeGuardHelper {
	public static isStatusChangeEvent(value: unknown): value is StatusChangeEvent {
		return value instanceof StatusChangeEvent;
	}
}
