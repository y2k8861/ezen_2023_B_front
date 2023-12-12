console.log("js 시작합니다.");

// 여러 함수들 {}안에서 사용하기 때문에. // 선언 1번하고 누적 저장

// 1. 아이디들을 저장하는 배열
const idArray = [];

// 2. 패스워스들을 저장하는 배열
const pwArray = [];

// 회원가입 함수 시작
function signUp(){      /* 실행조건 : 가입버튼을 눌렀을 때 호출 */
    console.log("회원가입합니다.");

    // 1. [입력]
    const signId = document.querySelector("#signId").value;
    const signPw = document.querySelector("#signPw").value;

    // 2. [처리]
    idArray.push(signId);
    pwArray.push(signPw);

    // 3. [출력]
    alert("회원가입이 완료되었습니다.");
        // 성공 후 해당 input value 초기화
        document.querySelector("#signId").value = '';
        document.querySelector("#signPw").value = '';
};
// 회원가입 함수 끝

// 로그인 함수 시작
function login(){       /* 실행조건 : 로그인버튼을 눌렀을 때 호출 */
    console.log("로그인합니다.");

    // 1. [입력]
    const loginId = document.querySelector("#loginId").value;
    const loginPw = document.querySelector("#loginPw").value;

    // 2. [처리]
    const sIndex = idArray.indexOf(loginId);
    if(sIndex >= 0 && pwArray[sIndex] == loginPw){
        // 1. 만약에 입력받은 로그인 아이디가 배열내 존재하면
        // 2. 찾은 아이디 인덱스의 패스워드도 동일한지
    // 3. [출력]
        alert("로그인 되었습니다.");
    } else {
        alert("동일한 회원 정보가 없습니다.");
    }
};
// 로그인 함수 끝