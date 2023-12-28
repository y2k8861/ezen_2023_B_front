/* 
    수정
        1. [식별자] 무엇을 수정할껀지. updatefno
        2. 기존데이터 불러오기
        3. 수정하기
*/

document.addEventListener('DOMContentLoaded',function(){
    기존데이터불러오기()
});

// [1] 수정할 게시물의 정보를 출력한다
function 기존데이터불러오기(){
    // 1. 누구를
    const fno = JSON.parse(localStorage.getItem('update'))
    // 2. fno에 해당하는 객체 찾기
    const feedList = JSON.parse(localStorage.getItem('feedList'))
    for(let i = 0; i<feedList.length; i++){
        const feed = feedList[i];
        if(fno == feed.fno){
            document.querySelector('textarea').value = feed.fcontent.replaceAll('<br/>','\n') ;
            document.querySelector('#fileImg').src = feed.fimg ;
            return;
        }
    }
}

// [2] 이미지 등록함수(input[file] 에서 첨부파일을 등록할떄마다.) write.js(복붙)
let imgByte = '';
function 이미지등록(event){
    // [1] 첨부파일 input에 등록된 파일을 바이트로 가져오기.
        // 1. 파일 읽기 클래스. new fileReader();
    let 파일읽기객체 = new FileReader(); // 파일읽기 개체 생성
    파일읽기객체.readAsDataURL(event.target.files[0]);
    console.log(파일읽기객체)
    파일읽기객체.onload = function(){
        document.querySelector('#fileImg').src = 파일읽기객체.result
        imgByte = 파일읽기객체.result;
    }
}

// [3] 피드 수정
function 피드수정(){
    console.log('피드수정')
    // 1. 입력받은 값 호출
    const fcontent = document.querySelector('textarea').value;

    // 2. 수정할 게시물/피드 찾기
    const fno = JSON.parse(localStorage.getItem('update'))
    let feedList = JSON.parse(localStorage.getItem('feedList'));
    for(let i = 0; i<feedList.length; i++){
        if(fno == feedList[i].fno){
            feedList[i].fcontent = fcontent.replaceAll('\n','<br/>');
            feedList[i].fimg = imgByte == '' ? feedList[i].fimg : imgByte;
            localStorage.setItem('feedList',JSON.stringify(feedList));
            alert('수정성공')
            location.href = 'index.html'
        }
    }

}