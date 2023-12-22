// Variables
const logoItem = document.querySelectorAll(".logo_item");
const logo = document.querySelector(".logo");
const logoCircle = document.querySelector(".logo_circle");

const friendCircle = document.getElementById("product_circle");

const answer = document.querySelectorAll(".answer");

const iconMenu = document.querySelector(".icon_menu");
const mobileNavbar = document.querySelector(".mobile_nav");

const swiper = document.getElementById("Home");

const menuSide = document.querySelector(".payment");
const buttonPayment = document.querySelectorAll(".paymentButton");
const navbar = document.querySelector(".navbar");
const nothingHeader = document.querySelector(".nothing_header");
const modal = document.querySelector(".modal");
const body = document.querySelector(".nothing_body");

const submitButton = document.querySelector(".form_button");

//botones div faq
const iconPlus = document.querySelectorAll(".icon_plus");

// input file

const inputFile = document.querySelector(".inputfile");


// Events
logo.addEventListener('mouseover', changeColorMain);
logo.addEventListener('mouseleave', changeColorBlack);
iconMenu.addEventListener('click', showNavbar);

document.addEventListener('DOMContentLoaded', obtainDatos);
window.addEventListener('resize', obtainDatos);

buttonPayment.forEach(button => button.addEventListener('click', toggleMenu));


// Open and Close Answers from Faq
iconPlus.forEach(item => item.addEventListener('click', function (event) {
    event.preventDefault();
    const questionBox = item.closest(".box");
    const answerItem = questionBox.querySelector(".answer");

    if (item.classList.contains("bx-plus")) {
        item.classList.remove("bx-plus");
        item.classList.add("bx-minus");

        answerItem.classList.add("answer_toggle");

    } else {
        item.classList.remove("bx-minus");
        item.classList.add("bx-plus");

        if (answerItem.classList.contains("answer_toggle")) {
            answerItem.classList.remove("answer_toggle");
        }
    }
}));


// Functions
function changeColorMain(event) {
    event.preventDefault();
    logoItem.forEach(item => item.setAttribute('fill', "#FA5046"));
    document.body.style.cursor = "pointer";
    logoCircle.setAttribute('cx', "39.9831");
}

function changeColorBlack(event) {
    event.preventDefault();
    logoItem.forEach(item => item.setAttribute('fill', "#000"));
    document.body.style.cursor = "auto";
    logoCircle.setAttribute('cx', "24.9831");
}

function showNavbar(event) {
    event.preventDefault();
    mobileNavbar.classList.toggle("hidden");
}


// navbar sticky
function obtainDatos() {
    const widthScreen = window.innerWidth;
    if (widthScreen > 1000) {
        swiper.setAttribute('slides-per-view', "3");
    } else if (widthScreen < 1000 && widthScreen > 720) {
        swiper.setAttribute('slides-per-view', "2");
    } else if (widthScreen < 720) {
        swiper.setAttribute('slides-per-view', "1");
    }
}

// scroller

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
    })
}

// Menu Side

function toggleMenu(event) {
    event.preventDefault();
    menuSide.classList.toggle("right_position");
    modal.classList.toggle("hidden");
    body.classList.toggle("overflow");
}

// navbar

let lastScrollTop = 0;

window.addEventListener('scroll', function (event) {
    event.preventDefault();
    let currentScrollTop = window.scrollY;
    if (currentScrollTop > lastScrollTop) {
        // Scroll hacia abajo
        nothingHeader.style.top = '-100%';
    } else {
        // Scroll hacia arriba
        nothingHeader.style.top = '0';
    }

    if (currentScrollTop === 0) {
        navbar.classList.add("justify_content");
    } else {
        navbar.classList.remove("justify_content");
    }

    lastScrollTop = currentScrollTop;
});

// Changing the cursor of Input File

inputFile.addEventListener('mouseover', cursorOver);
inputFile.addEventListener('mouseleave', cursorLeave);

function cursorOver(event) {
    event.preventDefault();
    document.body.style.cursor = "pointer";
}

function cursorLeave(event) {
    event.preventDefault();
    document.body.style.cursor = "auto";
}

// formulario radio 
document.addEventListener("DOMContentLoaded", function () {
    const radioMonthly = document.querySelector('input[value="monthly"]');
    const radioAnnual = document.querySelector('input[value="annual"]');

    const annualDiv = document.querySelector(".radioActiveAnnual");
    const monthlyDiv = document.querySelector(".radioActiveMonthly");

    radioMonthly.addEventListener("change", actualizarDiv);
    radioAnnual.addEventListener("change", actualizarDiv);

    function actualizarDiv() {
        const valorRadio = document.querySelector('input[name="period"]:checked').value;

        if (valorRadio === "annual") {
            // Muestra el div
            annualDiv.style.display = "block";
            monthlyDiv.style.display = "none";
        } else {
            // Oculta el div
            monthlyDiv.style.display = "block";
            annualDiv.style.display = "none";
        }
    }
});

// cursor Input File

const fileButton = document.getElementById('btn_enviar');
const btnWrn = document.querySelector(".button_wrn");

btnWrn.addEventListener('click', function (event) {
    fileButton.click();
});


// form
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("myFormulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        validarFormulario();
    });
});

function validarFormulario(event) {
    const primerNombre = document.getElementById("firstName");
    const correo = document.getElementById("email");

    const nombreValor = primerNombre.value;
    const emailValor = correo.value;

    const firstNameRequired = document.getElementById("firstNameRequired");
    const emailRequired = document.getElementById("emailRequired");
    const emailString = document.getElementById("emailString");

    let hayErrores = false;

    // Validación del campo de nombre
    if (nombreValor === "") {
        hayErrores = true;
        firstNameRequired.style.display = "flex";
        firstNameRequired.classList.add("margin_bottom");
    } else {
        firstNameRequired.style.display = "none";
    }

    // Validación del campo de email
    if (emailValor === "") {
        hayErrores = true;
        emailRequired.style.display = "flex";
        emailRequired.classList.add("margin_bottom");
        emailString.style.display = "none";
    } else {
        emailRequired.style.display = "none";
    }

    if (!hayErrores) {
        document.getElementById("myFormulario").submit();
    }
}

// focus del input
const primerNombre = document.getElementById("firstName");
const apellido = document.getElementById("lastName");
const promCode = document.getElementById("promcode");
const correo = document.getElementById("email");

// First Name
primerNombre.addEventListener('focus', function () {
    primerNombre.removeAttribute('placeholder');
});
primerNombre.addEventListener('blur', function () {
    primerNombre.setAttribute('placeholder', "First name");
});


// Last Name
apellido.addEventListener('focus', function () {
    apellido.removeAttribute('placeholder');
});
apellido.addEventListener('blur', function () {
    apellido.setAttribute('placeholder', "Last name");
});

// Promcode
promCode.addEventListener('focus', function () {
    promCode.removeAttribute('placeholder');
});
promCode.addEventListener('blur', function () {
    promCode.setAttribute('placeholder', "Promcode");
});


// Email
correo.addEventListener('focus', function () {
    correo.removeAttribute('placeholder');
});
correo.addEventListener('blur', function () {
    correo.setAttribute('placeholder', "Email");
});
