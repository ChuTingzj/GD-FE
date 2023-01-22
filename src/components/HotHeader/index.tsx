import React from "react";
import { ArrowRightOutlined } from '@ant-design/icons'
interface HotHeaderProps {
  prefix: string
  title: string
  onAllClick: () => void
}
export const HotHeader: React.FC<HotHeaderProps> = (props) => {
  const { prefix, title, onAllClick } = props
  return (
    <div className={"flex justify-between items-center normal-bb" + ` ${prefix}-top`}>
      <div className={"font-bold" + ` ${prefix}-top-left`}>{title}</div>
      {/* <div className={"flex items-center gap-2 cursor-pointer hover:text-antBlue" + ` ${prefix}-top-right`} onClick={onAllClick}>
        <div>全部</div>
        <ArrowRightOutlined />
      </div> */}
    </div>
  )
}