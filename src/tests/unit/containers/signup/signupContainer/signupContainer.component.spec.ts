import { TestBed } from '@angular/core/testing';

import { SignupContainer } from '@containers/signup';

describe('Signup container component', (): void => {
	let nativeElement: HTMLElement;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [SignupContainer],
		}).compileComponents();

		const fixture = TestBed.createComponent(SignupContainer);
		nativeElement = fixture.nativeElement;

		await fixture.whenStable();
		fixture.detectChanges();
	});

	it('should render top level element as tag section', (): void => {
		const child: Element | null = nativeElement.querySelector('[data-testid="signup-container"]');

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('SECTION');
	});

	it('should render signup logo component', (): void => {
		const child: Element | null = nativeElement.querySelector('ctf-signup-logo');

		expect(child).not.toBeNull();
	});

	it('should render signup form component', (): void => {
		const child: Element | null = nativeElement.querySelector('ctf-signup-form');

		expect(child).not.toBeNull();
	});

	it('should render auth switch component', (): void => {
		const child: Element | null = nativeElement.querySelector('ctf-auth-switch');

		expect(child).not.toBeNull();
	});
});
