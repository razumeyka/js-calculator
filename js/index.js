document.querySelectorAll('.number').forEach(el=> {
    el.addEventListener('click', function(dis) {
        const display = document.getElementByClassName('.show');
        const number = dis.target.innerHtml;
        display.innerHtml += number;
    })
})