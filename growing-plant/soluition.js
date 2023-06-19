function solution(upSpeed, downSpeed, desiredHeight) {
  let plantheight = upSpeed;
  let day;
  
  for(day = 1; plantheight < desiredHeight; day++){
    plantheight += (upSpeed - downSpeed);
  }
  
  return day;
}
