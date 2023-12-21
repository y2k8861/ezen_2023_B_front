// 예1)
console.log(localStorage.getItem('이름'))
//console.log(_objecy.이름)   // js는 html 새로고침/바뀌면 초기화 되므로 호출 X
// _object is not defined

// 예2)
const 회원정보목록 = localStorage.getItem('회원정보목록');
console.log(회원정보목록[0].이름);

const 회원정보목록2 = JSON.parse(localStorage.getItem('회원정보목록2'));
console.log(회원정보목록2)
console.log(회원정보목록2[0].이름);