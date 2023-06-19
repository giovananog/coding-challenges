function solution(a, elemToReplace, substitutionElem) {
  for (let i in a) {
      if (a[i] == elemToReplace) {
          a[i] = substitutionElem;
      }
  }
  return a;
}
