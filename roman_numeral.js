const romanNumeral = (arr) => {
  let count = 0;
  let str = arr.split("");
  const number = [
    { num: 1, id: "I" },
    { num: 5, id: "V" },
    { num: 10, id: "X" },
    { num: 50, id: "L" },
    { num: 100, id: "C" },
    { num: 500, id: "D" },
    { num: 1000, id: "M" },
  ];

  for (let i = 0; i < str.length; i++) {
    let rn = 0;
    if (
      (str[i] === "I" && (str[i + 1] === "V" || str[i + 1] === "X")) ||
      (str[i] === "X" && (str[i + 1] === "L" || str[i + 1] === "C")) ||
      (str[i] === "C" && (str[i + 1] === "D" || str[i + 1] === "M"))
    ) {
      const biggerRN = number.find((num) => {
        return num.id === str[i + 1];
      });
      const smallerRN = number.find((num) => {
        return num.id === str[i];
      });

      if (biggerRN.num > smallerRN.num) {
        rn = biggerRN.num - smallerRN.num;
        i = i + 1;
      } else {
        rn = smallerRN.num;
      }
      count += rn;
    } else {
      const selected = number.find((num) => {
        return num.id === str[i];
      });
      rn = selected.num;
      count += rn;
    }
  }

  return count;
};

console.log(romanNumeral("MMMCDXLIV"));
