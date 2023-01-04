import {useState,useEffect} from 'react'
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
export const useArticleList = () => {
  const [listHeight,setListHeight] = useState(0)
  useEffect(()=>{
    setListHeight(window.innerHeight - 130)
  },[])
  return {
    listHeight,
    hotTag:{
      tagList,
      colorList
    },
    hotContent:{
      imgList
    }
  }
}