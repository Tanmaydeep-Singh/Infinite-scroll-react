import React,{useState, useRef, useCallback} from 'react'
import usePost from './hooks/usePost'
import Post from './components/Post'


function Head() {
    const [pageNum, setPageNum] = useState(1)

    const { isLoading, isError, error , results, hasNextPage } = usePost(pageNum)

    const  intObserver = useRef()

    const lastPostRef = useCallback( post => {
        if( isLoading) return

        if( intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver( posts => {
            if (posts[0].isIntersecting && hasNextPage)
            {
                console.log('near last post!');
                setPageNum( prev => prev + 1)
            }
        })
        if(post) intObserver.current.observe(post)
    },[isLoading,hasNextPage]) 


    if (isError) return <p>Error:{error.message}</p>


    const content = results.map( (post,i) => {
        if(results.length === i + 1)
        {
            return <Post ref={lastPostRef} key={post.id} post={post} /> 
        }
        return <Post key={post.id} post={post} /> 
     
    })

    

    return (
    <>
        <h1 className='gradientText'>Infinite Query Scroll</h1>
        {content}

        {isLoading}
    </>
  )
}

export default Head