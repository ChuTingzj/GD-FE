import {useRef} from 'react'
import type {LegacyRef,MouseEvent} from 'react'
import {isEnglish} from '@/utils'
const tags = ['综合','关注','后端','前端','Android','iOS','人工智能','开发工具','代码人生','阅读']
export const useTagBar = () => {
  const indicatorTagBar = useRef<LegacyRef<HTMLSpanElement>>()
  const onTagItemClick = (item:string,index:number,event:MouseEvent) => {
    const targetLeft = (event.target as Element).getBoundingClientRect().left
    const parentWidth = (event.target as Element).parentElement?.getBoundingClientRect().width ?? 1536
    let width:number
    if(isEnglish(item)){
       width = 11.26 * item.length
    }else{
       width = 16 * item.length
    }
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