import { getPostOperation } from "./operations/get-post.operation";
import { getPostsOperation } from "./operations/get-posts.operation";

export type AsyncResponse<T> =
  | {
      data: T;
      status: "success";
    }
  | {
      error: string;
      status: "error";
    };

export type AsyncRequest<T = {}> = {
  params?: T;
  config?: {
    next: {
      revalidate?: number;
    };
  };
};

export interface PostRepository {
  getPosts: typeof getPostsOperation;
  getPost: typeof getPostOperation;
}

export const createPostRepository = (repository: PostRepository) => {
  return repository;
};

export const postRepository = createPostRepository({
  getPosts: getPostsOperation,
  getPost: getPostOperation,
});
