import {useRef} from 'react'
import type {LegacyRef,MouseEvent} from 'react'
import {
  tagList,
  colorList,
  imgList,
  hotContentList,
  hotColorList,
  articleList
} from './mock'
export const useArticleList = () => {
  const indicatorFilter = useRef<LegacyRef<HTMLSpanElement>>()
  const onFilterItemClick = (event:MouseEvent) => {
    const classListValue = (event.target as HTMLElement).classList.value
    if (classListValue !== 'cursor-pointer')return
    const targetLeft = (event.target as HTMLElement).offsetLeft;
    (indicatorFilter.current as any as HTMLElement).style.setProperty('left',targetLeft+'px')
  }
  return {
    indicatorFilter,
    onFilterItemClick,
    articleList,
    hotTag:{
      tagList,
      colorList
    },
    hotContent:{
      imgList,
      hotContentList,
      hotColorList
    }
  }
}