import { get, post } from '@/utils/request';

interface User {
  id: number;
  name: string;
}

// GET请求
const getUser = async (id: number) => {
  const user = await get<User>(`/user/${id}`);
  return user;
}

// POST请求
const createUser = async (data: Partial<User>) => {
  const result = await post<User>('/user', data);
  return result;
}