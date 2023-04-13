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

function showPopup(project) {
  const card = document.createElement('div');
  card.classList.add('popup-card');

  const popupHeader = document.createElement('div');
  popupHeader.classList.add('popup-header');

  const closePopup = document.createElement('div');
  closePopup.classList.add('fas', 'fa-times');
  popupHeader.appendChild(closePopup);

  const title = document.createElement('h2');
  title.classList.add('popup-title');
  title.textContent = project.name;

  const listItems = document.createElement('ul');
  listItems.classList.add('popup-list-items');

  project.listItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    listItems.appendChild(li);
  });

  const popupHeaderContent = document.createElement('div');
  popupHeaderContent.appendChild(title);
  popupHeaderContent.appendChild(listItems);
  popupHeader.appendChild(popupHeaderContent);

  // Create the thumbnail image element
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('popup-body-thumbnail');
  const image = document.createElement('img');
  image.src = project.image;
  image.alt = project.alt;
  thumbnail.appendChild(image);

  const description = document.createElement('p');
  description.classList.add('popup-description');
  description.textContent = project.popupDescription;

  const languages = document.createElement('ul');
  languages.classList.add('popup-languages');
  project.technologies.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.textContent = tech;
    languages.appendChild(techItem);
  });

  const popupBtn1 = document.createElement('button');
  popupBtn1.classList.add('btn', 'popup-btn');
  popupBtn1.innerHTML = project.popupBtn1;
  const popupBtn2 = document.createElement('button');
  popupBtn2.classList.add('btn', 'popup-btn');
  popupBtn2.innerHTML = project.popupBtn2;
  popupBtn2.href = project.popupBtn2Link;

  const buttons = document.createElement('div');
  buttons.classList.add('popup-btn-wrapper');
  buttons.appendChild(popupBtn1);
  buttons.appendChild(popupBtn2);

  const popupFooter = document.createElement('div');
  popupFooter.classList.add('popup-footer', 'flex-column');
  popupFooter.appendChild(languages);
  popupFooter.appendChild(buttons);

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-body-content');
  popupContent.appendChild(description);
  popupContent.appendChild(popupFooter);

  card.appendChild(popupHeader);
  card.appendChild(thumbnail);
  card.appendChild(popupContent);

  portfolioSection.appendChild(card);
}

function createPortfolioItem(project) {
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
    portfolioContainer.style.display = 'none';
  });

  return card;
}

projects.forEach((project) => {
  const portfolioItem = createPortfolioItem(project);
  portfolioContainer.appendChild(portfolioItem);
});