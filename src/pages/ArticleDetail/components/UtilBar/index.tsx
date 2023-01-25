import { FC } from 'react'
import { LikeOutlined, CommentOutlined, ShareAltOutlined, FullscreenOutlined } from '@ant-design/icons'
export const UtilBar: FC = () => {
  return (
    <div className="detail-left flex flex-col gap-6 justify-center mt-22 sticky h-270p top-2">
      <div className='detail-util-bar'>
        <LikeOutlined />
      </div>
      <div className='detail-util-bar'>
        <CommentOutlined />
      </div>
      <div className='detail-util-bar'>
        <ShareAltOutlined />
      </div>
      <div className='detail-util-bar'>
        <FullscreenOutlined />
      </div>
    </div>
  )
}
