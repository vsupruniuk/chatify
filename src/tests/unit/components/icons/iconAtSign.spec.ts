import { IMockBuilderExtended, MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { IconAtSign } from '@components/icons';

import { svgConfig } from '@configs';

import { Color } from '@enums';

describe('Icon at sign component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(IconAtSign);
	});

	it('should render svg icon', (): void => {
		const fixture: MockedComponentFixture<IconAtSign, IconAtSign> = MockRender(IconAtSign);

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('svg');
	});

	it('should use default value for heigh if input is not provided', (): void => {
		const fixture = MockRender(IconAtSign, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('height')).toBe(String(svgConfig.atSign.defaultHeigh));
	});

	it('should use default value for width if input is not provided', (): void => {
		const fixture = MockRender(IconAtSign, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('width')).toBe(String(svgConfig.atSign.defaultWidth));
	});

	it('should use default value for stroke color if input is not provided', (): void => {
		const fixture = MockRender(IconAtSign, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();

		const children: Element[] = child ? [...child.querySelectorAll('path[stroke]')] : [];

		children.forEach((nestedChild: Element) => {
			expect(nestedChild.getAttribute('stroke')).toBe(svgConfig.atSign.defaultColor);
		});
	});

	it('should use height value from provided input', (): void => {
		const height: number = 28;

		const fixture = MockRender(IconAtSign, { height });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('height')).toBe(String(height));
	});

	it('should use width value from provided input', (): void => {
		const width: number = 28;

		const fixture = MockRender(IconAtSign, { width });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('width')).toBe(String(width));
	});

	it('should use color value for stroke color from provided input', (): void => {
		const color: Color = Color.ERROR_LIGHT;

		const fixture = MockRender(IconAtSign, { color });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();

		const children: Element[] = child ? [...child.querySelectorAll('path[stroke]')] : [];

		children.forEach((nestedChild: Element) => {
			expect(nestedChild.getAttribute('stroke')).toBe(Color.ERROR_LIGHT);
		});
	});
});
