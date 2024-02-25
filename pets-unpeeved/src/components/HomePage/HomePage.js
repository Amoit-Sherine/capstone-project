import React, { useState } from 'react';
import likeIcon from '../../assets/like.png';
import dislikeIcon from '../../assets/dislike.png';
import commentIcon from '../../assets/comment.png';
import '../../styles/components/HomePage.scss';


function HomePage() {
    const [posts, setPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: posts.length + 1,
            content: newPostContent,
            username: 'User',
            avatarURL: '../../assets/male-icons/male3.jpeg',
            likes: 0,
            dislikes: 0,
            comments: [],
        };
        setPosts([newPost, ...posts]);
        setNewPostContent('');
    };

    const handleInteraction = (postId, type) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return { ...post, [type]: post[type] + 1 };
            }
            return post;
        }));
    };

    const addCommentToPost = (postId, commentText) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                const updatedComments = [...post.comments, commentText];
                return { ...post, comments: updatedComments };
            }
            return post;
        }));
    };

    return (
        <div className="home-page">
            <form onSubmit={handlePostSubmit} className="post-form">
                <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="post-input"
                    placeholder="What's happening?"
                />
                <button type="submit" className="post-submit-btn">Post</button>
            </form>
            <div className="posts">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <img src={post.avatarURL} alt="User avatar" className="post-avatar" />
                            <span className="post-username">{post.username}</span>
                        </div>
                        <p className="post-content">{post.content}</p>
                        <div className="post-interactions">
                            <img src={likeIcon} alt="Like" onClick={() => handleInteraction(post.id, 'likes')} className="interaction-icon" />
                            <span>{post.likes}</span>
                            <img src={dislikeIcon} alt="Dislike" onClick={() => handleInteraction(post.id, 'dislikes')} className="interaction-icon" />
                            <span>{post.dislikes}</span>
                            <img src={commentIcon} alt="Comment" className="interaction-icon" />
                            {/* Future implementation for displaying and adding comments */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
