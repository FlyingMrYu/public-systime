export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
/**
 * getDay 获取哪一天的时间
 * @param {*} day 获取的哪一天
 * @param {*} fmt 时间格式
 */
export const getDay = (day = 0, fmt = 'yyyyMMdd', newDate) => {
  var date = new Date();
  if (newDate) {
    // 若传进来时间就用传进来的时间
    date = newDate;
  }
  var targetday_milliseconds = date.getTime() + 1000 * 60 * 60 * 24 * day;
  date.setTime(targetday_milliseconds);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}
export const getDayInter = (newDate, fmt = 'yyyyMMdd') => {
  var date = new Date(newDate);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

const format = (time) => {
  let ymd = ''
  let mouth = (time.getMonth() + 1) >= 10 ? (time.getMonth() + 1) : ('0' + (time.getMonth() + 1))
  let day = time.getDate() >= 10 ? time.getDate() : ('0' + time.getDate())
  ymd += time.getFullYear() + '-' // 获取年份。
  ymd += mouth + '-' // 获取月份。
  ymd += day // 获取日。
  return ymd // 返回日期。
}

export const getAllDate = (start, end) => {
  let dateArr = []
  let startArr = start.split('-')
  let endArr = end.split('-')
  let db = new Date()
  db.setUTCFullYear(startArr[0], startArr[1] - 1, startArr[2])
  let de = new Date()
  de.setUTCFullYear(endArr[0], endArr[1] - 1, endArr[2])
  let unixDb = db.getTime()
  let unixDe = de.getTime()
  let stamp
  const oneDay = 24 * 60 * 60 * 1000;
  for (stamp = unixDb; stamp <= unixDe;) {
    dateArr.push(format(new Date(parseInt(stamp))))
    stamp = stamp + oneDay
  }
  return dateArr
}
//  获取一个月有多少天
export const getDateMonth = async (date) => {
  var curDate = new Date(date);
  /* 获取当前月份bai */
  var curMonth = curDate.getMonth();
  /*  生成实际的月du份: 由于curMonth会比实际月份小1, 故需加1 */
  curDate.setMonth(curMonth + 1);
  /* 将日期设置为0, 这里zhi为什么要这dao样设置, 我不知道原因, 这是从网上学来的 */
  curDate.setDate(0);
  /* 返回当月的天数 */
  return curDate.getDate();
}
