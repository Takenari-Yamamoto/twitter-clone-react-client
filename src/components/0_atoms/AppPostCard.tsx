import styled from 'styled-components';
import { Post } from '../../api/usePost';

interface Props {
  postList: Post[] | null;
  click: (id: number) => void;
}

const AppPostCardContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  margin-bottom: 10px;
`;

export const AppPostCard = ({ postList, click }: Props) => {
  return (
    <>
      {postList?.map((post) => {
        return (
          <AppPostCardContainer key={post.id} onClick={() => click(post.id)}>
            <p>投稿id: {post.id}</p>
            <p>タイトル: {post.title}</p>
            <p>内容: {post.content}</p>
            <p>投稿日: {post.created_at}</p>
          </AppPostCardContainer>
        );
      })}
    </>
  );
};
