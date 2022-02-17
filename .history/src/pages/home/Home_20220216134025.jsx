import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
	return (
		<div className="">
			<Topbar />
			<div className="homeContainer"></div>
			<Sidebar />
		</div>
	);
};

export default Home;
