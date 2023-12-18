const boardArray = [];

function 글쓰기(){
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    const board = {
        작성자 : writer,
        비밀번호 : password,
        제목 : title,
        내용 : content
    }

    board.조회수 = 0    // 객체 내 없는 key 호출할떄.. key 생성. // 첫 등록했으니까 조회수는 0부터 시작..

    boardArray.push(board);
    console.log(boardArray);

    모든글출력();
    document.querySelector('#writer').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#content').value = '';

    return;
}

function 모든글출력(){
    const tableBody = document.querySelector('#list table tbody');

    let html = '';
    for(let i = 0; i <boardArray.length; i++){
        html += `
                <tr onclick ="개별글출력(${i})">
                    <td>${i+1}</td>
                    <td>${boardArray[i].제목}</td>
                    <td>${boardArray[i].작성자}</td>
                    <td>${boardArray[i].조회수}</td>
                </tr>
                `
    }

    tableBody.innerHTML = html;
    return;
}

function 개별글출력(index){
    boardArray[index].조회수 += 1;
    const boardBox = document.querySelector("#boardBox");
    let html  = `
                <div>작성자 : ${boardArray[index].작성자} 조회수 : ${boardArray[index].조회수}</div>
                <div>제목 : ${boardArray[index].제목}</div>
                <div>내용 : ${boardArray[index].내용.replaceAll('\n','<br />')}</div>
                <input type="button" value="수정" onclick="글수정(${index})" />
                <input type="button" value="삭제" onclick="글삭제(${index})" />
                `;

    boardBox.innerHTML = html;
    모든글출력()
    return;
}

function 글수정(index){
    const checkPw = prompt('비밀번호');
    if(checkPw == boardArray[index].비밀번호){
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');

        boardArray[index].제목 = updateTitle
        boardArray[index].내용 = updateContent
        alert('수정 성공');
        모든글출력();
        개별글출력(index);
    } else {
        alert('패스워드가 다릅니다. 수정불가.')
    }

    return;
}

function 글삭제(index){
    const checkPw = prompt('비밀번호');
    if(checkPw == boardArray[index].비밀번호){
        boardArray.splice(index , 1);
        alert('삭제 성공');
        모든글출력();
        document.querySelector("#boardBox").innerHTML = '';
    } else {
        alert('패스워드가 다릅니다. 삭제불가.')
    }

    return;
}