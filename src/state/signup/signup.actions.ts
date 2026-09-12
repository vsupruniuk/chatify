import { ActionCreator, createAction, props } from '@ngrx/store';

import { SignupState } from '@customTypes';

export const setSignupEmail = createAction(
	'[Signup state] Set signup email',
	props<SignupState.ISignupState>(),
);

export const clear: ActionCreator = createAction('[Signup State] Clear');
