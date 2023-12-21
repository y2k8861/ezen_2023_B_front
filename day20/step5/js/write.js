let boardNumber = 0
let viewpage = JSON.parse(localStorage.getItem('viewpage'));
if(viewpage == null){
    function 글쓰기(){
        const writer = document.querySelector('#writer').value;
        const password = document.querySelector('#password').value;
        const title = document.querySelector('#title').value;
        const content = document.querySelector('#content').value;
        boardNumber ++
    
        const board = {
            번호 : boardNumber,
            작성자 : writer,
            비밀번호 : password,
            제목 : title,
            내용 : content,
            조회수 : 0
        }
    
        // board.조회수 = 0    // 객체 내 없는 key 호출할떄.. key 생성. // 첫 등록했으니까 조회수는 0부터 시작..
        let boardArray = JSON.parse(localStorage.getItem('boardArray'))
        if(boardArray == null){
            boardArray = []
        }
    
        boardArray.push(board);
        localStorage.setItem('boardArray',JSON.stringify(boardArray))
    
        document.querySelector('#writer').value = '';
        document.querySelector('#password').value = '';
        document.querySelector('#title').value = '';
        document.querySelector('#content').value = '';
    
        return;
    }
} else {
    window.onload = function(){
        글가져오기(viewpage)
    };
    let boardArray = JSON.parse(localStorage.getItem('boardArray'));
    function 글가져오기(viewpage){
        for(let i = 0; i<boardArray.length; i++){
            if(viewpage == boardArray[i].번호){
                document.querySelector('#writer').value = boardArray[i].작성자;
                document.querySelector('#password').value = boardArray[i].비밀번호;
                document.querySelector('#title').value = boardArray[i].제목;
                document.querySelector('#content').value = boardArray[i].내용;
            }
        }
    }
    
    function 글쓰기(){
        const writer = document.querySelector('#writer').value;
        const password = document.querySelector('#password').value;
        const title = document.querySelector('#title').value;
        const content = document.querySelector('#content').value;
        for(let i = 0; i<boardArray.length; i++){
            if(viewpage == boardArray[i].번호){
                boardArray[i].작성자 = writer;
                boardArray[i].비밀번호 = password;
                boardArray[i].제목 = title;
                boardArray[i].내용 = content;
            }
        }

        localStorage.setItem('boardArray',JSON.stringify(boardArray))
    
        location.href = 'view.html'
    
        return;
        
    
        // const board = {
        //     번호 : boardNumber,
        //     작성자 : writer,
        //     비밀번호 : password,
        //     제목 : title,
        //     내용 : content,
        //     조회수 : 0
        // }
    
        // // board.조회수 = 0    // 객체 내 없는 key 호출할떄.. key 생성. // 첫 등록했으니까 조회수는 0부터 시작..
        // let boardArray = JSON.parse(localStorage.getItem('boardArray'))
        // if(boardArray == null){
        //     boardArray = []
        // }
    
        // boardArray.push(board);
        // localStorage.setItem('boardArray',JSON.stringify(boardArray))
    
        // document.querySelector('#writer').value = '';
        // document.querySelector('#password').value = '';
        // document.querySelector('#title').value = '';
        // document.querySelector('#content').value = '';
    
        // return;
    }
}
