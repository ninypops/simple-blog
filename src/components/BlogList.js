import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    };

    const StyledList = styled.ul`
        display: block;
        list-style-type: none;
        margin-left: 0;
    `;

    return (
        <StyledList>
             <section className="postContent">
                { Object.values(posts.map((post, i) => (
                    <PostContent
                        key={i}
                        post={post}
                    />
                )))}
            </section>
        </StyledList>
    )
};

export default BlogList;