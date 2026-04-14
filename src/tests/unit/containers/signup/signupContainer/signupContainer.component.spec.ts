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

	it('should render container placeholder header', (): void => {
		const child: Element | null = nativeElement.querySelector('h1');

		expect(child).not.toBeNull();
		expect(child?.textContent).toBe('Signup container');
	});
});
