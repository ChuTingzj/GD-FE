import type { FC, LegacyRef } from 'react'
import { useArticleList } from '@/pages/Home/hooks'
import { HotTag, HotContent, ArticleItem } from './components'
export const ArticleList: FC = () => {
  const { indicatorFilter, onFilterItemClick, hotTag: { tagList, colorList }, hotContent: { imgList, hotContentList, hotColorList } } = useArticleList()
  return (
    <div className='relative mt-4'>
      <div className='absolute left-1/2 -translate-x-1/2 w-960p'>
        <div className='list-container bg-white w-700p dark:bg-dark dark:text-light'>
          <div className='relative flex justify-start items-center border-b border-gray-200 p-3 gap-4' onClick={onFilterItemClick}>
            <span ref={indicatorFilter as LegacyRef<HTMLSpanElement>} className='bg-blue-5 transition-width-transform duration-400 ease-linear normal-indicator-bb pointer-events-none bg-opacity-75 absolute h-full w-8 top-0'></span>
            <div className='cursor-pointer'>推荐</div>
            <div className='cursor-pointer'>最新</div>
            <div className='cursor-pointer'>热榜</div>
          </div>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
        <div className='absolute -right-12 top-0 w-281p'>
          <HotTag tagList={tagList} colorList={colorList} />
          <HotContent imgList={imgList} hotContentList={hotContentList} hotColorList={hotColorList} />
        </div>
      </div>
    </div>
  )
}