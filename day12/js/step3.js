console.log('js 열림');

const 회원리스트 = []; // 여러 회원 이름을 저장하는 배열
// documtent : HTML 전체
    // querySelector('선택자')
        // .innerHTML : <마크업> 여기! </마크업>

/* 
    =================== js 구역 ===================
    let 변수1 = 30; // 전역변수

        =================== 함수{} 구역 ===================
    function 함수(){
        let 변수2 = 40; // 지역변수
    }
        =================== 함수{} 구역 ===================

        =================== 제어문{} 구역 ===================
    if(조건){
        let 변수3 = 50;
    }
        =================== 제어문{} 구역 ===================
    =================== js 구역 ===================
*/

function 회원등록(){ // 함수시작
    // 1. [입력]
    const name = document.querySelector('#nameInput').value;

    // 2. [처리]
        // 유효성 검사 : return
    if(name.length !== 3){alert('글자 수가 3글자가 아닙니다.'); return;}
    if(!isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])){alert('숫자는 입력 불가합니다.'); return}
    if(회원리스트.indexOf(name) >= 0){alert('현재 등록된 이름입니다.[중복]'); return}


    회원리스트.push(name);  // 입력된 값을 배열의 추가
    alert('추가했습니다.');
    
    // 3. [출력]
    document.querySelector("#nameList").innerHTML = 회원리스트;

    // [부가기능1] 등록후 input 상자 초기화
    document.querySelector("#nameInput").value = '';


};  // 함수 끝

function 회원삭제(){    // f start
    // 1. [입력]
    const name = document.querySelector('#nameInput').value;

    // 2. [처리] 삭제 처리 - > 배열에서 요소 제거
     const deletIndex = 회원리스트.indexOf(name);
    if(deletIndex < 0) {alert('등록된 회원이 없습니다.'); return}
    회원리스트.splice(deletIndex,1);
    alert('삭제했습니다.');

    // 3. [출력]
    document.querySelector("#nameList").innerHTML = 회원리스트;

    // [부가기능1] 등록후 input 상자 초기화
    document.querySelector("#nameInput").value = '';
};  // f end
