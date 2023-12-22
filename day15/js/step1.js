/*

                                                                                    미니쿠페[설계도]

    - 자료형
        0.undefined     : 자료없다.                                자동차=미니쿠페=강호동                           자동차=미니쿠페=유재석
        1.숫자형 2.문자열 3.불 
        4.배열[]        : 여러개의 자료을 하나의 자료 집합           현재속도 , 자동차색=블랙                         현재속도 , 자동차색=블랙
            - 성질 , 상태 , 필드  = 현재 데이터의 상태              
        5.함수(){ }     : 코드 집합                                전진(){ 현재속도++; } 자동차도색작업(){ }         전진(){ 현재속도++; } 자동차도색작업(){ }
            - 행위 , 이벤트 , 메소드 
        
    함수
        - 코드의 집합{}을 나타내는 자료형 
        - 용어
            - 함수호출 : 함수사용할떄.  f(x) 
            - 매개변수 : 함수호출할때 함수내부{}에 여러가지 *자료를 넣을때 = 인수
                - 변수 , 상수 , 함수 , 객체 , 배열 , == 자료.

            - 리턴값   : 함수호출해서 최종적으로 나오는 결과 = 반환 return
                - void : 없다.
            
        - 종류                                                          생활속 예시. 선언.
            1. 매개변수O리턴O                                               - 핸드폰수리점( 고장난핸드폰 , 수리비 ){ 수리중. return 수리된핸드폰 }
                function 함수( x , y ){ z = x+y;  return z; }
            2. 매개변수O리턴X                                               - 핸드폰수거함( 폐기할핸드폰 ){ }
                function 함수( x , y ){ z = x+y; }
            3. 매개변수x리턴O                                               - 핸드폰가격확인( ){ return 30000 }
                function 함수( ) {  return 3+3; }
            4. 매개변수X리턴X                                               - 핸드폰( ){ 로직 }
                function 함수( ) { }
                                                                        생활속 예시. 호출.
                                                                            핸드폰수리점( 강호동핸드폰 , 3000 );
                                                                            핸드폰수리점(  유재석핸드폰 , 10000 );

        - 함수 사용하면 좋은점.
            1. 반복되는 코드를 한번에 정의 하고 필요에 따라 호출해서 반복 작업을 피 할수 있다. [ 코드 양 줄일수 있다.]
            2. 긴 프로그램을 기능별로 나눠 여러 함수로 나눠 작성하면 모듈화[ 조각/쪼개서 단위 ]로 전체 코드의 가독성[ 읽고 관리가 ]이 좋아.
            3. 기능별(함수별)로 수정이 가능하므로 유지보수가 쉽다.
            4. 매개변수에 따른 서로 다른 결과물.

        - 1. 익명함수 : 이름이 없는 함수.
            - function( ){ }            : 함수에 이름이 없어서 함수호출이 불가능.
            - 익명함수를 변수/상수에 대입하고 .. 그럼 변수/상수 호출시 함수가 실행.
                - const 함수명 = function( ){ }

        - 2. 선언적함수 : 이름이 있는 함수
            - function 함수명( ){ }     : 함수에 이름이 있는 상태.

                            -------------------------
                            |                       |
                    입구(매개변수)   내부(로직)       출구(리턴/결과)
                            |                       |
                            ------------------------

                            -------------------------
                            |                       |
                    입구(열체크)   내부(열상태따른)   출구( 입장 가능/불가능 )
                            |                       |
                            -------------------------

*/

// p.197 : *익명함수. 

// --------------------- 함수 선언부 S ---------------------
const 함수 = function(e){   
    // ================= 함수 내부 S ================= //
    console.log('함수 내부의 코드입니다..1');
    console.log('함수 내부의 코드입니다..2');
    console.log('함수 내부의 코드입니다..3');
    console.log('');
    // ================= 함수 내부 E ================= //
}
// --------------------- 함수 선언부 E ---------------------

함수(); // 함수 호출
함수(); // 함수 호출
// 함수2(); // 함수2 is not defined [오류]
console.log(typeof 함수)
console.log(함수)

// p.199 : 선언적 함수
function 선언함수(){    // function 함수명(){}
    // ================= 함수 내부 S ================= //
    console.log('선언함수 내부의 코드입니다..1');
    console.log('선언함수 내부의 코드입니다..2');
    console.log('선언함수 내부의 코드입니다..3');
    console.log('');
    // ================= 함수 내부 E ================= //
}   // f E

선언함수();
선언함수();
console.log(typeof 선언함수);
console.log(선언함수);

// p.201 
// 1. 함수명 : 'f' ,  매개변수 : 'x' , 리턴값 : 'x+x'
function f(x){ return x+x };
// 함수[console.log]호출( 함수[f] 호출 )
    // 1. f(3) => 6 
    // 2. console.log( 6 );
console.log( f(3) );

// - 함수명/기능 : 오늘스페셜메뉴 , 매개변수 : 50,000 , 리턴값 : '랍스터음식';
function  오늘스페셜메뉴( 금액 ){
    // 요리하는 로직/코드
    return '랍스터음식';
}
오늘스페셜메뉴( 50000 );