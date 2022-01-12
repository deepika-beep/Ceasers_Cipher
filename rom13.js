// Write a function which takes a ROT13 encoded string as input and returns a decoded string

function rot13(str) {
  let string = '';
  let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  console.log(alph.length)
  for(let i =0;i<str.length;i++){
    let index = alph.indexOf(str[i]);
    
if(index == -1){
  string += str[i];
}
else{
let newIndex = (index + 13)%26;
// console.log(newIndex);
string+= alph[newIndex];
}
  }
  return string;
}

console.log(rot13("SERR PBQR PNZC"));