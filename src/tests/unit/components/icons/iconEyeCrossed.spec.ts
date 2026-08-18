import { IMockBuilderExtended, MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { IconEyeCrossed } from '@components/icons';

import { svgConfig } from '@configs';

describe('Icon eye crossed component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(IconEyeCrossed);
	});

	it('should render svg icon', (): void => {
		const fixture: MockedComponentFixture<IconEyeCrossed, IconEyeCrossed> =
			MockRender(IconEyeCrossed);

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('svg');
	});

	it('should use default value for heigh if input is not provided', (): void => {
		const fixture = MockRender(IconEyeCrossed, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('height')).toBe(String(svgConfig.eyeCrossed.defaultHeigh));
	});

	it('should use default value for width if input is not provided', (): void => {
		const fixture = MockRender(IconEyeCrossed, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('width')).toBe(String(svgConfig.eyeCrossed.defaultWidth));
	});

	it('should use height value from provided input', (): void => {
		const height: number = 28;

		const fixture = MockRender(IconEyeCrossed, { height });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('height')).toBe(String(height));
	});

	it('should use width value from provided input', (): void => {
		const width: number = 28;

		const fixture = MockRender(IconEyeCrossed, { width });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('width')).toBe(String(width));
	});
});
