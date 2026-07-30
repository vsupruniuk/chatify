import { Type } from '@angular/core';

import {
	IconCheckMark,
	IconUser,
	IconAtSign,
	IconEye,
	IconEyeCrossed,
	IconLock,
	IconMail,
} from '@components/icons';

import { IconsTypes } from '@customTypes';

export const inputIconsConfig: Record<IconsTypes.TIconName, Type<unknown>> = {
	atSign: IconAtSign,
	checkMark: IconCheckMark,
	eye: IconEye,
	eyeCrossed: IconEyeCrossed,
	lock: IconLock,
	mail: IconMail,
	user: IconUser,
} as const;
