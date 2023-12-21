function 모든글출력(){
    let boardArray = JSON.parse(localStorage.getItem('boardArray'));

    const tableBody = document.querySelector('#list table tbody');

    let html = '';
    for(let i = 0; i <boardArray.length; i++){
        html += `
                <tr onclick ="개별글출력(${boardArray[i].번호})">
                    <td>${i+1}</td>
                    <td>${boardArray[i].제목}</td>
                    <td>${boardArray[i].작성자}</td>
                    <td>${boardArray[i].조회수}</td>
                </tr>
                `
    }

    tableBody.innerHTML = html;
    return;
}

window.onload = function(){
    localStorage.removeItem('viewpage')
    모든글출력()
}

function 개별글출력(i){
    let boardArray = JSON.parse(localStorage.getItem('boardArray'));
    for(let j = 0; j<boardArray.length; j++){
        if(boardArray[j].번호 == i){
            localStorage.setItem('viewpage',JSON.stringify(i))
        }
    }
    localStorage.setItem('boardArray',JSON.stringify(boardArray))


    location.href = 'view.html'
}