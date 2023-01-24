import type { LegacyRef } from 'react'
import { TagBar, ArticleList } from './components'
import { useTagBar } from './hooks'
export default function Main() {
  const { tags, firstSpan, onTagItemClick } = useTagBar()
  return (
    <>
      <TagBar tags={tags} firstSpan={firstSpan as LegacyRef<HTMLSpanElement>} onTagItemClick={onTagItemClick} />
      <ArticleList />
    </>
  )
}