window.onload = function(){
}

// 전역 자료 [함수 밖에서 선언]
const 할일목록 = [];    // 할일의 내용을 저장.
const 상태목록 = [];    // 할일의 상태를 저장.


// 지역 자료 [함수 안에서 선언]

// 1. 등록 함수 : 매개변수 , 리턴
function 등록(){
    console.log('등록() 함수 실행');
    // 1. 입력  : HTML INPUT으로 부터 입력된 값을 가져온다
    let contentValue = document.querySelector("#content").value;
    if(contentValue == ''){
        alert('다시 입력해 주세요.'); return;
    }

    // 2. 처리 : 입력받은 값을 배열에 저장한다
    할일목록.push(contentValue);
    상태목록.push(false);   //할 일의 상태를 입력받지 않고 초기값을 임의로 false
    console.log(할일목록);
    console.log(상태목록);

    // 3. 출력
    document.querySelector("#content").value = '';
    출력();
}

// 2. 변경 함수 : 매개변수 = 변경할 인덱스 , 리턴
function 변경(i){
    console.log('변경() 실행' + i);
    // 1. 입력 X

    // 2. 처리
    상태목록[i] =  !상태목록[i];
    console.log(상태목록[i]);

     // 3. 출력
     출력();
}

// 3. 삭제 함수 : 매개변수 , 리턴
function 삭제(i){
    console.log('삭제() 실행' + i);
    // 1. 입력
    console.log(할일목록[i]);
    console.log(상태목록[i]);

    // 2. 처리
    할일목록.splice(i,1);   // 할일목록도 한개 삭제
    상태목록.splice(i,1);   // 상태목록도 한개 삭제
    console.log(할일목록);
    console.log(상태목록);

    // 3. 출력
    출력()
}

// 4. 출력 함수 [등록 후, 변경 후, 삭제 후 = 배열의 최신상태를 HTML 대입 -> 중복코드]
function 출력(){
    // 1. [어디에] todoBottom
    const todoBottom = document.querySelector('#todoBottom');

    // 2. [무엇을] 배열에 있는 여러요소들 
    let html = ''; // 초기값은 빈값

        // 1.배열내 모든 요소를 하나씩 꺼내기
    for(let i = 0; i<=할일목록.length-1; i++){
        html += `
                <div class="todo ${상태목록[i] ? 'success':''}">  
                    <div class="content">${할일목록[i]}</div>
                    <div class="btnBox">
                        <input type="button" value="변경" onclick="변경(${i})" />
                        <input type="button" value="삭제" onclick="삭제(${i})" />
                    </div>
                </div>
                `;
    }

    // 3. [대입]
    todoBottom.innerHTML = html;
}