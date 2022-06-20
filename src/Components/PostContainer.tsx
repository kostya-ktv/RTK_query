import React, { useEffect, useState } from 'react'
import { IPost } from '../Model/post.interface'
import { postsAPI } from '../Service/post.service'
import PostItem from './PostItem'

const PostContainer = () => {
   //5 - limit 
   const [limit, setLimit] = useState<number>(5)
   const {data: posts, isLoading, error, refetch} = postsAPI.useFetchAllPostsQuery(limit)
   const [createPost, {isSuccess}] = postsAPI.useCreatePostMutation()
   const [deletePost, {}] = postsAPI.useDeletePostMutation()
   const [updatePost, {}] = postsAPI.useUpdatePostMutation()

   useEffect(() => {
    setTimeout(() => {
      setLimit(10)
    }, 3000)
   },[])
  const handleCreatePost = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }
  const handleRemove = (post: IPost) => {
    deletePost(post)
  }
  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }
  return (
    <div>
      <button onClick={refetch}>REFETCH</button>
      <button onClick={handleCreatePost}>CREATE POST</button>
      {isLoading && <h1>LOADING</h1>}
      {error && <h1>ERROR</h1>}
      {posts?.map((post: IPost, i) => 
         <PostItem post={post} key={i} remove={handleRemove} update={handleUpdate}/>   
      )}
    </div>
  )
}

export default PostContainer