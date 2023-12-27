
// p.321
document.addEventListener('DOMContentLoaded' , function(){
    // 1. 각 부모 요소 2개 호출
    const divA = document.querySelector('#first');
    const divB = document.querySelector('#second');
    // 2. <h1> 요소 생성.
    const h1 = document.createElement('h1');
    // 3. h1요소의 내용 추가
    h1.textContent = '이동하는 h1태그'

    // 4. 함수1 정의 : 부모1에 h1를 대입
    const toFirst = function(){
        divA.appendChild(h1)    // 같은 dom객체를 여러번 appendChild() 하면 이동됨
        setTimeout(toSecond,1000);  // 10000 => 10초, 1000 => 1초
        // setTimeout(함수, 시간/밀리초(1/1000))
    }

    // 5. 함수2 정의 : 
    const toSecond = function(){
        divB.appendChild(h1)
        setTimeout(toFirst,1000)
    }

    // 6. 함수1 실행.
    toFirst()

    // p.322
    // 원형 : setTimeout(함수,밀리초);

    // 1. 익명함수를 상수에 대입 [재호출 O]
    const 삭제함수1 = function(){console.log(1)}
    setTimeout(삭제함수1 , 3000);

    // 2. 익명함수를 상수에 대입X [재호출 X]
    setTimeout(function(){console.log(2)}, 3000);

    // 3. 선언적함수를 선언       [재호출O]
    function 삭제함수2(){
        const h2 = document.querySelector("h2")
        h2.parentNode.removeChild(h2)
    }
    setTimeout(삭제함수2 , 3000)

    let counter = 0
    const h3 = document.querySelector('h3')
    h3.addEventListener('click', function(e){
        // 1. click 이벤트가 발생할때 실행되는 함수. addEventListener
        // 2. 그 이벤트를 발생한 결과내용을 콜백함수의 배개변수로 전달.
        console.log(e)
        console.log(e.target)
        counter++
        h3.textContent = `클릭 횟수 : ${counter}`
    })
});