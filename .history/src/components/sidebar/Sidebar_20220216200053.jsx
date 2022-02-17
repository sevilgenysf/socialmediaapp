import React from 'react';
import './sidebar.css';
import { RssFeed } from '@mui/icons-material';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeed />
						<span className="sidebarListItemText"></span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
