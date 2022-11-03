import React from 'react'


const Post = React.forwardRef(({post}, ref) => {
    const postBody = (
        <div className='postBody'>
            <h2>{post.tital}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>


        </div>
    )
    const content = ref 
    ? <article ref={ref}>{postBody}</article>
    : <article>{postBody}</article>


  return content
})

export default Post