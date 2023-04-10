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
  toggle.classList.add('fa-bars');
  menu.classList.remove('active');
};