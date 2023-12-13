
// 문제1) 입력받은 수 만큼 * 출력 
let outPut = '';
const value1 = Number(prompt('문제1 수 입력'));
for(let i = 1; i<= value1; i++){
    outPut += '*'
}
console.log(outPut);

// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
outPut = '';
const value2 = Number(prompt('문제2 수 입력'));
for(let i = 1; i<= value2; i++){
    outPut += '*';
    if(i%3 == 0){outPut += `\n`};
}
console.log(outPut);


// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// *
// **         
// ***      
// ****   
// *****
outPut = '';
const value3 = Number(prompt('문제3 수 입력'));
for(let i = 1; i<= value3; i++){
    for(let s = 1; s<=i; s++){
        outPut += '*';
    }
    outPut += `\n`;
}
console.log(outPut);

// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
// *****
// ****
// ***
// **
// *
outPut = '';
const value4 = Number(prompt('문제4 수 입력'));
for(let i = value4; i>= 1; i--){
    for(let s = 1; s<=i; s++){
        outPut += '*';
    }
    outPut += `\n`;
}
console.log(outPut);



// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
//     *
//    **
//   ***
//  ****
// *****
outPut = '';
const value5 = Number(prompt('문제5 수 입력'));
for(let i = 1; i<=value5; i++){
    // [공백]
    for(let k = value5; k>i; k--){outPut+=' ';}
    // [별]
    for(let s = 1; s<=i; s++){outPut+='*';}
    outPut += `\n`;
}
console.log(outPut);


// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// *****
//  ****
//   ***
//    **
//     *
outPut = '';
const value6 = Number(prompt('문제6 수 입력'));
for(let i = 1; i<=value6; i++){
    // [공백]
    for(let b = 1; b<=i-1; b++){outPut+=' ';}
    // [별]
    for(let s = 1; s<=value6-i+1; s++){outPut+='*';}
    outPut += `\n`;
}
console.log(outPut);


// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
//     *
//    ***
//   *****
//  *******
// *********
outPut = '';
const value7 = Number(prompt('문제7 수 입력'));
for(let i = 1; i<=value7; i++){
    // [공백]
    for(let b = 1; b<=value7-i; b++){outPut+=' ';}
    // [별]
    for(let s = 1; s<=2*i-1; s++){outPut+='*';}
    outPut += `\n`;
}
console.log(outPut);

// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// *********
//  *******
//   *****
//    ***
//     *
outPut = '';
const value8 = Number(prompt('문제8 수 입력'));
for(let i = 1; i<=value7; i++){
    // [공백]
    for(let b = 1; b<=value7-i; b++){outPut+=' ';}
    // [별]
    for(let s = 1; s<=2*i-1; s++){outPut+='*';}
    outPut += `\n`;
}
console.log(outPut);


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
outPut = '';
const value9 = Number(prompt('문제9 수 입력'));

console.log(outPut);


// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
// *     *
//  *   *
//   * *
//    *
//   * *
//  *   *
// *     *
outPut = '';
const value10 = Number(prompt('문제10 수 입력'));
let z = value10;
for(let i=1;i<=value10;i++){
    let a = i;
    for(let j=1;j<=value10;j++){
        if(a==j || z==j){
            outPut += '*';
        }else{
            outPut += ' ';
        }
    }
    z--;
    outPut += "\n";
}

console.log(outPut);