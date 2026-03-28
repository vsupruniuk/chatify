import { TestBed } from '@angular/core/testing';

import { HelloWorldPage } from '@pages';

describe('Hello world', (): void => {
	let nativeElement: HTMLElement;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [HelloWorldPage],
		}).compileComponents();

		const fixture = TestBed.createComponent(HelloWorldPage);
		nativeElement = fixture.nativeElement;

		await fixture.whenStable();
		fixture.detectChanges();
	});

	it('should render title component', () => {
		const child: Element | null = nativeElement.querySelector('ctf-hello-world-title');

		expect(child).not.toBeNull();
	});
});
