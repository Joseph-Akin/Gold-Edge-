// JavaScript for Gold Edge Paints website
// This script handles interactivity across multiple HTML pages:
// - index.html: Navigation toggle, product filtering, color swatch preview
// - products.html: Product filtering functionality
// - color-view.html: Color swatch interactions
// - about.html: Accordion functionality for team member details
// - nearby-store.html: State selection and store display functionality
// - contact.html: Navigation toggle

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

// Navigation toggle for mobile - used in all pages with header
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const filterButtons = document.querySelectorAll('.filter-button');
const productCards = document.querySelectorAll('.product-card');

// Product filtering - used in products.html
if (filterButtons.length && productCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const category = button.dataset.category;
      productCards.forEach((card) => {
        if (category === 'all') {
          card.style.display = '';
          return;
        }
        const cardCategories = card.dataset.category.split(' ');
        card.style.display = cardCategories.includes(category) ? '' : 'none';
      });
    });
  });
}

const swatches = document.querySelectorAll('.color-swatch');
const previewSwatch = document.getElementById('preview-swatch');
const previewName = document.getElementById('preview-name');
const previewCode = document.getElementById('preview-code');

// Color swatch preview - used in color-view.html
if (swatches.length && previewSwatch && previewName && previewCode) {
  const updatePreview = (button) => {
    const color = button.dataset.code;
    const name = button.dataset.name;
    previewSwatch.style.background = color;
    previewName.textContent = name;
    previewCode.textContent = color;
    const isDark = ['#264653', '#2a9d8f', '#121212', '#8d99ae'].includes(color.toLowerCase());
    previewName.style.color = isDark ? '#ffffff' : '#111827';
    previewCode.style.color = isDark ? '#e5e7eb' : '#4b5563';
  };

  swatches.forEach((button) => {
    button.addEventListener('click', () => updatePreview(button));
  });
}

// Accordion functionality - used in about.html for team member details
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Store finder functionality - used in nearby-store.html
const storesData = {
  lagos: [
    {
      name: "Gold Edge Lagos",
      address: "Ipaja, Lagos oppsite Alagolo Police station",
      phone: "+234 708 471 1665",
      manager: {
        name: "Akinbolade Joseph",
        title: "Store Manager",
        email: "akinboladejoseph@gmail.com",
        phone: "+234 708 471 1665",
        photo: "https://valuepaintsng.com/wp-content/uploads/2023/07/card.jpeg"
      }
    },
    {
      name: "Gold Edge Ikeja",
      address: "Ikeja, Lagos",
      phone: "+234 708 471 1665",
      manager: {
        name: "Joseph Akinbolade",
        title: "Store Manager",
        email: "josephakin02@gmal.com",
        phone: "+234 708 471 1665",
        photo: "https://valuepaintsng.com/wp-content/uploads/2023/07/card.jpeg"
      }
    }
  ],
  oyo: [
    {
      name: "Gold Edge Mokola",
      address: "Adamasingba, Mokola, opp Eliganza, Ibadan",
      phone: "+234 708 471 1665",
      manager: {
        name: "Joseph Akinbolade",
        title: "Store Manager",
        email: "josephakinbolade@gmail.com",
        phone: "+234 708 471 1665",
        photo: "https://valuepaintsng.com/wp-content/uploads/2023/07/card.jpeg"
      }
    },
    {
      name: "Gold Edge Mokola",
      address: "Adamasingba, Mokola, opp Eliganza, Ibadan",
      phone: "+234 708 471 1665",
      manager: {
        name: "Joseph Akinbolade",
        title: "Store Manager",
        email: "josephakinbolade@gmail.com",
        phone: "+234 708 471 1665",
        photo: "https://valuepaintsng.com/wp-content/uploads/2023/07/card.jpeg"
      }
    }
  ]
};

const stateSelect = document.getElementById('state-select');
const storesContainer = document.getElementById('stores-container');

if (stateSelect && storesContainer) {
  stateSelect.addEventListener('change', (e) => {
    const selectedState = e.target.value;
    displayStores(selectedState);
  });
}

function displayStores(state) {
  storesContainer.innerHTML = '';

  if (!state || !storesData[state]) {
    return;
  }

  storesData[state].forEach(store => {
    const storeCard = document.createElement('div');
    storeCard.className = 'store-card';

    storeCard.innerHTML = `
      <div class="store-header">
        <h3>${store.name}</h3>
      </div>
      <div class="store-address">
        <p><strong>Address:</strong> ${store.address}</p>
        <p><strong>Phone:</strong> <a href="tel:${store.phone}">${store.phone}</a></p>
      </div>
      <div class="store-manager">
        <img src="${store.manager.photo}" alt="${store.manager.name}" class="manager-photo">
        <div class="manager-info">
          <h4>${store.manager.name}</h4>
          <p><strong>${store.manager.title}</strong></p>
          <p><a href="mailto:${store.manager.email}">${store.manager.email}</a></p>
          <p><a href="tel:${store.manager.phone}">${store.manager.phone}</a></p>
        </div>
      </div>
      <div class="store-actions">
        <a href="https://maps.google.com/?q=${encodeURIComponent(store.address)}" class="button button-primary" target="_blank">Get Directions</a>
      </div>
    `;

    storesContainer.appendChild(storeCard);
  });
}

window.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-toggle') && !event.target.closest('.site-nav')) {
    siteNav?.classList.remove('open');
  }
});
