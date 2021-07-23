import { ErrorDetails } from "../../types";

export interface UserPost {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface UserPostReducer {
  loading: boolean,
  data: UserPost[],
  error?: ErrorDetails,
  selectedUser?: string,
}
