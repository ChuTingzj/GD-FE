export const isEnglish = (str:string) => {
  const result = str.match(/\w+/)
  if(!result)return false
  return result[0].length === result.input?.length
}