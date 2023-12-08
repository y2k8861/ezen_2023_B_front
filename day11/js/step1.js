// p.116 자료형 변환
    // 1. 문자열 입력
const input = prompt('massage' , "_default");
    // 코드실행순서
    // 1. prompt('massage' , "_default");   : [실행] 클라이언트에게 입력받는 알람함수
    // 2. prompt() 결과/반환/리턴된 값       : [실행 결과]
    // 3. const input = 리턴된 값            : [실행 결과 저장]
alert(input);

    // 2. 불 입력 [confirm() : 확인[true]/취소[false]를 반환하는 알람함수]
const input2 = confirm("수락하시겠습니까?");

alert(input2);

    // 3. 숫자 자료형으로 변환하기 [Number() : 문자열 자료형을 숫자형으로 변환 함수]

console.log(Number("273"));
console.log(Number("a")); // NaN => Not a Number // 숫자로 표현할 수 없어.
console.log(Number(true));  // true = 1
console.log(Number(false)); // false = 0

    // 4. 숫자 연산을 사용해 자료형 변환하기 [*단 숫자 +"문자열"] : 연결연산자 조심...]
console.log("52"-3);    // 49  결과의 자료형이 숫자로 변환
console.log(true - 1);  // 0
console.log(true + 1);  // 2

    // 5. 문자열 자료형으로 변환하기 [String() : 문자열 자료형으로 변환 함수.]
console.log(String(52.273));    // 52.273 -> "52.273"
console.log(String(true));      // true -> "true"

console.log(52.273+"");         // 52.273 -> "52.273" [연결 연산자 이용]
console.log(true +"");          // true -> "true"

    // 6. 불 자료형으로 변환하기 [Boolean() : 불 자료형으로 변환 함수]
console.log(Boolean(0));            // false
console.log(Boolean(NaN));          // false
console.log(Boolean(""));           // false
console.log(Boolean(null));         // false
let 변수
console.log(Boolean(변수));         // false

    // 7. 논리 부wjd 연산자를 사용해서 자료형 변환하기
console.log(!273);              // 0 -> false, 1 -> true, 273 -> true, !273 -> false
console.log(!!273);             // !!273 -> true
console.log(!!0);               // 0 -> false -> true ->false

// p.124 예제

    // 프로그램 기본 : 입력 -> 처리 -> 결과
    // 웹프로그램 기본 : 프론트엔드HTML[<input>] -> 백엔드JAVA -> 프론트엔드HTML[<TABLE>]

    // 1. [입력]
const inch = prompt('inch 단위의 숫자를 입력해주세요.');
    // 2. [처리]
const cm = inch * 2.54;
    // 3. [출력]
alert(`${inch}inch는 ${cm}cm 입니다.`);

// 앞으로의 웹개발 방향
// 변수 = let, 상수 = const, 함수 = function 선언 약속/규칙/문법
// function 함수명(매개변수){구현할기능코드}
function 변환기능(){
    const 인치 = document.querySelector('input');
        // document : HTML
        // query : 질의/요청
        // Selector : 선택
            // document.querySelector() : HTML에 요소 선택
    const 센치 = 인치.value * 2.54;
    document.querySelector("h3").innerHTML = `${인치.value}inch는 ${센치}cm 입니다.`;
    // (`${인치}inch는 ${센치}cm 입니다.`)
}

const 센티1 = prompt("센티미터를 입력해 주세요.");
const 인치1 = Number(센티1)*0.393701;
console.log(`${센티1}cm는 ${인치1}inch 입니다`);

const 반지름 = prompt("반지름을 입력해 주세요.");
const 넓이 = 반지름*반지름*3.14;
const 둘레 = 반지름*2*3.14;
console.log(`원의 반지름 : ${반지름}\n원의 넓이 : ${넓이}\n원의 둘레 : ${둘레}`);

const 달러 = prompt("달러를 입력해 주세요.");
const 원화 = 달러*1207;
console.log(`달러 : ${달러} \n-> 원화 : ${원화}`)

/* 
    과제 : 각 생활에서 사용되는 기계/프로그램들 예시 만들기 [4명]
    - 키오스크, 엘레베이터, 자율주행 자동차 중에서
    엘레베이터
    1. 저장/변수        5개 : 현재 층, 누른 층, 

    2. 기능/함수        5개 :

    3. 경우의수/논리    5개 : 
        - 현재층이 누른 층보다 높다/낮다
        - N층에서 올라간다/내려간다 버튼을 누른다
        - 현재층에서 N층으로 올라간다/내려간다
        - 엘리베이터

    4. 1~3 시각화
*/
