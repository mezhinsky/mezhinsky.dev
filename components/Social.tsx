import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	word-break: break-all;

	a {
		color: ${({ theme: { colors } }) => colors.text};
		text-decoration: none;

		:hover,
		:focus {
			.sub {
				color: ${({ theme: { colors } }) => colors.a};
				text-decoration: underline;
			}

			cursor: pointer;
			color: ${({ theme: { colors } }) => colors.text};
		}
	}

	font-size: 15px;

	.item {
	}

	@media only screen and (min-width: 600px) {
	}

	@media only screen and (min-width: 900px) {
	}

	@media only screen and (min-width: 1280px) {
	}
`;

const Social: React.FunctionComponent<any> = () => {
	return (
		<Wrapper>
			<div className="item">
				<a href="https://twitter.com/mezhinsky">
					Follow me on <span className="sub">Twitter</span>
				</a>
			</div>
			<div className="item">
				<a href="https://t.me/mezhinsky">
					Chat on <span className="sub">Telegram</span>
				</a>
			</div>
			<div className="item">
				<a href="mailto:mezhinsky.dmitry@gmail.com">
					Send me <span className="sub">Email</span>
				</a>
			</div>
		</Wrapper>
	);
};

export default Social;
