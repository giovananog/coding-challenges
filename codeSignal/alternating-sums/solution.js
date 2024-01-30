function solution(a) {
  let sum1, sum2;
  sum1 = sum2 = 0;
  for (let i in a){
      if (i % 2 == 0){
          sum1 +=a[i];
      }else{
          sum2 += a[i];
      }
  }
  let array = [];
  array.push(sum1, sum2);
  return array;
}
