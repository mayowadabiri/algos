const binaryReversal = (int) => {
  let num = Number(int).toString(2);
  const arr = num.split("");
  if (num.length < 8) {
    let n = 0;
    while (n < 8 - num.length) {
      arr.unshift("0");
      n++;
    }
    return parser(arr)
  } else {
   return parser(arr)
  }
};

const parser = (arr) => {
  const str = arr.reverse().join("");
  return parseInt(str, 2);
}

console.log(binaryReversal(47));
