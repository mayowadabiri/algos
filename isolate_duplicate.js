const isolate = (str) => {
  const letters = [];
  var each = [];
  let string = "";
  for (let i = 0; i < str.split("").length; i++) {
    if (str[i] !== str[i - 1]) {
      each = [];
      each.push(str[i]);
      letters.push(each);
    } else {
      each.push(str[i]);
    }
  }
  let count = 0;
  for (let key of letters) {
    if (key.length > 2) {
      const removed = key.splice(2).join("");
      string += `${key.join("")}[${removed}]`;
      count++;
    } else {
      for (let j = 0; j < key.length; j++) {
        string += key[j];
      }
    }
  }
  return [string, count];
};

console.log(isolate("aaaabbcdefffffffgpppppppijjkkkkkkkkllllllmmmmm"));
// ([aa[aa]bbcdeff[fffff]gpp[pppp], 3])