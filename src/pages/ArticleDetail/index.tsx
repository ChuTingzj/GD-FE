import { UtilBar, InfoPanel, IndexPanel } from './components'
export default function ArticleDetail() {
  return (
    <div className='flex mt-4 normal-transition justify-center gap-4'>
      <UtilBar />
      <InfoPanel />
      <IndexPanel />
    </div>
  )
}