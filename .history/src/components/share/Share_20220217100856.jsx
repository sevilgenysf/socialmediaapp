import React from 'react';
import './share.css';
import { PermMedia } from '@mui/icons-material';

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
						<div className="shareOption">
							<PermMedia className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
					</div>
					<div className="shareOptions">
						<div className="shareOption">
							<PermMedia className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
					</div>
					<div className="shareOptions">
						<div className="shareOption">
							<PermMedia className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
					</div>
					<div className="shareOptions">
						<div className="shareOption">
							<PermMedia className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Share;
