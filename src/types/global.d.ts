import { ApiResponseStatus } from '@enums';

export declare namespace GlobalTypes {
	interface IBasicApiResponse {
		status: ApiResponseStatus;
	}

	interface IApiResponse<T = unknown> extends IBasicApiResponse {
		data: T;
	}

	interface IApiError extends IBasicApiResponse {
		message: string;
		errors: IFieldApiError[];
	}

	interface IFieldApiError {
		message: string;
		field: string | null;
	}
}
