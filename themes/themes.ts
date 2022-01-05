import { lighten, darken } from 'polished';
import { vars } from './colors';

export const MezhinskyTheme = {
	colors: {
		text: vars.black,
		a: darken(0.5, vars.second),
		hover: lighten(0.3, vars.second),
		border: vars.black,
		backGround: vars.main,
		avatarBackground: vars.main,
		mainColor: darken(0.02, vars.main),
		social: darken(0.2, vars.main),
		second: vars.second,
	},
};
