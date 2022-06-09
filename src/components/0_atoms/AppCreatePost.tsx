import React, { useState } from 'react';

interface Props {
  click: () => void;
}

export const AppCreatePost = ({ click }: Props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={() => click()}>投稿</button>
    </div>
  );
};
