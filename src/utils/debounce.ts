export function debounce(fn:()=>void,delay=200){
  let timer:NodeJS.Timeout
  return function(this:any,...args:any){
    if(timer)clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}