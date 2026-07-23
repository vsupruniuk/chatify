import { Type } from '@angular/core';

import { IconCheckMark, IconUser } from '@components/icons';

import { IconsTypes } from '@customTypes';

export const inputIconsConfig: Record<IconsTypes.TIconName, Type<unknown>> = {
	user: IconUser,
	checkMark: IconCheckMark,
} as const;
