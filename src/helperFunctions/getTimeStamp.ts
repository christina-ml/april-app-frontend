function getTimeStamp() {
  const date = new Date();
  // console.log(date)

  // helper to convert GMT to EST
  let estToGMT = 5;
  let isDaylightSavingsTime = true;
  if (isDaylightSavingsTime === true){
    estToGMT = 4;
  }

  const hours = (date.getUTCHours() % 12) - estToGMT;
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  const timeNow = `${hours}:${minutes}:${seconds}`
  // console.log(timeNow);
  return timeNow;
}

export default getTimeStamp;