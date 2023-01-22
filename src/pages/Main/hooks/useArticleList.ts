import { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeListArgs, selectList, changeEndId, selectGlobal } from '@/store/features';
import type { AppDispatch } from '@/store';
import type { LegacyRef, MouseEvent } from 'react'
import {
  hotColorList,
} from './mock'
import { useGetArticleListMutation, useGetCategoryQuery, useGetCarouselQuery, useGetHotArticleListQuery } from '@/api';
import type { ListApiRes, ArticleEntity } from '@/api'
export const enum ELH {
  '推荐',
  '最新',
  '热榜'
}
export const useArticleList = () => {
  const [articleList, setArticleList] = useState<Array<ArticleEntity>>([])
  const indicatorFilter = useRef<LegacyRef<HTMLSpanElement>>()
  const dispatch = useDispatch<AppDispatch>()
  const { listArgs, end_id } = useSelector(selectList)
  const { isReachBottom } = useSelector(selectGlobal)
  const [trigger] = useGetArticleListMutation()
  const { data: tagList } = useGetCategoryQuery()
  const { data: imgList } = useGetCarouselQuery()
  const { data: hotContentList } = useGetHotArticleListQuery()
  useEffect(() => {
    (async () => {
      const res = await trigger(listArgs)
      if (Reflect.has(res, 'data')) {
        const list = (res as any as ListApiRes).data
        setArticleList(list)
        if (list.length) {
          dispatch(changeEndId(list[list.length - 1].id))
        }
      }
    })()
  }, [listArgs])
  useEffect(() => {
    (async () => {
      if (isReachBottom) {
        const res = await trigger({ end_id, ...listArgs })
        if (Reflect.has(res, 'data')) {
          const list = (res as any as ListApiRes).data
          setArticleList((preState) => preState.concat(list))
          if (list.length) {
            dispatch(changeEndId(list[list.length - 1].id))
          }
        }
      }
    })()
  }, [isReachBottom])
  const onFilterItemClick = (event: MouseEvent) => {
    const flag = (event.target as HTMLElement).innerText as keyof typeof ELH;
    const classListValue = (event.target as HTMLElement).classList.value
    if (classListValue !== 'cursor-pointer') return
    const targetLeft = (event.target as HTMLElement).offsetLeft;
    (indicatorFilter.current as any as HTMLElement).style.setProperty('left', targetLeft + 'px')
    if (flag === '最新') return dispatch(changeListArgs({ latest: true }))
    if (flag === '热榜') return dispatch(changeListArgs({ hottest: true }))
    return dispatch(changeListArgs({ latest: false, hottest: false }))
  }
  return {
    indicatorFilter,
    onFilterItemClick,
    articleList,
    hotTag: {
      tagList,
    },
    hotContent: {
      imgList,
      hotContentList,
      hotColorList
    }
  }
}