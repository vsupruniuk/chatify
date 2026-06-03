import {
	IMockBuilderExtended,
	MockBuilder,
	MockedComponentFixture,
	MockedDebugElement,
	MockRender,
	ngMocks,
} from 'ng-mocks';

import { SignupPage } from '@pages';

import { AuthHeader } from '@containers';
import { SignupContainer } from '@containers/signup';

describe('Signup page component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(SignupPage).mock(SignupContainer).mock(AuthHeader);
	});

	it('should render top level element as tag main', (): void => {
		const fixture: MockedComponentFixture<SignupPage, SignupPage> = MockRender(SignupPage);

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('MAIN');
	});

	it('should render signup container', (): void => {
		const fixture: MockedComponentFixture<SignupPage, SignupPage> = MockRender(SignupPage);

		const child: MockedDebugElement<SignupContainer> = ngMocks.find(fixture.point, SignupContainer);

		expect(child).not.toBeNull();
	});

	it('should render auth header', (): void => {
		const fixture: MockedComponentFixture<SignupPage, SignupPage> = MockRender(SignupPage);

		const child: MockedDebugElement<AuthHeader> = ngMocks.find(fixture.point, AuthHeader);

		expect(child).not.toBeNull();
	});
});
