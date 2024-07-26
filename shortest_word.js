// Code Wars
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
  var words = s.split(" ")
  var min_length = Infinity
  
  for(let i=0; i < words.length; i++) {
    if(words[i].length < min_length) {
      min_length = words[i].length
    }
  }
  
  return min_length
}

// function findShort(s){
//   return Math.min(...s.split(" ").map((w)=> w.length))
// }
