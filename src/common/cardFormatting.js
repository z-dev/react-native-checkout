import _ from 'lodash'

export const formatMonthYearExpiry = (monthYearExpiryString, previousMonthYearExpiry) => {
  if (_.size(monthYearExpiryString) === 2 && _.size(previousMonthYearExpiry) !== 3) {
    return `${monthYearExpiryString}/`
  } else if (_.size(monthYearExpiryString) === 2 && _.size(previousMonthYearExpiry) === 3) {
    return monthYearExpiryString.substring(0, 1)
  }
  return monthYearExpiryString
}
