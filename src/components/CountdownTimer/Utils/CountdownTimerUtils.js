import dayjs from "dayjs";

export function getRemainingTime(timestampMs) {

    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();

    if(timestampDayjs.isBefore(nowDayjs)) {
      return {
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '00'
      }
    }

    return {
        seconds: getRemainingSeconds(timestampDayjs, nowDayjs),
        minutes: getRemainingMinutes(timestampDayjs, nowDayjs),
        hours: getRemainingHours(timestampDayjs, nowDayjs),
        days: getRemainingDays(timestampDayjs, nowDayjs),
    };
}

function getRemainingSeconds(timestampDayjs, nowDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    console.log(dayjs('2024-03-10').unix());
    return padWithZeros(seconds,2);
}

function getRemainingMinutes(timestampDayjs, nowDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes,2);
}

function getRemainingHours(timestampDayjs, nowDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours,2);
}

function getRemainingDays(timestampDayjs, nowDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return padWithZeros(days,2);
}

function padWithZeros(number,minLength) {
  const numberString = number.toString();
  if(numberString.length >= minLength) return numberString;
  return '0'.repeat(minLength - numberString.length) + numberString
}