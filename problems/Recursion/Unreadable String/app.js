//https://vjudge.net/contest/654059#problem/D


function isHardToReadRecursive(S, position = 0) {
  if (position >= S.length) {
    return 'Yes';
  }
  if ((position % 2 === 0 && S[position] !== S[position].toUpperCase()) ||
      (position % 2 === 1 && S[position] !== S[position].toLowerCase())) {
    return 'No';
  }

  return isHardToReadRecursive(S, position + 1);

}




//Iterative

function isHardToRead(S) {
  for (let i = 0; i < S.length; i++) {
      if (i % 2 === 0 && S[i] !== S[i].toUpperCase()) {
          return 'No';
      } else if (i % 2 === 1 && S[i] !== S[i].toLowerCase()) {
          return 'No';
      }
  }
  return 'Yes';
}
