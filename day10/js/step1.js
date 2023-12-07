
console.log("자바스크립트실행2");

console.log(); // 크롬 f12 출력하는 함수

console.log(5 + 3 * 2);
console.log((5 + 3) * 2); // 사칙연선 [연산자 우선순위]

console.log(10 % 2);
console.log(10 % 3);
console.log(10 % 4);

console.log(10 / 2);
console.log(10 / 3);
console.log(10 / 4);

// 몫 구하기 [parseInt() : 정수로 변환해주는 함수 = 소수점 버리기]
console.log(parseInt(10 / 3));

// p.90~91 불 자료형
console.log(true);
console.log(false);

console.log(52 > 273);
console.log(52 < 273);
console.log(10 === 10);
console.log(10 == 10);
console.log(10 === "10");
console.log(10 == "10");
console.log('가방' > '하마');
    // 오름차순 : 0 1 2 3 4 ~, a b c d e f ~, ㄱ ㄴ ㄷ ㄹ ㅁ ~

console.log(52 >= 273);
console.log(52 <= 273);
console.log(10 != 11);

console.log(!true);
console.log(!false);

// p.95
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//p.96~97 자료형 검사 (현재 자료가 숫자인지 문자열인지 불인지 확인작업)
    // - 왜?? 유효성검사 [데이터 확인 -> 자료형 마다 다른 로직/기능 작업]
console.log(typeof("안녕하세요"));
console.log(typeof(273));
console.log(typeof(true));

console.log(typeof "안녕하세요");
console.log(typeof (50-30));
    // typeof : 단항 연산자라 다른 연산자랑 사용시 ()필수

// p.98 템플릿 문자열* (서로 다른 자료형들이 존재할때는 + 연결 연산자)
console.log('표현식 273+52의 값은 ' + (273 + 52) + '입니다.');
          //'        문자열       ' +    숫자     + '문자열 '
          // +연결연산자 이용하면 된지만... 너무 많으면 복잡해진다.
console.log(`표현식 273+52의 값은 ${273+52}입니다.`);          
        // `백틱(탭[tab]위에`)
        // 1. ``으로 전체를 감싼다.
        // 2. 데이터를 출력할 위치에 ${테이터}

// p.99
console.log(1 == "1"); // 데이터만 비교했을 떄는 같다.
console.log(false == 0); // false는 0과 같다. true는 1 [2진수 -> 0,1 -> false,true]
console.log("" == []); // 빈문자열과 빈배열과는 같은 값 의미
console.log(0 == []); // 0과 빈배열과 같은 값 의미

// p.100
console.log(2+2-2*2/2*2);
console.log(2-2+2/2*2+2);
/*
    1. 불,숫자,숫자,불
    2.
        # 연습문제
        \\\\
    3.
        녕
        하
        세
        요

    4.
        0
        4
 */