function solution(inputArray) {
  let largestP = (inputArray[0] * inputArray[1]);
  for (let i = 1; i < inputArray.length - 1; i++){
     if ((inputArray[i] * inputArray[i+1]) > largestP){
         largestP = inputArray[i] * inputArray[i+1];
     }
  }
  return largestP;
}
