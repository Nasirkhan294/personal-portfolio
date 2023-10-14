/* --------------------- Menu toggle Details ---------------------- */
const toggle = document.querySelector('#menu-btn');
const toggleMenu = document.querySelector('ul');

toggle.onclick = () => {
  toggle.classList.toggle('fa-times');
  toggle.classList.toggle('active');
  toggleMenu.classList.toggle('active');
};

window.onscroll = () => {
  toggle.classList.remove('fa-times');
  toggle.classList.remove('active');
  toggleMenu.classList.remove('active');
};

/* --------------------- Portfolio Item Details ---------------------- */
const projects = [
  {
    image: 'images/cc-sumit1.png',
    alt: 'A photo contain mobile, pens and cards',
    name: 'Conference Webpage',
    listItems: ['Frontend Dev', 2023],
    description: 'Converge and Create embodies the concept of uniting diverse ideas, perspectives, and individuals to spark innovation and bring new creations to life.',
    popupDescription: 'Converge and Create embodies the concept of uniting diverse ideas, perspectives, and individuals to spark innovation and bring new creations to life. This project celebrates the power of collaboration and highlights the importance of inclusivity in the creative process. Through the convergence of varied viewpoints and talents, we aim to inspire groundbreaking ideas and foster a culture of creativity and teamwork.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    button: 'See Project',
    popupBtn1: 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>',
    popupBtn2: 'See Source <i class="fa-brands fa-github"></i>',
    popupBtn1Link: 'https://nasirkhan294.github.io/converge-and-create/',
    popupBtn2Link: 'https://github.com/Nasirkhan294/converge-and-create',
  },
  {
    image: 'images/stickynotes.png',
    alt: 'A photo sticky notes',
    name: 'Super Sticky Notes',
    listItems: ['Frontend Dev', 2023],
    description: 'Super Sticky Notes: Unite creativity and organization effortlessly! Create, edit, and manage your Sticky Notes with ease. Your data is secure in local storage. Begin your note-taking journey and let your ideas flourish',
    popupDescription: "This is a simple web-based Note list application built using React.js. The application allows users to create, read, update, and delete notes from their Sticky Notes. Users can search for specific notes. It uses local storage to store the user's notes, so they don't have to worry about losing their data. This project is a great starting point for those who want to learn web development or want to build their own note management application",
    technologies: ['React', 'CSS', 'Netlify'],
    button: 'See Project',
    popupBtn1: 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>',
    popupBtn2: 'See Source <i class="fa-brands fa-github"></i>',
    popupBtn1Link: 'https://sticky-notes294.netlify.app/',
    popupBtn2Link: 'https://github.com/Nasirkhan294/sticky-notes',
  },
  {
    image: 'images/penny-planner.png',
    alt: 'Green groceries',
    name: 'Penny Planner',
    listItems: ['Full Stack Dev', 2023],
    description: 'Penny Planner is a powerful personal finance and budgeting application designed to help individuals take control of their financial lives.',
    popupDescription: 'Penny Planner is a powerful personal finance and budgeting application designed to help individuals take control of their financial lives. This open-source project aims to provide users with a user-friendly and feature-rich tool to manage their income, expenses, savings, and investments seamlessly.',
    technologies: ['Ruby', 'CSS', 'Rails'],
    button: 'See Project',
    popupBtn1: 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>',
    popupBtn2: 'See Source <i class="fa-brands fa-github"></i>',
    popupBtn1Link: 'https://penny-planner.onrender.com/',
    popupBtn2Link: 'https://github.com/Nasirkhan294/penny_planner',
  },
  {
    image: 'images/room-rental.png',
    alt: 'A room picture with details',
    name: 'Room Rental',
    listItems: ['Lead Developer', 2023],
    description: 'Introducing our innovative room rental project, a seamless collaboration between frontend and backend technologies.',
    popupDescription: 'Introducing our innovative room rental project, a seamless collaboration between frontend and backend technologies. On the frontend, we have harnessed the power of React JavaScript to craft an intuitive user interface, ensuring a delightful user experience with smooth interactions and beautifully displayed data. Complementing this is our robust Rails API-only backend, designed to handle data storage, retrieval, and API endpoints for storing and retrieving greetings.',
    technologies: ['React', 'Tailwind', 'Rails'],
    button: 'See Project',
    popupBtn1: 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>',
    popupBtn2: 'See Source <i class="fa-brands fa-github"></i>',
    popupBtn1Link: 'https://room-rental-blond.vercel.app/',
    popupBtn2Link: 'https://github.com/Nasirkhan294/room-rental-front-end',
  },
];

const portfolioSection = document.getElementById('portfolio');
const portfolioContainer = portfolioSection.querySelector('.container');
const popupCard = document.querySelector('.popup-card');
const closePopup = document.querySelector('.fa-times');

const showPopup = (project) => {
  const title = popupCard.querySelector('.popup-title');
  const description = popupCard.querySelector('.popup-description');
  const image = popupCard.querySelector('img');
  const button1 = popupCard.querySelector('.popup-btn:nth-of-type(1)');
  const button2 = popupCard.querySelector('.popup-btn:nth-of-type(2)');
  const listItems = popupCard.querySelector('.popup-list-items');
  const technologies = popupCard.querySelector('.popup-languages');

  title.innerHTML = project.name;
  description.textContent = project.popupDescription;
  image.src = project.image;
  image.alt = project.alt;

  button1.innerHTML = project.popupBtn1;
  button2.innerHTML = project.popupBtn2;

  button1.href = project.popupBtn1Link;
  button2.href = project.popupBtn2Link;

  listItems.innerHTML = '';
  project.listItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    listItems.appendChild(li);
  });

  technologies.innerHTML = '';
  project.technologies.forEach((tech) => {
    const li = document.createElement('li');
    li.textContent = tech;
    technologies.appendChild(li);
  });

  popupCard.classList.add('open');
};

closePopup.onclick = () => {
  popupCard.classList.remove('open');
};

function loadProject(project) {
  // Create a new portfolio card element
  const card = document.createElement('div');
  card.classList.add('portfolio-card', 'grid');

  // Create the thumbnail image element
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('portfolio-thumbnail');
  const image = document.createElement('img');
  image.src = project.image;
  image.alt = project.alt;
  thumbnail.appendChild(image);
  card.appendChild(thumbnail);

  const title = document.createElement('h2');
  title.textContent = project.name;

  // Create the content element
  const listItems = document.createElement('ul');
  listItems.classList.add('list-items', 'flex-row', 'align-center');
  project.listItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    listItems.appendChild(li);
  });

  const description = document.createElement('p');
  description.textContent = project.description;

  const technologies = document.createElement('ul');
  technologies.classList.add('languages', 'flex-row', 'align-center');
  project.technologies.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.textContent = tech;
    technologies.appendChild(techItem);
  });

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('btn');
  seeProjectButton.textContent = project.button;

  const content = document.createElement('div');
  content.classList.add('portfolio-content', 'flex-column');
  content.appendChild(title);
  content.appendChild(listItems);
  content.appendChild(description);
  content.appendChild(technologies);
  content.appendChild(seeProjectButton);

  // Append the content to the portfolio card
  card.appendChild(content);

  // show the popup window
  seeProjectButton.addEventListener('click', () => {
    showPopup(project);
  });

  return card;
}

const loadProjects = () => {
  const Container = portfolioContainer;
  for (let i = 0; i < projects.length; i += 1) {
    const project = loadProject(projects[i]);
    Container.appendChild(project);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
});

/* --------------------- Form Validation Details ---------------------- */
const contactForm = document.getElementById('contact-form');
const errorMsg = document.getElementById('error-msg');
// Get all the input fields
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

// Check if the email input is lowercase
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

/* --------------------- Browser Local Storage Details ---------------------- */

// Create a JavaScript object to store the form data
const formData = {
  name: '',
  email: '',
  message: '',
};

// Check if there is any saved data in local storage
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
nameInput.oninput = (event) => {
  // Update the form data object with the new value
  formData.name = event.target.value;

  // Save the updated form data to local storage
  localStorage.setItem('formData', JSON.stringify(formData));
};

emailInput.oninput = (event) => {
  // Update the form data object with the new value
  formData.email = event.target.value;

  // Save the updated form data to local storage
  localStorage.setItem('formData', JSON.stringify(formData));
};

messageInput.oninput = (event) => {
  // Update the form data object with the new value
  formData.message = event.target.value;

  // Save the updated form data to local storage
  localStorage.setItem('formData', JSON.stringify(formData));
};
