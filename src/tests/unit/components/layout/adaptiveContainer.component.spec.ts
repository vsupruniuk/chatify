import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
	IMockBuilderExtended,
	MockBuilder,
	MockedComponentFixture,
	MockedDebugElement,
	MockRender,
	ngMocks,
} from 'ng-mocks';

import { AdaptiveContainer } from '@components/layout';

describe('Signup container component', (): void => {
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

	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(TestHostComponent);
	});

	it('should render projected content', (): void => {
		const fixture: MockedComponentFixture<TestHostComponent, TestHostComponent> =
			MockRender(TestHostComponent);

		const adaptiveContainer: MockedDebugElement<AdaptiveContainer> = ngMocks.find(
			fixture.point,
			AdaptiveContainer,
		);
		const nativeElement: Element = adaptiveContainer.nativeElement;

		const projectedContent: Element | null = nativeElement.querySelector(
			'[data-testid="projected-content"]',
		);

		expect(adaptiveContainer).not.toBeNull();
		expect(projectedContent).not.toBeNull();
		expect(projectedContent?.textContent).toBe('Test projected content');
	});
});
