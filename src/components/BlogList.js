import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostContent from './PostContent';

const Container = styled.div`
    margin: 3rem 8rem;
    @media only screen and (max-width: 900px) {
        margin: .5rem;
    }
`;

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
        <Container>
            <h2><em>Blog Posts</em></h2>
            <p><em>A simple blog with posts delivered via fetch API.</em></p>
            <StyledList>
                <section className="postContent">
                    { Object.values(posts.map((post) => (
                        <PostContent
                            key={post.id}
                            post={post}
                        />
                    )))}
                </section>
            </StyledList>
        </Container>
    )
};

export default BlogList;