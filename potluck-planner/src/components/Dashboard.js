import axiosWithAuth from '../utils/axiosWithAuth';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventCard from './EventCard';

// components
import Header from './Header';

const Dashboard = (props) => {
	const [events, setEvents] = useState([]);
	const params = useParams();

	// const getUserInfo = () => {
	// 	const { id } = params;
	// 	console.log('id', id);
	// 	axiosWithAuth()
	// 		.get(`/users/${id}/events`)
	// 		.then((res) => {
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	const getEvents = () => {
		const { id } = params;
		axiosWithAuth()
			.get(`/users/${id}/events`)
			.then((res) => {
				// console.log(res);
				setEvents(res.data.events);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		// getUserInfo();
		getEvents();
		// this comment will remove warning about empty array
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Header />
			{/* <Header userInfo={userInfo} /> */}
			<div className='dashboard'>
				<div className='dashboard-column'>
					<h2>Collabs</h2>
					{events.map((item) => {
						return <EventCard key={item.id} event={item} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
