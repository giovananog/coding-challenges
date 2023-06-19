
function solution(statues) {
   let counter = 0;
   statues.sort((a, b) => a - b);
   for (let i = 0; i < statues.length; i++){
       if (statues[i+1] - statues[i] > 1) counter += statues[i+1] - statues[i] - 1;
   }
   return counter;
}
