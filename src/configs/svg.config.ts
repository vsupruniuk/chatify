import { Color } from '@enums';

export const svgConfig = {
	appLogo: {
		defaultWidth: 48,
		defaultHeigh: 48,
	},
	user: {
		defaultWidth: 48,
		defaultHeigh: 48,
		defaultColor: Color.TEXT_FAINT,
	},
	checkMark: {
		defaultWidth: 48,
		defaultHeigh: 48,
	},
	exclamationMark: {
		defaultWidth: 48,
		defaultHeigh: 48,
	},
} as const;
