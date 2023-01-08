import { useEffect } from 'react'
import type { LegacyRef } from 'react'
import { Outlet } from 'react-router-dom'
import { TopBar } from '@/components'
import { useTopBar } from '@/hooks'
export default function Home() {
  const { nav, indicatorBar, onNavItemClick, dropDownItems, goHome } = useTopBar()
  return (
    <>
      <TopBar goHome={goHome} dropDownItems={dropDownItems} nav={nav} indicatorBar={indicatorBar as LegacyRef<HTMLSpanElement>} onNavItemClick={onNavItemClick} />
      <Outlet />
    </>
  )
}
