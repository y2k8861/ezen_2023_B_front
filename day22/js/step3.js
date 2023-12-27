document.addEventListener('DOMContentLoaded',function(){
    console.log(document.querySelector('img'))
    const rects = document.querySelectorAll('.rect');
    for(let i = 0; i<rects.length; i++){
        const width = (i+1)*100;
        const src = `https://placekitten.com/${width}/250`
        // rects[i].setAttribute('src',src)
        rects[i].src = src
    }

    // p.318
    const divs = document.querySelectorAll('div')
    for(let i = 0; i<divs.length; i++){
        console.log(i,divs[i]);
        const val = i*10;
        divs[i].style.height = '10px';
        divs[i].style.backgroundColor = `rgba(${val},${val},${val},1)`
    }

    // p.320
    const header = document.createElement('h1')
    console.log(header)
    header.textContent = '문서객체 동적으로 등록하기'
    header.setAttribute('data-custom' , '사용자 정의 속성');
    header.style.color = 'white'
    header.style.backgroundColor = 'black';

    document.body.appendChild(header);
    document.body.innerHTML += `<h1></h1>`
    document.body.innerHTML += header
});