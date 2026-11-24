import { expect, Locator, Page, test, Route as PlaywrightRoute, Request } from '@playwright/test';

import { ApiEndpoint, ApiResponseStatus, PageTitle, Route } from '@enums';

import { GlobalTypes, AuthTypes } from '@customTypes';

test.describe('Signup page', (): void => {
	test.beforeEach(async ({ page }): Promise<void> => {
		await page.goto(Route.SIGNUP);
	});

	const validRequestData: AuthTypes.IAuthRequest = {
		firstName: 'Tony',
		lastName: 'Stark',
		nickname: 't.stark',
		email: 't.stark@avengers.com',
		password: 'Qwerty12345!',
		passwordConfirmation: 'Qwerty12345!',
	};

	const getFieldInput = (page: Page, fieldName: string): Locator => {
		return page.getByTestId(`signup-form-${fieldName}-input`);
	};

	const getErrorMessage = (page: Page, fieldName: string): Locator => {
		return page.getByTestId(`signup-form-${fieldName}-error-message`);
	};

	const getRightIcon = (page: Page, fieldName: string): Locator => {
		return page.getByTestId(`signup-form-${fieldName}-right-icon`);
	};

	const fillField = async (page: Page, field: string, value: string): Promise<void> => {
		const input: Locator = getFieldInput(page, field);

		await input.fill(value);
		await input.blur();
	};

	const mockSignupSuccessfulResponse = async (page: Page): Promise<void> => {
		await page.route(`**/${ApiEndpoint.SIGNUP}`, async (route: PlaywrightRoute) => {
			await route.fulfill({
				status: 201,
				json: {
					status: ApiResponseStatus.SUCCESS,
					data: null,
				} as GlobalTypes.IApiResponse,
			});
		});
	};

	const mockSignupErrorResponse = async (
		page: Page,
		errors: GlobalTypes.IFieldApiError[],
	): Promise<void> => {
		await page.route(`**/${ApiEndpoint.SIGNUP}`, async (route: PlaywrightRoute) => {
			await route.fulfill({
				status: 409,
				json: {
					status: ApiResponseStatus.ERROR,
					message: 'Client error',
					errors,
				} as GlobalTypes.IApiError,
			});
		});
	};

	test('should have title signup', async ({ page }): Promise<void> => {
		await expect(page).toHaveTitle(PageTitle.SIGNUP);
	});

	test('should render empty required first name input with label, placeholder and max length 255', async ({
		page,
	}): Promise<void> => {
		const label: Locator = page.getByTestId('signup-form-first-name-label');
		const leftIcon: Locator = page.getByTestId('signup-form-first-name-left-icon');
		const input: Locator = getFieldInput(page, 'first-name');

		await expect(label).toBeVisible();
		await expect(label).toHaveText('First Name *');

		await expect(leftIcon).toBeVisible();

		await expect(input).toBeVisible();
		await expect(input).toBeEmpty();
		await expect(input).toHaveAttribute('type', 'text');
		await expect(input).toHaveAttribute('placeholder', 'Tony');
		await expect(input).toHaveAttribute('maxlength', '255');
	});

	test('should render empty optional last name input with label, placeholder and max length 255', async ({
		page,
	}): Promise<void> => {
		const label: Locator = page.getByTestId('signup-form-last-name-label');
		const leftIcon: Locator = page.getByTestId('signup-form-last-name-left-icon');
		const input: Locator = getFieldInput(page, 'last-name');

		await expect(label).toBeVisible();
		await expect(label).toHaveText('Last Name (Optional)');

		await expect(leftIcon).toBeVisible();

		await expect(input).toBeVisible();
		await expect(input).toBeEmpty();
		await expect(input).toHaveAttribute('type', 'text');
		await expect(input).toHaveAttribute('placeholder', 'Stark');
		await expect(input).toHaveAttribute('maxlength', '255');
	});

	test('should render empty required nickname input with label, placeholder and max length 255', async ({
		page,
	}): Promise<void> => {
		const label: Locator = page.getByTestId('signup-form-nickname-label');
		const leftIcon: Locator = page.getByTestId('signup-form-nickname-left-icon');
		const input: Locator = getFieldInput(page, 'nickname');

		await expect(label).toBeVisible();
		await expect(label).toHaveText('Nickname *');

		await expect(leftIcon).toBeVisible();

		await expect(input).toBeVisible();
		await expect(input).toBeEmpty();
		await expect(input).toHaveAttribute('type', 'text');
		await expect(input).toHaveAttribute('placeholder', 't.stark');
		await expect(input).toHaveAttribute('maxlength', '255');
	});

	test('should render empty required email input with label, placeholder and max length 255', async ({
		page,
	}): Promise<void> => {
		const label: Locator = page.getByTestId('signup-form-email-label');
		const leftIcon: Locator = page.getByTestId('signup-form-email-left-icon');
		const input: Locator = getFieldInput(page, 'email');

		await expect(label).toBeVisible();
		await expect(label).toHaveText('Email *');

		await expect(leftIcon).toBeVisible();

		await expect(input).toBeVisible();
		await expect(input).toBeEmpty();
		await expect(input).toHaveAttribute('type', 'email');
		await expect(input).toHaveAttribute('placeholder', 't.stark@avengers.com');
		await expect(input).toHaveAttribute('maxlength', '255');
	});

	test('should render empty required password input with label, placeholder, right icon and max length 255', async ({
		page,
	}): Promise<void> => {
		const label: Locator = page.getByTestId('signup-form-password-label');
		const leftIcon: Locator = page.getByTestId('signup-form-password-left-icon');
		const rightIcon: Locator = getRightIcon(page, 'password');
		const input: Locator = getFieldInput(page, 'password');

		await expect(label).toBeVisible();
		await expect(label).toHaveText('Password *');

		await expect(leftIcon).toBeVisible();

		await expect(rightIcon).toBeVisible();
		await expect(rightIcon).toHaveJSProperty('tagName', 'BUTTON');

		await expect(input).toBeVisible();
		await expect(input).toBeEmpty();
		await expect(input).toHaveAttribute('type', 'password');
		await expect(input).toHaveAttribute('placeholder', 'At least 6 characters');
		await expect(input).toHaveAttribute('maxlength', '255');
	});

	test('should render empty required password confirmation input with label, placeholder, right icon and max length 255', async ({
		page,
	}): Promise<void> => {
		const label: Locator = page.getByTestId('signup-form-password-confirmation-label');
		const leftIcon: Locator = page.getByTestId('signup-form-password-confirmation-left-icon');
		const rightIcon: Locator = getRightIcon(page, 'password-confirmation');
		const input: Locator = getFieldInput(page, 'password-confirmation');

		await expect(label).toBeVisible();
		await expect(label).toHaveText('Confirm password *');

		await expect(leftIcon).toBeVisible();

		await expect(rightIcon).toBeVisible();
		await expect(rightIcon).toHaveJSProperty('tagName', 'BUTTON');

		await expect(input).toBeVisible();
		await expect(input).toBeEmpty();
		await expect(input).toHaveAttribute('type', 'password');
		await expect(input).toHaveAttribute('placeholder', 'Repeat your password');
		await expect(input).toHaveAttribute('maxlength', '255');
	});

	test('should render disabled create account button', async ({ page }): Promise<void> => {
		const button: Locator = page.getByRole('button', { name: 'Create Account', exact: true });

		await expect(button).toBeVisible();
		await expect(button).toBeDisabled();
		await expect(button).toHaveAttribute('type', 'submit');
		await expect(button).toHaveAttribute('aria-disabled', 'true');
	});

	test('should render link to login page', async ({ page }): Promise<void> => {
		const link: Locator = page.getByRole('link', { name: 'Switch to login page', exact: true });

		await expect(link).toBeVisible();
		await expect(link).toHaveText('Log in');
		await expect(link).toHaveAttribute('href', `/${Route.LOGIN}`);
	});

	test('should redirect to login page after click on switch to login page link', async ({
		page,
	}): Promise<void> => {
		const link: Locator = page.getByRole('link', { name: 'Switch to login page', exact: true });

		await link.click();

		await expect(page).toHaveURL((url: URL): boolean => {
			return url.pathname.endsWith(`${Route.LOGIN}`);
		});
	});

	test('should change password field type from password to text and back on right icon click', async ({
		page,
	}): Promise<void> => {
		const rightIcon: Locator = getRightIcon(page, 'password');
		const input: Locator = getFieldInput(page, 'password');

		await rightIcon.click();

		await expect(input).toHaveAttribute('type', 'text');

		await rightIcon.click();

		await expect(input).toHaveAttribute('type', 'password');
	});

	test('should change password confirmation field type from password to text and back on right icon click', async ({
		page,
	}): Promise<void> => {
		const rightIcon: Locator = getRightIcon(page, 'password-confirmation');
		const input: Locator = getFieldInput(page, 'password-confirmation');

		await rightIcon.click();

		await expect(input).toHaveAttribute('type', 'text');

		await rightIcon.click();

		await expect(input).toHaveAttribute('type', 'password');
	});

	test('should display error message and mark first name field as invalid if field was left empty', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'first-name');
		const errorMessage: Locator = getErrorMessage(page, 'first-name');

		await input.focus();
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should not display error message and mark last name field as invalid if field was left empty', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'last-name');
		const errorMessage: Locator = getErrorMessage(page, 'last-name');

		await input.focus();
		await input.blur();

		await expect(input).not.toContainClass('error');
		await expect(errorMessage).not.toBeVisible();
	});

	test('should display error message and mark nickname field as invalid if field was left empty', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'nickname');
		const errorMessage: Locator = getErrorMessage(page, 'nickname');

		await input.focus();
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark email field as invalid if field was left empty', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'email');
		const errorMessage: Locator = getErrorMessage(page, 'email');

		await input.focus();
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark password field as invalid if field was left empty', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'password');
		const errorMessage: Locator = getErrorMessage(page, 'password');

		await input.focus();
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark password confirmation field as invalid if field was left empty', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'password-confirmation');
		const errorMessage: Locator = getErrorMessage(page, 'password-confirmation');

		await input.focus();
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark first name field as invalid if not valid value entered and field was left', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'first-name');
		const errorMessage: Locator = getErrorMessage(page, 'first-name');

		await input.fill('To');
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark last name field as invalid if not valid value entered and field was left', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'last-name');
		const errorMessage: Locator = getErrorMessage(page, 'last-name');

		await input.fill('St');
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark nickname field as invalid if not valid value entered and field was left', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'nickname');
		const errorMessage: Locator = getErrorMessage(page, 'nickname');

		await input.fill('st');
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark email field as invalid if not valid value entered and field was left', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'email');
		const errorMessage: Locator = getErrorMessage(page, 'email');

		await input.fill('t.stark');
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark password field as invalid if not valid value entered and field was left', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'password');
		const errorMessage: Locator = getErrorMessage(page, 'password');

		await input.fill('qwerty');
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark password confirmation field as invalid if not valid value entered and field was left', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'password-confirmation');
		const errorMessage: Locator = getErrorMessage(page, 'password-confirmation');

		await input.fill('qwerty');
		await input.blur();

		await expect(input).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should display error message and mark password confirmation field as invalid if it contains value different from password field', async ({
		page,
	}): Promise<void> => {
		const passwordConfirmationInput: Locator = getFieldInput(page, 'password-confirmation');
		const errorMessage: Locator = getErrorMessage(page, 'password-confirmation');

		await fillField(page, 'password', validRequestData.password);

		await passwordConfirmationInput.fill('Qwerty1234567890!');
		await passwordConfirmationInput.blur();

		await expect(passwordConfirmationInput).toContainClass('error');
		await expect(errorMessage).toBeVisible();
	});

	test('should mark first name field as valid if valid value entered', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'first-name');
		const errorMessage: Locator = getErrorMessage(page, 'first-name');
		const rightIcon: Locator = getRightIcon(page, 'first-name');

		await input.fill(validRequestData.firstName);
		await input.blur();

		await expect(input).toContainClass('valid');
		await expect(errorMessage).not.toBeVisible();
		await expect(rightIcon).toBeVisible();
	});

	test('should mark last name field as valid if valid value entered', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'last-name');
		const errorMessage: Locator = getErrorMessage(page, 'last-name');
		const rightIcon: Locator = getRightIcon(page, 'last-name');

		await input.fill(validRequestData.lastName as string);
		await input.blur();

		await expect(input).toContainClass('valid');
		await expect(errorMessage).not.toBeVisible();
		await expect(rightIcon).toBeVisible();
	});

	test('should mark nickname field as valid if valid value entered', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'nickname');
		const errorMessage: Locator = getErrorMessage(page, 'nickname');
		const rightIcon: Locator = getRightIcon(page, 'nickname');

		await input.fill(validRequestData.nickname);
		await input.blur();

		await expect(input).toContainClass('valid');
		await expect(errorMessage).not.toBeVisible();
		await expect(rightIcon).toBeVisible();
	});

	test('should mark email field as valid if valid value entered', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'email');
		const errorMessage: Locator = getErrorMessage(page, 'email');
		const rightIcon: Locator = getRightIcon(page, 'email');

		await input.fill(validRequestData.email);
		await input.blur();

		await expect(input).toContainClass('valid');
		await expect(errorMessage).not.toBeVisible();
		await expect(rightIcon).toBeVisible();
	});

	test('should mark password field as valid if valid value entered', async ({
		page,
	}): Promise<void> => {
		const input: Locator = getFieldInput(page, 'password');
		const errorMessage: Locator = getErrorMessage(page, 'password');
		const rightIcon: Locator = getRightIcon(page, 'password');

		await input.fill(validRequestData.password);
		await input.blur();

		await expect(input).toContainClass('valid');
		await expect(errorMessage).not.toBeVisible();
		await expect(rightIcon).toBeVisible();
	});

	test('should mark password confirmation field as valid if valid value that matches password field entered', async ({
		page,
	}): Promise<void> => {
		const passwordConfirmationInput: Locator = getFieldInput(page, 'password-confirmation');
		const errorMessage: Locator = getErrorMessage(page, 'password-confirmation');
		const rightIcon: Locator = getRightIcon(page, 'password-confirmation');

		await fillField(page, 'password', validRequestData.password);

		await passwordConfirmationInput.fill(validRequestData.passwordConfirmation);
		await passwordConfirmationInput.blur();

		await expect(passwordConfirmationInput).toContainClass('valid');
		await expect(errorMessage).not.toBeVisible();
		await expect(rightIcon).toBeVisible();
	});

	test('should enable create account button if all fields filled correctly', async ({
		page,
	}): Promise<void> => {
		const button: Locator = page.getByRole('button', { name: 'Create Account', exact: true });

		await fillField(page, 'first-name', validRequestData.firstName);
		await fillField(page, 'last-name', validRequestData.lastName as string);
		await fillField(page, 'nickname', validRequestData.nickname);
		await fillField(page, 'email', validRequestData.email);
		await fillField(page, 'password', validRequestData.password);
		await fillField(page, 'password-confirmation', validRequestData.passwordConfirmation);

		await expect(button).toBeVisible();
		await expect(button).toBeEnabled();
	});

	test('should enable create account button if all fields filled correctly and last name is empty', async ({
		page,
	}): Promise<void> => {
		const button: Locator = page.getByRole('button', { name: 'Create Account', exact: true });

		await fillField(page, 'first-name', validRequestData.firstName);
		await fillField(page, 'nickname', validRequestData.nickname);
		await fillField(page, 'email', validRequestData.email);
		await fillField(page, 'password', validRequestData.password);
		await fillField(page, 'password-confirmation', validRequestData.passwordConfirmation);

		await expect(button).toBeVisible();
		await expect(button).toBeEnabled();
	});

	test('should send a signup request on create account button click', async ({
		page,
	}): Promise<void> => {
		const button: Locator = page.getByRole('button', { name: 'Create Account', exact: true });

		await fillField(page, 'first-name', validRequestData.firstName);
		await fillField(page, 'last-name', validRequestData.lastName as string);
		await fillField(page, 'nickname', validRequestData.nickname);
		await fillField(page, 'email', validRequestData.email);
		await fillField(page, 'password', validRequestData.password);
		await fillField(page, 'password-confirmation', validRequestData.passwordConfirmation);

		await mockSignupSuccessfulResponse(page);

		const signupRequestPromise: Promise<Request> = page.waitForRequest(
			(request: Request): boolean => {
				return request.url().endsWith(`/${ApiEndpoint.SIGNUP}`);
			},
		);

		await button.click();

		const signupRequest = await signupRequestPromise;

		expect(signupRequest.method()).toBe('POST');
		expect(signupRequest.postDataJSON()).toEqual({
			firstName: validRequestData.firstName,
			lastName: validRequestData.lastName,
			nickname: validRequestData.nickname,
			email: validRequestData.email,
			password: validRequestData.password,
			passwordConfirmation: validRequestData.passwordConfirmation,
		});
	});

	test('should set field specific errors from API if request failed', async ({
		page,
	}): Promise<void> => {
		const button: Locator = page.getByRole('button', { name: 'Create Account', exact: true });

		await fillField(page, 'first-name', validRequestData.firstName);
		await fillField(page, 'last-name', validRequestData.lastName as string);
		await fillField(page, 'nickname', validRequestData.nickname);
		await fillField(page, 'email', validRequestData.email);
		await fillField(page, 'password', validRequestData.password);
		await fillField(page, 'password-confirmation', validRequestData.passwordConfirmation);

		const emailInput: Locator = getFieldInput(page, 'email');
		const emailErrorMessage: Locator = getErrorMessage(page, 'email');
		const nicknameInput: Locator = getFieldInput(page, 'nickname');
		const nicknameErrorMessage: Locator = getErrorMessage(page, 'nickname');

		const errors: GlobalTypes.IFieldApiError[] = [
			{
				field: 'email',
				message: 'This email is already taken',
			},
			{
				field: 'nickname',
				message: 'This nickname is already taken',
			},
		];

		await mockSignupErrorResponse(page, errors);

		const signupRequestPromise: Promise<Request> = page.waitForRequest(
			(request: Request): boolean => {
				return request.url().endsWith(`/${ApiEndpoint.SIGNUP}`);
			},
		);

		await button.click();

		await signupRequestPromise;

		await expect(emailInput).toContainClass('error');
		await expect(emailErrorMessage).toBeVisible();
		await expect(emailErrorMessage).toContainText(errors[0].message);

		await expect(nicknameInput).toContainClass('error');
		await expect(nicknameErrorMessage).toBeVisible();
		await expect(nicknameErrorMessage).toContainText(errors[1].message);
	});

	test('should show generic error from API in error toast', async ({ page }): Promise<void> => {
		const button: Locator = page.getByRole('button', { name: 'Create Account', exact: true });

		await fillField(page, 'first-name', validRequestData.firstName);
		await fillField(page, 'last-name', validRequestData.lastName as string);
		await fillField(page, 'nickname', validRequestData.nickname);
		await fillField(page, 'email', validRequestData.email);
		await fillField(page, 'password', validRequestData.password);
		await fillField(page, 'password-confirmation', validRequestData.passwordConfirmation);

		const toast: Locator = page.locator('.hot-toast-message');

		const errors: GlobalTypes.IFieldApiError[] = [
			{
				field: null,
				message: 'Internal server error',
			},
		];

		await mockSignupErrorResponse(page, errors);

		const signupRequestPromise: Promise<Request> = page.waitForRequest(
			(request: Request): boolean => {
				return request.url().endsWith(`/${ApiEndpoint.SIGNUP}`);
			},
		);

		await button.click();

		await signupRequestPromise;

		await expect(toast).toBeVisible();
		await expect(toast).toContainText(errors[0].message);
	});

	test('should redirect to activate account page after if request was successful', async ({
		page,
	}): Promise<void> => {
		const button: Locator = page.getByRole('button', { name: 'Create Account', exact: true });

		await fillField(page, 'first-name', validRequestData.firstName);
		await fillField(page, 'last-name', validRequestData.lastName as string);
		await fillField(page, 'nickname', validRequestData.nickname);
		await fillField(page, 'email', validRequestData.email);
		await fillField(page, 'password', validRequestData.password);
		await fillField(page, 'password-confirmation', validRequestData.passwordConfirmation);

		await mockSignupSuccessfulResponse(page);

		const signupRequestPromise: Promise<Request> = page.waitForRequest(
			(request: Request): boolean => {
				return request.url().endsWith(`/${ApiEndpoint.SIGNUP}`);
			},
		);

		await button.click();

		await signupRequestPromise;

		await expect(page).toHaveURL((url: URL): boolean => {
			return url.pathname.endsWith(`/${Route.ACTIVATE_ACCOUNT}`);
		});
	});
});
