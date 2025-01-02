var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (let i = 0; i < bills.length; i++) {
      let amount = bills[i];

      switch (amount) {
          case 5:

              five++;
              break;

          case 10:

              if (five > 0) {
                  five--;
                  ten++;
              } else {
                  return false;
              }
              break;

          case 20:

              if (ten > 0 && five > 0) {
                  ten--;
                  five--;
              } else if (five >= 3) {

                  five -= 3;
              } else {
                  return false;
              }
              break;

          default:

              return false;
      }
  }

  return true;
};
