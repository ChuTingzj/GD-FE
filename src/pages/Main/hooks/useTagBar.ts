import { useRef, useEffect } from 'react'
import type { LegacyRef, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { changeListArgs } from '@/store/features'
import type { AppDispatch } from '@/store'
const tags = ['后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读']
export const useTagBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const indicatorTagBar = useRef<LegacyRef<HTMLSpanElement>>()
  const firstSpan = useRef<LegacyRef<HTMLSpanElement>>()
  useEffect(() => {
    (firstSpan.current as any as HTMLSpanElement).click()
  }, [])
  const onTagItemClick = (event: MouseEvent) => {
    const cate_name = (event.target as HTMLElement).innerText
    const targetLeft = (event.target as HTMLElement).offsetLeft;
    const parentWidth = (event.target as Element).parentElement?.getBoundingClientRect().width ?? 1536
    const width = (event.target as HTMLElement).getBoundingClientRect().width
    const percentWidth = Number((width / parentWidth).toFixed(3)) * 100;
    (indicatorTagBar.current as any as HTMLElement).style.setProperty('left', `${targetLeft}px`);
    (indicatorTagBar.current as any as HTMLElement).style.setProperty('width', `${percentWidth}%`);
    if (cate_name === '综合') {
      dispatch(changeListArgs({}))
    } else {
      dispatch(changeListArgs({ cate_name }))
    }
  }
  return {
    tags,
    indicatorTagBar,
    firstSpan,
    onTagItemClick
  }
}