import React from 'react';
import './share.css';

const Share = () => {
	return (
		<div className="share">
			<div className="containerWrapper">
				<div className="shareTop">
					<img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
					<input
						className="shareInput"
						type="text"
						placeholder="what is your mind"
					/>
				</div>
				<hr className="shareHr" />
				<div className="shareBottom">
					<div className="shareOptions">
						<div className="shareOption"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Share;
