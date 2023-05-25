function getTimeStamp() {
  const date = new Date();

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

  let formatHours = '';
  let formatMinutes = '';
  let formatSeconds = '';

  // if hours is a single digit, add a zero in front
  if (hours <= 9){
    formatHours = `0${hours.toFixed(0)}`
  } else {
    formatHours = `${hours.toFixed(0)}`
  }

  // if minutes is a single digit, add a zero in front
  if (minutes <= 9){
    formatMinutes = `0${minutes.toFixed(0)}`
  } else {
    formatMinutes = `${minutes.toFixed(0)}`
  }

  // if seconds is a single digit, add a zero in front
  if (seconds <= 9){
    formatSeconds = `0${seconds.toFixed(0)}`
  } else {
    formatSeconds = `${seconds.toFixed(0)}`
  }

  // variable for formatting the current time
  let timeNow = `${formatHours}:${formatMinutes}:${formatSeconds}`;

  return timeNow;
}

export default getTimeStamp;