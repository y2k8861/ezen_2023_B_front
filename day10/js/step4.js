
/* 연산자 연습문제 */

// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력
// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력
// -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력[- 54.5   84.3 두 실수 입력시   결과 : 64%]
// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력
// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력
// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용]
// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]
// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력
// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력 

/*
   [ JS 연산자 과제1 ]
   문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]
   문제12 : [ 가위바위보 게임 ] 
   - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
   - 승리자 판단과 무승부 경우의수를 출력하시오.
   [입력]
      플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
      플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   [경우의수 판단]
      플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
      플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
      비겼을경우 '무승부' 출력
*/

// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력
let ex1value1 = Number(prompt("국어 점수를 입력해 주세요."));
let ex1value2 = Number(prompt("영어 점수를 입력해 주세요."));
let ex1value3 = Number(prompt("수학 점수를 입력해 주세요."));

let ex1result1 = ex1value1 + ex1value2 + ex1value3;
let ex1result2 = ex1result1 / 3;

// document.write(`국어 : ${ex1value1}, 영어 : ${ex1value2}, 수학 : ${ex1value3}`);
// document.write(`총점 : ${ex1result1}, 평균 : ${ex1result2}`);

console.log("문제1");
console.log(`국어 : ${ex1value1}, 영어 : ${ex1value2}, 수학 : ${ex1value3}`);
console.log(`총점 : ${ex1result1}, 평균 : ${ex1result2}`);

// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력
let ex2value1 = Number(prompt("반지름을 입력해 주세요."));

console.log("\n문제2");
console.log(`반지름 : ${ex2value1}`);

ex2value1 *= ex2value1;
let ex2reult = ex2value1*3.14;

console.log(`원넓이 : ${ex2reult}`);

// -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력[- 54.5   84.3 두 실수 입력시   결과 : 64%]
let ex3value1 = Number(prompt("실수1을 입력해 주세요."));
let ex3value2 = Number(prompt("실수2을 입력해 주세요."));
let ex3result = ex3value1/ex3value2*100;

console.log("\n문제3");
console.log(`실수1 : ${ex3value1}, 실수2 : ${ex3value2}`);
console.log(`결과 : ${ex3result}%`);

// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력
let ex4value = parseInt(prompt("정수(문제4)를 입력해 주세요."));

console.log("\n문제4");
console.log(`정수 : ${ex4value} -> ${ex4value%2!==0 ? "홀수":"짝수"}`);


// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력
let ex5value = parseInt(prompt("정수(문제5)를 입력해 주세요."));

console.log("\n문제5");
console.log(`정수 : ${ex5value} -> ${ex5value%7 == 0 ? "TRUE(7의 배수O)":"FALSE(7의 배수X)"}`);

// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용]
let ex6value = Number(prompt("십만원 단위의 금액을 입력해 주세요.",100000));

console.log("\n문제6");
console.log(`${ex6value}원`);

let ex6result1 = ex6value/100000;
ex6value %=100000;
let ex6result2 = ex6value/50000;
ex6value %=50000;
let ex6result3 = ex6value/10000;
ex6value %=10000;
let ex6result4 = ex6value/5000;
ex6value %=5000;
let ex6result5 = ex6value/1000;

console.log(`십만원권 : ${parseInt(ex6result1)}장, 오만원권 : ${parseInt(ex6result2)}장, 만원권 : ${parseInt(ex6result3)}장, 오천원권 : ${parseInt(ex6result4)}장, 천원권 : ${parseInt(ex6result5)}장`)

// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]
let ex7value1 = prompt("아이디를을 입력해 주세요.");
let ex7value2 = prompt("비밀번호를 입력해 주세요.");

console.log("\n문제7");
console.log(`아이디 : ${ex7value1}, 비밀번호 : ${ex7value2} `);
console.log(ex7value1 == "admin" &&  ex7value2 == "1234" ? "TRUE[로그인]":"FALSE[로그인 불가]");


// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
let ex8value = parseInt(prompt("정수(문제8)를 입력해 주세요."));

console.log("\n문제8");
console.log(`정수 : ${ex8value}`);
console.log(`${ex8value%2!==0 && ex8value%7 == 0 ? "TRUE(7의 배수O,홀수)":"FALSE"}`);

// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력
let ex9value1 = parseInt(prompt("정수1(문제9)를 입력해 주세요."));
let ex9value2 = parseInt(prompt("정수2(문제9)를 입력해 주세요."));

console.log("\n문제9");
console.log(`정수1 : ${ex9value1}, 정수2 : ${ex9value2}`);
console.log(`결과 : ${ex9value1 > ex9value2 ? ex9value1 : ex9value2}`);


// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력 
let ex10value1 = parseInt(prompt("정수1(문제10)를 입력해 주세요."));
let ex10value2 = parseInt(prompt("정수2(문제10)를 입력해 주세요."));
let ex10value3 = parseInt(prompt("정수3(문제10)를 입력해 주세요."));

let ex10result = ex10value1 > ex10value2 ? ex10value1 > ex10value3 ? ex10value1 : ex10value3 : ex10value2 > ex10value3 ? ex10value2 : ex10value3;
let max = ex10value1;
max = max > ex10value2 ? max : ex10value2;
max = max > ex10value3 ? max : ex10value3;

console.log("\n문제10");
console.log(`정수1 : ${ex10value1}, 정수2 : ${ex10value2}, 정수3 : ${ex10value3}`);
console.log(`결과 : ${ex10result}`);
console.log(`결과 : ${max}`);

// 문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]
let 정수1 = parseInt(prompt("정수1(문제11)를 입력해 주세요."));
let 정수2 = parseInt(prompt("정수2(문제11)를 입력해 주세요."));
let 정수3 = parseInt(prompt("정수3(문제11)를 입력해 주세요."));

// console.log("\n문제11");
// console.log(`정수1 : ${정수1}, 정수2 : ${정수2}, 정수3 : ${정수3}`);
// 정수1 > 정수2 ? 
//     정수3 > 정수1 ? console.log(`${정수2},${정수1},${정수3}`)
//         : 정수2 > 정수3 ? console.log(`${정수3},${정수2},${정수1}`) : console.log(`${정수2},${정수3},${정수1}`)
//     : 정수3 > 정수2 ? console.log(`${정수1},${정수2},${정수3}`) 
//         : 정수1 > 정수3 ? console.log(`${정수3},${정수1},${정수2}`) : console.log(`${정수1},${정수3},${정수2}`)

//     /* 
//         오름차순 하는 방법 [정렬]
//         7 5 9
//         a b c 

//         1. a 와 b를 비교  a > b a가 더 크면 자리 바꾸기[스왑]
//         --- 모든 자리수 마다 비교

//         a자리는 b,c와 비교
//         b자리는 c와 비교
//         c자리는 X

//         변수와 변수의 값 바꾸는 방법[스왑]
//             a 와 b 를 스왑
//             1. a에 b를 대입
//                 a = b       [문제점 : a의 값은 사라짐.. 왜?? 변수는 1개밖에 저장을 못하니까.]

//             2. b에 a를 대입

//             - 스왑하는 방법 [임의 변수 활용]
//             1. temp 임의[임시저장소] 생성.
//             2. temp에 a를 대입
//             3. a에 b를 대입
//             4. b에 temp를 대입

//             a <----- 직거래X -----> b

//                     temp[임시]

//     */

// 자릿수 각 비교해서 스왑하는 방법 [추후에 제어문/반복문 이용한 효휼적인 방법]
let temp = 정수1 > 정수2 ? 정수2 : 정수1;
정수2 = 정수1 > 정수2 ? 정수1 : 정수2;
정수1 = 정수1 > 정수2 ? 정수1 : temp;

temp = 정수1 > 정수3 ? 정수3 : 정수1;
정수3 = 정수1 > 정수3 ? 정수1 : 정수3;
정수1 = 정수1 > 정수3 ? 정수1 : temp;

temp = 정수2 > 정수3 ? 정수3 : 정수2;
정수3 = 정수2 > 정수3 ? 정수2 : 정수3;
정수2 = 정수2 > 정수3 ? 정수2 : temp;


console.log(`${정수1},${정수2},${정수3}`)

// - 최댓값, 최솟값, 미들값
        
let r
r= 10;



//    문제12 : [ 가위바위보 게임 ] 
//    - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
//    - 승리자 판단과 무승부 경우의수를 출력하시오.
//    [입력]
//       플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
//       플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
//    [경우의수 판단]
//       플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
//       플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
//       비겼을경우 '무승부' 출력

let player1 = Number(prompt('플레이어1'))
let player2 = Number(prompt('플레이어2'))
let answer = player1==player2 ? 
                    '무승부' :  player1==(player2+1)%3 ? 
                                '플레이어1 승리' :  '플레이어2 승리';
console.log( answer )

/* 
    플레이어1 이기는 경우의 수
        플레이어1 == 0 일때 플레이어2 == 2
        플레이어1 == 1 일때 플레이어2 == 0
        플레이어1 == 2 일때 플레이어2 == 1

        (플레이어1 == 0 && 플레이어2 == 2) ||
        (플레이어1 == 1 && 플레이어2 == 0) ||
        (플레이어1 == 2 && 플레이어2 == 1)

            플레이어2 == 2+1 = 3 => 3%3 == 0
            플레이어2 == 0+1 = 1 => 1%3 == 1
            플레이어2 == 1+1 = 2 => 2%3 == 2

    player1==(player2+1)%3             
*/


// let ex12value1 = prompt("플레이어1 가위,바위,보 중에 하나를 입력해주세요");
// let ex12value2 = prompt("플레이어2 가위,바위,보 중에 하나를 입력해주세요");
// console.log("\n문제12");
// console.log(`플레이어1 : ${ex12value1}, 플레이어2 : ${ex12value2}`);

// ex12value1 = ex12value1 == "가위" ? 0 
//     : ex12value1 == "바위" ? 1 
//         : ex12value1 == "보" ? 2 : /* ex12value1 = prompt("플레이어1 가위,바위,보 중에 하나를 입력해주세요");  */0;

// ex12value2 = ex12value2 == "가위" ? 0 
//     : ex12value2 == "바위" ? 1 
//         : ex12value2 == "보" ? 2 : /* ex12value1 = prompt("플레이어1 가위,바위,보 중에 하나를 입력해주세요");          */0;

// ex12value1 == 0 && ex12value2 == 0 ? console.log("무승부") 
//     : ex12value1 == 0 && ex12value2 == 1 ? console.log("플레이어2 승리") 
//         : ex12value1 == 0 && ex12value2 == 2 ? console.log("플레이어1 승리") 
//             : ex12value1 == 1 && ex12value2 == 0 ? console.log("플레이어1 승리") 
//                 : ex12value1 == 1 && ex12value2 == 1 ? console.log("무승부") 
//                     : ex12value1 == 1 && ex12value2 == 2 ? console.log("플레이어2 승리")
//                         : ex12value1 == 2 && ex12value2 == 0 ? console.log("플레이어2 승리") 
//                             : ex12value1 == 2 && ex12value2 == 1 ? console.log("플레이어1 승리") 
//                                 : ex12value1 == 2 && ex12value2 == 2 ? console.log("무승부") : 0 ;