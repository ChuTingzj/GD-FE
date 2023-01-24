import type { FC, LegacyRef } from 'react'
import { Empty } from 'antd'
import { useArticleList } from '@/pages/Main/hooks'
import { HotTag, HotContent, ArticleItem } from './components'
export const ArticleList: FC = () => {
  const {
    indicatorFilter,
    onFilterItemClick,
    articleList,
    hotTag: { tagList },
    hotContent: { imgList, hotContentList, hotColorList }
  } = useArticleList()
  return (
    <div className='relative mt-4'>
      <div className='absolute left-1/2 -translate-x-1/2 w-1000p'>
        <div className='list-container normal-transition bg-white w-700p dark:bg-dark dark:text-light'>
          <div className='relative flex justify-start items-center border-b border-gray-200 p-3 gap-4' onClick={onFilterItemClick}>
            <span ref={indicatorFilter as LegacyRef<HTMLSpanElement>} className='bg-blue-5 duration-400 ease-linear normal-indicator-bb pointer-events-none bg-opacity-75 absolute h-full w-8 top-0'></span>
            <div className='cursor-pointer'>推荐</div>
            <div className='cursor-pointer'>最新</div>
            <div className='cursor-pointer'>热榜</div>
          </div>
          {
            articleList.map((item, index) => (
              <ArticleItem key={index} {...item} />
            ))
          }
          {!articleList.length ? (
            <div className='normal-flex h-1/1'>
              <Empty description={'没有文章了'} />
            </div>
          ) : ''}
        </div>
        <div className='absolute right-0 top-0 w-281p'>
          <HotTag tagList={tagList ?? []} />
          <HotContent imgList={imgList!} hotContentList={hotContentList!} hotColorList={hotColorList} />
        </div>
      </div>
    </div>
  )
}