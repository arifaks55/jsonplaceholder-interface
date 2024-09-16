import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const postData = await response.json();
            setPost(postData);
        };

        const fetchComments = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const commentsData = await response.json();
            setComments(commentsData);
        };

        fetchPost();
        fetchComments();
    }, [postId]);

    return (
        <div className="container">
            <h2>Post Detayları</h2>
            {post && (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </>
            )}

            <h4>Yorumlar</h4>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <p><strong>{comment.name}</strong>: {comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostDetail;
