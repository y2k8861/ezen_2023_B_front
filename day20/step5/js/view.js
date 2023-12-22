window.onload = function(){
    let viewpage = JSON.parse(localStorage.getItem('viewpage'));
    개별글출력(viewpage)
}

function 개별글출력(index){
    let boardArray = JSON.parse(localStorage.getItem('boardArray'));

    for(let j = 0; j<boardArray.length; j++){
        if(boardArray[j].번호 == index){
            boardArray[j].조회수 += 1
            const boardBox = document.querySelector("#boardBox");
            let html  = `
                        <div>작성자 : ${boardArray[j].작성자} 조회수 : ${boardArray[j].조회수}</div>
                        <div>제목 : ${boardArray[j].제목}</div>
                        <div>내용 : ${boardArray[j].내용.replaceAll('\n','<br />')}</div>
                        <input type="button" value="수정" onclick="글수정(${index})" />
                        <input type="button" value="삭제" onclick="글삭제(${index})" />
                        `;

            boardBox.innerHTML = html;
        }
    }

    localStorage.setItem('boardArray',JSON.stringify(boardArray))
    
}

// function 글수정(index){
//     const checkPw = prompt('비밀번호');
//     let boardArray = JSON.parse(localStorage.getItem('boardArray'));
//     for(let j = 0; j<boardArray.length; j++){
//         if(checkPw !== boardArray[j].비밀번호){
//             alert('패스워드가 다릅니다. 수정불가.'); return;   
//         }
//     }
//     const updateTitle = prompt('수정할 제목');
//     const updateContent = prompt('수정할 내용');
        
//     for(let j = 0; j<boardArray.length; j++){
//         if(boardArray[j].번호 == index){
//             boardArray[j].제목 = updateTitle
//             boardArray[j].내용 = updateContent
//         }
//     }

//     localStorage.setItem('boardArray',JSON.stringify(boardArray))
//     alert('수정 성공');
//     개별글출력(index);
    

//     return;
// }

function 글수정(index){
    const checkPw = prompt('비밀번호');
    let boardArray = JSON.parse(localStorage.getItem('boardArray'));
    for(let j = 0; j<boardArray.length; j++){
        if(checkPw !== boardArray[j].비밀번호){
            alert('패스워드가 다릅니다. 수정불가.'); return;   
        } else {
            location.href = 'write.html' ;
        }
    }    
}

function 글삭제(index){
    const checkPw = prompt('비밀번호');
    let boardArray = JSON.parse(localStorage.getItem('boardArray'));
    for(let j = 0; j<boardArray.length; j++){
        if(checkPw == boardArray[j].비밀번호){
            if(index == boardArray[j].번호){
                boardArray.splice(j , 1);
                alert('삭제 성공');
            }
        } else {
            alert('패스워드가 다릅니다. 삭제불가.'); return;
        }
    }
    
    localStorage.setItem('boardArray',JSON.stringify(boardArray))
    location.href = 'list.html';
    return;
}