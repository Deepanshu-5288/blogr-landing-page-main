document.querySelector(".product").addEventListener("click", () => {
    document.querySelector(".product-list").classList.toggle("dropdown-list-product");
    document.querySelector(".arrow-light-product").classList.toggle("arrow-light-rotate");
    document.querySelector(".connect-list").classList.add("dropdown-list-connect");
    document.querySelector(".arrow-light-connect").classList.remove("arrow-light-rotate");
    document.querySelector(".company-list").classList.add("dropdown-list-company");
    document.querySelector(".arrow-light-company").classList.remove("arrow-light-rotate");
});
document.querySelector(".company").addEventListener("click", () => {
    document.querySelector(".company-list").classList.toggle("dropdown-list-company");
    document.querySelector(".arrow-light-company").classList.toggle("arrow-light-rotate");
    document.querySelector(".product-list").classList.add("dropdown-list-product");
    document.querySelector(".arrow-light-product").classList.remove("arrow-light-rotate");
    document.querySelector(".connect-list").classList.add("dropdown-list-connect");
    document.querySelector(".arrow-light-connect").classList.remove("arrow-light-rotate");
});
document.querySelector(".connect").addEventListener("click", () => {
    document.querySelector(".connect-list").classList.toggle("dropdown-list-connect");
    document.querySelector(".arrow-light-connect").classList.toggle("arrow-light-rotate");
    document.querySelector(".product-list").classList.add("dropdown-list-product");
    document.querySelector(".arrow-light-product").classList.remove("arrow-light-rotate");
    document.querySelector(".company-list").classList.add("dropdown-list-company");
    document.querySelector(".arrow-light-company").classList.remove("arrow-light-rotate");
});


document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("hamburger-show");
    document.querySelector(".close").classList.toggle("close-show");
    document.querySelector(".left-list").classList.toggle("left-list-hide");
    document.querySelector(".right-list").classList.toggle("right-list-hide");
});
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("hamburger-show");
    document.querySelector(".close").classList.toggle("close-show");
    document.querySelector(".left-list").classList.toggle("left-list-hide");
    document.querySelector(".right-list").classList.toggle("right-list-hide");
});