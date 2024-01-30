
function solution(n) {
 if (n == 0) {
     return 1;
 }
 let result;
 result = (n-1) * 4 + solution(n-1);
 return result;
}
