import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useGetArticleQuery } from '@/api'
import { geth2, exclude_on_click } from '@/utils'
export const useArticleDetail = () => {
  const h2List = useRef<NodeListOf<HTMLHeadingElement> | null>(null)
  const h2TitleList = useRef<RegExpMatchArray[]>([])
  const { articleId } = useParams()
  const { data: article } = useGetArticleQuery(articleId!)
  if (article?.success) {
    h2TitleList.current = geth2(article.data.article_content)
  }
  const initH2List = (h2: NodeListOf<HTMLHeadingElement>) => {
    h2List.current = h2
  }
  const onTitleClick = (event: MouseEvent, index: number) => {
    exclude_on_click(event);
    (h2List.current as NodeListOf<HTMLHeadingElement>)[index].scrollIntoView({ behavior: 'smooth' })
  }
  const changeFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }
  return {
    UtilBar: {
      changeFullScreen
    },
    InfoPanel: {
      article: article?.data
    },
    IndexPanel: {
      author: article?.data.author,
      h2TitleList: h2TitleList.current,
      initH2List,
      onTitleClick
    }
  }
}