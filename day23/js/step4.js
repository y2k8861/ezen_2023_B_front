document.addEventListener('DOMContentLoaded',function(){
    // p.346
    // 1. 
    let timer = 0;    // 타이머(초)
    let timerId = 0; // 시간을 체크하는 함수를 가지는 변수

    // 2. 각 요소를 객체로 호출
    const h1 = document.querySelector('h1');
    const checkbox = document.querySelector('input');

    // 3. 체크박스의 이벤트 등록
    checkbox.addEventListener('change' , function(event){
        // 4. checked 속성 확인
        console.log(checkbox.checked);
        console.log(event.currentTarget.checked);
        // 5. 만약에 체크가 되어있으면.
        if(event.currentTarget.checked){ // 체크 된 상태
            // 6. 1초마다 익명함수 실행
            timerId = setInterval(() => {
                timer++;
                h1.textContent = `${timer/10}초`;
            }, 100);
        } else { // 체크 해제 상태
            clearInterval(timerId);
        };
    });

    // p.348
    // 1. 각 요소를 객체로 호출
    const output = document.querySelector('#output');
    const radios = document.querySelectorAll("[name=pet]");

    // 2. 모든 라디오버튼 하나씩을 호출
    for(let i = 0; i<radios.length; i++){

        // 3. 이벤트[change] 등록
        radios[i].addEventListener('change', function(event){
            // [1]
            const current = event.currentTarget
            if(current.checked){
                output.textContent = `좋아하는 에완동물은 ${current.value} 입니다.`
            }

            // [2]
            const checkValue = document.querySelector('input[name=pet]:checked').value
            console.log(checkValue)
        });
    };
});

/* 
    1.
    setInterval(정의함수(),밀리초); : 밀리초 마다 해당 정의함수를 실행할 수 있는 함수

    2.
    clearInterval(setInterval 변수);
*/