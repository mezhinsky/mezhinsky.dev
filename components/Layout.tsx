import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';

import styled, { ThemeProvider } from 'styled-components';

import { Normalize } from 'styled-normalize';
import Logo from '../components/Logo';
import Avatar from '../components/Avatar';
import Social from '../components/Social';

import { GlobalStyle } from '../globalStyle';

import { MezhinskyTheme } from '../themes';
import Typography from './Typography';

const Wrapper = styled.div`
	/* display: block; */
`;

const Container = styled.div`
	display: grid;

	margin: 0 auto;
	padding-top: 50px;

	padding-left: 10px;
	padding-right: 10px;

	grid-template-columns: auto;

	grid-template-areas:
		'sidebar'
		'main';

	max-width: 1000px;

	.avatar-wrap {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.logo-wrap {
		padding-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.menu-wrap {
		margin-top: 40px;
	}

	.social-wrap {
		padding-top: 20px;
	}

	.switch {
		margin-top: 20px;
	}

	@media only screen and (min-width: 600px) {
		/* padding-left: 15px;
		padding-right: 15px; */

		.menu-wrap {
			margin-top: 60px;
		}
	}

	@media only screen and (min-width: 900px) {
		padding-top: 50px;
		grid-template-columns: 200px auto;
		grid-column-gap: 20px;
		grid-template-areas: 'sidebar main';
		.avatar-wrap {
			flex-direction: column;
		}
		.logo-wrap {
			margin-top: 10px;
			padding-left: 0;
		}

		.menu-wrap {
			margin-top: 40px;
		}
	}
`;

const Side = styled.aside`
	grid-area: sidebar;
	padding: 0;
	margin: 0 10px;

	@media only screen and (min-width: 900px) {
		padding: 0 10px 0;
		margin: 0;
	}
`;
const Content = styled.article`
	grid-area: main;
	width: auto;
`;

const Nav = styled.nav`
	.active {
		a {
			color: ${({ theme: { colors } }) => colors.text};
			border-bottom: 2px solid ${({ theme: { colors } }) => colors.border};
		}
	}
`;

const Menu = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	width: calc(100vw - 40px);
	@media only screen and (min-width: 900px) {
		display: block;
		width: 100%;
	}
`;

const MenuItem = styled.li.attrs((props: any) => ({
	before: props.before,
}))`
	.active {
		a {
			color: ${({ theme: { colors } }) => colors.text};
			border-bottom: 2px solid ${({ theme: { colors } }) => colors.border};
		}
	}

	margin: 0 0 5px;
	display: flex;
	align-items: center;
	padding: 0 10px;

	&:first-child {
		padding-left: 0px;
	}

	&:last-child {
		padding-right: 0px;
	}

	@media only screen and (min-width: 900px) {
		padding: 0;
	}

	&:before {
		display: block;
		content: '${(props) => props.before}.';
		font-size: 17px;
		font-family: monospace;
	}

	cursor: pointer;

	a {
		position: relative;
		top: 2px;
		color: ${({ theme: { colors } }) => colors.a};
		border-bottom: 2px solid transparent;
		display: inline-flex;
		text-decoration: none;
		align-items: center;
		word-spacing: 1px;
		margin: 0 5px;

		:hover,
		:focus {
			color: ${({ theme: { colors } }) => colors.text};
			text-decoration: none;
			border-bottom: 2px solid ${({ theme: { colors } }) => colors.border};
		}
	}
`;

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<ThemeProvider theme={MezhinskyTheme}>
			<Normalize />
			<GlobalStyle />

			<Wrapper>
				<Container>
					<Content>
						<Typography>{children}</Typography>
					</Content>
					<Side>
						<div className="avatar-wrap">
							<Link href="/">
								<a href="">
									<Avatar />
								</a>
							</Link>
							<div className="logo-wrap">
								<Logo />
							</div>
						</div>
						<div className="menu-wrap">
							<Nav>
								<Menu>
									<MenuItem before="00" className={router.pathname == '/' ? 'active' : ''}>
										<Link href="/">
											<a>Home</a>
										</Link>
									</MenuItem>
									<MenuItem before="02" className={router.pathname == '/about' ? 'active' : ''}>
										<Link href="/about">
											<a>About</a>
										</Link>
									</MenuItem>
								</Menu>
							</Nav>
							<div className="social-wrap">
								<Social />
							</div>
						</div>
					</Side>
				</Container>
			</Wrapper>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.any,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Layout;
