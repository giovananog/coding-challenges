function solution(s1, s2) {
  let counter = 0;
  s2 = s2.split("");
  for (let i in s1){
      for (let j in s2){
          if (s1[i] == s2[j]) {
           counter++;
           s2 = s2.slice(0, j) + s2.slice(parseInt(j) + 1);
           break;
          }
      }
  }
  return counter;
}
