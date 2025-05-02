function turnPage() {
    const page1 = document.querySelector('.page-1');
    const page2 = document.querySelector('.page-2');

    page1.classList.add('turn');

    setTimeout(() => {
        page2.classList.add('active');
        page2.style.transform = 'rotateY(0deg)';
    }, 400);
}

function turnPageBack() {
    const page1 = document.querySelector('.page-1');
    const page2 = document.querySelector('.page-2');

    page2.style.transform = 'rotateY(180deg)';
    page2.classList.remove('active');

    setTimeout(() => {
        page1.classList.remove('turn');
    }, 300);
}
