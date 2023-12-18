// 0. 전역변수 [배열]
    // - 속성[상태] 마다 배열 하나씩 만들면 배열이 너무 많아져. 관리 힘들어..
    // 객체지향 나오기전... 여러속성들을 하나의 배열에서 관리하고 싶다.
        // 1. boardArray = [] 하나의 서로다른 유형의 4가지의 데이터 저장하면 인덱스 관리 힘들다.
        // 2. boardArray = ['작성자/비밀번호/제목/내용','작성자/비밀번호/제목/내용']
            // - 여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 *단 구분이 있어야함 [구분 문자는 개발자 마음.]
            // - 입력 데이터에는 구분 문자가 포함되면 안된다.
            // - 단점 : 분해 하고  분해 후 순서 기억.


const boardArray = []
// const writerArray = [];
// const passwordArray = [];
// const titleArray = [];
// const contentArray = [];

// 1. [C]글쓰기 [글쓰기 버튼을 클릭했을때.]
function 글쓰기(){  // 매개변수 : X, 리턴값 : X
    // 1. HTML로 부터 입력 받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;  

    // 2. 배열에 저장하기
    const board = `${writer}/${password}/${title}/${content}`;
    boardArray.push(board); console.log(boardArray)

    // 3. 배열에 HTML 출력하기
    모든글출력();
    document.querySelector('#writer').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#content').value = '';

    return;
} 

// 2-1. [R]모든글출력 [1. js가 열렸을때 2. 글쓰기/글수정/글삭제 처리할떄마다.]
function 모든글출력(){  // 매개변수 : X, 리턴값 : X
    // 어디에, 무엇을
    const tableBody = document.querySelector('#list table tbody');

    let html = '';
    for(let i = 0; i <boardArray.length; i++){
        html += `
                <tr onclick ="개별글출력(${i})">
                    <td>${i+1}</td>
                    <td>${boardArray[i].split('/')[2]}</td>
                    <td>${boardArray[i].split('/')[0]}</td>
                </tr>
                `
    }

    tableBody.innerHTML = html;
    return;
}

// 2-2. [R]]개별글출력 [해당 글을 선택했을떄.]
function 개별글출력(index){  // 매개변수 : (대상)보고자하는 식별번호, 리턴값 : X
    console.log('개별글출력' + index);

    const boardBox = document.querySelector("#boardBox");
    // - replaceAll('교체할 문자열','새로운 문자열');
    // - \n을 <br /> 변경 : <textarea>에서 줄바꿈 처리하면 \n으로 저장되고 HTML 출력할때 \n대신에 <br/>치환

    let html  = `
                <div>작성자 : ${boardArray[index].split('/')[0]}</div>
                <div>제목 : ${boardArray[index].split('/')[2]}</div>
                <div>내용 : ${boardArray[index].split('/')[3].replaceAll('\n','<br />')}</div>
                <input type="button" value="수정" onclick="글수정(${index})" />
                <input type="button" value="삭제" onclick="글삭제(${index})" />
                `;


    boardBox.innerHTML = html;

    return;
}

// 3. [U]글수정 [글수정 버튼을 클릭했을때.]
function 글수정(index){  // 매개변수 : (대상)수정할 식별번호, 리턴값 : X
    console.log('글수정' +  index);

    // 1. 검증[유효성검사] = 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면.
    const checkPw = prompt('비밀번호');
        // 만약에 입력받은 패스워드와 해당게시물의 패스워드와 동일하면
    if(checkPw == boardArray[index].split('/')[1]){ // 만약에 입력받은 패스워드와 해당게시물의 패스워드와 동일하면
        // 수정할 값들을 입력
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');
        
        // 수정처리
        boardArray[index] = `${boardArray[index].split('/')[0]}/${boardArray[index].split('/')[1]}/${updateTitle}/${updateContent}`
        alert('수정 성공');
        console.log(boardArray[index]);
        모든글출력();
        개별글출력(index);
    } else {
        alert('패스워드가 다릅니다. 수정불가.')
    }

    return;
}

// 4. [D]글삭제 [글삭제 버튼을 클릭했을떄]
function 글삭제(index){  // 매개변수 : (대상)삭제할 식별번호, 리턴값 : X
    console.log('글삭제' +  index);

    const checkPw = prompt('비밀번호');
        // 만약에 입력받은 패스워드와 해당게시물의 패스워드와 동일하면
    if(checkPw == boardArray[index].split('/')[1]){
        // 삭제처리
        boardArray.splice(index , 1);
        alert('삭제 성공');
        모든글출력();
        document.querySelector("#boardBox").innerHTML = '';
    } else {
        alert('패스워드가 다릅니다. 삭제불가.')
    }

    return;
}

/* 
    함수 만들때 고민할점.
        1. 언제 실행하는 함수인지?
        2. 함수 안으로 넣을 매개변수?
        3. 함수 밖으로 변환할 값?
        4. 무엇을 실행 하는지?
*/