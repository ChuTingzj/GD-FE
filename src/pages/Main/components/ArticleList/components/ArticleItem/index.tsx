import React from "react";
import { Image } from 'antd'
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as utc from 'dayjs/plugin/utc';
import type { ArticleEntity } from '@/api';
dayjs.extend(relativeTime);
dayjs.extend(utc);
export const ArticleItem: React.FC<ArticleEntity> = (props) => {
  const {
    article_cover,
    article_title,
    article_description,
    createdAt,
    category_list,
    author,
    browse_times,
    like_times,
    comment_list,
    id
  } = props
  return (
    <div className="article-item p-3 content-visibility-auto contain-intrinsic-size-153 animate-vibe">
      <div className="article-item-top flex items-center justify-start gap-2 text-13">
        <div className="article-item-top-author normal-br hover:text-antBlue cursor-pointer">{author.user_name}</div>
        <div className="article-item-top-pubTime text-gray-400 normal-br">{dayjs.utc(createdAt).fromNow()}</div>
        {
          category_list.map((item, index) => (
            <div className="normal-flex gap-2" key={item.id}>
              <div className="article-item-top-techList text-gray-400">{item.cate_name}</div>
              {category_list.length === 1 ? '' : index === category_list.length - 1 ? '' : (<div className="article-item-top-techList text-gray-400">{'•'}</div>)}
            </div>
          ))
        }
      </div>
      <div className="article-item-body flex justify-between items-center mt-4 pb-4 border-b border-gray-200">
        <div className="article-item-body-left flex justify-center items-start flex-col">
          <a className="article-item-body-left-title font-bold block text-black no-underline hover:text-antBlue dark:text-light" target={'_blank'} href={`post/${id}`}>{article_title}</a>
          <div className="article-item-body-left-content w-556p text-13 text-gray-400 pt-4 whitespace-nowrap text-ellipsis overflow-hidden">{article_description}</div>
          <div className="article-item-body-left-iconGroup normal-flex gap-4 pt-4">
            <div className="browse normal-flex gap-1 text-13">
              <EyeOutlined />
              <div>{browse_times}</div>
            </div>
            <div className="like normal-flex gap-1 text-13 hover:text-antBlue cursor-pointer">
              <LikeOutlined />
              <div>{like_times}</div>
            </div>
            <div className="comment normal-flex gap-1 text-13 hover:text-antBlue cursor-pointer">
              <MessageOutlined />
              <div>{comment_list.length}</div>
            </div>
          </div>
        </div>
        <div className="article-item-body-right">
          <Image
            src={article_cover ?? ''}
            width={120}
            height={80}
          />
        </div>
      </div>
    </div>
  )
}