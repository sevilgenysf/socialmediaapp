import React from 'react';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Yusufsocial</span>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<SearchIcon />
					<input type="text" placeholder="Search" className="searchInput" />
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLink">
					<span className="topbarLink">Home</span>
					<span className="topbarLink">Timeline</span>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
