import styled from 'styled-components';
import { darken } from 'polished';

const Typography = styled.div`
	color: ${({ theme: { colors } }) => colors.text};

	/* typo starts here */

	a {
		color: ${({ theme: { colors } }) => colors.a};
		text-decoration: underline;
		:hover,
		:focus {
			color: ${({ theme: { colors } }) => darken(0.1, colors.second)};
		}
	}

	//code
	pre {
		font-size: 14px;
	}

	pre[class*='notion-code'] {
		border-radius: 4px;
		padding: 10px;
		code {
			white-space: pre-wrap;
			word-break: break-all !important;
		}
	}

	@media only screen and (min-width: 900px) {
		margin-top: 0px;
	}
`;


export default Typography;
