import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';

const Post = () => {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src="/assets/person/1.jpeg"
							alt=""
						/>
						<span className="postUserName">Yusuf Sevilgen</span>
						<span className="postData">5 mins ago</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">Hey! Its my first post</span>
					<img className="postImg" src="assets/post/1.jpeg" alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft"></div>
					<div className="postBottomRight"></div>
				</div>
			</div>
		</div>
	);
};

export default Post;
