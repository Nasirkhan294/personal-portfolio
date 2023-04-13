const toggle = document.querySelector('#menu-btn');
const menu = document.querySelector('ul');

toggle.onclick = () => {
  if (menu.classList.contains('active')) {
    toggle.classList.remove('fa-times');
    menu.classList.remove('active');
    toggle.style.color = '#6070ff';
  } else {
    toggle.classList.add('fa-times');
    menu.classList.add('active');
    toggle.style.color = '#fff';
  }
};

window.onscroll = () => {
  toggle.classList.remove('fa-times');
  menu.classList.remove('active');
  toggle.style.color = '#6070ff';
};

// Validate the form
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementsByName('email')[0];
const errorMsg = document.getElementById('error-msg');

function isEmailLowercase() {
  const email = emailInput.value;
  return email === email.toLowerCase();
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (!isEmailLowercase()) {
    errorMsg.style.display = 'block';
    return;
  }

  contactForm.submit();
  contactForm.reset();
}

contactForm.addEventListener('submit', handleFormSubmit);