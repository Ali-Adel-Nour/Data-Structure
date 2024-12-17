var compress = function(chars) {
  let write = 0;
 let read = 0;

 while (read < chars.length) {
     let char = chars[read];
     let count = 0;

     // Count the number of consecutive characters
     while (read < chars.length && chars[read] === char) {
         count++;
         read++;
     }
     chars[write] = char;
     write++;
     if (count > 1) {
         for (let digit of String(count)) {
             chars[write] = digit;
             write++;
         }
     }
 }

 return write;

};