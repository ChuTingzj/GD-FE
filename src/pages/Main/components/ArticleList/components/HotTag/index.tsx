import React from "react";
import { Tag } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { HotHeader } from '@/components'
interface HotTagProps {
  tagList: Array<string>
  colorList: Array<string>
}
export const HotTag: React.FC<HotTagProps> = (props) => {
  const { tagList, colorList } = props
  return (
    <div className="flex-col flex justify-center normal-transition bg-white p-3 dark:color-light dark:bg-dark">
      <HotHeader prefix="hotTag" title="热门标签" onAllClick={() => { }} />
      <div className="hotTag-bottom py-2">
        {
          tagList.map(item => (<Tag className="m-1 cursor-pointer" key={item} color={colorList[Math.round(Math.random() * 10)]}>{item}</Tag>))
        }
      </div>
    </div>
  )
}