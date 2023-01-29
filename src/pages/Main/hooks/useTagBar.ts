import i18next from 'i18next'
import { useDispatch } from 'react-redux'
import { changeListArgs } from '@/store/features'
import type { AppDispatch } from '@/store'
import { exclude_on_click } from '@/utils'
const tags = ["Main.TagBar.1", "Main.TagBar.2", "Main.TagBar.3", "Main.TagBar.4", "Main.TagBar.5", "Main.TagBar.6", "Main.TagBar.7", "Main.TagBar.8"]
export const useTagBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const onTagItemClick = (event: MouseEvent, key: string) => {
    exclude_on_click(event)
    if (i18next.getResource('zh', 'translation', key) === '综合') {
      dispatch(changeListArgs({}))
    } else {
      dispatch(changeListArgs({ cate_name: i18next.getResource('zh', 'translation', key) }))
    }
  }
  return {
    tags,
    onTagItemClick
  }
}