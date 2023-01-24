import { useRef, useEffect } from 'react'
import type { LegacyRef, MouseEvent } from 'react'
import i18next from 'i18next'
import { useDispatch } from 'react-redux'
import { changeListArgs } from '@/store/features'
import type { AppDispatch } from '@/store'
export const useTagBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const firstSpan = useRef<LegacyRef<HTMLSpanElement>>()
  const tags = ["Main.TagBar.1", "Main.TagBar.2", "Main.TagBar.3", "Main.TagBar.4", "Main.TagBar.5", "Main.TagBar.6", "Main.TagBar.7", "Main.TagBar.8"]
  const onTagItemClick = (event: MouseEvent, key: string) => {
    const siblings = Array.from((event.target as HTMLElement).parentNode?.childNodes ?? []);
    siblings.forEach(item => (item as HTMLElement).classList.remove('clicked'));
    (event.target as HTMLElement).classList.add('clicked');
    if (i18next.getResource('zh', 'translation', key) === '综合') {
      dispatch(changeListArgs({}))
    } else {
      dispatch(changeListArgs({ cate_name: i18next.getResource('zh', 'translation', key) }))
    }
  }
  return {
    tags,
    firstSpan,
    onTagItemClick
  }
}