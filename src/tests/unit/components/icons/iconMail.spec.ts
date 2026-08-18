import { IMockBuilderExtended, MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { IconMail } from '@components/icons';

import { svgConfig } from '@configs';

import { Color } from '@enums';

describe('Icon mail component', (): void => {
	beforeEach((): IMockBuilderExtended => {
		return MockBuilder(IconMail);
	});

	it('should render svg icon', (): void => {
		const fixture: MockedComponentFixture<IconMail, IconMail> = MockRender(IconMail);

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.tagName).toBe('svg');
	});

	it('should use default value for heigh if input is not provided', (): void => {
		const fixture = MockRender(IconMail, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('height')).toBe(String(svgConfig.mail.defaultHeigh));
	});

	it('should use default value for width if input is not provided', (): void => {
		const fixture = MockRender(IconMail, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('width')).toBe(String(svgConfig.mail.defaultWidth));
	});

	it('should use default value for stroke color if input is not provided', (): void => {
		const fixture = MockRender(IconMail, {});

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();

		const children: Element[] = child ? [...child.children] : [];

		children.forEach((nestedChild: Element) => {
			expect(nestedChild.getAttribute('stroke')).toBe(svgConfig.mail.defaultColor);
		});
	});

	it('should use height value from provided input', (): void => {
		const height: number = 28;

		const fixture = MockRender(IconMail, { height });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('height')).toBe(String(height));
	});

	it('should use width value from provided input', (): void => {
		const width: number = 28;

		const fixture = MockRender(IconMail, { width });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();
		expect(child?.getAttribute('width')).toBe(String(width));
	});

	it('should use color value for stroke color from provided input', (): void => {
		const color: Color = Color.ERROR_LIGHT;

		const fixture = MockRender(IconMail, { color });

		const host: HTMLElement = fixture.point.nativeElement as HTMLElement;
		const child: Element | null = host.firstElementChild;

		expect(child).not.toBeNull();

		const children: Element[] = child ? [...child.children] : [];

		children.forEach((nestedChild: Element) => {
			expect(nestedChild.getAttribute('stroke')).toBe(Color.ERROR_LIGHT);
		});
	});
});
