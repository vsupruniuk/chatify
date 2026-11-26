import { ToastConfig } from '@ngxpert/hot-toast';

import { Color } from '@enums';

export const hotToastConfig: Partial<ToastConfig> = {
	position: 'top-right',
	error: {
		style: {
			backgroundColor: Color.ERROR,
			color: Color.WHITE,
		},
		iconTheme: {
			primary: Color.ERROR,
			secondary: Color.WHITE,
		},
	},
} as const;
