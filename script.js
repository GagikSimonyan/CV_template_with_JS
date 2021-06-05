function createNewElem(tagName , className, parentName, text = "", addBefore = false){
  let elem = document.createElement(tagName);
  elem.className = className;
  elem.textContent = text;
  if (addBefore) {
    parentName.prepend(elem);
  } else {
    parentName.append(elem);
  }
  return elem;
}

let main = createNewElem('main', 'main', document.body, '', true);
main.classList.add('container');


// LEFT COLUMN PART
let leftColumn = createNewElem('div', 'left__column', main)
let columnPhoto = createNewElem('div', 'column__photo', leftColumn);
let columnTitle = createNewElem('h1', 'column__title', columnPhoto, 'Jane Doe');
let columnMain = createNewElem('div', 'column__main', leftColumn);


// MENU PART 
let menu = createNewElem('nav', 'menu', columnMain);
let menuList = createNewElem('ul', 'menu__list', menu);
const menuIClasses = ['fas fa-briefcase', 'fa fa-home', 'fa fa-envelope', 'fas fa-phone-alt'];
const menuLiTexts = ['Designer', 'London, UK', 'ex@mail.com', '1224435534'];
for (let i = 0; i < menuLiTexts.length; i++) {
  let li = document.createElement('li');
  li.textContent = menuLiTexts[i];
  let liChild = document.createElement('i');
  liChild.className = menuIClasses[i];
  li.prepend(liChild);
  menuList.append(li);
}

let line = createNewElem('div', 'line', columnMain);


// SKILLS PART 
let columnSkills = createNewElem('div', 'column__skills', leftColumn);
let skillsTitle = createNewElem('h3', 'skills__title', columnSkills, 'Skills');
let skillsI = createNewElem('i', 'fa fa-asterisk', skillsTitle, '', true);
const skillsItemText = ['Adobe Photoshop', 'Photography', 'Illustrator', 'Media'];
const skillsProgressValues = [90, 80, 75, 50];
for (let i = 0; i < skillsItemText.length; i++) {
  let skillsItem = createNewElem('div', 'skills__item', columnSkills);
  let skillsText = createNewElem('p', 'text', skillsItem, skillsItemText[i]);
  let skillsProgress = createNewElem('progress', 'progress__' + (i + 1), skillsItem, skillsProgressValues[i] + '%');
  skillsProgress.setAttribute('max', '100');
  skillsProgress.setAttribute('value', skillsProgressValues[i]);
}


// LANGUAGES PART 
let columnLanguages = createNewElem('div', 'column__languages', leftColumn);
let languagesTitle = createNewElem('h3', 'languages__title', columnLanguages, 'Languages');
let languagesI = createNewElem('i', 'fas fa-globe-asia', languagesTitle, '', true);
const languagesItemText = ['English', 'Spanish', 'German'];
const languagesProgressValues = [100, 50, 25];
for (let i = 0; i < languagesItemText.length; i++) {
  let languagesItem = createNewElem('div', 'skills__item', columnLanguages);
  let languagesText = createNewElem('p', 'text', languagesItem, languagesItemText[i]);
  let languagesProgress = createNewElem('progress', 'progress__big', languagesItem);
  languagesProgress.setAttribute('max', 100);
  languagesProgress.setAttribute('value', languagesProgressValues[i]);
}


// SECTION WORK__EXPERIENCE
let workExperience = createNewElem('section', 'work__experience', main);
let experienceTitle = createNewElem('h2', 'experience__title', workExperience, 'Work Experience');
let experienceI = createNewElem('i', 'fa fa-suitcase', experienceTitle, '', true);

const subtitle1 = 'Front End Developer / w3schools.com';
const subtitle2 = 'Web Developer / something.com';
const subtitle3 = 'Graphic Designer / designsomething.com';
const experienceSubtitles = [subtitle1, subtitle2, subtitle3];

const calendarTexts = ['Jan 2015 - ', 'Mar 2012 - Dec 2014', 'Jun 2010 - Mar 2012'];

const text1 = 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.';
const text2 = 'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.';
const text3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
const experienceTexts = [text1, text2, text3];

for (let i = 0; i < experienceSubtitles.length; i++) {
  let experienceItem = createNewElem('div', 'experience__item', workExperience);
  let experienceSubtitle = createNewElem('h3', 'experience__subtitle', experienceItem, experienceSubtitles[i]);
  let experienceCalendar = createNewElem('p', 'experience__calendar', experienceItem, calendarTexts[i]);
  experienceCalendar.classList.add('calendar');
  let experienceICal = createNewElem('i', 'far fa-calendar-alt', experienceCalendar, '', true);
  let experienceText = createNewElem('p', 'experience__text', experienceItem, experienceTexts[i]);
  if (i === 0) {
    let experienceBtn = createNewElem('button', 'experience__btn', experienceCalendar, 'Current');
  }
  if (i === 0 || i === 1) {
    let experienceLine1 = createNewElem('div', 'line', workExperience);
  }
}


// SECTION EDUCATION 
let education = createNewElem('section', 'education', main);
let educationTitle = createNewElem('h2', 'education__title', education, 'Education');
let educationI = createNewElem('i', 'fa fa-certificate', educationTitle, '', true);

const educationSubtitles = ['W3Schools.com', 'London Business School', 'School of Coding'];
const educationCalendarTexts = ['Forever', '2013 - 2015', '2010 - 2013'];
const educationTexts = ['Web Development! All I need to know in one place', 'Master Degree', 'Bachelor Degree'];

for (let i = 0; i < educationSubtitles.length; i++) {
  let educationItem = createNewElem('div', 'education__item', education);
  let educationSubtitle = createNewElem('h3', 'education__subtitle', educationItem, educationSubtitles[i]);
  let educationCalendar = createNewElem('p', 'education__calendar', educationItem, educationCalendarTexts[i]);
  educationCalendar.classList.add('calendar');
  let educationICal = createNewElem('i', 'far fa-calendar-alt', educationCalendar, '', true);
  let educationText = createNewElem('p', 'education__text', educationItem, educationTexts[i]);
}


// FOOTER 
let footer = createNewElem('footer', 'footer', document.body);
main.after(footer);
let footerUpText = createNewElem('p', 'footer__upText', footer, 'Find me on social media.');
let social = createNewElem('div', 'social', footer);
const footerIClassNames = ['fa-facebook-square', 'fa-instagram', 'fa-snapchat', 'fa-pinterest-p', 'fa-twitter', 'fa-linkedin-in'];

for (let i = 0; i < footerIClassNames.length; i++) {
  let socialLink = createNewElem('a', 'social__link', social);
  let socialI = createNewElem('i', 'fab', socialLink);
  socialI.classList.add(footerIClassNames[i]);
}

let footerBottomText = createNewElem('p', 'footer__bottomText', footer, 'Powered by ');
let footerlLink = createNewElem('a', 'footer__link', footerBottomText, 'w3.css');