import type { LegacyRef } from 'react'
import { TopBar, TagBar } from './components'
import { useTopBar, useTagBar } from './hooks'
export default function Home() {
  const { nav, indicatorBar, onNavItemClick, dropDownItems } = useTopBar()
  const { tags, indicatorTagBar, onTagItemClick } = useTagBar()
  return (
    <>
      <TopBar dropDownItems={dropDownItems} nav={nav} indicatorBar={indicatorBar as LegacyRef<HTMLSpanElement>} onNavItemClick={onNavItemClick} />
      <TagBar tags={tags} indicatorTagBar={indicatorTagBar as LegacyRef<HTMLSpanElement>} onTagItemClick={onTagItemClick} />
    </>
  )
}
