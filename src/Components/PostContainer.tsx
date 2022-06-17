import React from 'react'
import { IPost } from '../Model/post.interface'
import { postsAPI } from '../Service/post.service'
import PostItem from './PostItem'

const PostContainer = () => {
   //5 - limit 
   const {data: posts, isLoading, error} = postsAPI.useFetchAllPostsQuery(5)

  return (
    <div>
      {isLoading && <h1>LOADING</h1>}
      {error && <h1>ERROR</h1>}
      {posts?.map((post: IPost, i) => 
         <PostItem post={post} key={i}/>   
      )}
    </div>
  )
}

export default PostContainer