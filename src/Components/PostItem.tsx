import React from 'react';
import { IPost } from '../Model/post.interface';

type Props = {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
};

  const PostItem = (props: Props) => {
    const { post } = props;
    const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation();
      props.remove(post);
  };
  const handleUpdate = () => {
    const title = prompt() || ''
    props.update({...post, title})
  };
  
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column' }}
      onClick={handleUpdate}
    >
      {post.id}
      {post.title}
      {post.body}
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default PostItem;
