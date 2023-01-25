import { api } from './base'
import type { UserEntity } from './user'
import type { CategoryEntity } from './category'
import type { CommentEntity } from './comment'
export interface ArticleResponse {
  data: ArticleEntity;
  message: string;
  success: boolean;
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
const articleApi = api.injectEndpoints({
  endpoints: (build) => ({
    getArticle: build.query<ArticleResponse, string>({
      query: (articleId) => `/article/${articleId}`
    })
  })
})

export const { useGetArticleQuery, useLazyGetArticleQuery } = articleApi