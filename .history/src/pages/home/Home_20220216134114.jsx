import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<Sidebar />
				<Feed />
				<Rightbar />
			</div>
		</>
	);
};

export default Home;
