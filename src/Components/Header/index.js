import React, { useState } from 'react';
import styled from 'styled-components';

import { breakPoints, colors, spacing } from '../../utils/constants';
import HR from '../HR';
import logo from '../../assets/english-everyday-logo.png';

const Container = styled.div`
	max-width: ${breakPoints.smallDesktop};
	padding: ${spacing.s3};
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`;

const Hamburger = styled.div`
	width: 50px;
	height: 45px;
	position: relative;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: 0.5s ease-in-out;
	-moz-transition: 0.5s ease-in-out;
	-o-transition: 0.5s ease-in-out;
	transition: 0.5s ease-in-out;
	cursor: pointer;

	@media (min-width: ${breakPoints.mobileMax}) {
		display: none;
	}

	> span {
		display: block;
		position: absolute;
		height: 5px;
		width: 100%;
		background: ${colors.blue};
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
			top: ${({ openNavbar }) => (openNavbar ? '10px' : '0')};
			transform: ${({ openNavbar }) =>
				openNavbar ? 'rotate(135deg)' : '0'};
		}

		&:nth-child(2) {
			top: 13px;
			opacity: ${({ openNavbar }) => (!openNavbar ? '1' : '0')};
			left: ${({ openNavbar }) => (openNavbar ? '-60px' : '0')};
		}

		&:nth-child(3) {
			top: ${({ openNavbar }) => (openNavbar ? '11px' : '26px')};
			transform: ${({ openNavbar }) =>
				openNavbar ? 'rotate(-135deg)' : '0'};
		}
	}
`;

const Links = styled.div`
	display: none;

	@media (min-width: ${breakPoints.mobileMax}) {
		display: flex;
	}

	a {
		padding: ${spacing.s2};
		font-size: 1.2rem;
		color: ${colors.blue};
		text-decoration: none;
	}
`;

const MobileLinks = styled.div`
	display: flex;
	padding: ${spacing.s2};
    flex-direction: column;
	width: 100%;
	background: white;
	position: absolute;
	top 0;
	left: 0;
	height: 100%;
	animation-name: example;
  	animation-duration: 1s;

	@media (min-width: ${breakPoints.mobileMax}) {
		display: none;
	}

	@keyframes example {
		from {
			transform: translateX(100%)
		}
		to {
			transform: translateX(0)
		}
	}

	a {
		font-size: 1.4rem;
    	padding: ${spacing.s2} 0;
	}
`;

const Close = styled.span`
	position: absolute;
	right: 50px;
	top: 20px;
	font-size: 30px;
	cursor: pointer;
	color: ${colors.blue};
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
				<Links>
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Courses</a>
					<a href="/">Blog</a>
					<a href="/">Contact</a>
				</Links>
			</Container>

			<HR />
			{openNavbar && (
				<MobileLinks>
					<Close onClick={() => setOpenNavbar(false)}>X</Close>
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Courses</a>
					<a href="/">Blog</a>
					<a href="/">Contact</a>
				</MobileLinks>
			)}
		</>
	);
};

export default Header;
