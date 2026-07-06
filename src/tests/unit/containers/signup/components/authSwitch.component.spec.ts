import { IMockBuilderExtended, MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { AuthSwitch } from '@containers/signup/components';

import { Link } from '@components/navigation';

import { Route } from '@enums';

describe('Auth switch component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(AuthSwitch).mock(Link);
	});

	it('should render link component with provided inputs', (): void => {
		MockRender(AuthSwitch);

		const iconAppLogoComponent: Link = ngMocks.get(ngMocks.find(Link), Link);

		expect(iconAppLogoComponent).not.toBeNull();

		expect(iconAppLogoComponent.text).toBe('Log in');
		expect(iconAppLogoComponent.ariaLabel).toBe('Switch to login page');
		expect(iconAppLogoComponent.navigateTo).toBe(`/${Route.LOGIN}`);
	});
});
