import { TestBed } from '@angular/core/testing';

import { AppComponent } from '../../../app.component';

describe('App component', (): void => {
	let nativeElement: HTMLElement;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
		}).compileComponents();

		const fixture = TestBed.createComponent(AppComponent);
		nativeElement = fixture.nativeElement;

		await fixture.whenStable();
		fixture.detectChanges();
	});

	it('should render router outlet', () => {
		const child: Element | null = nativeElement.querySelector('router-outlet');

		expect(child).not.toBeNull();
	});
});
