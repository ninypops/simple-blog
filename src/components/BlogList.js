import React, { useEffect, useState } from 'react';
import PostContent from './PostContent';

const BlogList = () => {
    const [ posts, setPostData ] = useState([]);

    useEffect(() => {
        loadPostData();
    }, []);

    const loadPostData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPostData(data);
        console.log(data, 'posts');
    };

    return (
        <>
            {/* Loop through data with map method */}
             <section className="postContent">
                { Object.values(posts.map((post, i) => (
                    <PostContent
                        key={i}
                        post={post}
                    />
                )))}
            </section>
        </>
    )
};

export default BlogList;