/*
    주차장 정산기
        요구사항
        1. 입차
            - 차번호[4자리] text
            - 입차시간[input:time]

        2. 저장
            배열[차번호,입차시간]에 저장

        3. 출력
            1. 차번호 숫자 4자리 입력받기 text
            2. 출차시간을 type="time"
=============================================================================
        4.출차
            - 차번호[4자리] text
            - 입차시간[input:time]

        4. 계산 
            해당 차번호의 입차시간과 출차시간을 계산해서
            30분 내외면 무료, 10분당 1000원

        5. 출력
            alert(요금)
            또는
            alert(입차한 차량이 없습니다.)
======================= 추가 요구사항 =====================================
        1. 입/출차시 차량번호 4자리만 입력할수 있도록 하고 아니면 입/출차 불가능.
        2. 입/출차시 시간을 입력 안했으면 입/출차 불가능
        3. 일별 매출현황 [배열추가, 함수추가]
        4. CSS 간단하게
*/

const carNumberArray = [];

const carTimeArray = [];

let 하루요금 = [];

function 입차(){//f start;0

    //1.[입력]
    const carInNumber = document.querySelector('#carInNumber').value;
    const carInTime = document.querySelector('#carInTime').value;
   
    //2.[처리]
        // 차량번호 4자리 검사
    if(carInNumber.length !== 4){
        alert('차량번호를 입력해주세요.'); return;
    }
        // 차량번호 4자리 숫자 검사
    if(isNaN(carInNumber) == true){
        alert('차량번호를 숫자로만 입력해 주세요.'); return;
    }
        // 입차시간 등록 검사
    if(carInTime === '' ){
        alert('입차시간을 입력해주세요'); return;
    }

    //3.[출력]
        carNumberArray.push(carInNumber);
        carTimeArray.push(carInTime);
        document.querySelector('#carInNumber').value=""
        document.querySelector('#carInTime').value=""

        console.log(carNumberArray);
        console.log(carTimeArray);
}//f end

function 출차(){
    console.log('출차버튼누름');
    // 1. [입력]
    const carOutNumber = document.querySelector("#carOutNumber").value;
    const carOutTime = document.querySelector("#carOutTime").value;
        
    // 2. [처리]
        // 차량번호 4자리 검사
    if(carOutNumber.length !== 4){
        alert('차량번호를 입력해주세요.'); return;
    }
        // 차량번호 4자리 숫자 검사
    if(isNaN(carOutNumber) == true){
        alert('차량번호를 숫자로만 입력해 주세요.'); return;
    }

        // 출차시간 검사
    if(carOutTime == ''){
        alert('시간이 입력되지 않았습니다.');
        return;
    }
        // 입차차량과 비교
    const catNumberIndex = carNumberArray.indexOf(carOutNumber);
    if(catNumberIndex < 0){
        alert("입차한 차량이 없습니다.");
        return;
    }
        // (출차시간 - 입차시간) 계산 후 10분당 1000원 계산
    const inTime = carTimeArray[catNumberIndex].split(":")
    const outTime = carOutTime.split(":");
    const inTimeCash = Number(inTime[0]*60) + Number(inTime[1]);
    const outTimeCash = Number(outTime[0]*60) + Number(outTime[1]);
    const 요금 = outTimeCash - inTimeCash;
    console.log(요금);
    if(요금 < 0){alert('출차시간이 더 적을수 없습니다.'); return;}
    if(요금 > 30){
        alert(`출차완료 요금:[${(parseInt(요금/10)+1)*1000}]원입니다.`);
    } else {
        alert(`출차완료 요금:[무료]`);
    }
    carNumberArray.splice(catNumberIndex , 1);
    carTimeArray.splice(catNumberIndex , 1);

    // 3. [출력]
    document.querySelector('#carOutNumber').value=""
    document.querySelector('#carOutTime').value=""

    console.log(carNumberArray);
    console.log(carTimeArray);
}