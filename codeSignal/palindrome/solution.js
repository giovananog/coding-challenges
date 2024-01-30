function solution(inputString) {
  
  let sizeOfInputString = inputString.length;
  let string2 = "";
  
  for (let i = sizeOfInputString-1; i >= 0; i--){
      string2 += inputString[i];
  }
  
  if (inputString === string2) return true;
  
  return false;
}
