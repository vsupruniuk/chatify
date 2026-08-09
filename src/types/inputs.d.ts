export declare namespace InputsTypes {
	type TTextInputType = 'text' | 'password' | 'email';

	type TAutocomplete = 'off' | 'given-name' | 'family-name' | 'username' | 'email';

	type TErrorMessages<T extends object> = {
		[K in keyof T]: string;
	};
}
