import { RouterOutlet } from '@angular/router';

import {
	IMockBuilderExtended,
	MockBuilder,
	MockedComponentFixture,
	MockRender,
	ngMocks,
} from 'ng-mocks';

import { AppComponent } from '../../../app.component';

describe('App component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(AppComponent).mock(RouterOutlet);
	});

	it('should render router outlet', (): void => {
		const fixture: MockedComponentFixture<AppComponent, AppComponent> = MockRender(AppComponent);

		const outlet = ngMocks.find(fixture.point, RouterOutlet);

		expect(outlet).not.toBeNull();
	});
});
