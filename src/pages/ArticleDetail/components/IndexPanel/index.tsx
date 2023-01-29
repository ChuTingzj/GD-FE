import { FC, useEffect } from 'react'
import { Avatar, Button, Divider } from 'antd'
import { LikeOutlined, EyeOutlined } from '@ant-design/icons'
import type { UserEntity, ArticleEntity } from '@/api'

interface IndexPanelProps {
  author: UserEntity | undefined
  article: ArticleEntity | undefined
  h2TitleList: RegExpMatchArray[]
  initH2List: (h2: NodeListOf<HTMLHeadingElement>) => void
  onTitleClick: (event: MouseEvent, index: number) => void
}
export const IndexPanel: FC<IndexPanelProps> = (props) => {
  const { author, article, h2TitleList, initH2List, onTitleClick } = props
  useEffect(() => {
    let h2: NodeListOf<HTMLHeadingElement> | null
    let timer: NodeJS.Timeout | null
    timer = setTimeout(() => {
      h2 = document.querySelectorAll('h2')
      initH2List(h2)
    }, 500)
    return () => {
      h2 = null
      timer = null
    }
  }, [])
  return (
    <div className="detail-right">
      <div className='normal-theme w-300p h-230p p-5'>
        <div className="detail-right-userInfo cursor-pointer flex flex-col justify-center gap-4">
          <div className='flex items-center justify-start gap-2'>
            <Avatar size={48} src={author?.avatar ?? ''} />
            <div className='font-bold'>{author?.user_name ?? '作者'}</div>
          </div>
          <div className='normal-flex gap-2'>
            <Button className='w-1/1' type='primary'>关注</Button>
            <Button className='w-1/1'>私信</Button>
          </div>
        </div>
        <Divider />
        <div className="detail-right-articleInfo flex flex-col justify-center items-start gap-4">
          <div className='normal-flex gap-2'>
            <div className='detail-index-bar-articleInfo'>
              <LikeOutlined />
            </div>
            <div>获得点赞 {article?.like_times}</div>
          </div>
          <div className='normal-flex gap-2'>
            <div className='detail-index-bar-articleInfo'>
              <EyeOutlined />
            </div>
            <div>文章被阅读 {article?.browse_times}</div>
          </div>
        </div>
      </div>
      <div className='normal-theme p-5 mt-4 sticky top-2'>
        <div className='flex flex-col justify-center'>
          <div>目录</div>
          <Divider />
          <div className='directory flex flex-col justify-center gap-4 max-height-525 overflow-y-scroll overflow-x-hidden'>
            {
              h2TitleList.map((item, index) => (<div className='p-2 cursor-pointer rounded-1 hover:bg-gray-100 hover:text-black' onClick={(event) => onTitleClick(event as any as MouseEvent, index)} key={index}>{item[0]}</div>))
            }
          </div>
        </div>
      </div>
    </div>
  )
}