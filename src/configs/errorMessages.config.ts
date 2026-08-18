export const errorMessagesConfig = {
	signupForm: {
		firstName: 'Must be at least 3 characters long',
		lastName: 'Must be at least 3 characters long',
		email: 'Invalid email',
		nickname: 'Must be at least 3 characters long',
		password: 'Must be at least 6 characters long, contains 1 number and 1 uppercase character',
		passwordConfirmation: 'Must match to the password',
	},
} as const;
