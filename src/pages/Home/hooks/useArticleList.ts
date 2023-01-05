import {useRef} from 'react'
import type {LegacyRef,MouseEvent} from 'react'
const tagList = ['javascript','typescript','rust','go','java','php','vue','react','docker','css','mysql']
const colorList = ['magenta','red','volcano','orange','gold','lime','green','cyan','blue','geekblue','purple']
const imgList = [
  {
    src:'https://image-static.segmentfault.com/956/780/956780943-63ae48b13854c'
  },
  {
    src:'https://image-static.segmentfault.com/178/860/1788606224-63b398ef2cf2b'
  },
  {
    src:'https://image-static.segmentfault.com/343/975/3439757369-63aebb06830bf'
  }
]
const hotContentList = ['「首届搜索技术创新挑战赛 STI」圆满落幕！超1600 名选手参赛，推动搜索领域再进化','原来 Canvas 也能直接绘制圆角矩形了','CSS 如何根据背景色自动切换黑白文字？','最新版Android原生集成RN']
const hotColorList = ['#e04a1d','#f88217','#ffb916']
export const useArticleList = () => {
  const indicatorFilter = useRef<LegacyRef<HTMLSpanElement>>()
  const onFilterItemClick = (event:MouseEvent) => {
    const targetLeft = (event.target as HTMLElement).offsetLeft;
    (indicatorFilter.current as any as HTMLElement).style.setProperty('left',targetLeft+'px')
  }
  return {
    indicatorFilter,
    onFilterItemClick,
    hotTag:{
      tagList,
      colorList
    },
    hotContent:{
      imgList,
      hotContentList,
      hotColorList
    }
  }
}