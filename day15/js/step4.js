const 날짜 = [];
const 날짜2 = [];
const 항목 = [];
const 금액 = [];
const 총금액 = [];

function 등록(){
    // 1. 입력
    const 입력날짜 = document.querySelector("#date").value;
    const 입력항목 = document.querySelector("#item").value;
    const 입력금액 = document.querySelector("#money").value;
    if(입력날짜 == '' || 입력항목 == '' || 입력금액 == ''){
        alert('입력되지 않았습니다.');
        return;
    }
    if(isNaN(입력금액) == true){
        alert('금액은 숫자로만 입력해 주세요.'); 
        return;
    }

    const 입력날짜2 = 입력날짜.split('-');
    const 입력날짜비교 = Number(입력날짜2[0])*10000 +  Number(입력날짜2[1])*100 +  Number(입력날짜2[2])

    날짜.push(입력날짜);
    날짜2.push(입력날짜비교);
    항목.push(입력항목);
    금액.push(천단위(입력금액));
    총금액.push(Number(입력금액));

    let 날짜2I = 날짜2.length;
    for(let i = 0; i<날짜2I; i++){
        let temp1 = 0;
        let temp2 = 0;
        let temp3 = 0;
        let temp4 = 0;
        let temp5 = 0;
        for(let j = 1; j<=날짜2I; j++ ){
            if(날짜2[i] > 날짜2[i+j]){
                temp1 = 날짜[i+j];
                날짜[i+j] = 날짜[i];
                날짜[i] = temp1;

                temp2 = 날짜2[i+j];
                날짜2[i+j] = 날짜2[i];
                날짜2[i] = temp2;

                temp3 = 항목[i+j];
                항목[i+j] = 항목[i];
                항목[i] = temp3;

                temp4 = 금액[i+j];
                금액[i+j] = 금액[i];
                금액[i] = temp4;

                temp5 = 총금액[i+j];
                총금액[i+j] = 총금액[i];
                총금액[i] = temp5;
            }
        }
    }

    // 3. 출력
    document.querySelector("#date").value = '';
    document.querySelector("#item").value = '';
    document.querySelector("#money").value = '';
    출력();
}

function 삭제(i){
    // 1. 입력

    // 2. 처리
    날짜.splice(i,1);   // 할일목록도 한개 삭제
    항목.splice(i,1);   // 상태목록도 한개 삭제
    금액.splice(i,1);   // 상태목록도 한개 삭제
    총금액.splice(i,1);


    // 3. 출력
    출력();
}

function 출력(){
    let html = '';
    const viewTable = document.querySelector("#view table tbody");
    for(let i = 0; i<항목.length; i++){
        html += 
            `
            <tr>
                <td>${날짜[i]}</td>
                <td>${항목[i]}</td>
                <td>${금액[i]}원</td>
                <td><button onclick="삭제(${i})">삭제</button></td>
            </tr>
            `;
    }

    viewTable.innerHTML = html;

    let sum = 0;
    const allMoney = document.querySelector('#view h2 span');
    for(let i =0; i<총금액.length; i++){
        sum += 총금액[i]
    }
    const 변환총금액 = String(sum);
    
    
    
    allMoney.innerHTML = 천단위(변환총금액);

}

function 천단위(바꿀금액){
    // 2. 처리
    let 금액처리 =  바꿀금액.split('');
    let 금액처리중 = 금액처리.length;
    let 금액처리완 = '';
    if(금액처리중%3 == 0){
        let a = 0;
        for(let i = 0; i <금액처리중; i++){
            if(a%3 == 0 && a != 0){
                금액처리완 += ',';
            }
            금액처리완 += 금액처리[i]
            a++
        }
    } else if(금액처리중%3 == 1){
        let a = 2;
        for(let i = 0; i <금액처리중; i++){
            if(a%3 == 0 && a != 0){
                금액처리완 += ',';
            }
            금액처리완 += 금액처리[i]
            a++
        }
    } else if(금액처리중%3 == 2){
        let a = 1;
        for(let i = 0; i <금액처리중; i++){
            if(a%3 == 0 && a != 0){
                금액처리완 += ',';
            }
            금액처리완 += 금액처리[i]
            a++
        }
    }
    return 금액처리완;
}