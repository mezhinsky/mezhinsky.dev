import { readableColor } from 'polished';

export const colors = {
	TATOOINE_ONE: '#e39e5d',
	SANDCRAWLER: '913f0d',
	SOMERED: '#fde668',
	BLACKISH: '#001730',
	BLACK: '#363636',
	WHITE: '#fefefe',
};

export const vars = {
	main: colors.WHITE,
	second: colors.TATOOINE_ONE,
	contrast: readableColor(colors.SOMERED, colors.BLACK, colors.WHITE, false),
	black: colors.BLACK,
};

export default colors;
