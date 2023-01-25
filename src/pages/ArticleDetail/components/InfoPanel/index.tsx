import { FC } from 'react'
import type { ArticleEntity } from '@/api'
interface InfoPanelProps {
  article: ArticleEntity | undefined
}
export const InfoPanel: FC<InfoPanelProps> = (props) => {
  const { article } = props
  return (
    <div className="detail-mid normal-theme w-820p p-5 overflow-hidden" dangerouslySetInnerHTML={{ __html: article?.article_content ?? '' }}></div>
  )
}