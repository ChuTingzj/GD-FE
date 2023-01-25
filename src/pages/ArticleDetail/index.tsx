import { UtilBar, InfoPanel, IndexPanel } from './components'
import { useArticleDetail } from './hooks'
export default function ArticleDetail() {
  const { InfoPanel: { article } } = useArticleDetail()
  return (
    <div className='flex mt-4 normal-transition justify-center gap-4'>
      <UtilBar />
      <InfoPanel article={article} />
      <IndexPanel />
    </div>
  )
}