/* 
    변수/상수 : 자료를 저장해서 반복적으로 호출을 여러번 가능[재활용].
    함수 : 코드를 저장해서 호출을 여러번 가능[재활용]
*/

/* 
    IF문 연습문제 
    prompt 대신에 input으로 입력받기
    풀이 결과를 consol.log() 대신에 span에 받기
*/

// 문제1 : 3개의 점수를 각 input으로 입력받아 총점과 평균 span에 출력하시오.

function 문제1(){
    // 입력
    let value1 = Number(document.querySelector("#input1_1").value);
    let value2 = Number(document.querySelector("#input1_2").value);
    let value3 = Number(document.querySelector("#input1_3").value);

    // 처리
    let sumValue = value1+value2+value3;
    let avgValue = sumValue/3;

    // 출력
    document.querySelector("#result1").innerHTML = `총점 : ${sumValue}, 평균 : ${avgValue}`;
}

//  문제2 : 2개 정수를 입력받아 더 큰 수를 출력
function 문제2(){
    // 입력
    let value1 = Number(document.querySelector("#input1_1").value);
    let value2 = Number(document.querySelector("#input1_2").value);

    // 처리
    let result = "";
    if(value1 > value2){
        result = value1;
    } else if(value1 < value2){
        result = value2;
    } else {
        result = "두 수는 같다";
    }

    document.querySelector("#result1").innerHTML = `${result}`;
}

//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 문제3(){
    let value1 = Number(document.querySelector("#input3_1").value);
    let value2 = Number(document.querySelector("#input3_2").value);
    let value3 = Number(document.querySelector("#input3_3").value);

    let result = value1;
    if(result < value2){
        result = value2;
    } 
    if(result < value3){
        result = value3;
    }

    document.querySelector("#result3").innerHTML = `${result}`;
}

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4(){
    let value1 = Number(document.querySelector("#input4_1").value);

    let result ="";
    if(value1 >= 90){
        result = "합격";
    } else {
        result = "불합격";
    }

    document.querySelector("#result4").innerHTML = `${result}`;
}
          
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 문제5(){
    let value1 = Number(document.querySelector("#input5_1").value);

    let result = "";
    if(value1 >=90){
        result = "A등급";
    } else if(value1 >=80){
        result = "B등급";
    } else if(value1 >=70){
        result = "C등급";
    } else {
        result = "재시험";
    }

    document.querySelector("#result5").innerHTML = `${result}`;
}

/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/
function 문제6(){
    let value1 = document.querySelector("#input6_1").value;
    let value2 = document.querySelector("#input6_2").value;

    let result = "";
    if(value1 == "admin" && value2 == "1234"){
        result = "로그인 성공";
    } else {
        result = "로그인 실패";
    }

    document.querySelector("#result6").innerHTML = `${result}`;
}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 
function 문제7(){
    let value1 = Number(document.querySelector("#input7_1").value);
    let value2 = Number(document.querySelector("#input7_2").value);
    let value3 = Number(document.querySelector("#input7_3").value);

    let temp = "";
    if(value1 > value2){
        temp = value2;
        value2 = value1;
        value1 = temp;
    }

    if(value1 > value3){
        temp = value3;
        value3 = value1;
        value1 = temp;
    }

    if(value2 > value3){
        temp = value3;
        value3 = value2;
        value2 = temp;
    }


    document.querySelector("#result7").innerHTML = `오름차순 : ${value1},${value2},${value3}, 내림차순 : ${value3},${value2},${value1}`;
}