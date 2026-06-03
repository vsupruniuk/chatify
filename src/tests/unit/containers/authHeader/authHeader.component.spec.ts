import {
	IMockBuilderExtended,
	MockBuilder,
	MockedComponentFixture,
	MockRender,
	ngMocks,
} from 'ng-mocks';

import { AuthHeader } from '@containers';

import { IconAppLogo } from '@components/icons';

describe('Auth Header component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(AuthHeader).mock(IconAppLogo);
	});

	it('should render top level element as tag header', (): void => {
		const fixture: MockedComponentFixture<AuthHeader, AuthHeader> = MockRender(AuthHeader);

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('HEADER');
	});

	it('should render app logo component with provided inputs', (): void => {
		MockRender(AuthHeader);

		const iconAppLogoComponent: IconAppLogo = ngMocks.get(ngMocks.find(IconAppLogo), IconAppLogo);

		expect(iconAppLogoComponent).not.toBeNull();
		expect(iconAppLogoComponent.height).toBe(40);
		expect(iconAppLogoComponent.width).toBe(40);
	});
});
