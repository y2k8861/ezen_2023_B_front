
// p. 109~110 증감연산자
    // - 복합대입연산자 간략하게 사용합니다.
    // 증감연산자는 1씩증가 또는 1씩 감소 만 가능.[왜? 프로그래밍에서 순차적(순서대로)처리]
let value1 = 10;

value1 = value1 + 1;    // 1. 변수호출하고 연산 후 결과를 변수에 대입
    console.log(value1); // 1증가

    // vs       1번과 2번의 차의점 : 없다.

value1 += 1;            // 2. 1번 간략하게 하기위해
    console.log(value1); // 1증가

    // vs       2번과 3번의 차이점 : 없다.[단 증감연산자는 1증가/감소 만 가능]

value1++;               // 3. 2번 간략하게 하기위해
    console.log(value1); // 1증가

    // vs       3번과 4번의 차이점 : 없다.[후위 : , 선위 : ]

++value1;               // 4. 2번 간략하게 하기위해
    console.log(value1); // 1증가

// p. 110
// 후위
let number1 = 10;
number1++;
console.log(number1);

// 선위
let number2 = 10;
++number2;
console.log(number2);

//차이점 1 : 출력 우선(후위) vs 증감 우선(선위)
let number3 = 10;
console.log(number3++); // 출력 후 증감 => 10
console.log(number3);   // 11

let number4 = 10;
console.log(++number4); // 증감 후 출력 => 11

//차이점 2 : +,= 우선 ? ++1증가 우선?
let number5 = 10;
let result1 = number5++ +10;    // 대입 후 number5 증가
console.log(result1);
console.log(result1);
console.log(number5);

let number6 = 10;
let result2 = ++number6 +10;    // 대입 후 number5 증가
console.log(result2);
console.log(result2);
console.log(number6);

