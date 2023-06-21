export default function getLowerAndUpperEnd(average) {
  let floorNumber;
  let ceilNum;
  const multipliedNumber = average * 100;
  floorNumber = Math.floor(multipliedNumber) / 100;
  ceilNum = Math.ceil(multipliedNumber) / 100;
  if (floorNumber === ceilNum) {
    ceilNum = ceilNum + 0.1;
  }

  return {
    lower_end: floorNumber,
    upper_end: ceilNum,
  };
}
