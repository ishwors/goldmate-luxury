document.addEventListener('DOMContentLoaded', function () {
    // let prevScrollPos = window.scrollY;
    const stickyHeader = document.querySelector('.site-header_sticky');
    window.onscroll = function () {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos === 0) {
            stickyHeader.classList.add('scrolled_top');
        } else {
            stickyHeader.classList.remove('scrolled_top');
        }

        // prevScrollPos = currentScrollPos;
    };
});







