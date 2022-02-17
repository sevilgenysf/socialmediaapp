import React from 'react';
import './online.css';

const Online = ({ user }) => {
	return (
		<div>
			<li className="rightbarFriend">
				<div className="rightbarProfileImgContainer">
					<img className="rightbarProfileImg" src={user.profile_pic} alt="" />
					<span className="rightbarOnline"></span>
				</div>
				<span className="rightbarUsername">{user.username}</span>
			</li>
		</div>
	);
};

export default Online;
