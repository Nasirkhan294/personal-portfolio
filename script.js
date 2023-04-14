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
    image: 'images/work1.jpg',
    alt: 'A photo contain mobile, pens and cards',
    name: 'Tonic',
    listItems: ['CANOPY', 'Back End Dev', 2015],
    description: 'A daily selection of privately personalized; no accounts or sign-ups required.',
    popupDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus cumque odio animi, sunt cupiditate natus quis veniam voluptatibus suscipit quod neque placeat eligendi perferendis, enim perspiciatis molestias error repudiandae obcaecati consequatur est. Eius ipsam quos rerum aspernatur quasi vero dolor, hic obcaecati officiis nobis ullam et voluptatibus ea dolorem atque!',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    button: 'See Project',
    popupBtn1: 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>',
    popupBtn2: 'See Source <i class="fa-brands fa-github"></i>',
    popupBtn2Link: 'https://github.com/Nasirkhan294/my-personal-portfolio',
  },
  {
    image: 'images/work2.jpg',
    alt: 'A photo contain keyboard, mobile, pen and notebooks',
    name: 'Multi Post Stories',
    listItems: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    popupDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus cumque odio animi, sunt cupiditate natus quis veniam voluptatibus suscipit quod neque placeat eligendi perferendis, enim perspiciatis molestias error repudiandae obcaecati consequatur est. Eius ipsam quos rerum aspernatur quasi vero dolor, hic obcaecati officiis nobis ullam et voluptatibus ea dolorem atque!',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    button: 'See Project',
    popupBtn1: 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>',
    popupBtn2: 'See Source <i class="fa-brands fa-github"></i>',
    popupBtn2Link: 'https://github.com/Nasirkhan294/my-personal-portfolio',
  },
  {
    image: 'images/work3.jpg',
    alt: 'A laptop with typing hand',
    name: 'Facebook 360',
    listItems: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    popupDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus cumque odio animi, sunt cupiditate natus quis veniam voluptatibus suscipit quod neque placeat eligendi perferendis, enim perspiciatis molestias error repudiandae obcaecati consequatur est. Eius ipsam quos rerum aspernatur quasi vero dolor, hic obcaecati officiis nobis ullam et voluptatibus ea dolorem atque!',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    button: 'See Project',
    popupBtn1: 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>',
    popupBtn2: 'See Source <i class="fa-brands fa-github"></i>',
    popupBtn2Link: 'https://github.com/Nasirkhan294/my-personal-portfolio',
  },
  {
    image: 'images/work4.jpg',
    alt: 'Laptop along with accessories on the table',
    name: 'Uber Navigation',
    listItems: ['Uber', 'Lead Developer', 2018],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    popupDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus cumque odio animi, sunt cupiditate natus quis veniam voluptatibus suscipit quod neque placeat eligendi perferendis, enim perspiciatis molestias error repudiandae obcaecati consequatur est. Eius ipsam quos rerum aspernatur quasi vero dolor, hic obcaecati officiis nobis ullam et voluptatibus ea dolorem atque!',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    button: 'See Project',
    popupBtn1: 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>',
    popupBtn2: 'See Source <i class="fa-brands fa-github"></i>',
    popupBtn2Link: 'https://github.com/Nasirkhan294/my-personal-portfolio',
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
