import {useRef,useEffect} from 'react'
import type {LegacyRef,MouseEvent} from 'react'
const tags = ['综合','关注','后端','前端','Android','iOS','人工智能','开发工具','代码人生','阅读']
export const useTagBar = () => {
  const indicatorTagBar = useRef<LegacyRef<HTMLSpanElement>>()
  const onTagItemClick = (event:MouseEvent) => {
    const targetLeft = (event.target as HTMLElement).offsetLeft;
    const parentWidth = (event.target as Element).parentElement?.getBoundingClientRect().width ?? 1536
    const width = (event.target as HTMLElement).getBoundingClientRect().width
    const percentWidth = Number((width/parentWidth).toFixed(3))*100;
    (indicatorTagBar.current as any as HTMLElement).style.setProperty('left',`${targetLeft}px`);
    (indicatorTagBar.current as any as HTMLElement).style.setProperty('width',`${percentWidth}%`);
  }
  return {
    tags,
    indicatorTagBar,
    onTagItemClick
  }
}