import { HttpErrorResponse } from '@angular/common/http';
import { StatusChangeEvent } from '@angular/forms';

import { GlobalTypes } from '@customTypes';

import { ApiResponseStatus } from '@enums';

export class TypeGuardHelper {
	public static isStatusChangeEvent(value: unknown): value is StatusChangeEvent {
		return value instanceof StatusChangeEvent;
	}

	public static isApiError(value: unknown): value is GlobalTypes.IApiError {
		if (!value || typeof value !== 'object') {
			return false;
		}

		const isApiResponseStatus: boolean =
			'status' in value && this.isApiResponseStatus(value.status);
		const isMessageIncluded: boolean = 'message' in value && typeof value.message === 'string';
		const isFieldApiErrors: boolean =
			'errors' in value && Array.isArray(value.errors) && value.errors.every(this.isFieldApiError);

		return isApiResponseStatus && isMessageIncluded && isFieldApiErrors;
	}

	public static isApiResponseStatus(value: unknown): value is ApiResponseStatus {
		return Object.values(ApiResponseStatus).includes(value as ApiResponseStatus);
	}

	public static isFieldApiError(value: unknown): value is GlobalTypes.IFieldApiError {
		if (!value || typeof value !== 'object') {
			return false;
		}

		const isMessageIncluded: boolean = 'message' in value && typeof value.message === 'string';
		const isFieldIncluded: boolean =
			'field' in value && (value.field === null || typeof value.field === 'string');

		return isMessageIncluded && isFieldIncluded;
	}

	public static isHttpErrorResponse(value: unknown): value is HttpErrorResponse {
		return value instanceof HttpErrorResponse;
	}
}
