/*
    p.174 반복문
        - 반복 작업
        - 형태 
            for( let i = 0 ; i < 반복횟수 ; i++ ){
                문장
            }
            for( 초기값 ; 조건문 ; 증감식 ){ 실행코드; }
            
            1. let i = 0         :   반복을 시작할때 처음값 [ 초기값 ]
                i를 0 부터 시작 
            2. i < 반복횟수       : 반복을 할수 있는 조건 [ 조건을 충족시 반복실행 ]
                i는 반복횟수 보다 작으면
            3. 문장               : 반복시 실행되는 코드
            4. i++                : 1회 반복후 실행되는 증감식 [ 증감식 ]
        
        - 실행순서 
            1. [1초기값] 변수에 처음값을 초기화.
            2. [2조건문] for{}안/반복문 에 들어갈수 있는지 검사 [ t->{}안으로 f->{}밖으로 ]
            3. [3실행문] {} 안에 있는 코드 모두 실행.
            4. [4증감식] 실행문 후에 (초기값변수)가 증가 또는 감소.
                // [초기값 1번만 실행되므로 증감식 이후 조건문으로 이동]
            5. [2조건문] 조건검사.
            6. [3실행문] 실행코드
            7. [4증감식] 증감식
                // 
            8. [2조건문] 조건검사.
            9. [3실행문] 실행코드
            10. [4증감식] 증감식
                //  도대체 언제까지 2 3 4 가 반복되는지?????????? 2조건문에 false될때까지.

*/

// 1. 우유구매를 10번 출력해
console.log('우유 구매1');
console.log('우유 구매2');
console.log('우유 구매3');
console.log('우유 구매4');
console.log('우유 구매5');
console.log('우유 구매6');
console.log('우유 구매7');
console.log('우유 구매8');
console.log('우유 구매9');
console.log('우유 구매10');

for(let i = 1; i <= 10; i++){
    console.log('for:우유 구매'+i);
}

// p.178 예제1
for(let i = 0; i<5; i++){
    console.log(`${i}번째 반복입니다.`)
}

// p.179 예제2
let output = 0;
for(let i = 1; i<=100; i++){
    console.log(`${i}번쨰 : ${output} + ${i}  = ${output+i}`);
    output += i;
}

console.log(`1~100까지 숫자를 모두 더하면 ${output} 입니다.`);

// p.180 예제3 for문과 배열(인덱스:0부터1씩 증가 패턴 , 배열내 인덱스 순회/확인)의 관계
    // - 0부터 마지막인덱스(<= 배열.length-1 또는 < 배열.length)까지
const todos = ["우유 구매", "업무 메일 확인하기", "필라테스 수업"];
for(let i = 0; i < todos.length; i++){
    console.log(`${i}번째 할 일 : ${todos[i]}`);
}

for(let i = todos.length-1; i>=0; i--){
    console.log(`${i}번째 할 일 : ${todos[i]}`);
}

let outPrint = '';
// 예2) 1부터 10이하 까지 1씩 증가 반복[한줄표시];
for(let i = 1; i<= 10; i++){
    outPrint += `  ${i}  `;
}
console.log(outPrint);

// 예3) 1부터 10이하까지 1씩 증가 반복[ul표시]
outPrint = "";
for(let i = 1; i<=10; i++){
    outPrint += `<li>${i}</li>`; 
}
window.onload = function(){
    document.querySelector("ul").innerHTML = outPrint;
}

// 예4) 1부터 10이하까지 1씩 증가 반복 [누적합계]
let sum = 0;
for(let i = 1; i<=10; i++){
    sum += i;
}
console.log(sum);
/* 
    예4) 반복문 순서도.
        초기값 : i = 1, sum = 0
        for 시작
            i           조건[i<=10]         실행[sum += i]      sum[누계]       증감식[i++]
            i = 1       true                0+1 = 1             1               i = 2
            i = 2       true                1+2 = 3             3               i = 3
            i = 3       true                3+3 = 6             6               i = 4
            i = 4       true                6+4 = 10            10              i = 5
            i = 5       true                10+5 = 15           15              i = 6
            i = 6       true                15+6 = 21           21              i = 7
            i = 7       true                21+7 = 28           28              i = 8
            i = 8       true                28+8 = 36           36              i = 9
            i = 9       true                36+9 = 45           45              i = 10
            i = 10      true                45+10 = 55          55              i = 11
            i = 11      false - > 반복문 종료 -> 콘솔출력
*/

// 예5) 1부터 100까지 7배수 누적합계.
    // - 1. i는 0부터 100까지 7씩 증가
sum = 0;
for(let i = 0; i<=100; i+=7){
    sum += i;
}
console.log(`1~100까지 7배수 합 : ${sum}`)

    // - 2. i는 1부터 100까지 7배수 i%7 == 0
sum = 0;
for(let i = 0; i<=100; i++){
    if(i%7==0){
        sum += i;
    }
}
console.log(`1~100까지 7배수 합 : ${sum}`);

// for 중첩
for(let 부모 = 1; 부모 <= 5; 부모++){
    // - 부모는 1부터 5이하까지 1씩 증가 반복 [총 5회전]
    console.log(`====== 부모 : ${부모} ======`);
    for(let 자식 = 1; 자식<=3; 자식++){
        // - 자식은 1부터 3이하까지 1씩증가 반복 [총 3화전]
        console.log(`${부모}의 자식 : ${자식}`)
    }
    
};

// 예)6 구구단
    // 2단만
const dan = 2;
for(let gob = 1; gob<=9; gob++){
    console.log(`${dan} X ${gob} = ${dan*gob}`);
};

    // 2~9단
for(let 단 = 2; 단 <=9; 단++){
    for(let 곱 = 1; 곱<=9; 곱++){
        console.log(`${단} X ${곱} = ${단*곱}`);
    };
}
