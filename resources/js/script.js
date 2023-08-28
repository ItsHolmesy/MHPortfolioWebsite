/*******************************************************
WORK POPUPS
 *******************************************************/

const openMMPopUps = document.querySelectorAll('[js-mm-open]');
const openWoolworthsPopUps = document.querySelectorAll('[js-woolworths-open]');
const openTelstraPopUps = document.querySelectorAll('[js-telstra-open]');
const closePopUps = document.querySelectorAll('[js-close-popup]');
const overlay = document.getElementById('overlay');

// MM
openMMPopUps.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('mm-popup');
        openPopUp(popup);
    });
});

// Woolworths
openWoolworthsPopUps.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('woolworths-popup');
        openPopUp(popup);
    });
});

// Telstra
openTelstraPopUps.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('telstra-popup');
        openPopUp(popup);
    });
});

// GROUNDWORK
overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active');
    popups.forEach(popup => {
        closePopUp(popup);
    });
});

closePopUps.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        closePopUp(popup);
    });
});

function openPopUp(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopUp(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
}


/*******************************************************
CONTACT POPUPS
 *******************************************************/

const openPhonePopUp = document.querySelectorAll('[js-phone-open');
const openEmailPopUp = document.querySelectorAll('[js-email-open');

// Phone
openPhonePopUp.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('phone-popup');
        openPopUp(popup);
    })
})

// Email
openEmailPopUp.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('email-popup');
        openPopUp(popup);
    })
})


/*******************************************************
DARK MODE
 *******************************************************/

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    console.log('test');
})