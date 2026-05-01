import React, { useEffect, useState } from 'react';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}: {post.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;