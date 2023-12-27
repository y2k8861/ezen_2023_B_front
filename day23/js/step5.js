document.addEventListener('DOMContentLoaded',function(){
    // 1. 각 요소를 객체로 변환
    const input = this.querySelector('#todo');
    const addButton = this.querySelector('#add-button');
    const todoList = this.querySelector("#todo-list");

    // 리스트 식별을 위한 키값
    let keyCount = 0;

    // todo 추가 함수 선언
    const addTodo = function(){
        // 인풋박스에 값 없으면 다시 입력
        if(input.value.trim() === ''){
            alert('할 일을 입력해주세요.'); return;
        }

        // 추가 할 HTML 요소 만듬
        const item = document.createElement('div');
        const checkbox = document.createElement('input');
        const text = document.createElement('span');
        const button = document.createElement('button');

        // 만들어진 순서대로 고유 넘버를 줌
        const key = keyCount;
        keyCount++;

        // item 속성추가
        item.setAttribute('data-key',key)
        // item 자식들로 추가
        item.appendChild(checkbox)
        item.appendChild(text)
        item.appendChild(button)
        // todoList에 자식으로 item 추가
        todoList.appendChild(item)

        // 속성 타입을 체크박스로 바꾸기 해당 체크박스에 체크할떄 함수(이벤트) 추가
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change',function(event){
            item.style.textDecoration = event.target.checked ? 'line-through':''
        });

        // 추가된 text(span)에 등록된 텍스트 추가
        text.textContent = input.value;

        // 제거하기 텍스트를 추가하고 클릭할때 함수(이벤트)[제거하기 함수] 추가
        button.textContent = '제거하기'
        button.addEventListener('click',function(){
            removeTodo(key)
        });

        // 초기화
        input.value = ''
    }

    // 삭제 함수 만들기
    const removeTodo = function(i){
        // 고유 숫자를 가져와서 해당 고유 숫자를 가지고 있는 div를
        const item = document.querySelector(`[data-key="${i}"]`)
        // 삭제
        todoList.removeChild(item)
    }


    // 버튼 누를떄마다 추가함수 호출(실행)
    addButton.addEventListener('click',addTodo)

    // 인풋에 엔터 칠떄도 추가함수 호출(실행) // keycode = 13 ==> Enter키
    input.addEventListener('keyup', function(event){
        const Enter = 13;
        if(event.keyCode === Enter){
            addTodo()
        }
    });
});