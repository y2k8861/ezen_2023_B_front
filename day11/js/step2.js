
// p.131 if 조건문
    // 조건에 따라서 코드를 실행하거나 실행하지 않을 때 사용하는 문법
    // 가장 일반적으로 조건문 : IF
    /* 
        형태
        1. 참일때만 실행
            if(T/F){참/T일떄 실행코드;}

        2. 참 또는 거짓일때 실행
            if(T/F){참/T 일떄 실행코드;}
            else {거짓/F 일때 실행코드;}

        3. 참 또는 거짓일때 조건추가
            if(T/F){
                if(T/F){}
                else {}
            } else {
                if(T/F){}
                else {}
            }
        
        4. 다수 조건일떄
            if(조건1){}
            else if(조건2){}
            else if(조건2){}
            else if(조건3){}
            else {}
    */

// 1. if(조건) : 조건의 결과가 참이면 {}안으로 들어가고 아니면 {} 못들어감
if (273 < 100){
    console.log('273<100=> true'); // 실행x [조건이 false 이므로]
}
console.log('1종료'); //실행[조건이 상관이 엇다. {}밖이니까]

// 2.
const date = new Date(); // new Date(); 현재시간을 알려주는코드 [클래스 : 미리 만들어진 구조/코드]
    console.log(date);
const hour = date.getHours(); // 현재시간.getHours() : 현재시간에서 시부초 중에서 시를 반환 함수
    console.log(hour);

// 1. 만약에 현재 시가 12보다 작으면 오전
if(hour<12){
    console.log('오전입니다.');

}
// 2. 만약에 현재 시가 12보다 같거나 크면 오후
if(hour>=12){
    console.log('오후입니다.');
}

// 3. p.134
if(hour < 12){
    console.log('오전입니다.');
} else {
console.log("오후입니다.");
}

// 4. p.135
if(hour<11){
    console.log("아침 먹을 시간입니다.")
} else {
    if(hour < 15){
        console.log('점심 먹을 시간입니다.');
    } else {}
}

// 5. p.137
if(hour < 11){
    console.log("아침 먹을 시간입니다.");
} else if(hour < 15) {
    console.log("점심 먹을 시간입니다.");
} else {
    console.log("저녁 먹을 시간입니다.")
}

/* 
    조 과제 경우의 수  if와 같이 작성하기.
*/