// p.102 : 상수와 변수

// 1. 상수만들기 [4단계]
    // 1. const     키워드 작성     왜? 상수인지 변수인지 식별
    // 2. 상수명    이름[식별자]    왜? 상수가 여러개 있으므로 그 중에서 식별
    // 3. =         대입연산자[값을 변수에 넣는 열할]   왜? 오른쪽 값을 왼쪽에 대입
    // 4. 자료      저장할 값

const pi = 3.141592;

// 2. 상수 호출하는 방법 [상수 이름 작성]
console.log(pi); // 상수 출력
// console.log(ppi); ppi is not defined

// 3. 상수의 값을 변경은 불가능 [상수는 값을 변경 할 수 없다.]
// pi = 3.15; Assignment to constant variable.

const r = 10;

// 4. 상수의 연산
console.log(2 * pi * r);
    // pi라는 상수[상자]안에 있는 값을 꺼내기 우선 = 상수 호출

// 5. 동일한 상수명 사용 [상수명은 식별용 이므로 중복이 불가능]
// const pi = 3.97;  //Identifier 'pi' has already been declared

// 6. 상수의 값 대입을 안했을 때. [상수 만들때[처음에] 값[초기값]을 넣는 과정 = 초기화, 초기화가 없으면 오류발생]
// const pi2 ;  // Missing initializer in const declaration

// p.105 변수 만들기

// 1. 변수 만들기 [4단계]
    // 1. let
    // 2. 변수명
    // 3. =
    // 4. 값

let pi3 = 3.141592;

// 2. 변수 호출 [변수 호출시에는 키워드[let,const] 쓰지마세요!!!!]
console.log(pi3);
console.log("pi3 : " + pi3); // 연결연산자 : "문자열" + 변수의 값(숫자) = > 문자열
console.log(`pi3 : ${pi3}`); // 템플릿 문자열 `문~~~자~~~~ ${변수/상수/자료}~~~열`

// 3. 변수의 값 변경 [값 변경시에도 변수 호출후 다시 대입]
pi3 = 3.15;
console.log(pi3);

// 4. 변수의 연산
let r3 = 10;
console.log(2 * pi3 * r3);

// var 와 let 키워드 차이
let value1 = 10;
//  let value1 = 10; // 불가능, 초기화 1번 [동일한 변수명으로 선언시 선언불가.]

var value2 = 10;
var value2 = 100; // 가능, 초기화 여러번 [동일한 변수명으로 선언시 동일한 이름이 있을 경우 덮어쓴다.]

console.log(value1+"\t"+value2 );

// p.108 복합 대입 연산자
let value = 10;
value += 10;
    // vs 같은 결과를 얻는 표현 방법
value = value + 10; //문장
    // = 기준으로 오른쪽 연산
        // value + 10 중에서 변수 호출
    // 1. 10
    // 2. 10 + 10
    // 3. 20
    // 4. =
    // 5. value = 20;
console.log(value);

// ****** JS에서 HTML(문자열)을 작성할때.
let list = ''; // 'list'변수에 빈문자열 넣은 상태로 선언
list += '<ul>';
list += '<li>Hello</li>';
list += '<li>JavaScript</li>';
list += '</ul>';


document.write(list);

// 예제 1 : 2개의 숫자를 입력 받아 더 한 결과값을 html에 <h3>안에 출력
    // 1. prompt() : 입력(string)
    // 2. Number() : 문자열 -> 숫자 로 변환
let number1 = Number(prompt("숫자 1번을 입력해주세요."));
let number2 = Number(prompt("숫자 2번을 입력해주세요."));
    // 함수1(함수2)) -> 함수2 결과를 함수1 넣고 함수1 결과 얻는 과정
    // 입력을 받고[promt()] 입력받은 데이터를 타입 변화[Number()] 하고 변수에 대입
let plusNumber = number1 + number2;
document.write(`<h3>예제1 결과${plusNumber}</h3>`);

// 예제 2 : 2개의 숫자를 입력받아 더 큰수를 html에 h3안에 출력
let number3 = Number(prompt("숫자 3번을 입력해주세요."));
let number4 = Number(prompt("숫자 4번을 입력해주세요."));
    // *****
    // 단항연산자[피연산자1개],이항연산자[피연산자2개], 삼함연산자[피연산자3개]
    // 삼항연산자 : 조건 ? 참 : 거짓     [:콜론 ;세미콜론]
        // - 조건[T/F]에 따른 서로 다른 실행 결과 만들기
        // - true, false 다르게 표현
console.log(number3>number4 ? '참' : '거짓');
document.write(`<h3>예제2 결과:${number3>number4 ? number3 : number4}</h3>`);

if(number3 > number4) {
    document.write(`<h3>예제2 결과:${number3}</h3>`);
// }else if (number3 == number4){
//     document.write(`<h3>같은 값의 숫자입니다.</h3>`);
}  else {
    document.write(`<h3>예제2 결과:${number4}</h3>`);
}

