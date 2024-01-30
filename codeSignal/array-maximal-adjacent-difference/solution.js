function solution(a) {
  let max = 0;
  for(let i = 0; i < a.length; i++) {
    if(a[i] - a[i+1] > max) max = a[i] - a[i+1];
    if(a[i+1] - a[i] > max) max = a[i+1] - a[i];
  }
  return max;
}
