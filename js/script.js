// Site Header Sticky 
document.addEventListener('DOMContentLoaded', function () {
    const stickyHeader = document.querySelector('.site-header_sticky');
    window.onscroll = function () {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos === 0) {
            stickyHeader.classList.add('scrolled_top');
        } else {
            stickyHeader.classList.remove('scrolled_top');
        }
    };
});


// Scroll Down Button 
function scrollToDown() {
    // document.getElementById('motionMedia').scrollIntoView({ behavior: 'smooth' });
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const offset = document.getElementById('motionMedia').offsetTop - 104;
    window.scrollTo({ top: offset, behavior: 'smooth' });
}






