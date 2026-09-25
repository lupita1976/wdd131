const hamburger = document.getElementById("hamburger");
const primaryNav = document.getElementById("primary-nav");

hamburger.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", isOpen);
  hamburger.innerHTML = isOpen ? "&times;" : "&#9776;";
});


primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.innerHTML = "&#9776;";
  });
});


document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
`Last Modification: ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "McAllen Texas",
    location: "McAllen Texas",
    dedicated: "2023, October, 8",
    area: 27897,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-39905-main.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan Utah",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George Utah",
    dedicated: "1877, Jan, 1",
    area: 143969,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
  },
  
];

function getYear(dedicatedString) {
  return parseInt(dedicatedString.split(',')[0]);
}


function renderTemples(templesToRender) {
  const gallery = document.getElementById('temple-gallery');
  gallery.innerHTML = ''; // Limpiar galería
  
  templesToRender.forEach(temple => {
    const article = document.createElement('article');
    article.className = 'temple-card';
    
    article.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    
    gallery.appendChild(article);
  });
}


function filterOld() {
  const oldTemples = temples.filter(temple => getYear(temple.dedicated) < 1900);
  renderTemples(oldTemples);
  updateHeading('Old');
}

function filterNew() {
  const newTemples = temples.filter(temple => getYear(temple.dedicated) > 2000);
  renderTemples(newTemples);
  updateHeading('New');
}

function filterLarge() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  renderTemples(largeTemples);
  updateHeading('Large');
}

function filterSmall() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  renderTemples(smallTemples);
  updateHeading('Small');
}

function showHome() {
  renderTemples(temples);
  updateHeading('Home');
}


function updateHeading(filterName) {
  const h1 = document.querySelector('main h1');
  h1.textContent = filterName;
}


document.addEventListener('DOMContentLoaded', () => {

  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filterType = e.target.textContent.trim();
      
      switch(filterType) {
        case 'Old':
          filterOld();
          break;
        case 'New':
          filterNew();
          break;
        case 'Large':
          filterLarge();
          break;
        case 'Small':
          filterSmall();
          break;
        case 'Home':
          showHome();
          break;
      }
    });
  });
  
  
  showHome();
});
