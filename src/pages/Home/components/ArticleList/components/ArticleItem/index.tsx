import React from "react";
import { Image } from 'antd'
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
interface ArticleItemProps {

}
export const ArticleItem: React.FC = () => {
  return (
    <div className="article-item p-3 cursor-pointer">
      <div className="article-item-top flex items-center justify-start gap-2 text-13">
        <div className="article-item-top-author normal-br hover:text-antBlue">掘金酱</div>
        <div className="article-item-top-pubTime text-gray-400 normal-br">一个月前</div>
        <div className="article-item-top-techList text-gray-400">uni-app•Vue•微信小程序</div>
      </div>
      <div className="article-item-body flex justify-between items-center mt-4 pb-4 border-b border-gray-200">
        <div className="article-item-body-left flex justify-center items-start flex-col">
          <div className="article-item-body-left-title font-bold">2022年终总结征文大赛进行中，新年伊始，快来总结过去的一年吧！</div>
          <div className="article-item-body-left-content text-13 text-gray-400 pt-4">新年快乐！2022 年终总结大赛正在进行中，快来回顾自己的2022吧～</div>
          <div className="article-item-body-left-iconGroup normal-flex gap-4 pt-4">
            <div className="browse normal-flex gap-1 text-13">
              <EyeOutlined />
              <div>1.3w</div>
            </div>
            <div className="like normal-flex gap-1 text-13 hover:text-antBlue">
              <LikeOutlined />
              <div>239</div>
            </div>
            <div className="comment normal-flex gap-1 text-13 hover:text-antBlue">
              <MessageOutlined />
              <div>46</div>
            </div>
          </div>
        </div>
        <div className="article-item-body-right">
          <Image
            src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8be2cd204689446390502732ba22eb26~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
            width={120}
            height={80}
          />
        </div>
      </div>
    </div>
  )
}