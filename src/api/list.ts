import { api } from './base';
import type { CategoryEntity } from './category';
export interface ListApiArgs {
  end_id?: string
  cate_name?: string
  latest?: boolean
  hottest?: boolean
}
export interface ListApiRes {
  data: ArticleEntity[];
  message: string;
  success: boolean;
}
/**
 * UserEntity
 */
export interface UserEntity {
  avatar: string;
  id: string;
  isExist: boolean;
  user_name: string;
}


/**
* CommentEntity
*/
export interface CommentEntity {
  article_id: string;
  comment: string;
  createdAt: Date;
  dislike_times: number;
  id: string;
  like_times: number;
  parent_id: string;
  user_id: string;
}
/**
* ArticleEntity
*/
export interface ArticleEntity {
  article_bigCover: null | string;
  article_content: string;
  article_cover: null | string;
  article_description: string;
  article_title: string;
  author: UserEntity;
  author_id: string;
  browse_times: number;
  category_list: CategoryEntity[];
  comment_list: CommentEntity[];
  createdAt: Date;
  id: string;
  isExist: boolean;
  like_times: number;
  updatedAt: Date;
}
const listApi = api.injectEndpoints({
  endpoints: (build) => ({
    getArticleList: build.mutation<ArticleEntity[], ListApiArgs | void>({
      query: (data) => ({
        url: '/list',
        method: 'post',
        body: data
      }),
      transformResponse: (response: ListApiRes) => response.data
    }),
    getHotArticleList: build.query<ArticleEntity[], void>({
      query: () => `/list/hot`,
      transformResponse: (response: ListApiRes) => response.data
    })
  }),
})

export const { useGetArticleListMutation, useGetHotArticleListQuery, useLazyGetHotArticleListQuery } = listApi