/* 
    p.142 switch 조건문
        - break : switch이거나 반복문(for/while)에서 {} 나가기/퇴출 하는 키워드
        - 논리판단(범위판단)X / 경우의 수가 값으로 정해져 있는 경우

        1. 형태
            switch (자료){
                case 조건A : 실행코드; break;
                case 조건B : 실행코드; break;
                case 조건C : 실행코드; break;
                default : break;
            }

    p.145 삼항연산자
        - 간단한(조건 1개또는 2개) 조건에 따른 결과 실행
        - 조건부 렌더링[화면표현](JS많이씀)
        - 가독성 떨어짐
        1. 형태
            불 표현식 ? 참일때 결과 : 거짓일때 결과
*/

const input = Number(prompt('숫자를 입력하세요.')); // 숫자 입력받아 숫자자료형 변환후 상수에 저장

// 1. 예) if
if(input % 2 == 0){
    console.log('if짝수입니다.');
} else if(input % 2 == 1) {
    console.log('if홀수입니다.');
} else {
    console.log('숫자가 아닙니다.');
};

// 1. 예) switch

switch(input%2){
    case 0 : 
        console.log('switch짝수입니다.');
        break;
    case 1 : 
        console.log('switch홀수입니다.');
        break;
    default : 
        console.log('숫자가 아닙니다.');
}

// 2.
const date = new Date();    // new Date(); 현재날짜/시간 알려주는 코드(객체)
const hour = date.getHours();   // ..getHours() 현재날짜/시간에서 '시'만 추출함수

// 2-1
    if(hour < 11){
        console.log('아침 먹을 시간입니다.');
    } else if(hour < 15){
        console.log('점심 먹을 시간입니다.');
    } else {
        console.log('저녁먹을 시간입니다.');
    }

// 2-2
switch(true){
    case hour < 11 : 
        console.log('아침 먹을 시간입니다.');
        break;

    case hour < 15 : 
        console.log('점심 먹을 시간입니다.');
        break;

    default : 
        console.log('저녁먹을 시간입니다.');
        break;
}

// 3
const input2 = prompt('숫자를 입력해 주세요.');
const number = Number(input2);

// 3-2 if
if(number >= 0){
    console.log('0이상의 숫자입니다.');
} else {
    console.log('0보다 작은 숫자입니다.');
}

// 3-2 삼항연산자
const result = number >= 0 ? '0이상의 숫자입니다.' : '0보다 작은 숫자입니다.';
console.log(result);

// p.148 홀수 짝수 구하기
    // - 홀짝 계산식 : 수%2 == 0 또는 1
    // - 문자인 경우 : 문자열(숫자).length-1 == 0

// p.150
const score = Number(prompt('학점을 입력해주세요.','학점'));

// 비효율적인 방법
if(score == 4.5) {
    console.log('신');
} else if(4.2 <= score && score < 4.5) {
    console.log('교수님의 사랑');
} else if(3.5 <= score && score < 4.2) {
    console.log('현 체제의 수호자');
} else if(2.8 <= score && score < 3.5) {
    console.log('일반인');
} else if(2.3 <= score && score < 2.8) {
    console.log('일탈을 꿈꾸는 소시민');
} else if(1.75 <= score && score < 2.3) {
    console.log('오락문화의 선구자');
} else if(1.0 <= score && score < 1.75) {
    console.log('불가촉천민');
} else if(0.5 <= score && score < 1.0) {
    console.log('자벌레');
} else if(0 < score && score < 0.5) {
    console.log('플랑크톤');
} else {
    console.log('시대를 앞서가는 혁명의 씨앗');
}

// 효율적인 방법
if(score == 4.5) {
    console.log('신');
} else if(4.2 <= score ) {
    console.log('교수님의 사랑');
} else if(3.5 <= score) {
    console.log('현 체제의 수호자');
} else if(2.8 <= score) {
    console.log('일반인');
} else if(2.3 <= score) {
    console.log('일탈을 꿈꾸는 소시민');
} else if(1.75 <= score) {
    console.log('오락문화의 선구자');
} else if(1.0 <= score) {
    console.log('불가촉천민');
} else if(0.5 <= score) {
    console.log('자벌레');
} else if(0 < score) {
    console.log('플랑크톤');
} else {
    console.log('시대를 앞서가는 혁명의 씨앗');
}

// p.153
    // 문자열.split('기준문자') : 문자열내 특정문자 기준으로 문자열 분리 함수 / 반환 : 배열
    // '유재석,강호동,신동엽'.split(",") : 3조각 쪼개짐. 유재석 강호동 신동엽
        // 여러 조각/자료을 모아두는 곳 == 배열 [여러 자료를 저장하는 곳]

const rawInput = prompt('태어난 해를 입력해주세요.');
const year = Number(rawInput);

const tti = "원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양".split(',');
        // tti 상태 : tti = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양']

            /* 
                "문자열/자료".split('분리할 기준문자');
                    - 분리할 기준문자는 사라지고 자료를 분리.
                    - 분리 후 자료 수 12개 : 원숭이 닭 개 돼지 쥐 소 호랑이 토끼 용 뱀 말 양
            */
console.log(tti[0]); // 원숭이
console.log(tti[8]); // 용

console.log(`${year}년에 태어났다면 ${tti[year%12]}띠 입니다.`);

const e = year %12
let result2;

switch(true){
    case e == 0 : result2 = '원숭이'; break;
    case e == 1 : result2 = '닭'; break;
    case e == 2 : result2 = '개'; break;
    case e == 3 : result2 = '돼지'; break;
    case e == 4 : result2 = '쥐'; break;
    case e == 5 : result2 = '소'; break;
    case e == 6 : result2 = '호랑이'; break;
    case e == 7 : result2 = '토끼'; break;
    case e == 8 : result2 = '용'; break;
    case e == 9 : result2 = '뱀'; break;
    case e == 10 : result2 = '말'; break;
    case e == 11 : result2 = '양'; break;
    default : result2 = "연도를 다시 입력해주세요."; break;
}

console.log(`${year}년에 태어났다면 ${result2}띠 입니다.2`);


let 간
간 = "경,신,임,계,갑,을,병,정,무,기".split(",");
간 = 간[year%10];


let 띠
띠 = "신,유,슬,해,자,축,인,묘,진,사,오,미".split(",");
띠 = 띠[year%12];

console.log(`${year}년은 ${간}${띠} 년입니다.`);



