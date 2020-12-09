import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const EventCard = (props) => {
	const { event } = props;
	const creatorId = event.users_id;
	const [creatorUsername, setCreatorUsername] = useState('');

	const getCreatorUsername = (creatorId) => {
		axiosWithAuth()
			.get(`/users/${creatorId}`)
			.then((res) => {
				setCreatorUsername(res.data[0].username);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		getCreatorUsername(creatorId);
		// this comment will remove warning about empty array
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Link to={`/events/${event.id}`}>
			<div className='event-card'>
				<div>
					<h3>{event.event_name}</h3>
					<h4>
						On {event.dates} @ {event.time}
					</h4>
					<p>{event.description}</p>
					<p>(created by {creatorUsername})</p>
				</div>
			</div>
		</Link>
	);
};

export default EventCard;
