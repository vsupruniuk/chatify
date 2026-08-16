import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import {
	IMockBuilderExtended,
	MockBuilder,
	MockedComponentFixture,
	MockedDebugElement,
	MockRender,
	ngMocks,
} from 'ng-mocks';

import { SignupForm } from '@containers/signup/components';

import { TextInput } from '@components/inputs';
import { PrimaryButton } from '@components/buttons';

describe('Signup form component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(SignupForm).mock(TextInput).mock(PrimaryButton).keep(ReactiveFormsModule);
	});

	afterEach((): void => {
		jest.clearAllMocks();
	});

	it('should render first name input with provided default inputs', (): void => {
		MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-first-name"]',
		);
		const firstNameInput: TextInput = debugElement.componentInstance;

		expect(firstNameInput.inputId).toBe('signup-form-first-name');
		expect(firstNameInput.name).toBe('firstName');
		expect(firstNameInput.placeholder).toBe('Tony');
		expect(firstNameInput.label).toBe('First Name');
		expect(firstNameInput.leftIconName).toBe('user');
		expect(firstNameInput.autocomplete).toBe('given-name');
		expect(firstNameInput.maxlength).toBe(255);
		expect(firstNameInput.formControlInstance).toBeInstanceOf(FormControl);
		expect(firstNameInput.errorMessage).toBe('');
		expect(firstNameInput.rightIconName).toBeNull();
		expect(firstNameInput.isValid).toBe(false);
		expect(firstNameInput.isDisabled).toBe(false);
		expect(firstNameInput.isRequired).toBe(true);
	});

	it('should provide error message if first name input is empty and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-first-name"]',
		);
		const firstNameInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(firstNameInput.errorMessage).toBe('Must be at least 3 characters long');
	});

	it('should provide error message to first name input if it has value less than 3 characters long and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-first-name"]',
		);
		const firstNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('To');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(firstNameInput.errorMessage).toBe('Must be at least 3 characters long');
	});

	it('should provide empty error message to first name input if it has valid value and blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-first-name"]',
		);
		const firstNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('Ton');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(firstNameInput.errorMessage).toBe('');
	});

	it('should provide null as right icon name to first name input if it is has not valid value and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-first-name"]',
		);
		const firstNameInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(firstNameInput.rightIconName).toBeNull();
	});

	it('should provide check mark as right icon name to first name input if it has valid value and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-first-name"]',
		);
		const firstNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('Tony');
		formControl.markAsDirty();

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(firstNameInput.rightIconName).toBe('checkMark');
	});

	it('should set is valid to true to first name input if it is valid', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-first-name"]',
		);
		const firstNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('Tony');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(firstNameInput.isValid).toBe(true);
	});

	it('should set is disabled to true to first name input if it form control is disabled', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-first-name"]',
		);
		const firstNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.disable();

		formControl.markAsDirty();
		fixture.detectChanges();

		expect(firstNameInput.isDisabled).toBe(true);
	});

	it('should render last name input with provided default inputs', (): void => {
		MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;

		expect(lastNameInput.inputId).toBe('signup-form-last-name');
		expect(lastNameInput.name).toBe('lastName');
		expect(lastNameInput.placeholder).toBe('Stark');
		expect(lastNameInput.label).toBe('Last Name');
		expect(lastNameInput.leftIconName).toBe('user');
		expect(lastNameInput.autocomplete).toBe('family-name');
		expect(lastNameInput.maxlength).toBe(255);
		expect(lastNameInput.formControlInstance).toBeInstanceOf(FormControl);
		expect(lastNameInput.errorMessage).toBe('');
		expect(lastNameInput.rightIconName).toBeNull();
		expect(lastNameInput.isValid).toBe(false);
		expect(lastNameInput.isDisabled).toBe(false);
	});

	it('should provide error message to last name input if it has value less than 3 characters long and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('St');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(lastNameInput.errorMessage).toBe('Must be at least 3 characters long');
	});

	it('should provide empty error message to last name input if it has valid value and blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('Sta');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(lastNameInput.errorMessage).toBe('');
	});

	it('should provide empty error message to last name input if it dirty and do not have value', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.markAsDirty();

		fixture.detectChanges();

		expect(lastNameInput.errorMessage).toBe('');
	});

	it('should provide null as right icon name to last name input if it is has value less then 3 characters long', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('St');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(lastNameInput.rightIconName).toBeNull();
	});

	it('should provide check mark as right icon name to last name input if it is dirty and do not have value', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.markAsDirty();

		fixture.detectChanges();

		expect(lastNameInput.rightIconName).toBe('checkMark');
	});

	it('should provide check mark as right icon name to last name input if it is dirty and has valid value', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.markAsDirty();
		formControl.setValue('Stark');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(lastNameInput.rightIconName).toBe('checkMark');
	});

	it('should provide is valid true to last name input if it is dirty and has valid value', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.markAsDirty();
		formControl.setValue('Stark');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(lastNameInput.isValid).toBe(true);
	});

	it('should provide is valid true to last name input if it is dirty and do not have value', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.markAsDirty();

		fixture.detectChanges();

		expect(lastNameInput.isValid).toBe(true);
	});

	it('should set is disabled to true to last name input if it form control is disabled', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-last-name"]',
		);
		const lastNameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.disable();

		formControl.markAsDirty();
		fixture.detectChanges();

		expect(lastNameInput.isDisabled).toBe(true);
	});

	it('should render nickname input with provided default inputs', (): void => {
		MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-nickname"]',
		);
		const nicknameInput: TextInput = debugElement.componentInstance;

		expect(nicknameInput.inputId).toBe('signup-form-nickname');
		expect(nicknameInput.name).toBe('nickname');
		expect(nicknameInput.placeholder).toBe('t.stark');
		expect(nicknameInput.label).toBe('Nickname');
		expect(nicknameInput.leftIconName).toBe('atSign');
		expect(nicknameInput.autocomplete).toBe('username');
		expect(nicknameInput.maxlength).toBe(255);
		expect(nicknameInput.formControlInstance).toBeInstanceOf(FormControl);
		expect(nicknameInput.errorMessage).toBe('');
		expect(nicknameInput.rightIconName).toBeNull();
		expect(nicknameInput.isValid).toBe(false);
		expect(nicknameInput.isDisabled).toBe(false);
		expect(nicknameInput.isRequired).toBe(true);
	});

	it('should provide error message if nickname input is empty and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-nickname"]',
		);
		const nicknameInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(nicknameInput.errorMessage).toBe('Must be at least 3 characters long');
	});

	it('should provide error message to nickname input if it has value less than 3 characters long and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-nickname"]',
		);
		const nicknameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('t.');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(nicknameInput.errorMessage).toBe('Must be at least 3 characters long');
	});

	it('should provide empty error message to nickname input if it has valid value and blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-nickname"]',
		);
		const nicknameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('t.s');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(nicknameInput.errorMessage).toBe('');
	});

	it('should provide null as right icon name to nickname input if it is has not valid value and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-nickname"]',
		);
		const nicknameInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(nicknameInput.rightIconName).toBeNull();
	});

	it('should provide check mark as right icon name to nickname input if it has valid value and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-nickname"]',
		);
		const nicknameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('t.stark');
		formControl.markAsDirty();

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(nicknameInput.rightIconName).toBe('checkMark');
	});

	it('should set is valid to true to nickname input if it is valid', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-nickname"]',
		);
		const nicknameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('t.stark');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(nicknameInput.isValid).toBe(true);
	});

	it('should set is disabled to true to nickname input if it form control is disabled', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-nickname"]',
		);
		const nicknameInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.disable();

		formControl.markAsDirty();
		fixture.detectChanges();

		expect(nicknameInput.isDisabled).toBe(true);
	});

	it('should render email input with provided default inputs', (): void => {
		MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-email"]',
		);
		const emailInput: TextInput = debugElement.componentInstance;

		expect(emailInput.inputId).toBe('signup-form-email');
		expect(emailInput.name).toBe('email');
		expect(emailInput.placeholder).toBe('t.stark@avengers.com');
		expect(emailInput.label).toBe('Email');
		expect(emailInput.leftIconName).toBe('mail');
		expect(emailInput.autocomplete).toBe('email');
		expect(emailInput.type).toBe('email');
		expect(emailInput.maxlength).toBe(255);
		expect(emailInput.formControlInstance).toBeInstanceOf(FormControl);
		expect(emailInput.errorMessage).toBe('');
		expect(emailInput.rightIconName).toBeNull();
		expect(emailInput.isValid).toBe(false);
		expect(emailInput.isDisabled).toBe(false);
		expect(emailInput.isRequired).toBe(true);
	});

	it('should provide error message if email input is empty and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-email"]',
		);
		const emailInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(emailInput.errorMessage).toBe('Invalid email');
	});

	it('should provide error message to email input if it has value less than 3 characters long and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-email"]',
		);
		const emailInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('t.');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(emailInput.errorMessage).toBe('Invalid email');
	});

	it('should provide error message to email input if it has not a valid email value and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-email"]',
		);
		const emailInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('t.stark.avengers.com');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(emailInput.errorMessage).toBe('Invalid email');
	});

	it('should provide empty error message to email input if it has valid value and blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-email"]',
		);
		const emailInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('t.stark@avengers.com');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(emailInput.errorMessage).toBe('');
	});

	it('should provide null as right icon name to email input if it is has not valid value and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-email"]',
		);
		const emailInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(emailInput.rightIconName).toBeNull();
	});

	it('should provide check mark as right icon name to email input if it has valid value and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-email"]',
		);
		const emailInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('t.stark@avengers.com');
		formControl.markAsDirty();

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(emailInput.rightIconName).toBe('checkMark');
	});

	it('should set is valid to true to email input if it is valid', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-email"]',
		);
		const emailInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('t.stark@avengers.com');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(emailInput.isValid).toBe(true);
	});

	it('should set is disabled to true to email input if it form control is disabled', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-email"]',
		);
		const emailInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.disable();

		formControl.markAsDirty();
		fixture.detectChanges();

		expect(emailInput.isDisabled).toBe(true);
	});

	it('should render password input with provided default inputs', (): void => {
		MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;

		expect(passwordInput.inputId).toBe('signup-form-password');
		expect(passwordInput.name).toBe('password');
		expect(passwordInput.placeholder).toBe('At least 6 characters');
		expect(passwordInput.label).toBe('Password');
		expect(passwordInput.leftIconName).toBe('lock');
		expect(passwordInput.rightIconName).toBe('eye');
		expect(passwordInput.type).toBe('password');
		expect(passwordInput.maxlength).toBe(255);
		expect(passwordInput.formControlInstance).toBeInstanceOf(FormControl);
		expect(passwordInput.errorMessage).toBe('');
		expect(passwordInput.isValid).toBe(false);
		expect(passwordInput.isDisabled).toBe(false);
		expect(passwordInput.isRightIconClickable).toBe(true);
		expect(passwordInput.disableCopyAndPaste).toBe(true);
		expect(passwordInput.isRequired).toBe(true);
	});

	it('should provide error message if password input is empty and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordInput.errorMessage).toBe(
			'Must be at least 6 characters long, contains 1 number and 1 uppercase character',
		);
	});

	it('should provide error message to password input if it has value less than 6 characters long and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('Qwer1');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordInput.errorMessage).toBe(
			'Must be at least 6 characters long, contains 1 number and 1 uppercase character',
		);
	});

	it('should provide error message to password input if its value does not contains at least 1 upper case character and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('qwerty12345');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordInput.errorMessage).toBe(
			'Must be at least 6 characters long, contains 1 number and 1 uppercase character',
		);
	});

	it('should provide error message to password input if its value does not contains at least 1 number and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('Qwerty');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordInput.errorMessage).toBe(
			'Must be at least 6 characters long, contains 1 number and 1 uppercase character',
		);
	});

	it('should provide empty error message to password input if it has valid value and blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('Qwerty12345!');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordInput.errorMessage).toBe('');
	});

	it('should provide eye crossed as right icon name to password input if right icon is eye and it was clicked', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('rightIconClicked');
		fixture.detectChanges();

		expect(passwordInput.rightIconName).toBe('eyeCrossed');
	});

	it('should provide eye as right icon name to password input if right icon is eye crossed and it was clicked', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('rightIconClicked');
		debugElement.triggerEventHandler('rightIconClicked');
		fixture.detectChanges();

		expect(passwordInput.rightIconName).toBe('eye');
	});

	it('should provide input type as text to password input if type is password and right icon was clicked', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('rightIconClicked');
		fixture.detectChanges();

		expect(passwordInput.type).toBe('text');
	});

	it('should provide input type as password to password input if type is text and right icon was clicked', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('rightIconClicked');
		debugElement.triggerEventHandler('rightIconClicked');
		fixture.detectChanges();

		expect(passwordInput.type).toBe('password');
	});

	it('should set is valid to true to password input if it is valid', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.setValue('Qwerty12345!');

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordInput.isValid).toBe(true);
	});

	it('should set is disabled to true to password input if it form control is disabled', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.disable();

		formControl.markAsDirty();
		fixture.detectChanges();

		expect(passwordInput.isDisabled).toBe(true);
	});

	it('should render password confirmation input with provided default inputs', (): void => {
		MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);
		const passwordConfirmationInput: TextInput = debugElement.componentInstance;

		expect(passwordConfirmationInput.inputId).toBe('signup-form-password-confirmation');
		expect(passwordConfirmationInput.name).toBe('passwordConfirmation');
		expect(passwordConfirmationInput.placeholder).toBe('Repeat your password');
		expect(passwordConfirmationInput.label).toBe('Confirm password');
		expect(passwordConfirmationInput.leftIconName).toBe('lock');
		expect(passwordConfirmationInput.rightIconName).toBe('eye');
		expect(passwordConfirmationInput.type).toBe('password');
		expect(passwordConfirmationInput.maxlength).toBe(255);
		expect(passwordConfirmationInput.formControlInstance).toBeInstanceOf(FormControl);
		expect(passwordConfirmationInput.errorMessage).toBe('');
		expect(passwordConfirmationInput.isValid).toBe(false);
		expect(passwordConfirmationInput.isDisabled).toBe(false);
		expect(passwordConfirmationInput.isRightIconClickable).toBe(true);
		expect(passwordConfirmationInput.disableCopyAndPaste).toBe(true);
		expect(passwordConfirmationInput.isRequired).toBe(true);
	});

	it('should provide error message if password confirmation input is empty and was blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);
		const passwordConfirmationInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordConfirmationInput.errorMessage).toBe('Must match to the password');
	});

	it('should provide error message to password confirmation input if it has value that does not match to password input', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const passwordDebugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordConfirmationDebugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);

		const passwordConfirmationInput: TextInput = passwordConfirmationDebugElement.componentInstance;

		const passwordFormControl: FormControl = ngMocks.input(
			passwordDebugElement,
			'formControlInstance',
		) as FormControl<string>;

		const passwordConfirmationFormControl: FormControl = ngMocks.input(
			passwordConfirmationDebugElement,
			'formControlInstance',
		) as FormControl<string>;

		passwordFormControl.setValue('Qwerty12345!');
		passwordConfirmationFormControl.setValue('Qwerty12!');

		passwordConfirmationDebugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordConfirmationInput.errorMessage).toBe('Must match to the password');
	});

	it('should provide empty error message to password confirmation input if it has valid value and blurred', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const passwordDebugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordConfirmationDebugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);

		const passwordConfirmationInput: TextInput = passwordConfirmationDebugElement.componentInstance;

		const passwordFormControl: FormControl = ngMocks.input(
			passwordDebugElement,
			'formControlInstance',
		) as FormControl<string>;

		const passwordConfirmationFormControl: FormControl = ngMocks.input(
			passwordConfirmationDebugElement,
			'formControlInstance',
		) as FormControl<string>;

		passwordFormControl.setValue('Qwerty12345!');
		passwordConfirmationFormControl.setValue('Qwerty12345!');

		passwordConfirmationDebugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordConfirmationInput.errorMessage).toBe('');
	});

	it('should provide eye crossed as right icon name to password confirmation input if right icon is eye and it was clicked', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);
		const passwordConfirmationInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('rightIconClicked');
		fixture.detectChanges();

		expect(passwordConfirmationInput.rightIconName).toBe('eyeCrossed');
	});

	it('should provide eye as right icon name to password confirmation input if right icon is eye crossed and it was clicked', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);
		const passwordConfirmationInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('rightIconClicked');
		debugElement.triggerEventHandler('rightIconClicked');
		fixture.detectChanges();

		expect(passwordConfirmationInput.rightIconName).toBe('eye');
	});

	it('should provide input type as text to password confirmation input if type is password and right icon was clicked', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);
		const passwordConfirmationInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('rightIconClicked');
		fixture.detectChanges();

		expect(passwordConfirmationInput.type).toBe('text');
	});

	it('should provide input type as password to password confirmation input if type is text and right icon was clicked', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);
		const passwordConfirmationInput: TextInput = debugElement.componentInstance;

		debugElement.triggerEventHandler('rightIconClicked');
		debugElement.triggerEventHandler('rightIconClicked');
		fixture.detectChanges();

		expect(passwordConfirmationInput.type).toBe('password');
	});

	it('should set is valid to true to password confirmation input if it is valid', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const passwordDebugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password"]',
		);
		const passwordConfirmationDebugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);

		const passwordConfirmationInput: TextInput = passwordConfirmationDebugElement.componentInstance;

		const passwordFormControl: FormControl = ngMocks.input(
			passwordDebugElement,
			'formControlInstance',
		) as FormControl<string>;

		const passwordConfirmationFormControl: FormControl = ngMocks.input(
			passwordConfirmationDebugElement,
			'formControlInstance',
		) as FormControl<string>;

		passwordFormControl.setValue('Qwerty12345!');
		passwordConfirmationFormControl.setValue('Qwerty12345!');

		passwordConfirmationDebugElement.triggerEventHandler('blurred');
		fixture.detectChanges();

		expect(passwordConfirmationInput.isValid).toBe(true);
	});

	it('should set is disabled to true to password confirmation input if it form control is disabled', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<TextInput> = ngMocks.find<TextInput>(
			'[inputId="signup-form-password-confirmation"]',
		);
		const passwordConfirmationInput: TextInput = debugElement.componentInstance;
		const formControl: FormControl = ngMocks.input(
			debugElement,
			'formControlInstance',
		) as FormControl<string>;

		formControl.disable();

		formControl.markAsDirty();
		fixture.detectChanges();

		expect(passwordConfirmationInput.isDisabled).toBe(true);
	});

	it('should render primary button with provided default inputs', (): void => {
		MockRender(SignupForm);

		const debugElement: MockedDebugElement<PrimaryButton> = ngMocks.find(PrimaryButton);
		const primaryButton: PrimaryButton = debugElement.componentInstance;

		expect(primaryButton.type).toBe('submit');
		expect(primaryButton.text).toBe('Create Account');
		expect(primaryButton.isDisabled).toBe(true);
		expect(primaryButton.isLoading).toBe(false);
	});

	it('should provide valid text for button if the form is loading', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const buttonDebugElement: MockedDebugElement<PrimaryButton> = ngMocks.find(PrimaryButton);
		const formDebugElement: MockedDebugElement<HTMLFormElement> = ngMocks.find<HTMLFormElement>(
			fixture.point,
			'[data-testid="signup-form"]',
		);

		const primaryButton: PrimaryButton = buttonDebugElement.componentInstance;
		const formElement: HTMLFormElement = formDebugElement.nativeElement;

		const submitEvent = new SubmitEvent('submit');

		formElement.dispatchEvent(submitEvent);
		fixture.detectChanges();

		expect(primaryButton.text).toBe('Creating your account...');
	});

	it('should provide is disabled true if form is submitting', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const buttonDebugElement: MockedDebugElement<PrimaryButton> = ngMocks.find(PrimaryButton);
		const formDebugElement: MockedDebugElement<HTMLFormElement> = ngMocks.find<HTMLFormElement>(
			fixture.point,
			'[data-testid="signup-form"]',
		);

		const primaryButton: PrimaryButton = buttonDebugElement.componentInstance;
		const formElement: HTMLFormElement = formDebugElement.nativeElement;

		const submitEvent = new SubmitEvent('submit');

		formElement.dispatchEvent(submitEvent);
		fixture.detectChanges();

		expect(primaryButton.isDisabled).toBe(true);
	});

	it('should provide is disabled false if form has valid value and not submitting', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const buttonDebugElement: MockedDebugElement<PrimaryButton> = ngMocks.find(PrimaryButton);
		const formDebugElement: MockedDebugElement<HTMLFormElement> = ngMocks.find<HTMLFormElement>(
			fixture.point,
			'[data-testid="signup-form"]',
		);

		const primaryButton: PrimaryButton = buttonDebugElement.componentInstance;
		const formGroupDirective: FormGroupDirective = ngMocks.get(
			formDebugElement,
			FormGroupDirective,
		);
		const signupFormGroup: FormGroup = formGroupDirective.control;

		signupFormGroup.setValue({
			firstName: 'Tony',
			lastName: 'Stark',
			nickname: 't.stark',
			email: 't.stark@avengers.com',
			password: 'Qwerty12345!',
			passwordConfirmation: 'Qwerty12345!',
		});

		fixture.detectChanges();

		expect(primaryButton.isDisabled).toBe(false);
	});

	it('should provide is loading true if form is submitting', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const buttonDebugElement: MockedDebugElement<PrimaryButton> = ngMocks.find(PrimaryButton);
		const formDebugElement: MockedDebugElement<HTMLFormElement> = ngMocks.find<HTMLFormElement>(
			fixture.point,
			'[data-testid="signup-form"]',
		);

		const primaryButton: PrimaryButton = buttonDebugElement.componentInstance;
		const formElement: HTMLFormElement = formDebugElement.nativeElement;

		const submitEvent = new SubmitEvent('submit');

		formElement.dispatchEvent(submitEvent);
		fixture.detectChanges();

		expect(primaryButton.isLoading).toBe(true);
	});

	it('should prevent event default behaviour on form submit ', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<HTMLFormElement> = ngMocks.find<HTMLFormElement>(
			fixture.point,
			'[data-testid="signup-form"]',
		);

		const formElement: HTMLFormElement = debugElement.nativeElement;

		const submitEvent = new SubmitEvent('submit');

		jest.spyOn(submitEvent, 'preventDefault');
		formElement.dispatchEvent(submitEvent);

		expect(submitEvent.preventDefault).toHaveBeenCalledTimes(1);
	});

	it('should disable form group after submitting form', (): void => {
		const fixture: MockedComponentFixture<SignupForm, SignupForm> = MockRender(SignupForm);

		const debugElement: MockedDebugElement<HTMLFormElement> = ngMocks.find<HTMLFormElement>(
			fixture.point,
			'[data-testid="signup-form"]',
		);

		const formElement: HTMLFormElement = debugElement.nativeElement;
		const formGroupDirective: FormGroupDirective = ngMocks.get(debugElement, FormGroupDirective);
		const signupFormGroup: FormGroup = formGroupDirective.control;

		const submitEvent = new SubmitEvent('submit');

		jest.spyOn(submitEvent, 'preventDefault');
		formElement.dispatchEvent(submitEvent);

		expect(signupFormGroup.disabled).toBe(true);
	});
});
