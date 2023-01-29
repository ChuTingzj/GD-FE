import { FC } from 'react'
import { LikeOutlined, CommentOutlined, ShareAltOutlined, FullscreenOutlined } from '@ant-design/icons'
interface UtilBarProps {
  changeFullScreen: () => void
}
export const UtilBar: FC<UtilBarProps> = (props) => {
  const { changeFullScreen } = props
  return (
    <div className="detail-left flex flex-col gap-6 justify-center mt-22 sticky h-270p top-25">
      <div className='detail-util-bar'>
        <LikeOutlined />
      </div>
      <div className='detail-util-bar'>
        <CommentOutlined />
      </div>
      <div className='detail-util-bar'>
        <ShareAltOutlined />
      </div>
      <div className='detail-util-bar' onClick={changeFullScreen}>
        <FullscreenOutlined />
      </div>
    </div>
  )
}
