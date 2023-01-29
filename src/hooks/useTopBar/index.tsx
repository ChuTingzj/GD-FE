import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PenIcon, NoteBookIcon, CodeIcon } from '@/components'
import { exclude_on_click } from '@/utils'
const nav = ['Main.TopBar.list.1', 'Main.TopBar.list.2', 'Main.TopBar.list.3', 'Main.TopBar.list.4', 'Main.TopBar.list.5']

export const useTopBar = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dropDownItems: MenuProps['items'] = [
    {
      label: t('Main.TopBar.DropDownMenu.menu.1'),
      key: '1',
      icon: <PenIcon />
    },
    {
      label: t('Main.TopBar.DropDownMenu.menu.2'),
      key: '2',
      icon: <NoteBookIcon />
    },
    {
      label: t('Main.TopBar.DropDownMenu.menu.3'),
      key: '3',
      icon: <CodeIcon />
    }
  ]
  const onNavItemClick = (event: MouseEvent) => {
    exclude_on_click(event)
  }
  const goHome = () => navigate('/')
  return {
    nav,
    dropDownItems,
    onNavItemClick,
    goHome
  }
}