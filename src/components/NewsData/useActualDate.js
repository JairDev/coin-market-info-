function useActualDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const actualDate = `${year}-${month < 10 ? "0" : ""}${month}-${day}`
  return {actualDate}
}
export default useActualDate