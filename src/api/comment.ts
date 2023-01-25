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