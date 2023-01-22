import type { FC, LegacyRef, MouseEvent } from 'react'
interface TagBarProps {
  tags: Array<string>
  indicatorTagBar: LegacyRef<HTMLSpanElement>
  firstSpan: LegacyRef<HTMLSpanElement>
  onTagItemClick: (event: MouseEvent) => void
}
export const TagBar: FC<TagBarProps> = (props) => {
  const { tags, indicatorTagBar, firstSpan, onTagItemClick } = props
  return (
    <div className='bg-white -ml-96 normal-flex gap-4 mt-4 p-3 sticky top-0 normal-transition dark:bg-dark dark:text-light'>
      <span ref={indicatorTagBar} className='bg-blue-5 transition-width-transform duration-400 ease-linear normal-indicator-bb pointer-events-none bg-opacity-75 absolute h-full w-8 top-0'></span>
      <span ref={firstSpan} onClick={onTagItemClick} className='cursor-pointer'>综合</span>
      <span onClick={onTagItemClick} className='cursor-pointer'>关注</span>
      {
        tags.map((item) => (
          <span onClick={onTagItemClick} className='cursor-pointer' key={item}>{item}</span>
        ))
      }
    </div>
  )
}