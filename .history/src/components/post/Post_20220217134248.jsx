import React, { useState } from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';

const Post = ({ post }) => {
	const [like, setLike] = useState(post.like);
	const [isliked, setIsLiked] = useState(false);
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
							alt=""
						/>
						<span className="postUserName">
							{Users.filter((u) => u.id === post.userId)[0].username}
						</span>
						<span className="postData">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText"> {post?.desc} </span>
					<img className="postImg" src={post.photo} alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src="assets/like.png" alt="" />
						<img className="likeIcon" src="assets/heart.png" alt="" />
						<span className="postLikeCounter">{like} people liked it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;