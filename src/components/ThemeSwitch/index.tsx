import { SunIcon, MoonIcon } from '@/components/icon'
import { useTheme } from '@/hooks'
export const ThemeSwitch = () => {
  const { isDark, switchToDark, switchToLight } = useTheme()
  return (
    <div className='bg-gray-3 rounded-full py-1 px-6 cursor-pointer dark:bg-gray-8 normal-transition' onClick={isDark ? switchToLight : switchToDark}>
      <div className='rounded-full -translate-x-5 dark:translate-x-5 normal-transition bg-white'>
        {
          !isDark ? <SunIcon /> : <MoonIcon />
        }
      </div>
    </div>
  )
}