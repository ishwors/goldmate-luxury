//Skicky Header
document.addEventListener("DOMContentLoaded", function () {
    const stickyHeader = document.querySelector(".site-header");
    stickyHeader.classList.add("scrolled_top");
    window.onscroll = function () {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos === 0) {
            stickyHeader.classList.add("scrolled_top");
        } else {
            stickyHeader.classList.remove("scrolled_top");
        }
    };
});


// Scroll Down Button
function scrollToDown() {
    // document.getElementById('motionMedia').scrollIntoView({ behavior: 'smooth' });
    const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
    const offset = document.getElementById("motionMedia").offsetTop - 104;
    window.scrollTo({ top: offset, behavior: "smooth" });
}


//Product Card List
$(document).ready(function (e) {
    productObject.products.forEach((product) => loadProducts(product));
});

function loadProducts(data) {
    const wrapper = document.querySelector(".product-item__card-wrapper");

    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-6", "mb-4", "product-item__card", 'animate__animated', 'animate__pulse');
    div.innerHTML = `
    <div class="product-item">
        <a href="#">
            <figure class="product-media d-flex justify-content-center mb-0">
                <img class="img-fluid" src="${data.imageUrl}" alt="${data.name}">
            </figure>
            <div class="product-detail animate__animated animate__fadeInUp" >
                <h2>${data.name}</h2>
                <p><span class="me-1">${data.currency}</span><span>${data.price.toFixed(2)}</span></p>
            </div>
            ${data.isNew ? '<span class="product-item__new badge bg-white">NEW</span>' : ''}
        </a>
        <button class="btn product-item__btn" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
        </button>
    </div>    
    `;
    wrapper.appendChild(div);
}


//Animation
const animateSiteHeader = document.querySelector('.site-header__inner');
animateSiteHeader.classList.add('animate__animated', 'animate__fadeIn');


const animateProductCard = document.querySelector('.product-list__pagination');
animateProductCard.classList.add('animate__animated', 'animate__fadeInUp');
animateProductCard.style.setProperty('--animate-duration', '1.5s');


const animateLandingBannerImg = document.querySelector('.landing-page-hero__media');
animateLandingBannerImg.classList.add('animate__animated', 'animate__bounceInUp');
animateLandingBannerImg.style.setProperty('--animate-duration', '1.5s');
