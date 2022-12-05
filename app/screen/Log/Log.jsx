import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import postService from '../../api/postService';

export default function LogScreen() {
  const [post, setPost] = useState();

  useEffect(() => {
    getLog();
  }, []);

  const getLog = async () => {
    const res = await postService.getPost();
    setPost(res);
  };

  return <Text>id: {post?.id}</Text>;
}
