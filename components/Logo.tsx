import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
	font-size: 25px;
	letter-spacing: -0.5px;
	line-height: 28px;
	font-weight: 800;
	border: 1px solid ${({ theme: { colors } }) => colors.border};
	height: 80px;
	width: 80px;
	padding: 10px;
	display: flex;
	align-items: center;
	color: ${({ theme: { colors } }) => colors.text};

	@media only screen and (min-width: 600px) {
		height: 110px;
		width: 110px;
		font-size: 32px;
	}

	@media only screen and (min-width: 900px) {
		height: 100px;
		width: 100px;
		font-size: 30px;
		line-height: 35px;
	}
`;

const Logo: React.FunctionComponent<any> = () => {
	return (
		<LogoWrapper>
			<span>
				Dmitry
				<br />
				Mezhinsky
			</span>
		</LogoWrapper>
	);
};

export default Logo;
