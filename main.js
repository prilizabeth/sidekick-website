let animatedElement = document.querySelector('#scroll-logo');

function showLogoScroll() {
    let scrollTop = document.documentElement.scrollTop;
    let animatedHeight = animatedElement.offsetTop;

    if(animatedHeight - 300 < scrollTop) {
        animatedElement.style.opacity = 1;
    } 
}

window.addEventListener('scroll', showLogoScroll);
