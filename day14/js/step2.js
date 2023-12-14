
// // 문제1) 입력받은 수 만큼 * 출력 
// let outPut = '';
// const value1 = Number(prompt('문제1 수 입력'));
// for(let i = 1; i<= value1; i++){
//     outPut += '*'
// }
// console.log(outPut);

// // 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
// outPut = '';
// const value2 = Number(prompt('문제2 수 입력'));
// for(let i = 1; i<= value2; i++){
//     outPut += '*';
//     if(i%3 == 0){outPut += `\n`};
// }
// console.log(outPut);


// // 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// // *
// // **         
// // ***      
// // ****   
// // *****
// outPut = '';
// const value3 = Number(prompt('문제3 수 입력'));
// for(let i = 1; i<= value3; i++){
//     for(let s = 1; s<=i; s++){
//         outPut += '*';
//     }
//     outPut += `\n`;
// }
// console.log(outPut);

// // 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
// // *****
// // ****
// // ***
// // **
// // *
// outPut = '';
// const value4 = Number(prompt('문제4 수 입력'));
// for(let i = value4; i>= 1; i--){
//     for(let s = 1; s<=i; s++){
//         outPut += '*';
//     }
//     outPut += `\n`;
// }
// console.log(outPut);



// // 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// //     *
// //    **
// //   ***
// //  ****
// // *****
// outPut = '';
// const value5 = Number(prompt('문제5 수 입력'));
// for(let i = 1; i<=value5; i++){
//     // [공백]
//     for(let k = value5; k>i; k--){outPut+=' ';}
//     // [별]
//     for(let s = 1; s<=i; s++){outPut+='*';}
//     outPut += `\n`;
// }
// console.log(outPut);


// // 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// // *****
// //  ****
// //   ***
// //    **
// //     *
// outPut = '';
// const value6 = Number(prompt('문제6 수 입력'));
// for(let i = 1; i<=value6; i++){
//     // [공백]
//     for(let b = 1; b<=i-1; b++){outPut+=' ';}
//     // [별]
//     for(let s = 1; s<=value6-i+1; s++){outPut+='*';}
//     outPut += `\n`;
// }
// console.log(outPut);


// // 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// //     *
// //    ***
// //   *****
// //  *******
// // *********
// outPut = '';
// const value7 = Number(prompt('문제7 수 입력'));
// for(let i = 1; i<=value7; i++){
//     // [공백]
//     for(let b = 1; b<=value7-i; b++){outPut+=' ';}
//     // [별]
//     for(let s = 1; s<=2*i-1; s++){outPut+='*';}
//     outPut += `\n`;
// }
// console.log(outPut);

// // 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// // *********
// //  *******
// //   *****
// //    ***
// //     *
// outPut = '';
// const value8 = Number(prompt('문제8 수 입력'));
// for(let i = value7; i>=1; i--){
//     // [공백]
//     for(let b = 1; b<=value7-i; b++){outPut+=' ';}
//     // [별]
//     for(let s = 1; s<=2*i-1; s++){outPut+='*';}
//     outPut += `\n`;
// }
// console.log(outPut);


// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
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
let html = '';
function 문제9(){
    html = '';
    const value9 = Number(document.querySelector("#line9").value);
    if (value9%2==0){
        for(let i = 1; i<=(value9/2); i++){
            html += `<tr>`
            for(let a = 1; a<=(value9/2)-i; a++ ){ html += `<td>☆</td>` ;}
            for(let b = 1; b<=i*2-1; b++ ){ html += `<td>★</td>` ;}
            html += `</tr>`;
        }
        for(let i = 1; i<=(value9/2); i++){
            html += `<tr>`
            for(let s= 1; s<=i-1; s++){html += `<td>☆</td>`;}
            for(let p = 1; p<=((value9/2)-i+1)*2-1; p++){html += `<td>★</td>`;}
            html += `</tr>`;
        }
    }else{
        /* 홀수버전 */
        for(let i =1; i<=parseInt(value9/2)+1; i++){
            html += `<tr>`
            /* 위 삼각형 */
            for(let a=1; a<=parseInt(value9/2)-i+1; a++){html += `<td>☆</td>`}
                                /* 절반값 */
            for(let b=1; b<=i*2-1; b++){html += `<td>★</td>`}
            
            html += `</tr>`;
        }
        for(let i =1; i<=parseInt(value9/2); i++){
            html += `<tr>`
            /* 아래 삼각형 */
            for(let a=1; a<=i; a++){html += `<td>☆</td>`}
            for(let b=1; b<=((value9/2)-i)*2; b++){html += `<td>★</td>`}
            
            html += `</tr>`;
        }
    }
    const tableObj = document.querySelector('#table9');
    tableObj.innerHTML = html;
    document.querySelector('#line9').value = ``
}


// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
// *     *
//  *   *
//   * *
//    *
//   * *
//  *   *
// *     *
function 문제10(){
    html = '';
    const value10 = document.querySelector("#line10").value;
    let z = value10
    for(let i=1;i<=value10;i++){
        html += '<tr>';
        let a = i;
        for(let j=1;j<=value10;j++){
            if(a==j || z==j){
                html += '<td>★</td>';
            }else{
                html += '<td>☆</td>';
            }
        }
        z--;
        html += '</tr>';
    }

    const tableObj = document.querySelector('#table10');
    tableObj.innerHTML = html;
    document.querySelector('#line10').value = ``
}