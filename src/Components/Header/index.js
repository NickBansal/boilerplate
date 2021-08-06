import React, { useState } from 'react';
import styled from 'styled-components';

import { breakPoints, spacing } from '../../utils/constants';
import HR from '../HR';
import logo from '../../assets/english-everyday-logo.png';

const Container = styled.div`
	max-width: ${breakPoints.smallDesktop};
	padding: ${spacing.s3};
	width: 100%;
	margin: 0 auto;
`;

const Hamburger = styled.div`
	width: 60px;
	height: 45px;
	position: relative;
	margin: 50px auto;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: 0.5s ease-in-out;
	-moz-transition: 0.5s ease-in-out;
	-o-transition: 0.5s ease-in-out;
	transition: 0.5s ease-in-out;
	cursor: pointer;

	> span {
		display: block;
		position: absolute;
		height: 9px;
		width: 100%;
		background: #d3531a;
		border-radius: 9px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;

		&:nth-child(1) {
			top: ${({ openNavbar }) => (openNavbar ? '18px' : '0')};
			transform: ${({ openNavbar }) =>
				openNavbar ? 'rotate(135deg)' : '0'};
		}

		&:nth-child(2) {
			top: 18px;
			opacity: ${({ openNavbar }) => (!openNavbar ? '1' : '0')};
			left: ${({ openNavbar }) => (openNavbar ? '-60px' : '0')};
		}

		&:nth-child(3) {
			top: ${({ openNavbar }) => (openNavbar ? '18px' : '36px')};
			transform: ${({ openNavbar }) =>
				openNavbar ? 'rotate(-135deg)' : '0'};
		}
	}
`;

const Header = () => {
	const [openNavbar, setOpenNavbar] = useState(false);

	return (
		<>
			<Container>
				<img src={logo} alt="business logo" />
				<Hamburger
					onClick={() => setOpenNavbar(!openNavbar)}
					openNavbar={openNavbar}
				>
					<span />
					<span />
					<span />
				</Hamburger>
			</Container>
			<HR />
		</>
	);
};

export default Header;
