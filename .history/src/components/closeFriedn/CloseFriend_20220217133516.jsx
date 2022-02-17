import React from 'react';
import './closeFriend.css';

const CloseFriend = ({ user }) => {
	return (
		<li className="sidebarFriend">
			<img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
			<span className="sideBarFriendName">Jane Doe</span>
		</li>
	);
};

export default CloseFriend;
