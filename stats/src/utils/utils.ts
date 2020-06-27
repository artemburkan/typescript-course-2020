export const dateSctringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map((value) => {
    return parseInt(value)
  })

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}
