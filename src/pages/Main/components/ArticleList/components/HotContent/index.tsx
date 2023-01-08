import { Carousel, Image, Badge } from 'antd'
import { HotHeader } from '@/components'
interface HotContentProps {
  imgList: Array<{ src: string }>
  hotContentList: Array<string>
  hotColorList: Array<string>
}
export const HotContent: React.FC<HotContentProps> = (props) => {
  const { imgList, hotContentList, hotColorList } = props
  return (
    <div className="flex-col mt-5 flex justify-center normal-transition bg-white p-3 dark:color-light dark:bg-dark">
      <HotHeader prefix='hotContent' onAllClick={() => { }} title='精彩内容' />
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
      <div className="hotContent-bottom py-2 flex flex-col justify-center">
        {
          hotContentList.map((item, index) => (
            <div className='flex items-center gap-2 py-2 normal-bb cursor-pointer hover:bg-gray-100 hover:text-black' key={item}>
              {index <= 2 ? <Badge count={index + 1} showZero color={hotColorList[index]} /> : ''}
              <div className="text-13" style={{ marginLeft: index <= 2 ? '' : '30px' }}>{item}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}