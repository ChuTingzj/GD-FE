export const geth2 = (str: string) => {
  return [...str.matchAll(/[\u4e00-\u9fa5|\w]+(?=<\/h2>)/g)]
}
export const geth3 = (str: string) => {
  return [...str.matchAll(/[\u4e00-\u9fa5|\w]+(?=<\/h3>)/g)]
}