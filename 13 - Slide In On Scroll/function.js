function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImages.forEach(sliderImage => {
        //find halfway point in image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        //bottom of image in window
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const halfwayShown = slideInAt > sliderImage.offsetTop;
        const isntScrolledPast = window.scrollY < imageBottom;
        if (halfwayShown && isntScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));