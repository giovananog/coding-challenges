function solution(a) {
  let aux;
  for(let i in a){
    for(let j in a) {
      if (a[i] < a[j] && a[j] != -1 && a[i] != -1){
         aux = a[j];
         a[j] = a[i];
         a[i] = aux;
      }
    }
  }
  return a;
}
