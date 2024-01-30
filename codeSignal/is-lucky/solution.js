function solution(n) {
    let sum1 = 0, sum2 = 0;
    n = n.toString();
    let size;
    if (n.length % 2 == 0) {
        size = n.length/2;
    }else {
        size = (n.length/2)-1;
    }
      for(let i = 0; i < n.length/2; i++){
          sum1 += parseInt(n[i]);
      }
      for(let i = size; i < n.length; i++){
          sum2 += parseInt(n[i]);
      }
  return sum1 == sum2;
}
