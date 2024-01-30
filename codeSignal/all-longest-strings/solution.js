function solution(inputArray) {
    let longest = 0, j = 0, array = [];
    for (let i in inputArray) {
       if (inputArray[i].length > longest) {
           array = [];
           longest = inputArray[i].length;
           j = 0;
           array[j++] = inputArray[i];
       }else if (inputArray[i].length == longest) {
           array[j] = inputArray[i];
           j++;
       }
    }
    return array;
}
