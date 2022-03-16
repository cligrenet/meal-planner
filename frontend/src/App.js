import React, { useState, useEffect } from 'react';
import AppRoutes from './Routes';
import { AppContext } from './lib/contextLib';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import onError from './lib/errorLib';
import './App.css';
// import axios from 'axios';
// import { API_URL } from './constants/index';

function App() {
	const [isAuthenticating, setIsAuthenticating] = useState(true);
	const [isAuthenticated, userHasAuthenticated] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		onLoad();
	}, []);

	// TODO
	async function onLoad() {
		try {
			//   await Auth.currentSession();
			userHasAuthenticated(true);
		} catch (err) {
			if (err !== 'No current user') {
				// alert(err);
				onError(err);
			}
		}

		setIsAuthenticating(false);
	}

	// TODO: Add logout functionality
	function handleLogout() {
		// await Auth.signOut();

		userHasAuthenticated(false);

		// Redirect to login after logout
		navigate('/login');
	}

	return (
		!isAuthenticating && (
			<div className="App container py-3">
				<Navbar
					collapseOnSelect
					bg="light"
					expand="md"
					className="mb-3"
				>
					<LinkContainer to="/">
						<Navbar.Brand className="font-weight-bold text-muted">
							<h1>Meal Planner</h1>
						</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle />

					<Navbar.Collapse className="justify-content-end">
						<Nav>
							{isAuthenticated ? (
								// <LinkContainer to="/logout">
								// </LinkContainer>
								<Nav.Link onClick={handleLogout}>
									Logout
								</Nav.Link>
							) : (
								<>
									<LinkContainer to="/signup">
										<Nav.Link>Signup</Nav.Link>
									</LinkContainer>
									<LinkContainer to="/login">
										<Nav.Link>Login</Nav.Link>
									</LinkContainer>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<AppContext.Provider
					value={{ isAuthenticated, userHasAuthenticated }}
				>
					<AppRoutes />
				</AppContext.Provider>
			</div>
		)
	);
}

export default App;
