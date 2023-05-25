function getTimeStamp() {
  const date = new Date();
  // console.log(date)

  // helper to convert GMT to EST
  let estToGMT = 5;
  let isDaylightSavingsTime = true;
  if (isDaylightSavingsTime === true){
    estToGMT = 4;
  }

  // assign variables to current hours, mins, seconds
  const hours = (date.getUTCHours() % 12) - estToGMT;
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  // variable for formatting the current time
  let timeNow = '';

  // if seconds is a single digit, add a zero in front
  if (seconds <= 9){
    timeNow = `${hours}:${minutes}:0${seconds.toFixed(0)}`
  } else {
    timeNow = `${hours}:${minutes}:${seconds.toFixed(0)}`
  }

  // console.log(timeNow);
  return timeNow;
}

export default getTimeStamp;