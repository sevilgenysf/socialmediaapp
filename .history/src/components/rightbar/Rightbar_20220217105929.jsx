import React from 'react';
import './rightbar.css';

const Rightbar = () => {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<div className="birthdayContainer">
					<img className="birthdayImg" src="assets/gift.png" alt="" />
					<span className="birthdayText">
						<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
					</span>
				</div>
				<img className="rightbarAd" src="" alt="" />
			</div>
		</div>
	);
};

export default Rightbar;
