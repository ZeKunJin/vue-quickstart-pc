import antmoment from 'moment'
import 'moment/locale/zh-cn'
antmoment.locale('zh-cn')

export const NumberFormat = value => {
  if (!value) {
    return '0'
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return intPartFormat
}

export const moment = (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return antmoment(dataStr).format(pattern)
}
