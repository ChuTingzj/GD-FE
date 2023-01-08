import { useRef } from 'react'
import type { LegacyRef } from 'react'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PenIcon, NoteBookIcon, CodeIcon } from '@/components'
const nav = ['首页', '问答', '专栏', '标签', '发现']
const dropDownItems: MenuProps['items'] = [
  {
    label: '写文章',
    key: '1',
    icon: <PenIcon />
  },
  {
    label: '写笔记',
    key: '2',
    icon: <NoteBookIcon />
  },
  {
    label: '写代码',
    key: '3',
    icon: <CodeIcon />
  }
]
export const useTopBar = () => {
  const indicatorBar = useRef<LegacyRef<HTMLSpanElement>>()
  const navigate = useNavigate()
  const onNavItemClick = (index: number) => {
    (indicatorBar.current as any as HTMLElement).style.setProperty('transform', `translateX(${52 * index}px)`)
  }
  const goHome = () => navigate('/')
  return {
    nav,
    dropDownItems,
    indicatorBar,
    onNavItemClick,
    goHome
  }
}