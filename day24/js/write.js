let fno = 0;

// [1] 피드/게시물 등록 함수 (1.피드게시버튼을 클릭했을때)
function 피드등록(){
    // 1. 각 요소의 입력값 호출
    const fpwd = document.querySelector('input[type=password]').value;
    const fcontent = document.querySelector('textarea').value;

        // 유효성검사
        if(fpwd.length < 1){alert('패스워드를 입력해주세요.');return;}
        if(fcontent.length < 1){alert('내용을 입력해주세요.');return;}
        if(imgByte==''){alert('이미지를 입력해주세요.');return;}

    // 2. 객체화 [설계]
    // 3. 기존 localStorage 호출. [!! : 문자열만 저장가능하므로. JSON.parse()]
    let feedList = JSON.parse(localStorage.getItem('feedList'));
    if(feedList == null){
        feedList = []
    }
    
    const feed = {
        fno : feedList.length >= 1 ? feedList[feedList.length-1].fno + 1 : 1,
        fimg : imgByte,
        fdate : new Date(),
        fcontent : fcontent.replaceAll('\n','<br/>').trim(),
        fgood : 0,
        fbad : 0,
        fpwd : fpwd
    }

    // 4. 피드목록에 등록할 피드
    feedList.push(feed)

    // 5. localStorage에 다시 재등록
    localStorage.setItem('feedList',JSON.stringify(feedList));

    // 6. 초기화
    document.querySelector('input[type=password]').value = '';
    document.querySelector('textarea').value = '';

    alert('피드게시 성공'); location.href = 'index.html'
}

let imgByte = '';

// [2] 이미지 등록함수(input[file] 에서 첨부파일을 등록할떄마다.)
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

/* 
    console.log(event)
    console.log(event.target)
    console.log(event.target.files)
    console.log(event.target.files[0])   // input type file 속성일 때만 가능
*/