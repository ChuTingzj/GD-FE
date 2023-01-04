import { Carousel, Image, Badge } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
interface HotContentProps {
  imgList: Array<{ src: string }>
}
export const HotContent: React.FC<HotContentProps> = (props) => {
  const { imgList } = props
  return (
    <div className="flex-col mt-5 flex justify-center bg-white p-3 dark:color-light dark:bg-dark">
      <div className="hotContent-top flex justify-between items-center normal-bb">
        <div className="hotTag-top-left font-bold">精彩内容</div>
        <div className="hotTag-top-right flex items-center gap-2 cursor-pointer">
          <div>全部</div>
          <ArrowRightOutlined />
        </div>
      </div>
      <div className="hotContent-middle normal-bb">
        <Carousel autoplay>
          {
            imgList.map(item => (
              <Image
                key={item.src}
                width={'100%'}
                height={150}
                src={item.src}
              />
            ))
          }
        </Carousel>
      </div>
      <div className="hotContent-bottom py-2">
        <div className='flex items-center gap-2 py-2 normal-bb'>
          <Badge count={1} showZero color='#e04a1d' />
          <div className="text-13">原来 Canvas 也能直接绘制圆角矩形了</div>
        </div>
        <div className='flex items-center gap-2 py-2 normal-bb'>
          <Badge count={2} showZero color='#f88217' />
          <div className="text-13">原来 Canvas 也能直接绘制圆角矩形了</div>
        </div>
        <div className='flex items-center gap-2 py-2 normal-bb'>
          <Badge count={3} showZero color='#ffb916' />
          <div className="text-13">原来 Canvas 也能直接绘制圆角矩形了</div>
        </div>
        <div className='flex items-center gap-2 py-2 normal-bb'>
          <Badge count={1} showZero color='#e04a1d' />
          <div className="text-13">原来 Canvas 也能直接绘制圆角矩形了</div>
        </div>
      </div>
    </div>
  )
}