// Application Data
const appData = {
  products: [
    {
      id: "gaming-laptop",
      name: "Hades Gaming Laptop Pro",
      price: "₹89,999",
      originalPrice: "₹1,19,999",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/ddadb2b5-d646-4b06-a874-5a34ad75e04a.png",
      description: "RTX 4080, Intel i9, 32GB RAM, 1TB SSD",
      category: "Electronics",
      specifications: {
        processor: "Intel Core i9-13900H",
        graphics: "NVIDIA RTX 4080",
        ram: "32GB DDR5",
        storage: "1TB NVMe SSD",
        display: "15.6\" 144Hz QHD",
        battery: "99.9Wh"
      }
    },
    {
      id: "fire-sneakers",
      name: "Hades Fire Sneakers",
      price: "₹12,999",
      originalPrice: "₹18,999",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/36c9e5ab-2a1b-431e-808e-eeaf77057fb3.png",
      description: "Limited Edition with LED Accents",
      category: "Fashion",
      specifications: {
        material: "Premium Leather & Mesh",
        sole: "Air Cushion Technology",
        features: "LED Accents, Fire Pattern",
        sizes: "6-12 Available",
        color: "Midnight Black with Red"
      }
    },
    {
      id: "smart-watch",
      name: "Smart Watch Elite",
      price: "₹24,999",
      originalPrice: "₹34,999",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/a493172c-cb21-4d25-946a-6927f730f47f.png",
      description: "AMOLED Display, Health Tracking",
      category: "Accessories",
      specifications: {
        display: "1.4\" AMOLED",
        battery: "7-day battery life",
        health: "Heart Rate, SpO2, Sleep",
        connectivity: "Bluetooth 5.0, WiFi",
        waterproof: "IP68 Rating"
      }
    },
    {
      id: "gaming-headset",
      name: "Gaming Headset Pro",
      price: "₹8,999",
      originalPrice: "₹12,999",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/877bb8c5-d5b7-4188-b205-3c915f659701.png",
      description: "7.1 Surround Sound, Noise Cancellation",
      category: "Gaming",
      specifications: {
        audio: "7.1 Virtual Surround Sound",
        microphone: "Noise-cancelling boom mic",
        connectivity: "USB-C, 3.5mm jack",
        comfort: "Memory foam ear cups",
        compatibility: "PC, PS5, Xbox, Mobile"
      }
    },
    {
      id: "black-hoodie",
      name: "Midnight Black Hoodie",
      price: "₹3,999",
      originalPrice: "₹5,999",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/0af09d25-1df0-437f-8f03-ff1fe96e596e.png",
      description: "Premium Cotton Blend, Embroidered Logo",
      category: "Fashion",
      specifications: {
        material: "80% Cotton, 20% Polyester",
        fit: "Regular Fit",
        features: "Embroidered Logo, Kangaroo Pocket",
        sizes: "S, M, L, XL, XXL",
        care: "Machine Washable"
      }
    },
    {
      id: "rgb-keyboard",
      name: "RGB Keyboard Elite",
      price: "₹6,999",
      originalPrice: "₹9,999",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/d1dbae3a-48ee-478d-bb1f-3c886083c99e.png",
      description: "Precision Control, Haptic Feedback",
      category: "Gaming",
      specifications: {
        switches: "Mechanical Blue Switches",
        backlighting: "RGB Per-Key Lighting",
        connectivity: "USB-C Wired",
        features: "Anti-ghosting, Macro Support",
        build: "Aluminum Frame"
      }
    }
  ],
  categories: [
    {
      name: "Electronics",
      description: "Latest gadgets and tech",
      productCount: "3+ Products",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/ddadb2b5-d646-4b06-a874-5a34ad75e04a.png"
    },
    {
      name: "Gaming",
      description: "Pro gaming equipment",
      productCount: "2+ Products",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/877bb8c5-d5b7-4188-b205-3c915f659701.png"
    },
    {
      name: "Fashion",
      description: "Trendy apparel & style",
      productCount: "2+ Products",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/36c9e5ab-2a1b-431e-808e-eeaf77057fb3.png"
    },
    {
      name: "Accessories",
      description: "Premium accessories",
      productCount: "1+ Products",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/a493172c-cb21-4d25-946a-6927f730f47f.png"
    }
  ]
};

// Application State
let cart = [];
let currentPage = 'home';
let filteredProducts = [...appData.products];

// Utility Functions
function calculateDiscount(original, current) {
  const originalNum = parseInt(original.replace(/[₹,]/g, ''));
  const currentNum = parseInt(current.replace(/[₹,]/g, ''));
  return Math.round(((originalNum - currentNum) / originalNum) * 100);
}

function formatPrice(price) {
  return price;
}

function getProductById(id) {
  return appData.products.find(product => product.id === id);
}

// Navigation Functions
function showPage(pageId) {
  // Prevent default loading behavior
  event?.preventDefault();
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
    page.classList.remove('active');
  });
  
  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.remove('hidden');
    targetPage.classList.add('active');
    currentPage = pageId;
    
    // Update navigation
    updateNavigation(pageId);
    
    // Load page-specific content
    loadPageContent(pageId);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }
}

function updateNavigation(activePageId) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`[data-page="${activePageId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function loadPageContent(pageId) {
  switch (pageId) {
    case 'home':
      loadFeaturedProducts();
      loadCategoriesPreview();
      break;
    case 'categories':
      loadCategoriesGrid();
      break;
    case 'products':
      loadProductsGrid();
      break;
    case 'about':
      // About page content is static
      break;
    case 'contact':
      // Contact page content is static
      break;
    default:
      if (pageId.startsWith('product-')) {
        loadProductPage(pageId);
      }
      break;
  }
}

// Product Display Functions
function createProductCard(product, showAddToCart = true) {
  const discount = calculateDiscount(product.originalPrice, product.price);
  
  return `
    <div class="product-card hover-glow" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3 class="product-title">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-price">
        <span class="current-price">${product.price}</span>
        <span class="original-price">${product.originalPrice}</span>
        <span class="discount-badge">${discount}% OFF</span>
      </div>
      ${showAddToCart ? `
        <div class="flex space-x-2">
          <button class="btn-primary flex-1 add-to-cart-btn" data-product-id="${product.id}">
            Add to Cart
          </button>
          <button class="btn-secondary view-product-btn" data-product-id="${product.id}">
            View Details
          </button>
        </div>
      ` : `
        <button class="btn-primary w-full view-product-btn" data-product-id="${product.id}">
          View Details
        </button>
      `}
    </div>
  `;
}

function createCategoryCard(category) {
  return `
    <div class="category-card" data-category="${category.name}">
      <img src="${category.image}" alt="${category.name}" class="category-image">
      <h3 class="category-title">${category.name}</h3>
      <p class="category-description">${category.description}</p>
      <p class="category-count">${category.productCount}</p>
    </div>
  `;
}

function loadFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (container) {
    const featuredProducts = appData.products.slice(0, 3);
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    attachProductEventListeners();
  }
}

function loadCategoriesPreview() {
  const container = document.getElementById('categoriesPreview');
  if (container) {
    container.innerHTML = appData.categories.map(category => createCategoryCard(category)).join('');
    attachCategoryEventListeners();
  }
}

function loadCategoriesGrid() {
  const container = document.getElementById('categoriesGrid');
  if (container) {
    container.innerHTML = appData.categories.map(category => createCategoryCard(category)).join('');
    attachCategoryEventListeners();
  }
}

function loadProductsGrid() {
  const container = document.getElementById('productsGrid');
  if (container) {
    container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    attachProductEventListeners();
  }
}

function loadProductPage(pageId) {
  const productId = pageId.replace('product-', '');
  const product = getProductById(productId);
  
  if (!product) return;
  
  const container = document.getElementById(pageId);
  const discount = calculateDiscount(product.originalPrice, product.price);
  
  const relatedProducts = appData.products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);
  
  container.innerHTML = `
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="product-hero">
          <div>
            <img src="${product.image}" alt="${product.name}" class="product-hero-image">
          </div>
          <div>
            <h1 class="text-4xl font-bold mb-4">${product.name}</h1>
            <p class="text-gray-300 text-lg mb-6">${product.description}</p>
            <div class="product-price mb-6">
              <span class="current-price text-3xl">${product.price}</span>
              <span class="original-price text-xl ml-4">${product.originalPrice}</span>
              <span class="discount-badge ml-4">${discount}% OFF</span>
            </div>
            <div class="flex space-x-4 mb-8">
              <button class="btn-primary add-to-cart-btn" data-product-id="${product.id}">
                Add to Cart
              </button>
              <button class="btn-secondary back-to-products-btn">
                Back to Products
              </button>
            </div>
            <div class="bg-glass-bg p-4 rounded-lg">
              <p class="text-sm text-gray-400 mb-2">Category: <span class="text-accent-orange">${product.category}</span></p>
              <p class="text-sm text-gray-400">Free shipping on orders above ₹50,000</p>
            </div>
          </div>
        </div>
        
        <div class="product-specs">
          <h2 class="text-2xl font-bold mb-6">Specifications</h2>
          <div class="space-y-4">
            ${Object.entries(product.specifications).map(([key, value]) => `
              <div class="spec-item">
                <span class="spec-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                <span class="spec-value">${value}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        ${relatedProducts.length > 0 ? `
          <div class="mt-16">
            <h2 class="text-3xl font-bold text-center mb-12">
              Related <span class="text-accent-gold">Products</span>
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${relatedProducts.map(product => createProductCard(product)).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;
  
  attachProductEventListeners();
  
  // Attach back to products button event
  const backBtn = container.querySelector('.back-to-products-btn');
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showPage('products');
    });
  }
}

// Cart Functions
function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  updateCartUI();
  showSuccessMessage('Product added to cart!');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateQuantity(productId, newQuantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      updateCartUI();
    }
  }
}

function calculateCartTotal() {
  return cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/[₹,]/g, ''));
    return total + (price * item.quantity);
  }, 0);
}

function updateCartUI() {
  // Update cart count
  const cartCount = document.querySelector('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  // Update cart items
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="text-gray-400 text-center py-8">Your cart is empty</p>';
    cartTotal.textContent = '₹0';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <p class="cart-item-price">${item.price}</p>
        </div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
          <span class="px-3">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
        </div>
        <button class="text-red-400 hover:text-red-300 ml-4" onclick="removeFromCart('${item.id}')">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    `).join('');
    
    cartTotal.textContent = `₹${calculateCartTotal().toLocaleString()}`;
  }
}

// Search Functions
function performSearch(query) {
  if (!query.trim()) {
    return appData.products;
  }
  
  return appData.products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );
}

function displaySearchResults(results) {
  const container = document.getElementById('searchResults');
  
  if (results.length === 0) {
    container.innerHTML = '<p class="text-gray-400 text-center py-4">No products found</p>';
    return;
  }
  
  container.innerHTML = results.map(product => `
    <div class="search-result-item" onclick="viewProduct('${product.id}')">
      <img src="${product.image}" alt="${product.name}" class="search-result-image">
      <div class="search-result-details">
        <h4 class="search-result-title">${product.name}</h4>
        <p class="search-result-price">${product.price}</p>
      </div>
    </div>
  `).join('');
}

// Filter and Sort Functions
function filterProducts() {
  const categoryFilter = document.getElementById('categoryFilter')?.value || '';
  const sortBy = document.getElementById('sortBy')?.value || 'name';
  
  // Filter by category
  let filtered = categoryFilter ? 
    appData.products.filter(product => product.category === categoryFilter) : 
    [...appData.products];
  
  // Sort products
  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[₹,]/g, '')) - parseInt(b.price.replace(/[₹,]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[₹,]/g, '')) - parseInt(a.price.replace(/[₹,]/g, ''));
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });
  
  filteredProducts = filtered;
  loadProductsGrid();
}

// Event Handlers
function attachProductEventListeners() {
  // Add to cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const productId = btn.getAttribute('data-product-id');
      addToCart(productId);
    });
  });
  
  // View product buttons
  document.querySelectorAll('.view-product-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const productId = btn.getAttribute('data-product-id');
      viewProduct(productId);
    });
  });
  
  // Product cards (click to view) - but not on buttons
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicking on a button
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        return;
      }
      const productId = card.getAttribute('data-product-id');
      viewProduct(productId);
    });
  });
}

function attachCategoryEventListeners() {
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const category = card.getAttribute('data-category');
      showProductsByCategory(category);
    });
  });
}

function viewProduct(productId) {
  const pageId = `product-${productId}`;
  showPage(pageId);
}

function showProductsByCategory(category) {
  showPage('products');
  setTimeout(() => {
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
      categoryFilter.value = category;
      filterProducts();
    }
  }, 100);
}

// Modal Functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Utility Functions
function showSuccessMessage(message) {
  // Create and show a temporary success message
  const messageDiv = document.createElement('div');
  messageDiv.className = 'success-message fixed top-24 right-6 z-50 max-w-sm';
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
  
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

function showErrorMessage(message) {
  // Create and show a temporary error message
  const messageDiv = document.createElement('div');
  messageDiv.className = 'error-message fixed top-24 right-6 z-50 max-w-sm';
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
  
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  // Navigation event listeners - prevent default and handle properly
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const pageId = link.getAttribute('data-page');
      showPage(pageId);
    });
  });
  
  // Search functionality
  const searchBtn = document.querySelector('.search-btn');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const closeSearch = document.querySelector('.close-search');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showModal('searchModal');
    });
  }
  
  if (closeSearch) {
    closeSearch.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hideModal('searchModal');
    });
  }
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const results = performSearch(e.target.value);
      displaySearchResults(results);
    });
  }
  
  // Cart functionality
  const cartBtn = document.querySelector('.cart-btn');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.querySelector('.close-cart');
  
  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showModal('cartModal');
    });
  }
  
  if (closeCart) {
    closeCart.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hideModal('cartModal');
    });
  }
  
  // Filter and sort functionality
  const categoryFilter = document.getElementById('categoryFilter');
  const sortBy = document.getElementById('sortBy');
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterProducts);
  }
  
  if (sortBy) {
    sortBy.addEventListener('change', filterProducts);
  }
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showSuccessMessage('Thank you for your message! We\'ll get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Modal close on outside click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideModal(modal.id);
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Simple mobile menu toggle - can be enhanced
      const nav = document.querySelector('nav .hidden.md\\:flex');
      if (nav) {
        nav.classList.toggle('hidden');
      }
    });
  }
  
  // Initialize the application
  showPage('home');
  updateCartUI();
});

// Global functions for onclick handlers
window.showPage = showPage;
window.viewProduct = viewProduct;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.showProductsByCategory = showProductsByCategory;
window.showModal = showModal;
window.hideModal = hideModal;