import React from 'react';
import './online.css';

const Online = ({ user }) => {
	return (
		<div>
			<li className="rightbarFriend">
				<div className="rightbarProfileImgContainer">
					<img
						className="rightbarProfileImg"
						src="assets/person/3.jpeg"
						alt=""
					/>
					<span className="rightbarOnline"></span>
				</div>
				<span className="rightbarUsername">Yusuf Sevilgen</span>
			</li>
		</div>
	);
};

export default Online;
