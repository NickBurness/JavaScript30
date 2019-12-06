const nav = document.querySelector('#main');
let navTop = nav.offsetTop;
console.log(navTop);

function fixNav() {
    if (window.scrollY >= navTop) {
        //document.body.style.paddingTop = nav.offsetHeight + 'px'; -- works without on chrome
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        //document.body.classList.paddingTop = 0; -- works without on chrome.
    }
}
window.addEventListener('scroll', fixNav);