import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AdaptiveContainer } from '@components/layout';

describe('Signup container component', (): void => {
	let nativeElement: HTMLElement;

	@Component({
		selector: 'ctf-test-host',
		imports: [AdaptiveContainer],
		template: `
			<ctf-adaptive-container>
				<div data-testid="projected-content">Test projected content</div>
			</ctf-adaptive-container>
		`,
		changeDetection: ChangeDetectionStrategy.OnPush,
	})
	class TestHostComponent {}

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [TestHostComponent],
		}).compileComponents();

		const fixture = TestBed.createComponent(TestHostComponent);
		nativeElement = fixture.nativeElement;

		await fixture.whenStable();
		fixture.detectChanges();
	});

	it('should render projected content', (): void => {
		const adaptiveContainer: Element | null = nativeElement.querySelector(
			'[data-testid="adaptive-container"]',
		);
		const projectedContent: Element | null = nativeElement.querySelector(
			'[data-testid="projected-content"]',
		);

		expect(adaptiveContainer).not.toBeNull();
		expect(projectedContent).not.toBeNull();
		expect(projectedContent?.textContent).toBe('Test projected content');
	});
});
