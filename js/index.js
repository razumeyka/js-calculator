document.querySelectorAll(.number)forEach(el=> {
    el.addEventListener('click',function(dis) {
        const display = document.getElementsByClassName(Show);
        const number = dis.target.innerHtml;
        display.innerHtml += number;
    })
})