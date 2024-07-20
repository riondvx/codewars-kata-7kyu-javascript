// Code Wars
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  var n = 0;
  for(let i=0; i < str.length; i++) {
    if("aiueo".includes(str[i])) {
      n += 1
    }
  }
  return n;
}

// function getCount(str) {
//   return str.replace(/[^aiueo]/g, "").length
// }
