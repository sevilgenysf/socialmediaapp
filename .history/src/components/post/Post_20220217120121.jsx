import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';

const Post = ({ post }) => {
	console.log(post);
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
						<span className="postData">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText"> {post?.desc} </span>
					<img className="postImg" src="assets/post/1.jpeg" alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src="assets/like.png" alt="" />
						<img className="likeIcon" src="assets/heart.png" alt="" />
						<span className="postLikeCounter">32 people liked it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">9 comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
