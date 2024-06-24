function timeConversion(s) {

  let period = s.slice(-2);


  let time = s.slice(0, -2);


  let [hours, minutes, seconds] = time.split(':');


  hours = parseInt(hours, 10);

  if (period === 'AM') {

      if (hours === 12) {
          hours = 0;
      }
  } else {

      if (hours !== 12) {
          hours += 12;
      }
  }

  hours = hours.toString().padStart(2, '0');


  return `${hours}:${minutes}:${seconds}`;
}

