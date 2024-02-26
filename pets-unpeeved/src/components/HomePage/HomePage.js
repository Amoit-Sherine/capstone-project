import React, { useState, useEffect } from 'react';
import likeIcon from '../../assets/like.png';
import dislikeIcon from '../../assets/dislike.png';
import commentIcon from '../../assets/comment.png';
import '../../styles/components/HomePage.scss';

//import images
import male from "../../assets/male-icons/man2.jpeg";
import male2 from "../../assets/male-icons/male1.jpeg";
import male3 from "../../assets/male-icons/male3.jpeg" ;
import female from "../../assets/female-icons/female1.jpeg" ;

// Mock user data and posts
const mockUsers = [
    { username: "Alice", avatar: male },
    { username: "Bob", avatar: male2 },
    { username: "Charlie", avatar: male3 },
    { username: "Dana", avatar: female },
];

const mockPosts = [
    { id: 1, username: "Alice", avatar: male, text: "What a lovely day! Lorem Ipsum is simply dummy text of the printing and typesetting industry.Proin eleifend eu ligula a vulputate. Morbi aliquam tortor at nunc venenatis, id viverra mauris lacinia. Suspendisse ex magna, venenatis vitae nulla in, sodales tincidunt urna.", likes: 0, dislikes: 0, comments: [] },
    { id: 2, username: "Bob", avatar: male2, text: "Just adopted a new pet! Aenean pretium vitae est quis dictum. Mauris ullamcorper elementum tortor eget bibendum. Maecenas porta dapibus dui, ac placerat ipsum sollicitudin eu. Etiam dapibus arcu quis enim efficitur tincidunt. Vivamus aliquet interdum vestibulum.", likes: 0, dislikes: 0, comments: [] },
    { id: 3, username: "Charlie", avatar: male3, text: "Looking for pet care tips.", likes: 0, dislikes: 0, comments: [] },
    { id: 4, username: "Dana", avatar: female, text: "Happy to join this community! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique non ante vel semper. Nam varius sodales sapien non facilisis. Morbi laoreet dui a odio pellentesque vehicula.", likes: 0, dislikes: 0, comments: [] },
];


function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Initialize with mock posts
        setPosts(mockPosts);
    }, []);

    const handlePostSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const postText = formData.get('postText');
        // for Demo purposes
        const newPost = {
            id: posts.length + 1,
            username: "Iam User",
            avatar: female,
            text: postText,
            likes: 0,
            dislikes: 0,
            comments: [],
        };
        setPosts([newPost, ...posts]);
        event.target.reset(); // Reset the form after submission
    };




    const handleCommentSubmit = (postId, commentText) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                post.comments.push(commentText);
            }
            return post;
        }));
    };

    const handleLikeDislike = (postId, isLike) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                if (isLike) post.likes += 1;
                else post.dislikes += 1;
            }
            return post;
        }));
    };

    return (
        <div className="home-page">
            <form onSubmit={handlePostSubmit} className="post-form">
                <textarea name="postText" placeholder="What's on your mind?" className="form-input" required></textarea>
                <button type="submit" className="action-btn save">Post</button>
            </form>
            <div className="posts">
                {posts.map((post) => (
                    <div key={post.id} className="notification-item">
                        <div className="post-header">
                            <img src={post.avatar} alt={post.username} className="post-avatar" />
                            <span className="post-username">{post.username}</span>
                        </div>
                        <p className="post-content">{post.text}</p>
                        <div className="post-interactions">
                            <img src={likeIcon} alt="Like" onClick={() => handleLikeDislike(post.id, 'likes')} className="interaction-icon" />
                            <span>{post.likes}</span>
                            <img src={dislikeIcon} alt="Dislike" onClick={() => handleLikeDislike(post.id, 'dislikes')} className="interaction-icon" />
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
