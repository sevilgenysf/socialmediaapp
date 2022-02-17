import React from 'react';
import './rightbar.css';

const Rightbar = () => {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<div className="birthdayContainer">
					<img className="birthdayImg" src="assets/gift.png" alt="" />
					<span className="birthdayText"></span>
				</div>
			</div>
		</div>
	);
};

export default Rightbar;
