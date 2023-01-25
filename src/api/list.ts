import { api } from './base';
import type { CategoryEntity } from './category';
import type { ArticleEntity } from './article';
import type { CommentEntity } from './comment'
import type { UserEntity } from './user'
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