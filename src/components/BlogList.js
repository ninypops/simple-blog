import React from 'react';
import PostContent from './PostContent';

const BlogList = () => {
    // Fetch post data
    return (
        <>
            {/* Loop through data with map method */}
            List of blog posts
            <br />
            <PostContent />
        </>
    )
};

export default BlogList;