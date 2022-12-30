export const range = (start:number,end:number,step:number) => {
  return {
    [Symbol.iterator](){
      return this
    },
    next(){
      if(start<end){
        return {value:start+=step,done:false}
      }
      return {value:end,done:true}
    }
  }
}
