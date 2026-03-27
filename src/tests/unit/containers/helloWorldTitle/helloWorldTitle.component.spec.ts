import { TestBed } from '@angular/core/testing';

import { HelloWorldTitle } from '@containers';

describe('Hello world title', (): void => {
	let nativeElement: HTMLElement;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [HelloWorldTitle],
		}).compileComponents();

		const fixture = TestBed.createComponent(HelloWorldTitle);
		nativeElement = fixture.nativeElement;

		await fixture.whenStable();
		fixture.detectChanges();
	});

	it('should render title', () => {
		const element: HTMLHeadingElement = nativeElement.querySelector(
			'[data-testid="hello-world-header"]',
		) as HTMLHeadingElement;

		expect(element.textContent).toBe('Hello, World!');
	});
});
