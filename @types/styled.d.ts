/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

const colors: any = {};
const Theme = { ...colors };
type MyTheme = typeof Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
