/* 
    - 게시물
    - 댓글
        1. 관계파악
        2. 데이터
            게시물 : 대표이지미, 등록날짜, 내용, 졸아요, 싫어요, 비밀번호(삭제/수정 시 사용)
            댓글 : 내용, 등록날짜, 비밀번호 (삭제시 사용)
        3. 식별자
            1. 인덱스[인덱스 변화 있을 경우 절대 식별자 역헐 함듬. 임시용 가능]
            2. 식별자만들기 [1. 자동번호(1씩증가) 2. 데이터조합 등등] 중복이 없어야한다!!!
        4. 관계데이터 대입 [하위에서 상위의 식별을 가지고 있어야 한다.]
            게시물 : +게시물번호
            댓글 : +댓글번호 +게시물번호
*/

// let feedList = [
//     {
//         fno : 1,
//         fimg : 'itemImg.webp',
//         fdate : '2023-12-28',
//         fcontent : `방탄소년단이 'BTS 2019 SUMMER PACKAGE in KOREA' 촬영으로 다녀온✨ <br/> 전라북도 완주에 위치한 이곳은 작은 비밀공간을 지나면 볼 수 있는 갤러리부터 주변에 특색 있는 산책길까지 한 편의 수채화 같은 곳이기도 합니다. 주말 데이트로 #아원고택 어때요?`,
//         fgood : 4,
//         fbad : 10,
//         fpwd : '1234'
//     },
//     {
//         fno : 2,
//         fimg : 'itemImg.webp',
//         fdate : '2023-12-29',
//         fcontent : `방탄소년단이 'BTS 2019 SUMMER PACKAGE in KOREA' 촬영으로 다녀온✨ <br/> 전라북도 완주에 위치한 이곳은 작은 비밀공간을 지나면 볼 수 있는 갤러리부터 주변에 특색 있는 산책길까지 한 편의 수채화 같은 곳이기도 합니다. 주말 데이트로 #아원고택 어때요?`,
//         fgood : 4,
//         fbad : 10,
//         fpwd : '1234'
//     },{
//         fno : 3,
//         fimg : 'itemImg.webp',
//         fdate : '2023-12-30',
//         fcontent : `방탄소년단이 'BTS 2019 SUMMER PACKAGE in KOREA' 촬영으로 다녀온✨ <br/> 전라북도 완주에 위치한 이곳은 작은 비밀공간을 지나면 볼 수 있는 갤러리부터 주변에 특색 있는 산책길까지 한 편의 수채화 같은 곳이기도 합니다. 주말 데이트로 #아원고택 어때요?`,
//         fgood : 4,
//         fbad : 10,
//         fpwd : '1234'
//     }
// ]

let replyList = [
    {
        rno : 1,
        fno : 1,
        rdata : '2023-12-30',
        rcontent : '댓글입니다. ㅎㅎ1',
        rpwd : '1234'
    },
    {
        rno : 2,
        fno : 2,
        rdata : '2023-12-30',
        rcontent : '댓글입니다. ㅎㅎ2',
        rpwd : '1234'
    },
    {
        rno : 3,
        fno : 1,
        rdata : '2023-12-30',
        rcontent : '댓글입니다. ㅎㅎ3',
        rpwd : '1234'
    }
]


// -----------------------
document.addEventListener('DOMContentLoaded',function(){
    모든피드호출()
});

// [1] 모든 피드(게시물) 출력함수 (1. js열렸을때 2.등록,삭제,댓글등록/삭제)
function 모든피드호출(){
    // 1. 어디에
    const feedBox = document.querySelector('#feedBox')
    let feedList = JSON.parse(localStorage.getItem('feedList'));
    if(feedList == null){
        feedList = []
    }

    // 2. 무엇을
    let html = '';
    console.log(feedList.length);
        // 2-1 모든 피드 출력 [피드 목록/배열에 있는 객체를 하나씩 호출]
        for(let i = 0; i<feedList.length; i++){
            const feed = feedList[i];
            html += `
                <div class="feed"> 
                    <div class="feedImg"><img src="${feed.fimg}" alt="" /></div>
                    <div class="conetnts">
                        <p class="date">${feed.fdate}</p>
                        <p class="feedText">
                            ${feed.fcontent}
                        </p>
                    </div>

                    <div class="btnBox">
                        <div>
                            <button type="button" onclick='수정(${feed.fno})'>수정</button>
                            <button type="button" onclick='삭제(${feed.fno})'>삭제</button>
                            <button type="button" onclick='답글(${feed.fno})'>답글</button>
                        </div>

                        <div>
                            <span>👍 ${feed.fgood}</span>
                            <span>👎 ${feed.fbad}</span>
                        </div>
                    </div>    

                    <div class="replyBox">
                        ${댓글출력(feed.fno)}
                    </div>
                </div>
            `;
        }

    // 3. 출력
    feedBox.innerHTML = html;
}

// [2] 피드/게시물의 해당하는 댓글 모두 출력하는 함수 정의
function 댓글출력(fno){
    let html = ''
    for(let i =0; i<replyList.length; i++){
        const reply = replyList[i]
        if(reply.fno == fno){
            html += `
                <div class="reply">
                    <p>${reply.rcontent}</p>
                    <div>
                        <span>${reply.rdata}</span>
                        <button type="button" onclick='댓글삭제(${reply.rno})'>X</button>
                    </div>
                </div>
            `
        }
    }
    return html
}

// [3] 피드/게시물의 해당하는 댓글 모두 출력하는 함수 정의
function 삭제(fno){
    // 2. 패스워드 일치 여부 확인
    if(패스워드확인(fno)){return}
    
        // 1. 피드목록에서 fno 객체 찾기
    let feedList = JSON.parse(localStorage.getItem('feedList'));
    for(let i = 0; i<feedList.length; i++){
        const feed = feedList[i];
        // 2. 찾은 객체의 fpwd와 입력받은 패스워드 일치 여부
        if(fno == feed.fno){
            feedList.splice(i,1);
            alert('삭제되었습니다.');
            localStorage.setItem('feedList',JSON.stringify(feedList));
            모든피드호출();
            return;
        }
    }
}

// [4] 피드/게시물의 해당하는 수정페이지로 넘어가는 함수 정의
function 수정(fno){
    console.log(fno + '수정')
    // 1. 확인패스워드 입력
    if(패스워드확인(fno)){return}

    // 2. 패스워드 일치 여부 확인
        // 1. 피드목록에서 fno 객체 찾기
    let feedList = JSON.parse(localStorage.getItem('feedList'));
    for(let i = 0; i<feedList.length; i++){
        const feed = feedList[i];
        // 2. 찾은 객체의 fpwd와 입력받은 패스워드 일치 여부
        if(fno == feed.fno){
            localStorage.setItem('update',JSON.stringify(fno));
            location.href = 'update.html'
            return;
        }
    }
    // if(패스워드확인(fno)){}
}

// [5] 패스워드 검사 합수 (1.삭제/수정 함수)
function 패스워드확인(fno){
    // 1. 확인패스워드 입력
    const pwdConfirm = prompt('패스워드를 입력해주세요.');

    // 2. 패스워드 일치 여부 확인
        // 1. 피드목록에서 fno 객체 찾기
    let feedList = JSON.parse(localStorage.getItem('feedList'));
    for(let i = 0; i<feedList.length; i++){
        const feed = feedList[i];
        // 2. 찾은 객체의 fpwd와 입력받은 패스워드 일치 여부
        if(pwdConfirm == feed.fpwd && fno == feed.fno){
            return false; // 패스워드가 일치하면 false
        }
    }
    alert('패스워드를 확인해주세요.');
    return true; // 패스워드가 일치하지않으면 true
}

function 댓글삭제(cno){
    alert(cno + '삭제')
}


function 답글(fno){
    alert(fno + '답글')
}