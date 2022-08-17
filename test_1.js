function solution(s) {
  var answer = 0;
    for(let i = 0; i < s.length; i++) {
      if(s.indexOf(s[i]) === i){
          answer++;
      }
}
  
  return answer;
}
