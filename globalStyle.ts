import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
  };
  #__next {

  };
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 1.1rem;
	  line-height: 26px;
    font-weight: 400;
    color: ${({ theme: { colors } }) => colors.text};
	  background-color: ${({ theme: { colors } }) => colors.backGround};
  }
  /* ::selection {
    background-color: ${({ theme: { colors } }) => colors.second};
  } */

	.medium-zoom--opened .notion-header {
		z-index: 0;
	}
`;
