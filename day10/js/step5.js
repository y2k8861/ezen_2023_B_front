

/* 
    정수 3개를 받아서 순차 배열하기
*/

let 정수1 = Number(prompt("정수를 입력해주세요."));
let 정수2 = Number(prompt("정수를 입력해주세요."));
let 정수3 = Number(prompt("정수를 입력해주세요."));

let temp = 정수1 > 정수2 ? 정수2 : 정수1 ;
정수2 = 정수1 > 정수2 ? 정수1 : 정수2 ;
정수1 = 정수1 > 정수2 ? 정수1  : temp ; 

temp = 정수1 > 정수3 ? 정수3 : 정수1 ;
정수3 = 정수1 > 정수3 ? 정수1 : 정수3 ;
정수1 = 정수1 > 정수3 ? 정수1  : temp ; 

temp = 정수2 > 정수3 ? 정수3 : 정수2 ;
정수3 = 정수2 > 정수3 ? 정수2 : 정수3 ;
정수2 = 정수2 > 정수3 ? 정수2  : temp ;

console.log(`${정수1},${정수2},${정수3}`)