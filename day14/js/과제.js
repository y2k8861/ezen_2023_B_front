
// 문제1) 입력받은 수 만큼 * 출력 
function 문제1() {
    // [입력]
    let number = document.querySelector("#ex1Input").value;
    if(isNaN(number) == true){
        alert("숫자만 입력해 주세요");
        return;
    }

    // [처리]
    let result = '';
    for(let i = 1; i<=number; i++){
        result += "*";
    }

    // [출력]
    console.log(`문제1번`);
    console.log(`${result}`);
    document.querySelector('#ex1').innerHTML = result;
}

// // 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
function 문제2() {
    // [입력]
    let number = document.querySelector("#ex2Input").value

    // [처리]
    let result = '';
    let result2 = '';
    for(let i = 1; i<=number; i++){
        if(i%3==0){
            result += "*\n";
            result2 += "*<br>";
        } else {
            result += "*";
            result2 += "*";
        }
        
    }

    // [출력]
    console.log(`문제2번`);
    console.log(`${result}`);
    document.querySelector('#ex2').innerHTML = result2;
}

// // 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// *
// **         
// ***      
// ****   
// *****
function 문제3() {
    // [입력]
    let number = document.querySelector("#ex3Input").value

    // [처리]
    let result = '';
    let result2 = '';

    for(let i = 1; i <= number; i++){
        for(let j = 0; j<i; j++){
            result += "*"
            result2 += "*"
        }
        result += "\n";
        result2 += "<br>";
    }

    // [출력]
    console.log(`문제3번`);
    console.log(`${result}`);
    document.querySelector('#ex3').innerHTML = result2;
}
// // 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
// *****
// ****
// ***
// **
// *
function 문제4() {
    // [입력]
    let number = document.querySelector("#ex4Input").value

    // [처리]
    let result = '';
    let result2 = '';
    for(let i = number; i >= 1; i--){
        for(let j = 0; j<i; j++){
            result += "*"
            result2 += "*"
        }
        result += "\n";
        result2 += "<br>";
    }

    // [출력]
    console.log(`문제4번`);
    console.log(`${result}`);
    document.querySelector('#ex4').innerHTML = result2;
}

// // 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
//     *
//    **
//   ***
//  ****
// *****
function 문제5() {
    // [입력]
    let number = document.querySelector("#ex5Input").value

    // [처리]
    let result = '';
    let result2 = '';
    for(let i = 1; i <= number; i++){
        for(let k = number; k>i; k--){
            result += " ";
            result2 += "&nbsp;";
        }
        for(let j = 0; j<i; j++){
            result += "*"
            result2 += "*"
        }
        result += "\n";
        result2 += "<br>";
    }

    // [출력]
    console.log(`문제5번`);
    console.log(`${result}`);
    document.querySelector('#ex5').innerHTML = result2;
}

// // 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// *****
//  ****
//   ***
//    **
//     *
function 문제6() {
    // [입력]
    let number = document.querySelector("#ex6Input").value

    // [처리]
    let result = '';
    let result2 = '';
    for(let i = number; i >= 1; i--){
        for(let k = number; k>i; k--){
            result += " ";
            result2 += "&nbsp;";
        }
        for(let j = 0; j<i; j++){
            result += "*"
            result2 += "*"
        }
        result += "\n";
        result2 += "<br>";
    }

    // [출력]
    console.log(`문제6번`);
    console.log(`${result}`);
    document.querySelector('#ex6').innerHTML = result2;
}

// // 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
//     *
//    ***
//   *****
//  *******
// *********
function 문제7() {
    // [입력]
    let number = document.querySelector("#ex7Input").value

    // [처리]
    let result = '';
    let result2 = '';
    for(let i = 1; i <= number; i++){
        for(let k = number; k>i; k--){
            result += " ";
            result2 += "&nbsp;";
        }
        for(let j = 0; j<2*i-1; j++){
            result += "*"
            result2 += "*"
        }
        result += "\n";
        result2 += "<br>";
    }

    // [출력]
    console.log(`문제7번`);
    console.log(`${result}`);
    document.querySelector('#ex7').innerHTML = result2;
}

// // 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// *********
//  *******
//   *****
//    ***
//     *
function 문제8() {
    // [입력]
    let number = document.querySelector("#ex8Input").value

    // [처리]
    let result = '';
    let result2 = '';
    for(let i = number; i >= 1; i--){
        for(let k = number; k>i; k--){
            result += " ";
            result2 += "&nbsp;";
        }
        for(let j = 0; j<2*i-1; j++){
            result += "*"
            result2 += "*"
        }
        result += "\n";
        result2 += "<br>";
    }

    // [출력]
    console.log(`문제8번`);
    console.log(`${result}`);
    document.querySelector('#ex8').innerHTML = result2;
}

// // 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *
function 문제9() {
    // [입력]
    let number = document.querySelector("#ex9Input").value

    // [처리]
    let result = '';
    let result2 = '';
    for(let i = 1; i <= number/2; i++){
        for(let k = number/2; k>i; k--){
            result += " ";
            result2 += "&nbsp;";
        }
        for(let j = 0; j<2*i-1; j++){
            result += "*"
            result2 += "*"
        }
        result += "\n";
        result2 += "<br>";
    }
    for(let i = number/2; i >= 1; i--){
        for(let k = number/2; k>i; k--){
            result += " ";
            result2 += "&nbsp;";
        }
        for(let j = 0; j<2*i-1; j++){
            result += "*"
            result2 += "*"
        }
        result += "\n";
        result2 += "<br>";
    }

    // [출력]
    console.log(`문제9번`);
    console.log(`${result}`);
    document.querySelector('#ex9').innerHTML = result2;
}

// // 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
// *     *
//  *   *
//   * *
//    *
//   * *
//  *   *
// *     *

function 문제10() {
    // [입력]
    let number = document.querySelector("#ex10Input").value

    // [처리]
    let result = '';
    let result2 = '';

    let z = number;
    for(let i=1;i<=number;i++){
        let a = i;
        for(let j=1;j<=number;j++){
            if(a==j || z==j){
                result += '*';
                result2 += '*';
            }else{
                result += ' ';
                result2 += '&nbsp;';
            }
        }
        z--;
        result += "\n";
        result2 += "<br>";
    }



    // [출력]
    console.log(`문제10번`);
    console.log(`${result}`);
    document.querySelector('#ex10').innerHTML = result2;
}