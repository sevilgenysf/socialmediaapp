import React from 'react';
import './feed.css';
import Share from './Share';

const Feed = () => {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
			</div>
		</div>
	);
};

export default Feed;
