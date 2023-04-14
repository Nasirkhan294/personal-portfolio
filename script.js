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

// Validate the form varibales
const contactForm = document.getElementById('contact-form');
const errorMsg = document.getElementById('error-msg');
// Get all the input fields
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.getElementsByName('email')[0];
const messageInput = document.querySelector('textarea[name="message"]');

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

// Create a JavaScript object to store the form data
const formData = {
  name: '',
  email: '',
  message: '',
};

// Check saved data in local storage
if (localStorage.getItem('formData')) {
  // Parse the saved data and update the form data object
  const savedFormData = JSON.parse(localStorage.getItem('formData'));
  formData.name = savedFormData.name;
  formData.email = savedFormData.email;
  formData.message = savedFormData.message;

  // Pre-fill the input fields with the saved data
  nameInput.value = formData.name;
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

// Add event listeners to the input fields
nameInput.addEventListener('input', (event) => {
  // Update the form data object with the new value
  formData.name = event.target.value;

  // Save the updated form data to local storage
  localStorage.setItem('formData', JSON.stringify(formData));
});

emailInput.addEventListener('input', (event) => {
  // Update the form data object with the new value
  formData.email = event.target.value;

  // Save the updated form data to local storage
  localStorage.setItem('formData', JSON.stringify(formData));
});

messageInput.addEventListener('input', (event) => {
  // Update the form data object with the new value
  formData.message = event.target.value;

  // Save the updated form data to local storage
  localStorage.setItem('formData', JSON.stringify(formData));
});
