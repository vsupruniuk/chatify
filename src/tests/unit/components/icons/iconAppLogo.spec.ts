import { IMockBuilderExtended, MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { IconAppLogo } from '@components/icons';

import { svgConfig } from '@configs';

describe('Icon app logo component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(IconAppLogo);
	});

	it('should render svg icon', (): void => {
		const fixture: MockedComponentFixture<IconAppLogo, IconAppLogo> = MockRender(IconAppLogo);

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('svg');
	});

	it('should use default value for heigh if input is not provided', (): void => {
		const fixture = MockRender(IconAppLogo, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('height')).toBe(String(svgConfig.appLogo.defaultHeigh));
	});

	it('should use default value for width if input is not provided', (): void => {
		const fixture = MockRender(IconAppLogo, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('width')).toBe(String(svgConfig.appLogo.defaultWidth));
	});

	it('should use height value from provided input', (): void => {
		const height = 28;

		const fixture = MockRender(IconAppLogo, { height });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('height')).toBe(String(height));
	});

	it('should use width value from provided input', (): void => {
		const width = 28;

		const fixture = MockRender(IconAppLogo, { width });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('width')).toBe(String(width));
	});
});
