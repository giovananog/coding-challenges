function solution(sequence) {
  let counter = 0;
  for (let i = 0; i < sequence.length - 1; i++){
      if (sequence[i] >= sequence[i+1]) {
        counter++;
        if (sequence[i-1] >= sequence[i+1] && sequence[i] >= sequence[i+2] || counter > 1) return false;
      }   
  }
  return true;
}

