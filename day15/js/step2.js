 
/* 
    HTML에 .js파일 포함된 구조[HTML]열리면 JS코드는 실행
    1. JS 함수호출.
        함수1();

    2. HTML에서 JS함수 호출
        <마크업 이벤트속성="함수명(매개변수)" />
            - 이벤트속성 종류
                1. onclick
*/

function 함수1(){
    console.log('함수1 실행');
}

함수1()

// 2. 매개변수 2개, 리턴 X
function 함수2(x,y){console.log(x+y);}
함수2(3,5);

// 3. 매개변수X, 리턴O
function 함수3(){return 3+8}
함수3();
console.log(함수3());
    // 리턴값을 가지고 추후 로직
let result = 5 + 함수3();
console.log(result);

// 4. 매개변수O, 리턴O
function 함수4(x,y){return x+y;}

// - 함수 안에 함수
function 함수5(){
    let result = 함수6(3);
    console.log(result);
}

function 함수6(x){return x*x;}

함수5()

// - 변수 위치에 따른 함수 내부에서 변수 호출.
    // - 매개변수를 이동한 서로 다른 함수간의 자료 전달.
    // - (전역)자료 쓰면 모든 함수에서 사용 가능 
        // 특징: 프로그램이 종료될떄까지 그 자료는 사라지지 않는다
    // - (지역)자료 쓰면 서로 다른 함수에서 사용불가능. [매개변수 쓰면 가능]
        // 특징 : 메모리 효율성이 좋다. 기능에 필요한 자료만 쓰고 기능이 끝나면 버린다. 
            // [프로그램 전체적으로 사용하는 자료가 아니면]

const 전국지역 = 10;

function 경기도(지역){
    const 경기도 = 5;
    console.log(전국지역);
    return 지역*5;
}

function 강원도(지역){
    const 강원지역 = 5;
    경기도(강원지역);
    console.log(전국지역);
}

경기도(전국지역)
강원도(전국지역)

function multplyAll(x,y){
    let result = 1;
    for(let i = x; i<=y; i++){
        result *= i;
    }
    return result;
}

console.log(multplyAll(1,2));
console.log(multplyAll(1,4));