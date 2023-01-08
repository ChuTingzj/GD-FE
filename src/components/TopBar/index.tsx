import type { FC, LegacyRef } from 'react'
import { Input, Dropdown, Avatar } from 'antd'
import type { MenuProps } from 'antd'
import { SlackCircleFilled, DownOutlined, UserOutlined } from '@ant-design/icons'
import { ThemeSwitch, BellIcon } from '@/components'
const { Search } = Input
interface TopBarProps {
  nav: Array<string>
  indicatorBar: LegacyRef<HTMLSpanElement>
  onNavItemClick: (index: number) => void
  dropDownItems: MenuProps["items"]
  goHome: () => void
}
export const TopBar: FC<TopBarProps> = (props) => {
  const { nav, indicatorBar, onNavItemClick, dropDownItems, goHome } = props
  return (
    <div className="bg-white grid grid-cols-3 items-center p-3 normal-transition relative dark:bg-dark">
      <div className='normal-flex gap-2'>
        <div className='cursor-pointer justify-self-end normal-flex gap-1' onClick={goHome}>
          <SlackCircleFilled className='dark:text-white' style={{ fontSize: '30px' }} />
          <div className='font-bold text-xl font-mono dark:text-light'>稀土掘金</div>
        </div>
        <div className='flex gap-5'>
          <span ref={indicatorBar} className='bg-blue-5 normal-indicator-bb pointer-events-none bg-opacity-75 absolute h-full w-8 top-0 normal-indicator-action'></span>
          {
            nav.map((item, index) => (
              <span onClick={() => onNavItemClick(index)} className='cursor-pointer font-bold dark:text-light' key={item}>{item}</span>
            ))
          }
        </div>
      </div>
      <Search placeholder='请输入关键字' />
      <div className='justify-self-start flex items-center gap-2 ml-8'>
        <Dropdown.Button menu={{ items: dropDownItems }} type='primary' icon={<DownOutlined />} trigger={['click']}>创作者中心</Dropdown.Button>
        <div className='normal-flex gap-6'>
          <ThemeSwitch />
          <BellIcon className='cursor-pointer' />
          <div className='cursor-pointer'>
            <Avatar icon={<UserOutlined />}></Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}