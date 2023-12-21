// 1. 등록 함수 : 실행조건 : 등록버튼을 클릭했을때
function 등록(){
    console.log('등록 실행')
    // 1. 입력
    const mid = document.querySelector('#mid').value;
    const mpw = document.querySelector('#mpw').value;
    console.log(mid +'\n'+ mpw);

    // 2. 처리
        // 1. [아이디와 비밀번호]를 객체화
    const member = {
        mid : mid,
        mpw : mpw
    }

        // 2. 객체를 배열에 저장 전역변수가 아닌, 브라우저에 저장
        // localStorage.setItem('memberArray', JSON.stringify(member))

    let memberArray = JSON.parse(localStorage.getItem('memberArray'))
    console.log(memberArray)
    if(memberArray == null) {
        memberArray = []
        console.log(memberArray)
    }
    memberArray.push(member);
    localStorage.setItem('memberArray', JSON.stringify(memberArray))

    // 3. 출력[출력X]
    alert('회원가입 성공');
}