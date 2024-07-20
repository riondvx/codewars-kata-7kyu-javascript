// Code Wars
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/

function filter_list(l) {
  var newarr = []

  for(let i=0; i < l.length; i++) {
    // "abc" -> "string"
    // 123 -> "number"
    if(typeof l[i] != "string") {
      newarr.push(l[i])
    }
  }

  return newarr
}

// function filter_list(l) {
//   return l.filter(v => typeof v != "string")
// }
