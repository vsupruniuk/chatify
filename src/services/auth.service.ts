import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { AuthTypes, GlobalTypes } from '@customTypes';

import { environment } from '@environments';

import { ApiEndpoint } from '@enums';

@Service()
export class AuthService {
	private readonly _httpClient: HttpClient = inject(HttpClient);

	private readonly API_URL: string = environment.apiUrl;

	public async signup(signupData: AuthTypes.IAuthRequest): Promise<GlobalTypes.IApiResponse<null>> {
		const url: string = `${this.API_URL}/${ApiEndpoint.SIGNUP}`;

		return await firstValueFrom(
			this._httpClient.post<GlobalTypes.IApiResponse<null>>(url, signupData),
		);
	}
}
