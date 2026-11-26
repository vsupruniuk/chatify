import {
	IMockBuilderExtended,
	MockBuilder,
	MockedComponentFixture,
	MockRender,
	ngMocks,
} from 'ng-mocks';

import { SignupContainer } from '@containers/signup';
import { AuthSwitch, SignupForm } from '@containers/signup/components';

import { AdaptiveContainer } from '@components/layout';

describe('Signup container component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(SignupContainer).mock(SignupForm).mock(AuthSwitch).mock(AdaptiveContainer);
	});

	it('should render top level element as tag section', (): void => {
		const fixture: MockedComponentFixture<SignupContainer, SignupContainer> =
			MockRender(SignupContainer);

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('SECTION');
	});

	it('should render signup container title', (): void => {
		const fixture: MockedComponentFixture<SignupContainer, SignupContainer> =
			MockRender(SignupContainer);

		const child: Element | null = fixture.point.nativeElement.querySelector(
			'h1[data-testid="signup-container-title"]',
		);

		expect(child).not.toBeNull();
		expect(child?.textContent.trim()).toBe('Create your account');
	});

	it('should render signup form component', (): void => {
		const fixture: MockedComponentFixture<SignupContainer, SignupContainer> =
			MockRender(SignupContainer);

		const child = ngMocks.find(fixture.point, SignupForm);

		expect(child).not.toBeNull();
	});

	it('should render auth switch component', (): void => {
		const fixture: MockedComponentFixture<SignupContainer, SignupContainer> =
			MockRender(SignupContainer);

		const child = ngMocks.find(fixture.point, AuthSwitch);

		expect(child).not.toBeNull();
	});
});
