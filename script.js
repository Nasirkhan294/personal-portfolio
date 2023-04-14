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

  popupCard.style.display = 'grid';
};

closePopup.onclick = () => {
  popupCard.style.display = 'none';
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

