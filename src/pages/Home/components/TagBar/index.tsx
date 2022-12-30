import type { FC, LegacyRef, MouseEvent } from 'react'
interface TagBarProps {
  tags: Array<string>
  indicatorTagBar: LegacyRef<HTMLSpanElement>
  onTagItemClick: (item: string, index: number, event: MouseEvent) => void
}
export const TagBar: FC<TagBarProps> = (props) => {
  const { tags, indicatorTagBar, onTagItemClick } = props
  return (
    <div className='bg-white normal-flex gap-4 mt-4 p-3 relative normal-transition dark:bg-dark'>
      <span style={{ left: '475.7749938964844px' }} ref={indicatorTagBar} className='bg-blue-5 transition-width-transform duration-400 ease-linear normal-indicator-bb pointer-events-none bg-opacity-75 absolute h-full w-8 top-0'></span>
      {
        tags.map((item, index) => (
          <span onClick={(event) => onTagItemClick(item, index, event)} className='cursor-pointer dark:text-light' key={item}>{item}</span>
        ))
      }
    </div>
  )
}