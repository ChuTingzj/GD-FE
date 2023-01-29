import { UtilBar, InfoPanel, IndexPanel } from './components'
import { useArticleDetail } from './hooks'
export default function ArticleDetail() {
  const { UtilBar: { changeFullScreen }, InfoPanel: { article }, IndexPanel: { author, h2TitleList, initH2List, onTitleClick } } = useArticleDetail()
  return (
    <div className='flex mt-4 normal-transition justify-center gap-4'>
      <UtilBar changeFullScreen={changeFullScreen} />
      <InfoPanel article={article} />
      <IndexPanel author={author} article={article} h2TitleList={h2TitleList} initH2List={initH2List} onTitleClick={onTitleClick} />
    </div>
  )
}