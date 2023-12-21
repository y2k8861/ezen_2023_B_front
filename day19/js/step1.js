/* 
    설계
        1. 경험
        2. 기능 실행 순서
            [키오스크 = 사용자 입장]
                - 카테고리선택 -> 제품 선택 -> 장바구니 담기 -> 결제
            [포스기 = 관리자 입장]
                - 결제 내역 (주문상태)
                - 카테고리 추가/삭제 기능
                - 제품 추가/삭제 기능


        3. 기능에 필요한 메모리[저장-DB설계] 설계
            카테고리 = [
                {cno : 1, cname : '신제품(NEW)'},
                {cno : 2, cname : '프리미엄'},
                {cno : 3, cname : '와퍼&주니어'},
                {cno : 4, cname : '치킨&슈림프버거'},
                {cno : 5, cname : '올데이킹&킹모닝'},
            ]
                - 관리자가 해당 배열을 추가/삭제

        4. 배열 안에 있는 테이터를 식별할때 기준점.
            사람 = {이름 : '유재석', 나이 : '40세' , 직업 : '강사'} -이름으로 식별시 동명이인 존재하면 문제점 발생. [중복이 절대로 없어야함]
            사람 = {주민등록번호 : '970114-1' 이름 : '유재석', 나이 : '40세' , 직업 : '강사'}

            - 인덱스 vs 식별코드생성 vs 이름    !!! 중복이 없어야 하고 절대적인 고정값으로 들어가야한다
                - 신제품(NEW) -------> {cno : 1, cname : '신제품(NEW)'},
*/

// 백앤드로 데이터를 받았다고 치고
// 전역변수
// 1. 카테고리 목록
const categoryArray = [
    // {cno : 1, cname : '신제품(NEW)'},
    // {cno : 2, cname : '프리미엄'},
    // {cno : 3, cname : '와퍼&주니어'},
    // {cno : 4, cname : '치킨&슈림프버거'},
    // {cno : 5, cname : '올데이킹&킹모닝'}
]

// 2. 상품목록
const productArray = [
    // {pno : 1, pname : '큐브스테이크와퍼', pprice : 10500, pimg : '큐브스테이크와퍼.png', cno : 1},
    // {pno : 2, pname : '콰트로치즈와퍼', pprice : 9500, pimg : '콰트로치즈와퍼.png', cno : 2},
    // {pno : 3, pname : '통새우슈림프버거', pprice : 8500, pimg : '통새우슈림프버거.png', cno : 3},
    // {pno : 4, pname : '큐브스테이크와퍼2', pprice : 11500, pimg : '큐브스테이크와퍼.png', cno : 1},
    // {pno : 5, pname : '콰트로치즈와퍼2', pprice : 10500, pimg : '콰트로치즈와퍼.png', cno : 2},
    // {pno : 6, pname : '통새우슈림프버거2', pprice : 9500, pimg : '통새우슈림프버거.png', cno : 3},
    // {pno : 7, pname : '큐브스테이크와퍼3', pprice : 9500, pimg : '큐브스테이크와퍼.png', cno : 1},
    // {pno : 8, pname : '콰트로치즈와퍼3', pprice : 8500, pimg : '콰트로치즈와퍼.png', cno : 2},
    // {pno : 9, pname : '통새우슈림프버거3', pprice : 7500, pimg : '통새우슈림프버거.png', cno : 3},
    // {pno : 10, pname : '큐브스테이크와퍼4', pprice : 8500, pimg : '큐브스테이크와퍼.png', cno : 1},
    // {pno : 11, pname : '콰트로치즈와퍼4', pprice : 7500, pimg : '콰트로치즈와퍼.png', cno : 2},
    // {pno : 12, pname : '통새우슈림프버거4', pprice : 6500, pimg : '통새우슈림프버거.png', cno : 3},
    // {pno : 13, pname : '큐브스테이크와퍼5', pprice : 12500, pimg : '큐브스테이크와퍼.png', cno : 1},
    // {pno : 14, pname : '콰트로치즈와퍼5', pprice : 11500, pimg : '콰트로치즈와퍼.png', cno : 2},
    // {pno : 15, pname : '통새우슈림프버거5', pprice : 10500, pimg : '통새우슈림프버거.png', cno : 3},
    // {pno : 16, pname : '큐브스테이크와퍼6', pprice : 11500, pimg : '큐브스테이크와퍼.png', cno : 4},
    // {pno : 17, pname : '콰트로치즈와퍼6', pprice : 10500, pimg : '콰트로치즈와퍼.png', cno : 5},
    // {pno : 18, pname : '통새우슈림프버거7', pprice : 9500, pimg : '통새우슈림프버거.png', cno : 4},
    // {pno : 19, pname : '큐브스테이크와퍼7', pprice : 9500, pimg : '큐브스테이크와퍼.png', cno : 5},
    // {pno : 20, pname : '콰트로치즈와퍼8', pprice : 8500, pimg : '콰트로치즈와퍼.png', cno : 4},
    // {pno : 21, pname : '통새우슈림프버거8', pprice : 7500, pimg : '통새우슈림프버거.png', cno : 5},
    // {pno : 22, pname : '큐브스테이크와퍼9', pprice : 8500, pimg : '큐브스테이크와퍼.png', cno : 4},
    // {pno : 23, pname : '콰트로치즈와퍼9', pprice : 7500, pimg : '콰트로치즈와퍼.png', cno : 5}
]

const cartArray = [];

const byArray = [];

window.onload = function(){
    // categoryOutput(1);
    productOutput(1)
}

function categoryOutput(selectCno){
    const headerNav = document.querySelector('#header ul');
    let html = '';
    for(let i=0; i<categoryArray.length; i++){
        html +=`
            <li class="${categoryArray[i].cno == selectCno ? 'selectMenu' : ''}" onclick='productOutput(${categoryArray[i].cno})'>${categoryArray[i].cname}</li>
        `;
    }

    headerNav.innerHTML = html;
}

function productOutput(selectCno){
    const productBox = document.querySelector('#productBox');
    let html = '';
    for(let i=0; i<productArray.length; i++){
        if(productArray[i].cno == selectCno){
            html += `
                <div class="product" onclick="cartIn(${productArray[i].pno})">
                    <img src="${productArray[i].pimg}" alt="" />
                    <div class="productInfo">
                        <div class="pname">${productArray[i].pname}</div>
                        <div class="pprice">${productArray[i].pprice.toLocaleString(3,',')}원</div>
                    </div>
                </div>
            `;
        }
    }
    categoryOutput(selectCno)
    productBox.innerHTML = html;
}

function cartIn(selectPno){
    const checkpropt = confirm('장바구니에 추가하시겠습니까?')

    if(!checkpropt){console.log('취소');return;}

    cartArray.push(selectPno);
    console.log(cartArray)

    cartOutput()
}

function cartCansle(cartIndex){
    const checkpropt = confirm('장바구니에서 삭제하시겠습니까?')

    if(!checkpropt){console.log('취소');return;}

    cartArray.splice(cartIndex,1);

    cartOutput()
}

function cartOutput(){
    const cartBottom = document.querySelector('#cartBottom');
    const cartAll = document.querySelector('#cartTop .span1');
    const cartAllprice = document.querySelector('#cartTop .span2');

    let html = '';
    let totalPrice = 0;

    for(let i=0; i<cartArray.length; i++){
        for(let j=0; j<productArray.length; j++){
            if(cartArray[i] == productArray[j].pno){
                html += `
                    <div class="cItem">
                        <div>${productArray[j].pname}</div>
                        <div>${productArray[j].pprice.toLocaleString(3,',')}원</div>
                        <span onclick='cartCansle(${i})'>X</span>
                    </div>
                `;

                totalPrice += productArray[j].pprice
            }
        }
    }

    cartBottom.innerHTML = html;
    cartAll.innerHTML = cartArray.length;
    cartAllprice.innerHTML = totalPrice.toLocaleString(3,',') + '원';
}

function orderCansle(){
    const checkpropt = confirm('주문을 취소하시겠습니까?')
    if(!checkpropt){return;}
    cartReset();
    alert('주문이 취소되었습니다.');
}

let orderNumber = 0;
function orderComplete(){
    const checkpropt = confirm('주문을 완료하시겠습니까?')
    if(!checkpropt){return;}
    alert('주문이 성공되었습니다.');

    orderNumber++
    const today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    const day = year + '-' + month + '-' + date;

    const byObject = {
        ono : orderNumber,
        oday : day,
        pnos : []
    }

    for(let i=0; i<cartArray.length; i++){
        for(let j=0; j<productArray.length; j++){
            if(cartArray[i] == productArray[j].pno){
                let test = {}
                test.orderProductName = productArray[j].pname 
                test.orderProductPrice = productArray[j].pprice 
                test.orderProductCategoRy = productArray[j].cno 
                byObject.pnos.push(test);
            }
        }
    }

    byArray.push(byObject)
    console.log(byArray);
    

    ortderOutput();
}

function ortderOutput(){
    const table = document.querySelector('#table1 tbody');
    let html = '';
    let trHtml = '';
    let trAllPrice = 0;
    for(let a = 0; a<byArray.length; a++){
        html += `
        <tr>
            <td>${byArray[a].ono}</td>
            <td>${byArray[a].oday}</td>
            <td>주문완료</td>
            <td class="btnTd" onclick="detailsView(${a})">상세보기</td>
        </tr>

        <tr class="detailsTr detailsTr${a}">
            <td colspan="4">
                <table>
                    <thead>
                        <tr>
                            <th>카테고리</th>
                            <th>제품명</th>
                            <th>가격</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${ortderOutput2(byArray[a].ono)}
                    </tbody>
                </table>
            </td>
        </tr>
        `;
    }
    table.innerHTML = html;
    cartReset()
}

function ortderOutput2(orderNumber){
    console.log(orderNumber)    

    let trHtml = '';
    let trAllPrice = 0;
    for(let j = 0; j<byArray.length; j++){
        if(orderNumber == byArray[j].ono){
            for(let k=0; k<byArray[j].pnos.length; k++){
                trHtml += `
                    <tr>
                        <td>${orderCategory(byArray[j].pnos[k].orderProductCategoRy)}</td>
                        <td>${byArray[j].pnos[k].orderProductName}</td>
                        <td>${byArray[j].pnos[k].orderProductPrice}원</td>
                    </tr>
                `
                trAllPrice += byArray[j].pnos[k].orderProductPrice
            }
            
        }
    }

    trHtml += `
        <tr>
            <th colspan="3">총 가격 : ${trAllPrice}</th>
        </tr>
    `

    return trHtml
}

function orderCategory(orderCategoryNumber){
    for(let l = 0; l<categoryArray.length; l++){
        if(orderCategoryNumber == categoryArray[l].cno){
            return categoryArray[l].cname;
        }
    }
}

function cartReset(){
    cartArray.splice(0,cartArray.length);
    cartOutput()
}
let caNumber = 0;
function caIn(){
    console.log(caNumber);
    // 입력
    const caInInput = document.querySelector('#caInInput').value
    const productCategorySelect = document.querySelector('#productCategorySelect')

    // 처리
    caNumber++;
    let categoryName = {cno : caNumber, cname : caInInput} ;
    categoryArray.push(categoryName)
    console.log(categoryArray);
    let html = '';
    for(let i=0; i<categoryArray.length; i++){
        html +=`
            <option value="${categoryArray[i].cno}">${categoryArray[i].cname}</option>
        `;
    }

    productCategorySelect.innerHTML = html;
    
    // 출력
    categoryOutput(1);
    document.querySelector('#caInInput').value = '';

    return caNumber;
}

let prNumber = 0;
function productIn(){
    console.log('제품등록')
    // 입력
    const productCategorySelect = Number(document.querySelector('#productCategorySelect').value)
    const productImg = document.querySelector('#productImg')
    const productName = document.querySelector('#productName').value
    const productPrice = Number(document.querySelector('#productPrice').value)

    // 처리
    prNumber++
    const imageSrc = URL.createObjectURL(productImg.files[0]);
    const productItem = {
        pno : prNumber, 
        pname : productName, 
        pprice : productPrice, 
        pimg : imageSrc, 
        cno : productCategorySelect
    }

    productArray.push(productItem);
    console.log(productArray);

    // 출력
    productOutput(productCategorySelect)
    console.log(productCategorySelect)

    return prNumber;
}

function detailsView(trNumber){
    const noTr = document.querySelector('.detailsTr')
    noTr.style.display = "none";

    const detailsTr = document.querySelector('.detailsTr'+trNumber);
    detailsTr.style.display = "table-row";
}

