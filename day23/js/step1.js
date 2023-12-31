// p.331 키보드 이벤트

// 1. HTML의 내용이 모두 로드되었을떄
document.addEventListener('DOMContentLoaded', function(){
    // 2. 특정 HTML 요소를 객체로 호출
    const textarea = document.querySelector('textarea');
    const h1 = document.querySelector('h1');

    // 3. textarea 요소의 이벤트 등록
    textarea.addEventListener('keyup',function(e){
        console.log(e)// *event/e : 매개변수로 이벤트의 정보('keyup')를 받습니다.
        console.log(e.code); // 입력한 키에 문자열로 표시
        console.log(e.keyCode); // 입력한 키의 숫자로 표시
        console.log(e.altKey);  // [조합키] alt 눌렀는지
        console.log(e.ctrlKey); // [조합키] ctrl 눌렀는지
        console.log(e.shiftKey);    // [조합키] shift 눌렀는지
        const length = textarea.value.length
        h1.textContent = `글자수 : ${length}`
    })

    // p.333
    // 1. 별 기본 설정
    const star = document.querySelector('h2');
    star.style.position = 'absolute'
    
    // let [x,y] = [0,0]
    let x = 0;  // 가로위치
    let y = 0;  // 세로위치
    const block = 20;   // 이동단위

    // 2. 별의 위치를 그랴주는 함수
    const print = ()=>{
        console.log(star)
        star.style.left = `${x*block}px`
        star.style.top = `${y*block}px`
    }

    print()

    // 3. 별위치를 이동하는 이벤트
        // 3-1 키보드 반향키의 키번호
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    document.body.addEventListener('keydown', function(e){
       console.log(e)
       if(e.keyCode == left){x--}        //왼쪽 방향키 눌렀을떄 x 1감소
       else if(e.keyCode == up){y--}     //위쪽 방향키 눌렀을떄 y 1감소
       else if(e.keyCode == right){x++}  //오른쪽 방향키 눌렀을떄 x 1증가
       else if(e.keyCode == down){y++}   //아래쪽 방향키 눌렀을떄 y 1증가
       else {return;}
       print()
    });
});