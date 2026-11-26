export declare namespace AuthTypes {
	interface IAuthRequest {
		email: string;
		firstName: string;
		lastName?: string;
		nickname: string;
		password: string;
		passwordConfirmation: string;
	}

	type TAuthRequestFields = keyof IAuthRequest;

	type TAuthPasswordRequestField = Extract<TAuthRequestFields, 'password' | 'passwordConfirmation'>;
}
