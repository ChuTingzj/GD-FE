import React from "react";
import { Image } from 'antd'
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
export type ArticleItemProps = Record<'articleId' | 'author' | 'pubTime' | 'techGroup' | 'articleTitle' | 'articleContent' | 'browseTimes' | 'likeTimes' | 'comments' | 'articleCover', string>
export const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  const {
    articleId,
    author,
    pubTime,
    techGroup,
    articleTitle,
    articleContent,
    browseTimes,
    likeTimes,
    comments,
    articleCover
  } = props
  return (
    <div className="article-item p-3">
      <div className="article-item-top flex items-center justify-start gap-2 text-13">
        <div className="article-item-top-author normal-br hover:text-antBlue cursor-pointer">{author}</div>
        <div className="article-item-top-pubTime text-gray-400 normal-br">{pubTime}</div>
        <div className="article-item-top-techList text-gray-400">{techGroup}</div>
      </div>
      <div className="article-item-body flex justify-between items-center mt-4 pb-4 border-b border-gray-200">
        <div className="article-item-body-left flex justify-center items-start flex-col">
          <a className="article-item-body-left-title font-bold block text-black no-underline hover:text-antBlue dark:text-light" target={'_blank'} href={`post/${articleId}`}>{articleTitle}</a>
          <div className="article-item-body-left-content w-556p text-13 text-gray-400 pt-4 whitespace-nowrap text-ellipsis overflow-hidden">{articleContent}</div>
          <div className="article-item-body-left-iconGroup normal-flex gap-4 pt-4">
            <div className="browse normal-flex gap-1 text-13">
              <EyeOutlined />
              <div>{browseTimes}</div>
            </div>
            <div className="like normal-flex gap-1 text-13 hover:text-antBlue cursor-pointer">
              <LikeOutlined />
              <div>{likeTimes}</div>
            </div>
            <div className="comment normal-flex gap-1 text-13 hover:text-antBlue cursor-pointer">
              <MessageOutlined />
              <div>{comments}</div>
            </div>
          </div>
        </div>
        <div className="article-item-body-right">
          <Image
            src={articleCover}
            width={120}
            height={80}
          />
        </div>
      </div>
    </div>
  )
}