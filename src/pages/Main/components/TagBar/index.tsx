import type { FC, MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
interface TagBarProps {
  tags: Array<string>
  onTagItemClick: (event: MouseEvent, key: string) => void
}
export const TagBar: FC<TagBarProps> = (props) => {
  const { t } = useTranslation()
  const { tags, onTagItemClick } = props
  return (
    <div className='bg-white normal-flex gap-16 mt-4 p-y-3 relative normal-transition dark:bg-dark dark:text-light'>
      <span onClick={(event) => onTagItemClick(event, 'Main.TagBar.9')} className='cursor-pointer clicked hover:text-antBlue'>{t("Main.TagBar.9")}</span>
      <span onClick={(event) => onTagItemClick(event, 'Main.TagBar.10')} className='cursor-pointer hover:text-antBlue'>{t("Main.TagBar.10")}</span>
      {
        Array.isArray(tags) && tags.map((item) => (
          <span onClick={(event) => onTagItemClick(event, item)} className='cursor-pointer hover:text-antBlue' key={item}>{t(item as any)}</span>
        ))
      }
    </div>
  )
}