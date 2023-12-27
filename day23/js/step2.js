// 1. html 요소에서 onclick='함수()' : 인라인 이벤트 모델[ react]
function 인치변환(){//선언적함수.
// 1. 각 요소 가저오기
const input = document.querySelector('input')
const p = document.querySelector('p')

    // 3. 입력받은 값 호출 해서 숫자로 변환
    const inch = Number(input.value);
    // 4. 유효성검사
    if(isNaN(inch)){
        p.textContent = '숫자를 입력해주세요.'
        return;
    }
    // 5.
    const cm = inch * 2.54;
    p.textContent = `${cm}cm`

}

// 2. addEventListener('click', 함수()) : 표준 이벤트 보델

document.addEventListener('DOMContentLoaded' , function(){
    // p.339
    // 1. 각 요소 가저오기
    const input = document.querySelector('input')
    const button = document.querySelector('button')
    const p = document.querySelector('p')

    // 2. 요소의 이벤트 등록
    button.addEventListener('click',function(e){
        // 3. 입력받은 값 호출 해서 숫자로 변환
        const inch = Number(input.value);
        // 4. 유효성검사
        if(isNaN(inch)){
            p.textContent = '숫자를 입력해주세요.'
            return;
        }
        // 5.
        const cm = inch * 2.54;
        p.textContent = `${cm}cm`
    })

    // p.341
    // 1. 각 요소 가저오기
    const email = document.querySelector('#email')
    const emailConfirm = document.querySelector('#emailConfirm')

    // 2. 이메일 유효성검사 함수 선언
    const isEmail = function(value){
        return value.indexOf('@') > 1 && value.split('@')[1].indexOf('.') > 1
            // value.indexof('@') > 1 : 만약에 매게변수에 @가 포함되어 있으면
            // value.split('@')[1].indexof('.') > 1 : 만약에 매개변수 @기준으로 분리 후 뒷자리에 .(온점)이 포함되어 있으면
    }

    // 3. 요소의 이벤트[input에 keyup 할떄 마다] 등록
    email.addEventListener('keyup' , function(e){
        const value = e.currentTarget.value
        if(isEmail(value)){
            emailConfirm.style.color = 'green';
            emailConfirm.textContent = `이메일 형식 입니다. : ${value}`
        } else {
            emailConfirm.style.color = 'red';
            emailConfirm.textContent = `이메일 형식 아닙니다. : ${value}`
        }
    });
});