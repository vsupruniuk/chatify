import { IMockBuilderExtended, MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { PrimaryButton } from '@components/buttons';

describe('Primary button component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(PrimaryButton);
	});

	afterEach((): void => {
		jest.clearAllMocks();
	});

	const requiredInputs = {
		text: 'Button',
	};

	it('should render provided text in the button', (): void => {
		const fixture: MockedComponentFixture = MockRender(PrimaryButton, {
			...requiredInputs,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLButtonElement | null = host.firstElementChild as HTMLButtonElement;

		expect(child).not.toBeNull();
		expect(child.textContent.trim()).toBe(requiredInputs.text);
	});

	it('should set type to button as a default for the button', (): void => {
		const fixture: MockedComponentFixture = MockRender(PrimaryButton, {
			...requiredInputs,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLButtonElement | null = host.firstElementChild as HTMLButtonElement;

		expect(child).not.toBeNull();
		expect(child.type).toBe('button');
	});

	it('should set attribute disabled to true, if button is disabled', (): void => {
		const isDisabled: boolean = true;

		const fixture: MockedComponentFixture = MockRender(PrimaryButton, {
			...requiredInputs,
			isDisabled,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLButtonElement | null = host.firstElementChild as HTMLButtonElement;

		expect(child).not.toBeNull();
		expect(child.disabled).toBe(isDisabled);
	});

	it('should set attribute aria disabled to true, if button is disabled', (): void => {
		const isDisabled: boolean = true;

		const fixture: MockedComponentFixture = MockRender(PrimaryButton, {
			...requiredInputs,
			isDisabled,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLButtonElement | null = host.firstElementChild as HTMLButtonElement;

		expect(child).not.toBeNull();
		expect(child.disabled).toBe(isDisabled);
	});

	it('should add class loading, if button is in loading state', (): void => {
		const isLoading: boolean = true;

		const fixture: MockedComponentFixture = MockRender(PrimaryButton, {
			...requiredInputs,
			isLoading,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: HTMLButtonElement | null = host.firstElementChild as HTMLButtonElement;

		expect(child).not.toBeNull();
		expect(child.classList.contains('loading')).toBe(true);
	});

	it('should emit clicked event if click event happened', (): void => {
		const fixture: MockedComponentFixture = MockRender(PrimaryButton, {
			...requiredInputs,
		});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const componentInstance: PrimaryButton = fixture.point.componentInstance as PrimaryButton;
		const child: HTMLButtonElement = host.firstElementChild as HTMLButtonElement;

		jest.spyOn(componentInstance.clicked, 'emit');

		const event: PointerEvent = new PointerEvent('click');

		child.dispatchEvent(event);

		expect(componentInstance.clicked.emit).toHaveBeenCalledTimes(1);
		expect(componentInstance.clicked.emit).toHaveBeenNthCalledWith(1, event);
	});
});
