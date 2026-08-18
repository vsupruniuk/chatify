import { NgComponentOutlet } from '@angular/common';
import { FormControl, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import {
	IMockBuilderExtended,
	MockBuilder,
	MockedComponentFixture,
	MockedDebugElement,
	MockRender,
	ngMocks,
} from 'ng-mocks';

import { TextInput } from '@components/inputs';
import { IconExclamationMark, IconUser } from '@components/icons';

import { IconsTypes, InputsTypes } from '@customTypes';

import { Color } from '@enums';

describe('Text input component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(TextInput)
			.mock(IconExclamationMark)
			.mock(IconUser)
			.keep(NgComponentOutlet)
			.keep(ReactiveFormsModule);
	});

	afterEach((): void => {
		jest.clearAllMocks();
	});

	const requiredInputs = {
		inputId: 'first-name',
		name: 'first-name',
		placeholder: 'Enter first name',
		formControlInstance: new FormControl(''),
	};

	it('should render label if label value is provided', (): void => {
		const label: string = 'First name';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			label,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLLabelElement | null = host.querySelector(
			`label[for="${requiredInputs.inputId}"]`,
		);

		expect(child).not.toBeNull();
		expect(child?.outerHTML.includes(label)).toBe(true);
	});

	it('should set input id to label for value if label value is provided', (): void => {
		const label: string = 'First name';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			label,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLLabelElement | null = host.querySelector(
			`label[for="${requiredInputs.inputId}"]`,
		);

		expect(child).not.toBeNull();
		expect(child?.getAttribute('for')).toBe(requiredInputs.inputId);
	});

	it('should add class name is-disabled to label if input is disabled', (): void => {
		const label: string = 'First name';
		const isDisabled: boolean = true;

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			label,
			isDisabled,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLLabelElement | null = host.querySelector(
			`label[for="${requiredInputs.inputId}"]`,
		);

		expect(child).not.toBeNull();
		expect(child?.classList.contains('is-disabled')).toBe(true);
	});

	it('should add requirement label with value optional if label value is provided, but input is not required', (): void => {
		const label: string = 'First name';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			label,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLLabelElement | null = host.querySelector(
			'[data-testid="text-input-requirement-label"]',
		);

		expect(child).not.toBeNull();
		expect(child?.textContent.trim()).toBe('(Optional)');
	});

	it('should add class name is-optional if label value is provided, but input is not required', (): void => {
		const label: string = 'First name';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			label,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLLabelElement | null = host.querySelector(
			'[data-testid="text-input-requirement-label"]',
		);

		expect(child).not.toBeNull();
		expect(child?.classList.contains('is-optional')).toBe(true);
	});

	it('should add requirement label with value required if label value is provided and input is required', (): void => {
		const label: string = 'First name';
		const isRequired: boolean = true;

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			label,
			isRequired,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLLabelElement | null = host.querySelector(
			'[data-testid="text-input-requirement-label"]',
		);

		expect(child).not.toBeNull();
		expect(child?.textContent.trim()).toBe('*');
	});

	it('should add class name is-required if label value is provided and input is required', (): void => {
		const label: string = 'First name';
		const isRequired: boolean = true;

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			label,
			isRequired,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLLabelElement | null = host.querySelector(
			'[data-testid="text-input-requirement-label"]',
		);

		expect(child).not.toBeNull();
		expect(child?.classList.contains('is-required')).toBe(true);
	});

	it('should render icon exclamation mark with provided inputs if error message provided', (): void => {
		const errorMessage: string = 'First name is required';

		MockRender(TextInput, { ...requiredInputs, errorMessage });

		const iconExclamationMarkComponent: IconExclamationMark = ngMocks.get(
			ngMocks.find(IconExclamationMark),
			IconExclamationMark,
		);

		expect(iconExclamationMarkComponent).not.toBeNull();
		expect(iconExclamationMarkComponent.height).toBe(13);
		expect(iconExclamationMarkComponent.width).toBe(13);
	});

	it('should render error message text if error message provided', (): void => {
		const errorMessage: string = 'First name is required';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			errorMessage,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLSpanElement | null = host.querySelector(
			'[data-testid="text-input-error-message"]',
		);

		expect(child).not.toBeNull();
		expect(child?.textContent.trim()).toBe(errorMessage);
	});

	it('should render relevant left icon if left icon name provided', (): void => {
		const leftIconName: IconsTypes.TIconName = 'user';

		MockRender(TextInput, {
			...requiredInputs,
			leftIconName,
		});

		const iconUserComponent: IconUser = ngMocks.get(ngMocks.find(IconUser), IconUser);

		expect(iconUserComponent).not.toBeNull();

		expect(iconUserComponent.height).toBe(14);
		expect(iconUserComponent.width).toBe(14);
		expect(iconUserComponent.color).toBe(Color.TEXT_FAINT);
	});

	it('should render left icon with accent color if left icon name provided and input is valid', (): void => {
		const leftIconName: IconsTypes.TIconName = 'user';
		const isValid: boolean = true;

		MockRender(TextInput, {
			...requiredInputs,
			leftIconName,
			isValid,
		});

		const iconUserComponent: IconUser = ngMocks.get(ngMocks.find(IconUser), IconUser);

		expect(iconUserComponent).not.toBeNull();

		expect(iconUserComponent.color).toBe(Color.ACCENT);
	});

	it('should render left icon with error light color if left icon name and error message are provided', (): void => {
		const leftIconName: IconsTypes.TIconName = 'user';
		const errorMessage: string = 'First name is required';

		MockRender(TextInput, {
			...requiredInputs,
			leftIconName,
			errorMessage,
		});

		const iconUserComponent: IconUser = ngMocks.get(ngMocks.find(IconUser), IconUser);

		expect(iconUserComponent).not.toBeNull();

		expect(iconUserComponent.color).toBe(Color.ERROR_LIGHT);
	});

	it('should render relevant right icon if right icon name provided', (): void => {
		const rightIconName: IconsTypes.TIconName = 'user';

		MockRender(TextInput, {
			...requiredInputs,
			rightIconName,
		});

		const iconUserComponent: IconUser = ngMocks.get(ngMocks.find(IconUser), IconUser);

		expect(iconUserComponent).not.toBeNull();

		expect(iconUserComponent.height).toBe(14);
		expect(iconUserComponent.width).toBe(14);
	});

	it('should render right icon as button if right icon name provided and right icon is clickable', (): void => {
		const rightIconName: IconsTypes.TIconName = 'user';
		const isRightIconClickable: boolean = true;

		MockRender(TextInput, {
			...requiredInputs,
			rightIconName,
			isRightIconClickable,
		});

		const debugElement: MockedDebugElement<IconUser> = ngMocks.find(IconUser);

		const iconUserComponent: IconUser = ngMocks.get(debugElement, IconUser);
		const iconParent: HTMLButtonElement = (debugElement.nativeElement as HTMLElement)
			.parentElement as HTMLButtonElement;

		expect(iconUserComponent).not.toBeNull();
		expect(iconParent.tagName).toBe('BUTTON');
	});

	it('should emit right icon clicked event on click if right icon is clickable', (): void => {
		const rightIconName: IconsTypes.TIconName = 'user';
		const isRightIconClickable: boolean = true;

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			rightIconName,
			isRightIconClickable,
		});

		const componentInstance: TextInput = fixture.point.componentInstance as TextInput;
		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const button: HTMLButtonElement = host.querySelector(
			'[data-testid="text-input-right-icon"]',
		) as HTMLButtonElement;

		jest.spyOn(componentInstance.rightIconClicked, 'emit');

		const event: PointerEvent = new PointerEvent('click');

		button.dispatchEvent(event);

		expect(componentInstance.rightIconClicked.emit).toHaveBeenCalledTimes(1);
		expect(componentInstance.rightIconClicked.emit).toHaveBeenNthCalledWith(1, event);
	});

	it('should render input with provided id value', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.id).toBe(requiredInputs.inputId);
	});

	it('should render input with provided name value', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.name).toBe(requiredInputs.name);
	});

	it('should render input with provided placeholder value', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.placeholder).toBe(requiredInputs.placeholder);
	});

	it('should attach provided form control to the input', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		const input: MockedDebugElement<HTMLInputElement> = ngMocks.find(
			fixture.point,
			`[id="${requiredInputs.inputId}"]`,
		);
		const formControlDirective: FormControlDirective = ngMocks.get(input, FormControlDirective);

		expect(formControlDirective.control).toBe(requiredInputs.formControlInstance);
	});

	it('should render input with type text by default', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.type).toBe('text');
	});

	it('should render input with provided type', (): void => {
		const type: InputsTypes.TTextInputType = 'password';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			type,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.type).toBe('password');
	});

	it('should set input disabled attribute to true if form control is disabled', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		requiredInputs.formControlInstance.disable();

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.disabled).toBe(true);
	});

	it('should set autocomplete to off by default', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.autocomplete).toBe('off');
	});

	it('should set autocomplete to value provided in input', (): void => {
		const autocomplete: InputsTypes.TAutocomplete = 'given-name';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			autocomplete,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.autocomplete).toBe(autocomplete);
	});

	it('should set class with left icon to input if left icon name is provided', (): void => {
		const leftIconName: IconsTypes.TIconName = 'user';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			leftIconName,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.classList.contains('with-left-icon')).toBe(true);
	});

	it('should set class with right icon to input if right icon name is provided', (): void => {
		const rightIconName: IconsTypes.TIconName = 'user';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			rightIconName,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.classList.contains('with-right-icon')).toBe(true);
	});

	it('should set class valid to input if input is valid', (): void => {
		const isValid: boolean = true;

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			isValid,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.classList.contains('valid')).toBe(true);
	});

	it('should set class error to input if error message is provided', (): void => {
		const errorMessage: string = 'First name is required';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			errorMessage,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.classList.contains('error')).toBe(true);
	});

	it('should set aria invalid attribute to true if error message is provided', (): void => {
		const errorMessage: string = 'First name is required';

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			errorMessage,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement | null = host.querySelector(`[id="${requiredInputs.inputId}"]`);

		expect(child).not.toBeNull();
		expect(child?.ariaInvalid).toBe('true');
	});

	it('should change value in form control if input event happened', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		const inputValue = 'Tony';

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement = host.querySelector(
			`[id="${requiredInputs.inputId}"]`,
		) as HTMLInputElement;

		child.value = inputValue;
		const event: Event = new Event('input');

		child.dispatchEvent(event);

		expect(requiredInputs.formControlInstance.value).toBe(inputValue);
	});

	it('should emit blurred event if blur event happened', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const componentInstance: TextInput = fixture.point.componentInstance as TextInput;
		const child: HTMLInputElement = host.querySelector(
			`[id="${requiredInputs.inputId}"]`,
		) as HTMLInputElement;

		jest.spyOn(componentInstance.blurred, 'emit');

		const event: FocusEvent = new FocusEvent('blur');

		child.dispatchEvent(event);

		expect(componentInstance.blurred.emit).toHaveBeenCalledTimes(1);
		expect(componentInstance.blurred.emit).toHaveBeenNthCalledWith(1, event);
	});

	it('should prevent copy event if copy and paste are disabled and copy event happened', (): void => {
		const disableCopyAndPaste: boolean = true;

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			disableCopyAndPaste,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement = host.querySelector(
			`[id="${requiredInputs.inputId}"]`,
		) as HTMLInputElement;
		const event: Event = new Event('copy');

		jest.spyOn(event, 'preventDefault');

		child.dispatchEvent(event);

		expect(event.preventDefault).toHaveBeenCalledTimes(1);
	});

	it('should prevent cut event if copy and paste are disabled and cut event happened', (): void => {
		const disableCopyAndPaste: boolean = true;

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			disableCopyAndPaste,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement = host.querySelector(
			`[id="${requiredInputs.inputId}"]`,
		) as HTMLInputElement;
		const event: Event = new Event('cut');

		jest.spyOn(event, 'preventDefault');

		child.dispatchEvent(event);

		expect(event.preventDefault).toHaveBeenCalledTimes(1);
	});

	it('should prevent paste event if copy and paste are disabled and paste event happened', (): void => {
		const disableCopyAndPaste: boolean = true;

		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
			disableCopyAndPaste,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement = host.querySelector(
			`[id="${requiredInputs.inputId}"]`,
		) as HTMLInputElement;
		const event: Event = new Event('paste');

		jest.spyOn(event, 'preventDefault');

		child.dispatchEvent(event);

		expect(event.preventDefault).toHaveBeenCalledTimes(1);
	});

	it('should change value in form control if copy and paste are not disabled, and paste event happened', (): void => {
		const fixture: MockedComponentFixture = MockRender(TextInput, {
			...requiredInputs,
		});

		const inputValue = 'Tony';

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLInputElement = host.querySelector(
			`[id="${requiredInputs.inputId}"]`,
		) as HTMLInputElement;

		child.value = inputValue;
		const event: Event = new Event('paste');

		child.dispatchEvent(event);

		expect(requiredInputs.formControlInstance.value).toBe(inputValue);
	});
});
