import {
	IMockBuilderExtended,
	MockBuilder,
	MockedComponentFixture,
	MockRender,
	ngMocks,
} from 'ng-mocks';

import { Link } from '@components/navigation';
import { provideRouter, RouterLink } from '@angular/router';

describe('Link component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(Link).provide(
			provideRouter([
				{
					path: '/login',
					pathMatch: 'full',
					redirectTo: 'login',
				},
			]),
		);
	});

	it('should render a element', (): void => {
		const fixture: MockedComponentFixture<Link, Link> = MockRender(Link);

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('A');
	});

	it('should use navigateTo from provided input', (): void => {
		const navigateTo: string = `/login`;
		const text: string = 'Log in';

		MockRender(Link, { navigateTo, text });

		const routerLink = ngMocks.findInstance(RouterLink);

		expect(routerLink.routerLink).toBe(navigateTo);
	});

	it('should use text from provided input', (): void => {
		const navigateTo: string = `/login`;
		const text: string = 'Log in';

		const fixture = MockRender(Link, { navigateTo, text });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.textContent.trim()).toBe(text);
	});

	it('should use ariaLabel if its provided in input', (): void => {
		const navigateTo: string = `/login`;
		const text: string = 'Log in';
		const ariaLabel: string = 'Navigate to login page';

		const fixture = MockRender(Link, { navigateTo, text, ariaLabel });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('aria-label')).toBe(ariaLabel);
	});
});
