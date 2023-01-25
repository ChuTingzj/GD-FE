import { useParams } from 'react-router-dom'
import { useGetArticleQuery } from '@/api'
export const useArticleDetail = () => {
  const { articleId } = useParams()
  const { data: article } = useGetArticleQuery(articleId!)
  return {
    InfoPanel: {
      article: article?.data
    }
  }
}