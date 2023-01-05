export function throttle(fn:()=>void,delay=200){
  let flag = true
  return function(this:any,...args:any){
    if(!flag)return
      flag = false
    setTimeout(()=>{
      fn.apply(this,args)
      flag = true
    },delay)
  }
}