import React from "react";
import { Tag } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
interface HotTagProps {
  tagList: Array<string>
  colorList: Array<string>
}
export const HotTag: React.FC<HotTagProps> = (props) => {
  const { tagList, colorList } = props
  return (
    <div className="flex-col flex justify-center bg-white p-3 dark:color-light dark:bg-dark">
      <div className="hotTag-top flex justify-between items-center normal-bb">
        <div className="hotTag-top-left font-bold">热门标签</div>
        <div className="hotTag-top-right flex items-center gap-2 cursor-pointer">
          <div>全部</div>
          <ArrowRightOutlined />
        </div>
      </div>
      <div className="hotTag-bottom py-2">
        {
          tagList.map(item => (<Tag className="m-1" key={item} color={colorList[Math.round(Math.random() * 11)]}>{item}</Tag>))
        }
      </div>
    </div>
  )
}