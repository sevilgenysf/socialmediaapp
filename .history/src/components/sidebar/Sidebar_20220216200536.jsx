import React from 'react';
import './sidebar.css';
import {
	RssFeed,
	Chat,
	PlayCircleFilledOutlined,
	Group,
	Bookmark,
	HelpOutline,
	WorkOutline,
	Event,
	School
} from '@mui/icons-material';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<Chat className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<PlayCircleFilledOutlined className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<Group className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<Bookmark className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<HelpOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<WorkOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<Event className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<School className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
