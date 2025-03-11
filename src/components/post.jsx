import React from 'react';
import { useParams } from 'react-router';

function Post(props) {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>title of post</h1>
      <p>
        ID:
        {id}
      </p>
    </div>
  );
}

export default Post;
