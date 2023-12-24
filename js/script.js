let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})

// Fungsi untuk kalkulator tiket
function calculateTicketPrice() {
    const orangCount = parseInt(document.getElementById("orangCount").value);
    const pricePerorang = 15000;
    const total = (orangCount * pricePerorang);
    document.getElementById("totalPrice").innerHTML = `Total Biaya: Rp ${total}`;
}

function calculateGroupTicketPrice() {
    const groupCount = parseInt(document.getElementById("groupCount").value);
    const pricePerPerson = 13000;
    const freePersonEvery = 30;
    const total = groupCount * pricePerPerson - Math.floor(groupCount / freePersonEvery) * pricePerPerson;
    document.getElementById("groupTotalPrice").innerHTML = `Total Biaya: Rp ${total}`;
}

