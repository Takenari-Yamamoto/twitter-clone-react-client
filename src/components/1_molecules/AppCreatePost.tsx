import React, { useState } from 'react';
import styled from 'styled-components';
import { PostParams } from '../../api/usePost';

interface Props {
  click: (prams: PostParams) => void;
}

const AppCreatePostContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  margin-bottom: 10px;
`;

const Button = styled.div`
  padding: 10px;
  border: 1px solid;
`;

export const AppCreatePost = ({ click }: Props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const clickPostButton = () => {
    click({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <AppCreatePostContainer>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="タイトル入れろ"
        type="text"
      />
      <textarea
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="内容入れろ"
      />
      <Button onClick={() => clickPostButton()}>投稿する</Button>
    </AppCreatePostContainer>
  );
};
