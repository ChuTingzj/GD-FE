import type { FC, LegacyRef, MouseEventHandler } from 'react'
import { Input, Dropdown, Avatar } from 'antd'
import type { MenuProps } from 'antd'
import { SlackCircleFilled, DownOutlined, UserOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { ThemeSwitch, I18nIcon } from '@/components'
const { Search } = Input
interface TopBarProps {
  nav: Array<string>
  onNavItemClick: MouseEventHandler
  dropDownItems: MenuProps["items"]
  goHome: () => void
}
export const TopBar: FC<TopBarProps> = (props) => {
  const { t, i18n } = useTranslation()
  const { nav, onNavItemClick, dropDownItems, goHome } = props
  return (
    <div className="bg-white grid grid-cols-3 items-center p-y-3 normal-transition relative dark:bg-dark">
      <div className='normal-flex gap-2'>
        <div className='cursor-pointer justify-self-end normal-flex gap-1' onClick={goHome}>
          <SlackCircleFilled className='dark:text-white' style={{ fontSize: '30px' }} />
          <div className='font-bold text-xl font-mono dark:text-light'>{t('Main.TopBar.title')}</div>
        </div>
        <div className='flex gap-5 relative'>
          {
            nav.map((item, index) => (
              <span onClick={onNavItemClick} className={'cursor-pointer font-bold dark:text-light hover:text-antBlue ' + (index === 0 ? 'clicked' : '')} key={item}>{t(item as any)}</span>
            ))
          }
        </div>
      </div>
      <Search placeholder={t('Main.TopBar.hint') as string} />
      <div className='justify-self-start flex items-center gap-2 ml-8'>
        <Dropdown.Button menu={{ items: dropDownItems }} type='primary' icon={<DownOutlined />} trigger={['click']}>{t('Main.TopBar.DropDownMenu.title')}</Dropdown.Button>
        <div className='normal-flex gap-6'>
          <ThemeSwitch />
          <div onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
            <I18nIcon className='cursor-pointer' />
          </div>
          <div className='cursor-pointer'>
            <Avatar icon={<UserOutlined />}></Avatar>
          </div>
        </div>
      </div>
    </div >
  )
}