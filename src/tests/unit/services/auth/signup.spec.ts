import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { IMockBuilderExtended, MockBuilder, ngMocks } from 'ng-mocks';
import { of, throwError } from 'rxjs';

import { AuthService } from '@services';

import { AuthTypes, GlobalTypes } from '@customTypes';

import { ApiEndpoint, ApiResponseStatus } from '@enums';

import { environment } from '@environments';

describe('Auth service', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(AuthService).mock(HttpClient);
	});

	describe('Signup', (): void => {
		let authService: AuthService;
		let httpClient: HttpClient;

		const signupUrl: string = `${environment.apiUrl}/${ApiEndpoint.SIGNUP}`;
		const apiResponse: GlobalTypes.IApiResponse<null> = {
			status: ApiResponseStatus.SUCCESS,
			data: null,
		};
		const apiError: HttpErrorResponse = new HttpErrorResponse({
			status: HttpStatusCode.BadRequest,
			url: signupUrl,
			error: {
				status: ApiResponseStatus.ERROR,
				message: 'Client error',
				errors: [{ field: 'email', message: 'Invalid email format' }],
			},
		});
		const signupData: AuthTypes.IAuthRequest = {
			firstName: 'Tony',
			lastName: 'Stark',
			email: 't.stark@avengers.com',
			nickname: 't.stark',
			password: 'Qwerty12345!',
			passwordConfirmation: 'Qwerty12345!',
		};

		beforeEach((): void => {
			authService = ngMocks.get(AuthService);
			httpClient = ngMocks.get(HttpClient);
		});

		afterEach((): void => {
			jest.clearAllMocks();
		});

		it('should call post method from http client', async (): Promise<void> => {
			jest.spyOn(httpClient, 'post').mockReturnValue(of(apiResponse));

			await authService.signup(signupData);

			expect(httpClient.post).toHaveBeenCalledTimes(1);
			expect(httpClient.post).toHaveBeenNthCalledWith(1, signupUrl, signupData);
		});

		it('should return successful response from http client', async (): Promise<void> => {
			jest.spyOn(httpClient, 'post').mockReturnValue(of(apiResponse));

			const response: GlobalTypes.IApiResponse<null> = await authService.signup(signupData);

			expect(response).toEqual(apiResponse);
		});

		it('should throw error if http client returned error', async (): Promise<void> => {
			jest.spyOn(httpClient, 'post').mockReturnValue(throwError(() => apiError));

			await expect(authService.signup(signupData)).rejects.toBe(apiError);
		});
	});
});
