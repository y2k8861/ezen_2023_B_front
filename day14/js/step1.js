/* 
    p.175
        1. for(let i = 0; i<배열명.length; i++){}

        2. for(let i in 배열명){}

        3. for(let v of 배열명){}

        4. while문

            while(조건문){실행문;}
*/

// p.175
const todos = ['우유 구메', '업무 메일 확인하기', '필라테스 수업'];

// 1. - i는 0부터 마지막 인덱스까지 1씩증가 하면서 console.log 반복 실행
for(let i = 0; i<todos.length; i++){console.log(todos[i]);}

// 2. - i는 todos 배열내 요소 *인덱스를 하나씩 대입 받으면서 console.log 반복 실행
for(let i in todos){console.log(todos[i]);}

// 3. - i는 todos 배열내 요소 *값을 하나씩 대입 받으면서 console.log 반복 실행
for(let i of todos){console.log(i);}

// 4. 
let i = 0;
while(i<todos.length){
    console.log(i);
    i++;
}

// p.181 무한루프
// let j = 0; while(true){alert(`${j}번쨰 반복입니다.`);j++}
// for(let j = 0; true; j++){alert(`${j}번쨰 반복입니다.`);}
// for( ; ; ){alert(`번쨰 반복입니다.`);}

// p.182
// let p = 0 ;
// while(confirm('계속 진행할까요?')){
//     alert(`${p}번쨰 반복입니다.`);
//     p++;
// }

/* 
    함수
        - 1. 남이 만든 함수 : alert(); confirm(); push(); splice()
        - 2. 내가 만든 함수 : 회원등록(); 로그인();
    함 : 상자, 수 : 숫자
    상자 안에 들어있는 수 => 상자 안에 들어있는 코드 => {} 안에 들어있는 코드
        - 왜? 재활용..
        1. 매개변수/인자/인수
        2. 리턴/결과/반환
*/

//  p.184
for(let m = 0; true; m++){
    alert(`${m}번째 반복입니다.`);
    const isContinue = confirm('계속할까요?')
    if(!isContinue){
        break; // 가장 가까운 for/while 탈출
    }
}

// ---
// for( ; ;){
//     for( ; ;){
//         if(3>2){break}
//     }
// }

// p.185
for(let m  = 0; m < 5; m++){
    continue;
    alert(m);
}

// p.185 1~10까지 착수만 누적합계 구하기
let outPut = 0;
for(let m = 1; m<=10; m++){
    if(m%2 === 1){continue} // 가장 가까운 for/while 다시 반목문으로.
    outPut += m;
}

console.log(outPut);

outPut = 1;
for(let i = 1; i<=100; i++){
    outPut *= i
}
console.log(outPut)