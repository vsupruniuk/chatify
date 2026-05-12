import { TestBed } from '@angular/core/testing';
import { SignupPage } from '@pages';

describe('Signup page component', (): void => {
	let nativeElement: HTMLElement;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [SignupPage],
		}).compileComponents();

		const fixture = TestBed.createComponent(SignupPage);
		nativeElement = fixture.nativeElement;

		await fixture.whenStable();
		fixture.detectChanges();
	});

	it('should render top level element as tag main', (): void => {
		const child: Element | null = nativeElement.querySelector('[data-testid="signup-page"]');

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('MAIN');
	});

	it('should render signup container', (): void => {
		const child: Element | null = nativeElement.querySelector('ctf-signup-container');

		expect(child).not.toBeNull();
	});
});
