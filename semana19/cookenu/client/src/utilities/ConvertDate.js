export const convertDate = (date)=>{
  const day = date.substring(8, 10)
  const month = date.substring(5, 7)
  const year = date.substring(0, 4)
  const result = `${day}/${month}/${year}`

  return result
}

//2021-10-24T03:00:00.000Z
