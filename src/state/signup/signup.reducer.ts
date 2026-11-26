import { ActionReducer, createReducer, on } from '@ngrx/store';

import { setSignupEmail, clear } from '@state/signup';

import { SignupState } from '@customTypes';

export const initialState: SignupState.ISignupState = { signupEmail: '' };

export const signupReducer: ActionReducer<SignupState.ISignupState> = createReducer(
	initialState,

	on(
		setSignupEmail,
		(state: SignupState.ISignupState, action: ReturnType<typeof setSignupEmail>) => {
			return {
				...state,
				signupEmail: action.signupEmail,
			};
		},
	),

	on(clear, (state: SignupState.ISignupState) => {
		return {
			...state,
			signupEmail: '',
		};
	}),
);
