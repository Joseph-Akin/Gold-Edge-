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
      name: "Gold Edge Lagos Central",
      address: "123 Victoria Island, Lagos",
      phone: "+234 801 234 5678",
      manager: {
        name: "Adebayo Johnson",
        title: "Store Manager",
        email: "adebayo@goldedgelagos.com",
        phone: "+234 801 234 5679",
        photo: "https://via.placeholder.com/80x80?text=AJ"
      }
    },
    {
      name: "Gold Edge Ikeja Branch",
      address: "456 Allen Avenue, Ikeja, Lagos",
      phone: "+234 802 345 6789",
      manager: {
        name: "Funmi Adeolu",
        title: "Store Manager",
        email: "funmi@goldedgeikeja.com",
        phone: "+234 802 345 6790",
        photo: "https://via.placeholder.com/80x80?text=FA"
      }
    }
  ],
  abuja: [
    {
      name: "Gold Edge Abuja Central",
      address: "789 Wuse II, Abuja",
      phone: "+234 803 456 7890",
      manager: {
        name: "Chukwuemeka Nwosu",
        title: "Store Manager",
        email: "chukwu@goldedgeabuja.com",
        phone: "+234 803 456 7891",
        photo: "https://via.placeholder.com/80x80?text=CN"
      }
    }
  ],
  kano: [
    {
      name: "Gold Edge Kano Branch",
      address: "321 Kano City Center, Kano",
      phone: "+234 804 567 8901",
      manager: {
        name: "Amina Bello",
        title: "Store Manager",
        email: "amina@goldedgekano.com",
        phone: "+234 804 567 8902",
        photo: "https://via.placeholder.com/80x80?text=AB"
      }
    }
  ],
  rivers: [
    {
      name: "Gold Edge Port Harcourt",
      address: "654 GRA Phase 2, Port Harcourt",
      phone: "+234 805 678 9012",
      manager: {
        name: "Emmanuel Peters",
        title: "Store Manager",
        email: "emmanuel@goldedgeph.com",
        phone: "+234 805 678 9013",
        photo: "https://via.placeholder.com/80x80?text=EP"
      }
    }
  ],
  kaduna: [
    {
      name: "Gold Edge Kaduna Central",
      address: "987 Kaduna Central Market, Kaduna",
      phone: "+234 806 789 0123",
      manager: {
        name: "Ibrahim Musa",
        title: "Store Manager",
        email: "ibrahim@goldedgekaduna.com",
        phone: "+234 806 789 0124",
        photo: "https://via.placeholder.com/80x80?text=IM"
      }
    }
  ],
  oyo: [
    {
      name: "Gold Edge Ibadan Branch",
      address: "147 Dugbe Market, Ibadan",
      phone: "+234 807 890 1234",
      manager: {
        name: "Yetunde Olayinka",
        title: "Store Manager",
        email: "yetunde@goldedgeibadan.com",
        phone: "+234 807 890 1235",
        photo: "https://via.placeholder.com/80x80?text=YO"
      }
    }
  ],
  delta: [
    {
      name: "Gold Edge Warri Branch",
      address: "258 Effurun Roundabout, Warri",
      phone: "+234 808 901 2345",
      manager: {
        name: "Osaze Okoro",
        title: "Store Manager",
        email: "osaze@goldedgewarri.com",
        phone: "+234 808 901 2346",
        photo: "https://via.placeholder.com/80x80?text=OO"
      }
    }
  ],
  edo: [
    {
      name: "Gold Edge Benin City",
      address: "369 Ring Road, Benin City",
      phone: "+234 809 012 3456",
      manager: {
        name: "Gladys Eghosa",
        title: "Store Manager",
        email: "gladys@goldedgebenin.com",
        phone: "+234 809 012 3457",
        photo: "https://via.placeholder.com/80x80?text=GE"
      }
    }
  ],
  ondo: [
    {
      name: "Gold Edge Akure Branch",
      address: "741 Oyemekun Road, Akure",
      phone: "+234 810 123 4567",
      manager: {
        name: "Tunde Adebayo",
        title: "Store Manager",
        email: "tunde@goldedgeakure.com",
        phone: "+234 810 123 4568",
        photo: "https://via.placeholder.com/80x80?text=TA"
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
