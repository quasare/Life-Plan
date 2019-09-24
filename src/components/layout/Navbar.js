import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import './Navbar.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = props => {
	const { auth, profile } = props;
	useEffect(() => {
		var elem = document.querySelector('.sidenav');
		var instance = M.Sidenav.init(elem, {
			edge       : 'left',
			inDuration : 250
		});
	});
	// console.log(auth);
	const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
	return (
		<div>
			<nav className="nav-wrapper">
				<div className="container ">
					<div className="">
						<a data-target="mobile-demo" class="sidenav-trigger">
							<i class="material-icons">menu</i>
						</a>
						<Link to="/" className="brand-logo">
							LifePlan
						</Link>
						<div className="hide-on-med-and-down">
							<div className="">{links}</div>
						</div>
					</div>
				</div>
			</nav>
			<ul className="sidenav" id="mobile-demo">
				{links}
			</ul>
		</div>
	);
};

const mapStateToProps = state => {
	// console.log(state);

	return {
		auth    : state.firebase.auth,
		profile : state.firebase.profile
	};
};

export default connect(mapStateToProps)(Navbar);
