import { useState } from 'react';
import client from '../service/useAxios';

export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface PostParams {
  title: string;
  content: string;
}

const usePost = () => {
  const [postList, setPostList] = useState<Post[] | null>(null);
  const [postDetail, setPostDetail] = useState<Post | null>(null);

  const fetchAllPosts = async () => {
    try {
      const { data } = await client.get<Post[]>('api/posts');
      setPostList(data.reverse());
    } catch (e) {
      console.error(e);
    }
  };

  const fetchPostDetail = async (id: number) => {
    try {
      const { data } = await client.get<Post>(`api/posts/${id}`);
      setPostDetail(data);
    } catch (e) {
      console.error(e);
    }
  };

  const createPost = async (postParams: PostParams) => {
    try {
      await client.post('api/posts', postParams);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    postList,
    fetchAllPosts,
    postDetail,
    fetchPostDetail,
    createPost,
  };
};

export default usePost;
