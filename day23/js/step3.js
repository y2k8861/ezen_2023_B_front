// 1/ 기존에 있는 자료를 select에 넣을떄
const category = ['떡볶이', '순대','오뎅','튀김']

document.addEventListener('DOMContentLoaded', function(){
    // 2.
    const selectBox = document.querySelector('#selectBox')
    let html = '';
    for(let i = 0; i<category.length; i++){
        html += `<option value='${category[i]}'>${category[i]}</option>`
    }

    selectBox.innerHTML = html;

    // p.343
    // 1. 각 요소 객체로 호출
    const select = document.querySelector('select')
    const p = document.querySelector('p')
    // 2. 요소의 이벤트 [change : value 값이 바뀔떄마다] 등록
    select.addEventListener('change', function(e){
        console.log(e)                      // change 이벤트 결과 정보 객체
        console.log(e.currentTarget)        // change 이벤트를 발생시킨 요소
        console.log(e.currentTarget.options) // select 하위 요소들/배열변환
        console.log(e.currentTarget.options.selectedIndex) // select 요소의 선택된 인덱스

        // 방법 1
        const options = e.currentTarget.options;
        const index = e.currentTarget.options.selectedIndex
        p.textContent = `선택 : ${options[index].textContent}`

        // 방법 2
        console.log(select.value)
        p.textContent = `선택 : ${select.value}`
    });

    // p.345
    let 현재값;         // 입력받은 값을 저장
    let 변환상수 = 10;  // 변환할 단위의 계산식
    // 1. 각 요소 객체로 호출
    const select3 = document.querySelector('select:nth-of-type(3)')
    const input = document.querySelector('input');
    const span = document.querySelector('span')

    // 2. 계산 출력함수(실행조건 : 1.select3 값변경[change] 되어있을때, 2. input 값을 입력[keyup]했을때)
    const calculate = function(){
        span.textContent = (현재값 * 변환상수).toFixed(2);
    }

    select3.addEventListener('change',function(event){
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;
        변환상수 = Number(options[index].value)
        // 변환상수 = Number(select3.value)

        calculate()
    })

    input.addEventListener('keyup',function(event){
        현재값 = Number(event.currentTarget.value);
        // 현재값 = Number(input.value)

        calculate()
    })
})