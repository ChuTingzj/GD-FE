import type { LegacyRef } from 'react'
import { TagBar, ArticleList } from './components'
import { useTagBar } from './hooks'
export default function Main() {
  const { tags, indicatorTagBar, firstSpan, onTagItemClick } = useTagBar()
  return (
    <>
      <TagBar tags={tags} firstSpan={firstSpan as LegacyRef<HTMLSpanElement>} indicatorTagBar={indicatorTagBar as LegacyRef<HTMLSpanElement>} onTagItemClick={onTagItemClick} />
      <ArticleList />
    </>
  )
}