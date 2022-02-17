import React from 'react';
import './closeFriend.css';

const CloseFriend = ({ user }) => {
	return (
		<li className="sidebarFriend">
			<img className="sidebarFriendImg" src={user.profilePicture} alt="" />
			<span className="sideBarFriendName">{user.username}</span>
		</li>
	);
};

export default CloseFriend;
