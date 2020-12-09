import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const { push } = useHistory();

	const handleLogOut = () => {
		localStorage.removeItem('token');
		push(`/`);
	};

	if (localStorage.getItem('token') === null) {
		return (
			<header>
				<Link to='/'>
					<h1>&#123;evnt&#125;</h1>
				</Link>
				<nav>
					<Link to='/'>home</Link>
					<Link to='/about'>about</Link>
					<Link to='/test-log-in'>log in</Link>
					<Link to='/sign-up' className='bordered-btn'>
						sign up
					</Link>
				</nav>
			</header>
		);
	} else {
		return (
			<header>
				<Link to='/'>
					<h1>&#123;evnt&#125;</h1>
				</Link>
				<nav>
					<Link to={`/create-event`} className='bordered-btn'>
						create event
					</Link>
					<Link to='/join-event' className='bordered-btn'>
						join event
					</Link>
					<button onClick={handleLogOut} className='bordered-btn'>
						log out
					</button>
				</nav>
			</header>
		);
	}
};

export default Header;
