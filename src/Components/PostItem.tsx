import React from 'react'
import { IPost } from '../Model/post.interface'

type Props = {
   post: IPost
}

const PostItem = (props: Props) => {
   const {post} = props
   console.log(post)
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {post.id}
      {post.title}
      {post.body}
      <button>DELETE</button>
    </div>
  )
}

export default PostItem