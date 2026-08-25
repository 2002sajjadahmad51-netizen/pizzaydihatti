/**
 * PIZZAY DI HATTI - FRONTEND APPLICATION & ORDERING ENGINE
 * Slogan: "سواد محبت دا"
 * Features: 3D UI, Multi-Branch Selector, Auto-Upsell, WhatsApp Order Ticket, Customer SMS Portal
 */

document.addEventListener('DOMContentLoaded', () => {
  initStore();
});

/* ==========================================================================
   DATA STORE & MENU CATALOG
   ========================================================================== */
const MENU_DATA = [
  // --- SPECIAL & CROWN PIZZAS ---
  {
    id: 'pizza-crown-special',
    name: '👑 Crown Crust Special Pizza',
    category: 'special_pizzas',
    desc: 'Golden folded crown pockets stuffed with spicy chicken & mozzarella, topped with olives & mushrooms.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'Chef Special 🔥',
    isCrown: true,
    sizes: [
      { name: 'Small (7")', price: 350 },
      { name: 'Medium (10")', price: 650 },
      { name: 'Large (13")', price: 850 }
    ],
    defaultSizeIndex: 1
  },
  {
    id: 'pizza-super-supreme',
    name: 'Super Supreme Pizza',
    category: 'special_pizzas',
    desc: 'Loaded with seasoned chicken fajita & tikka chunks, mushrooms, black olives, onions & capsicum.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'Bestseller ⭐',
    sizes: [
      { name: 'Small (7")', price: 220 },
      { name: 'Medium (10")', price: 440 },
      { name: 'Large (13")', price: 630 }
    ],
    defaultSizeIndex: 1
  },
  {
    id: 'pizza-beharai',
    name: 'Behari Pizza',
    category: 'special_pizzas',
    desc: 'Traditional spicy Behari spiced chicken cubes with caramelized onions and double mozzarella.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'Desi Spicy 🌶️',
    sizes: [
      { name: 'Small (7")', price: 220 },
      { name: 'Medium (10")', price: 440 },
      { name: 'Large (13")', price: 630 }
    ],
    defaultSizeIndex: 1
  },
  {
    id: 'pizza-our-special',
    name: 'Our Special Pizza',
    category: 'special_pizzas',
    desc: 'The house signature recipe with secret blend of 3 cheeses and marinated BBQ chicken pieces.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'Customer Favorite 🖤',
    sizes: [
      { name: 'Small (7")', price: 250 },
      { name: 'Medium (10")', price: 460 },
      { name: 'Large (13")', price: 650 }
    ],
    defaultSizeIndex: 1
  },
  {
    id: 'pizza-cheese-stuffer',
    name: 'Chicken Cheese Stuffer Pizza',
    category: 'special_pizzas',
    desc: 'Crust filled with molten pure mozzarella cheese and chicken mince stuffing all around.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'Molten Cheese 🧀',
    sizes: [
      { name: 'Medium (10")', price: 600 },
      { name: 'Large (13")', price: 800 }
    ],
    defaultSizeIndex: 0
  },
  {
    id: 'pizza-kabab-stuffer',
    name: 'Kabab Stuffer Pizza',
    category: 'special_pizzas',
    desc: 'Juicy BBQ chicken seekh kababs baked directly into the crust with premium toppings.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'Kabab Crust 🍢',
    sizes: [
      { name: 'Medium (10")', price: 650 },
      { name: 'Large (13")', price: 850 }
    ],
    defaultSizeIndex: 0
  },

  // --- CLASSIC PIZZAS ---
  {
    id: 'pizza-chicken-tikka',
    name: 'Chicken Tikka Pizza',
    category: 'pizzas',
    desc: 'Tender spiced BBQ chicken tikka chunks, crisp onions, fresh coriander, and melted mozzarella.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'All-Time Classic',
    sizes: [
      { name: 'Small (7")', price: 200 },
      { name: 'Medium (10")', price: 420 },
      { name: 'Large (13")', price: 600 }
    ],
    defaultSizeIndex: 1
  },
  {
    id: 'pizza-chicken-fajita',
    name: 'Chicken Fajita Pizza',
    category: 'pizzas',
    desc: 'Mexican-style marinated chicken fajita with crunchy bell peppers, onions, and garlic herbs.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'Popular',
    sizes: [
      { name: 'Small (7")', price: 200 },
      { name: 'Medium (10")', price: 420 },
      { name: 'Large (13")', price: 600 }
    ],
    defaultSizeIndex: 1
  },
  {
    id: 'pizza-fajita-sicilian',
    name: 'Fajita Sicilian Pizza',
    category: 'pizzas',
    desc: 'Spicy chicken fajita chunks, jalapeno peppers, onions, green chili, and rich pizza sauce.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'Spicy 🌶️',
    sizes: [
      { name: 'Small (7")', price: 200 },
      { name: 'Medium (10")', price: 420 },
      { name: 'Large (13")', price: 600 }
    ],
    defaultSizeIndex: 1
  },
  {
    id: 'pizza-cheese-lover',
    name: 'Cheese Lover Pizza',
    category: 'pizzas',
    desc: 'Double layer of 100% pure stretchy mozzarella cheese with herb-infused Italian tomato sauce.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: '100% Mozzarella',
    sizes: [
      { name: 'Small (7")', price: 200 },
      { name: 'Medium (10")', price: 420 },
      { name: 'Large (13")', price: 600 }
    ],
    defaultSizeIndex: 1
  },
  {
    id: 'pizza-chicken-supreme',
    name: 'Chicken Supreme Pizza',
    category: 'pizzas',
    desc: 'Loaded combo of smoked chicken, spicy chicken sausages, black olives, and bell peppers.',
    image: 'Images/crown-crust-pizza.jpg',
    tag: 'Loaded',
    sizes: [
      { name: 'Small (7")', price: 200 },
      { name: 'Medium (10")', price: 420 },
      { name: 'Large (13")', price: 600 }
    ],
    defaultSizeIndex: 1
  },

  // --- MEGA DEALS (1 - 6) ---
  {
    id: 'deal-1',
    name: 'Deal 1 (Duo Feast)',
    category: 'deals',
    desc: '2 Small Pizzas + 2 Chicken Shawarmas + 1.5 Ltr Cold Drink',
    itemsList: ['2x Small Pizzas (Any Flavour)', '2x Chicken Shawarmas', '1x 1.5 Litre Chilled Soft Drink'],
    image: 'Images/family-combo-deal.jpg',
    tag: 'Save Rs. 150',
    price: 560
  },
  {
    id: 'deal-2',
    name: 'Deal 2 (Mega Family)',
    category: 'deals',
    desc: '1 Large Pizza + 1 Medium Pizza + 1.5 Ltr Cold Drink',
    itemsList: ['1x Large Pizza (13")', '1x Medium Pizza (10")', '1x 1.5 Litre Chilled Soft Drink'],
    image: 'Images/family-combo-deal.jpg',
    tag: 'Save Rs. 200',
    price: 1050
  },
  {
    id: 'deal-3',
    name: 'Deal 3 (Royal Party)',
    category: 'deals',
    desc: '1 Large Classic Pizza + 1 Large Special Pizza + 1.5 Ltr Drink',
    itemsList: ['1x Large Classic Pizza', '1x Large Special Pizza', '1x 1.5 Litre Chilled Soft Drink'],
    image: 'Images/family-combo-deal.jpg',
    tag: 'Most Popular ⭐',
    price: 1300
  },
  {
    id: 'deal-4',
    name: 'Deal 4 (Rolls & Shawarma)',
    category: 'deals',
    desc: '2 Chicken Shawarmas + 2 Crispy Paratha Rolls + 1 Ltr Drink',
    itemsList: ['2x Chicken Shawarmas', '2x Chicken Paratha Rolls', '1x 1.0 Litre Soft Drink'],
    image: 'Images/family-combo-deal.jpg',
    tag: 'Student Saver',
    price: 360
  },
  {
    id: 'deal-5',
    name: 'Deal 5 (Wings & Shawarma)',
    category: 'deals',
    desc: '6 Pcs Wings + 2 Chicken Shawarmas + 500ml Drink',
    itemsList: ['6x Crispy Hot Wings', '2x Chicken Shawarmas', '1x 500ml Cold Drink'],
    image: 'Images/family-combo-deal.jpg',
    tag: 'Paisa Wasool 🔥',
    price: 250
  },
  {
    id: 'deal-6',
    name: 'Deal 6 (Mega Platter)',
    category: 'deals',
    desc: '2 Pizza Shawarmas + 1 Paratha Roll + 6 Pcs Wings + 1 Ltr Drink',
    itemsList: ['2x Special Pizza Shawarmas', '1x Chicken Paratha Roll', '6x Crispy Wings', '1x 1.0 Litre Drink'],
    image: 'Images/family-combo-deal.jpg',
    tag: 'Big Platter',
    price: 450
  },

  // --- SHAWARMA & PARATHA ROLLS ---
  {
    id: 'roll-chicken-paratha',
    name: 'Chicken Paratha Roll',
    category: 'shawarma_rolls',
    desc: 'Crispy flaky paratha loaded with juicy grilled chicken chunks, garlic mayo & secret chutney.',
    image: 'Images/paratha-roll-shawarma.jpg',
    tag: 'Top Review ⭐',
    price: 100
  },
  {
    id: 'roll-chicken-cheese-shawarma',
    name: 'Chicken Cheese Shawarma',
    category: 'shawarma_rolls',
    desc: 'Tender spiced shawarma chicken wrapped with melted cheese slice and garlic sauce.',
    image: 'Images/paratha-roll-shawarma.jpg',
    tag: 'Must Try 🔥',
    price: 80
  },
  {
    id: 'roll-pizza-shawarma',
    name: 'Special Pizza Shawarma',
    category: 'shawarma_rolls',
    desc: 'Loaded with pizza sauce, mozzarella cheese, chicken chunks, and capsicum inside pita wrap.',
    image: 'Images/paratha-roll-shawarma.jpg',
    tag: 'Loaded Cheese',
    price: 120
  },
  {
    id: 'roll-chicken-shawarma',
    name: 'Chicken Shawarma',
    category: 'shawarma_rolls',
    desc: 'Classic pita bread filled with roasted chicken and seasoned mayonnaise.',
    image: 'Images/paratha-roll-shawarma.jpg',
    tag: 'Budget King',
    price: 60
  },
  {
    id: 'roll-spin-rolls',
    name: 'Spin Rolls (4 Pcs)',
    category: 'shawarma_rolls',
    desc: 'Crispy pastry roll spirals stuffed with spicy shredded chicken and dip sauce.',
    image: 'Images/paratha-roll-shawarma.jpg',
    tag: 'Crispy',
    price: 220
  },
  {
    id: 'roll-crunchy-rolls',
    name: 'Crunchy Rolls (4 Pcs)',
    category: 'shawarma_rolls',
    desc: 'Super crispy breaded chicken rolls fried to perfection with special seasoning.',
    image: 'Images/paratha-roll-shawarma.jpg',
    tag: 'Extra Crunchy',
    price: 250
  },
  {
    id: 'roll-behari-rolls',
    name: 'Behari Rolls (4 Pcs)',
    category: 'shawarma_rolls',
    desc: 'Traditional spicy Behari marinated chicken filling in a crispy wrap.',
    image: 'Images/paratha-roll-shawarma.jpg',
    tag: 'Spicy',
    price: 240
  },

  // --- PASTAS ---
  {
    id: 'pasta-creamy',
    name: 'Creamy Alfredo Baked Pasta',
    category: 'pastas',
    desc: 'Penne pasta in rich white creamy sauce with chicken chunks and melted mozzarella top.',
    image: 'Images/creamy-baked-pasta.jpg',
    tag: 'Customer Love ⭐',
    sizes: [
      { name: 'Single Serving', price: 130 },
      { name: 'Family Platter', price: 250 }
    ],
    defaultSizeIndex: 0
  },
  {
    id: 'pasta-flaming',
    name: 'Flaming Hot Pasta',
    category: 'pastas',
    desc: 'Spicy red peri-peri sauce pasta with sizzling grilled chicken and cheese.',
    image: 'Images/creamy-baked-pasta.jpg',
    tag: 'Spicy 🌶️',
    sizes: [
      { name: 'Single Serving', price: 120 },
      { name: 'Family Platter', price: 240 }
    ],
    defaultSizeIndex: 0
  },
  {
    id: 'pasta-crunchy',
    name: 'Crunchy Special Pasta',
    category: 'pastas',
    desc: 'Baked pasta topped with crispy fried chicken poppers and double cheese layer.',
    image: 'Images/creamy-baked-pasta.jpg',
    tag: 'Crispy Chicken',
    sizes: [
      { name: 'Single Serving', price: 130 },
      { name: 'Family Platter', price: 260 }
    ],
    defaultSizeIndex: 0
  },

  // --- CHICKEN WINGS ---
  {
    id: 'wings-bbq',
    name: 'Bar.B.Q Glazed Wings (12 Pcs)',
    category: 'wings',
    desc: 'Oven-baked chicken wings tossed in smoky BBQ honey sauce with sesame seeds.',
    image: 'Images/spicy-chicken-wings.jpg',
    tag: '12 Pieces',
    price: 230
  },
  {
    id: 'wings-oven-baked',
    name: 'Oven Baked Wings (12 Pcs)',
    category: 'wings',
    desc: 'Tender and juicy roasted chicken wings seasoned with garlic herbs and chili.',
    image: 'Images/spicy-chicken-wings.jpg',
    tag: '12 Pieces',
    price: 200
  },
  {
    id: 'wings-crispy-6',
    name: 'Crispy Spicy Wings (6 Pcs)',
    category: 'wings',
    desc: 'Golden crunchy fried chicken wings with spicy dipping sauce.',
    image: 'Images/spicy-chicken-wings.jpg',
    tag: 'Quick Snack',
    price: 150
  },

  // --- BEVERAGES & SAUCES ---
  {
    id: 'drink-1-5l',
    name: '1.5 Litre Soft Drink',
    category: 'beverages',
    desc: 'Chilled 1.5L bottle (Coca Cola / Sprite / Fanta / Next Cola).',
    image: 'Images/hero-banner.jpg',
    tag: 'Chilled',
    price: 90
  },
  {
    id: 'drink-1l',
    name: '1.0 Litre Soft Drink',
    category: 'beverages',
    desc: 'Chilled 1.0L soft drink bottle.',
    image: 'Images/hero-banner.jpg',
    tag: 'Chilled',
    price: 70
  },
  {
    id: 'drink-500ml',
    name: '500ml Soft Drink',
    category: 'beverages',
    desc: 'Chilled 500ml individual bottle.',
    image: 'Images/hero-banner.jpg',
    tag: 'Chilled',
    price: 50
  },
  {
    id: 'sauce-dip',
    name: 'Special Garlic Mayo Dip Sauce',
    category: 'beverages',
    desc: 'Creamy garlic dip, perfect for pizza crusts and paratha rolls.',
    image: 'Images/spicy-chicken-wings.jpg',
    tag: 'Extra Flavor',
    price: 30
  },
  {
    id: 'sauce-mustard',
    name: 'Mayo Mustard Sauce',
    category: 'beverages',
    desc: 'Tangy mustard and creamy mayo blend.',
    image: 'Images/spicy-chicken-wings.jpg',
    tag: 'Tangy Dip',
    price: 30
  }
];

/* Upsell Suggestions Database */
const UPSELL_ITEMS = [
  { id: 'upsell-cheese', name: '🧀 Extra Mozzarella Cheese', price: 80 },
  { id: 'upsell-dip', name: '🥫 Garlic Mayo Dip Sauce', price: 30 },
  { id: 'upsell-wings', name: '🍗 6 Pcs Crispy Wings', price: 150 },
  { id: 'upsell-drink', name: '🥤 1.5L Chilled Drink', price: 90 },
  { id: 'upsell-roll', name: '🌯 Chicken Paratha Roll', price: 100 }
];

/* Application State */
let state = {
  cart: [],
  activeCategory: 'all',
  searchQuery: '',
  selectedBranch: {
    id: 'shamsabad',
    name: 'Rawalpindi (Shamsabad)',
    phone: '923105050481',
    address: 'Bilal Colony, Shamsabad, Rawalpindi'
  },
  currentCustomizingProduct: null
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
function initStore() {
  loadCartFromStorage();
  checkStoreOpenStatus();
  renderDeals();
  renderMenuItems();
  renderUpsellCarousel();
  updateCartUI();
  setupEventListeners();
  init3DEffects();
}

/* ==========================================================================
   LIVE STORE OPEN/CLOSED TIMING (5:00 PM – 3:00 AM)
   ========================================================================== */
function checkStoreOpenStatus() {
  const statusBadge = document.getElementById('live-store-status');
  const statusText = document.getElementById('status-text');
  if (!statusBadge || !statusText) return;

  const now = new Date();
  const currentHour = now.getHours(); // 0 to 23

  // Open if 17 (5 PM) to 23 (11 PM) or 0 to 2 (midnight to 2:59 AM)
  const isOpen = currentHour >= 17 || currentHour < 3;

  if (isOpen) {
    statusBadge.classList.remove('closed');
    statusText.innerHTML = '<strong>Open Now</strong> • Delivering till 3:00 AM';
  } else {
    statusBadge.classList.add('closed');
    statusText.innerHTML = '<strong>Opens at 5:00 PM</strong> • Pre-orders Accepted';
  }
}

/* ==========================================================================
   MENU & DEALS RENDERING
   ========================================================================== */
function renderDeals() {
  const container = document.getElementById('dealsGrid');
  if (!container) return;

  const deals = MENU_DATA.filter(item => item.category === 'deals');
  
  container.innerHTML = deals.map(deal => `
    <div class="deal-card">
      <div class="deal-badge-ribbon">${deal.tag}</div>
      <div class="deal-img-box">
        <img src="${deal.image}" alt="${deal.name}" loading="lazy">
      </div>
      <div class="deal-body">
        <h3 class="deal-title">${deal.name}</h3>
        <ul class="deal-items-list">
          ${deal.itemsList.map(li => `<li><i class="fa-solid fa-circle-check"></i> ${li}</li>`).join('')}
        </ul>
        <div class="deal-footer">
          <div class="deal-price-tag">
            <span>Special Deal Price</span>
            <strong>Rs. ${deal.price}</strong>
          </div>
          <button class="btn btn-add-deal" onclick="addSimpleItemToCart('${deal.id}')">
            <i class="fa-solid fa-plus"></i> Add Deal
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderMenuItems() {
  const container = document.getElementById('menuItemsGrid');
  if (!container) return;

  let filtered = MENU_DATA.filter(item => {
    // Exclude deals from the main category grid if they have their own section
    if (state.activeCategory === 'all' && item.category === 'deals') return false;
    if (state.activeCategory !== 'all' && item.category !== state.activeCategory) return false;

    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      return item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 12px; display: block; opacity: 0.4;"></i>
        <h3>No items found</h3>
        <p>Try searching for "pizza", "roll", "wings" or select another category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const hasOptions = item.sizes && item.sizes.length > 0;
    const basePrice = hasOptions ? item.sizes[item.defaultSizeIndex || 0].price : item.price;
    const isCrown = item.isCrown;

    return `
      <div class="menu-card" data-id="${item.id}">
        <div class="menu-card-img-box">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="badge-tag ${isCrown ? 'crown' : ''}">
            ${isCrown ? '<i class="fa-solid fa-crown"></i>' : '<i class="fa-solid fa-star"></i>'} 
            ${item.tag || 'Popular'}
          </span>
        </div>
        <div class="menu-card-body">
          <h3 class="menu-item-title">${item.name}</h3>
          <p class="menu-item-desc">${item.desc}</p>
          <div class="menu-card-footer">
            <div class="menu-price-container">
              <span>${hasOptions ? 'Starting from' : 'Price'}</span>
              <strong>Rs. ${basePrice}</strong>
            </div>
            ${hasOptions ? `
              <button class="btn btn-add-item" onclick="openCustomizeModal('${item.id}')">
                <i class="fa-solid fa-sliders"></i> Customize
              </button>
            ` : `
              <button class="btn btn-add-item" onclick="addSimpleItemToCart('${item.id}')">
                <i class="fa-solid fa-plus"></i> Add
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   CUSTOMIZATION MODAL (Crust, Size, Addons)
   ========================================================================== */
function openCustomizeModal(productId) {
  const product = MENU_DATA.find(p => p.id === productId);
  if (!product) return;

  state.currentCustomizingProduct = product;
  const modal = document.getElementById('customizeModalOverlay');
  
  // Set basic info
  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductDesc').textContent = product.desc;
  document.getElementById('modalProductImg').src = product.image;

  // Render sizes
  const sizeGroup = document.getElementById('modalSizeGroup');
  if (product.sizes && product.sizes.length > 0) {
    sizeGroup.style.display = 'block';
    const sizeContainer = sizeGroup.querySelector('.size-buttons-grid');
    sizeContainer.innerHTML = product.sizes.map((s, idx) => `
      <button class="size-btn ${idx === (product.defaultSizeIndex || 0) ? 'active' : ''}" data-size="${s.name}" data-price="${s.price}">
        <span class="size-name">${s.name}</span>
        <span class="size-price">Rs. ${s.price}</span>
      </button>
    `).join('');

    // Add size click handlers
    sizeContainer.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sizeContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        calculateModalTotal();
      });
    });
  } else {
    sizeGroup.style.display = 'none';
  }

  // Crust selector (only for pizzas)
  const crustGroup = document.getElementById('modalCrustGroup');
  if (product.category.includes('pizza')) {
    crustGroup.style.display = 'block';
    // Reset crust radio to default
    const firstRadio = crustGroup.querySelector('input[type="radio"]');
    if (firstRadio) firstRadio.checked = true;
  } else {
    crustGroup.style.display = 'none';
  }

  // Reset checkboxes
  document.querySelectorAll('#customizeModal input[type="checkbox"]').forEach(cb => cb.checked = false);

  calculateModalTotal();
  modal.classList.add('show');
}

function calculateModalTotal() {
  if (!state.currentCustomizingProduct) return;
  const product = state.currentCustomizingProduct;

  let total = 0;

  // Size price
  if (product.sizes && product.sizes.length > 0) {
    const activeSizeBtn = document.querySelector('#modalSizeGroup .size-btn.active');
    if (activeSizeBtn) {
      total += parseInt(activeSizeBtn.getAttribute('data-price')) || 0;
    }
  } else {
    total += product.price || 0;
  }

  // Crust upgrade
  if (product.category.includes('pizza')) {
    const checkedCrust = document.querySelector('input[name="crustOption"]:checked');
    if (checkedCrust) {
      total += parseInt(checkedCrust.getAttribute('data-extra')) || 0;
    }
  }

  // Addons
  document.querySelectorAll('#customizeModal input[type="checkbox"]:checked').forEach(cb => {
    total += parseInt(cb.getAttribute('data-price')) || 0;
  });

  document.getElementById('modalCalculatedTotal').textContent = `Rs. ${total}`;
  document.getElementById('modalProductPrice').textContent = `Rs. ${total}`;
}

function closeCustomizeModal() {
  const modal = document.getElementById('customizeModalOverlay');
  if (modal) modal.classList.remove('show');
  state.currentCustomizingProduct = null;
}

/* ==========================================================================
   CART OPERATIONS
   ========================================================================== */
function addSimpleItemToCart(productId) {
  const item = MENU_DATA.find(p => p.id === productId);
  if (!item) return;

  const price = item.sizes ? item.sizes[item.defaultSizeIndex || 0].price : item.price;
  const sizeName = item.sizes ? item.sizes[item.defaultSizeIndex || 0].name : '';

  const cartItem = {
    cartId: 'item_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    productId: item.id,
    name: item.name,
    image: item.image,
    size: sizeName,
    crust: '',
    addons: [],
    unitPrice: price,
    qty: 1
  };

  // Check if identical simple item exists
  const existing = state.cart.find(c => c.productId === cartItem.productId && c.size === cartItem.size && c.crust === '' && c.addons.length === 0);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push(cartItem);
  }

  saveCartAndRefresh();
  showToast(`Added ${item.name} to order!`);
}

function addCustomizedItemToCart() {
  if (!state.currentCustomizingProduct) return;
  const product = state.currentCustomizingProduct;

  let sizeName = '';
  let basePrice = 0;

  if (product.sizes && product.sizes.length > 0) {
    const activeSizeBtn = document.querySelector('#modalSizeGroup .size-btn.active');
    if (activeSizeBtn) {
      sizeName = activeSizeBtn.getAttribute('data-size');
      basePrice = parseInt(activeSizeBtn.getAttribute('data-price')) || 0;
    }
  } else {
    basePrice = product.price || 0;
  }

  let crustName = '';
  let crustPrice = 0;
  if (product.category.includes('pizza')) {
    const checkedCrust = document.querySelector('input[name="crustOption"]:checked');
    if (checkedCrust) {
      crustName = checkedCrust.value;
      crustPrice = parseInt(checkedCrust.getAttribute('data-extra')) || 0;
    }
  }

  const addons = [];
  let addonsPrice = 0;
  document.querySelectorAll('#customizeModal input[type="checkbox"]:checked').forEach(cb => {
    addons.push(cb.value);
    addonsPrice += parseInt(cb.getAttribute('data-price')) || 0;
  });

  const finalUnitPrice = basePrice + crustPrice + addonsPrice;

  const cartItem = {
    cartId: 'item_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    productId: product.id,
    name: product.name,
    image: product.image,
    size: sizeName,
    crust: crustName,
    addons: addons,
    unitPrice: finalUnitPrice,
    qty: 1
  };

  state.cart.push(cartItem);
  closeCustomizeModal();
  saveCartAndRefresh();
  showToast(`Added customized ${product.name} to cart!`);
}

function updateCartQuantity(cartId, delta) {
  const item = state.cart.find(c => c.cartId === cartId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(c => c.cartId !== cartId);
  }

  saveCartAndRefresh();
}

function removeCartItem(cartId) {
  state.cart = state.cart.filter(c => c.cartId !== cartId);
  saveCartAndRefresh();
  showToast('Item removed from order');
}

function addQuickUpsell(upsellId) {
  const upsell = UPSELL_ITEMS.find(u => u.id === upsellId);
  if (!upsell) return;

  const cartItem = {
    cartId: 'upsell_' + Date.now(),
    productId: upsell.id,
    name: upsell.name,
    image: 'Images/spicy-chicken-wings.jpg',
    size: '',
    crust: '',
    addons: [],
    unitPrice: upsell.price,
    qty: 1
  };

  state.cart.push(cartItem);
  saveCartAndRefresh();
  showToast(`Added ${upsell.name} to your feast!`);
}

function saveCartAndRefresh() {
  localStorage.setItem('pizzay_cart', JSON.stringify(state.cart));
  updateCartUI();
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('pizzay_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    state.cart = [];
  }
}

/* ==========================================================================
   CART UI & AUTO-UPSELL ENGINE
   ========================================================================== */
function updateCartUI() {
  const container = document.getElementById('cartItemsContainer');
  const cartBadge = document.getElementById('cartCountBadge');
  const cartBtnTotal = document.getElementById('cartBtnTotal');
  const cartHeaderCount = document.getElementById('cartHeaderCount');
  const subtotalText = document.getElementById('cartSubtotalText');
  const deliveryText = document.getElementById('cartDeliveryFeeText');
  const grandTotalText = document.getElementById('cartGrandTotalText');
  const deliveryProgressBar = document.getElementById('deliveryProgressBar');
  const deliveryProgressText = document.getElementById('deliveryProgressText');

  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);

  // Free delivery over Rs. 500
  const deliveryThreshold = 500;
  const isFreeDelivery = subtotal >= deliveryThreshold;
  const deliveryFee = subtotal === 0 ? 0 : (isFreeDelivery ? 0 : 70);
  const grandTotal = subtotal + deliveryFee;

  if (cartBadge) cartBadge.textContent = totalItemsCount;
  if (cartBtnTotal) cartBtnTotal.textContent = `Rs. ${grandTotal}`;
  if (cartHeaderCount) cartHeaderCount.textContent = `(${totalItemsCount} items)`;
  if (subtotalText) subtotalText.textContent = `Rs. ${subtotal}`;
  if (deliveryText) {
    deliveryText.textContent = isFreeDelivery ? 'FREE 🎉' : `Rs. ${deliveryFee}`;
    deliveryText.className = isFreeDelivery ? 'free-highlight' : '';
  }
  if (grandTotalText) grandTotalText.textContent = `Rs. ${grandTotal}`;

  // Progress Bar for Free Delivery
  if (deliveryProgressBar && deliveryProgressText) {
    if (subtotal >= deliveryThreshold) {
      deliveryProgressBar.style.width = '100%';
      deliveryProgressText.innerHTML = '<i class="fa-solid fa-circle-check"></i> You unlocked <strong>FREE Delivery!</strong>';
    } else {
      const remaining = deliveryThreshold - subtotal;
      const pct = Math.min(100, (subtotal / deliveryThreshold) * 100);
      deliveryProgressBar.style.width = `${pct}%`;
      deliveryProgressText.innerHTML = `<i class="fa-solid fa-motorcycle"></i> Add <strong>Rs. ${remaining}</strong> more for <strong>FREE Delivery</strong>`;
    }
  }

  // Render Cart Items
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Your cart is empty</h4>
        <p>Explore our menu and add your favorite pizzas, deals & rolls!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h5 class="cart-item-title">${item.name}</h5>
        <div class="cart-item-custom-tags">
          ${item.size ? `<span class="tag-size">${item.size}</span>` : ''}
          ${item.crust ? `<span class="tag-crust">• ${item.crust}</span>` : ''}
          ${item.addons && item.addons.length > 0 ? `<span class="tag-addons">• +${item.addons.join(', ')}</span>` : ''}
        </div>
        <div class="cart-item-price">Rs. ${item.unitPrice * item.qty}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="updateCartQuantity('${item.cartId}', -1)" aria-label="Decrease quantity">
          <i class="fa-solid fa-minus"></i>
        </button>
        <span class="qty-count">${item.qty}</span>
        <button class="qty-btn" onclick="updateCartQuantity('${item.cartId}', 1)" aria-label="Increase quantity">
          <i class="fa-solid fa-plus"></i>
        </button>
        <button class="remove-item-btn" onclick="removeCartItem('${item.cartId}')" aria-label="Remove item">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderUpsellCarousel() {
  const container = document.getElementById('upsellCarousel');
  if (!container) return;

  container.innerHTML = UPSELL_ITEMS.map(u => `
    <div class="upsell-item-card">
      <div class="info">
        <strong>${u.name}</strong>
        <small>+Rs. ${u.price}</small>
      </div>
      <button class="btn-quick-add" onclick="addQuickUpsell('${u.id}')">
        + Add
      </button>
    </div>
  `).join('');
}

/* ==========================================================================
   WHATSAPP ORDER DISPATCH ENGINE (Direct Ticket)
   ========================================================================== */
function processWhatsAppOrder() {
  if (state.cart.length === 0) {
    alert('Please add at least one item to your cart before placing an order.');
    return;
  }

  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const areaInput = document.getElementById('custArea');
  const addressInput = document.getElementById('custAddress');
  const notesInput = document.getElementById('custNotes');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const area = areaInput ? areaInput.value : 'Twin Cities';
  const address = addressInput ? addressInput.value.trim() : '';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!name) {
    alert('Please enter your full name.');
    nameInput.focus();
    return;
  }

  if (!phone || phone.length < 10) {
    alert('Please enter a valid WhatsApp phone number (e.g. 0310 1234567).');
    phoneInput.focus();
    return;
  }

  if (!address) {
    alert('Please enter your street address and house number.');
    addressInput.focus();
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const isFreeDelivery = subtotal >= 500;
  const deliveryFee = isFreeDelivery ? 0 : 70;
  const grandTotal = subtotal + deliveryFee;

  // Build clean WhatsApp Ticket
  let msg = `🍕 *NEW ONLINE ORDER - PIZZAY DI HATTI* 🍕\n`;
  msg += `_"سواد محبت دا"_\n\n`;
  msg += `📍 *Branch:* ${state.selectedBranch.name}\n`;
  msg += `👤 *Customer:* ${name}\n`;
  msg += `📱 *Phone:* ${phone}\n`;
  msg += `🏙️ *Area:* ${area}\n`;
  msg += `🏠 *Address:* ${address}\n`;
  if (notes) {
    msg += `📝 *Notes:* ${notes}\n`;
  }
  msg += `\n-----------------------------------\n`;
  msg += `📋 *ORDER DETAILS:*\n`;

  state.cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.qty}x ${item.name}*\n`;
    if (item.size) msg += `   • Size: ${item.size}\n`;
    if (item.crust) msg += `   • Crust: ${item.crust}\n`;
    if (item.addons && item.addons.length > 0) msg += `   • Add-ons: ${item.addons.join(', ')}\n`;
    msg += `   • Price: Rs. ${item.unitPrice * item.qty}\n\n`;
  });

  msg += `-----------------------------------\n`;
  msg += `💵 *Subtotal:* Rs. ${subtotal}\n`;
  msg += `🛵 *Delivery:* ${isFreeDelivery ? 'FREE (Orders Rs. 500+)' : `Rs. ${deliveryFee}`}\n`;
  msg += `💰 *TOTAL PAYABLE (COD): Rs. ${grandTotal}*\n`;
  msg += `-----------------------------------\n`;
  msg += `🕒 Order Time: ${new Date().toLocaleTimeString()} | ${new Date().toLocaleDateString()}\n`;
  msg += `✅ _Please confirm order preparation and dispatch timing. JazakAllah!_`;

  // Save order to LocalStorage for Owner Marketing Portal
  saveOrderToHistory({
    date: new Date().toLocaleString(),
    name: name,
    phone: phone,
    area: area,
    branch: state.selectedBranch.name,
    total: grandTotal,
    items: state.cart.map(c => `${c.qty}x ${c.name}`).join(', ')
  });

  // Clear Cart
  state.cart = [];
  saveCartAndRefresh();

  // Redirect to WhatsApp
  const targetPhone = state.selectedBranch.phone;
  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');

  // Close cart
  closeCart();
  showToast('Order dispatched to WhatsApp! 🎉');
}

/* Save order in owner database (Local Storage) */
function saveOrderToHistory(orderData) {
  try {
    let orders = JSON.parse(localStorage.getItem('pizzay_customer_orders') || '[]');
    orders.unshift(orderData);
    localStorage.setItem('pizzay_customer_orders', JSON.stringify(orders));
  } catch (e) {
    console.error('Error saving order history', e);
  }
}

/* ==========================================================================
   ADMIN / OWNER MARKETING PORTAL
   ========================================================================== */
function openAdminPortal() {
  const modal = document.getElementById('adminModalOverlay');
  if (!modal) return;

  const orders = JSON.parse(localStorage.getItem('pizzay_customer_orders') || '[]');
  const uniquePhones = new Set(orders.map(o => o.phone));

  document.getElementById('adminTotalOrdersCount').textContent = orders.length;
  document.getElementById('adminUniqueCustomersCount').textContent = uniquePhones.size;

  const tbody = document.getElementById('adminOrdersTableBody');
  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No orders recorded yet.</td></tr>`;
  } else {
    tbody.innerHTML = orders.map(o => `
      <tr>
        <td>${o.date}</td>
        <td><strong>${o.name}</strong></td>
        <td><a href="tel:${o.phone}" style="color: var(--primary-light);">${o.phone}</a></td>
        <td>${o.area} (${o.branch})</td>
        <td><strong>Rs. ${o.total}</strong></td>
      </tr>
    `).join('');
  }

  modal.classList.add('show');
}

function exportOrdersCSV() {
  const orders = JSON.parse(localStorage.getItem('pizzay_customer_orders') || '[]');
  if (orders.length === 0) {
    alert('No orders available to export.');
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,Date,Customer Name,Phone Number,Area,Branch,Total Bill,Items\n";
  orders.forEach(o => {
    csvContent += `"${o.date}","${o.name}","${o.phone}","${o.area}","${o.branch}","${o.total}","${o.items}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Pizzay_Di_Hatti_Customers_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function copyAllCustomerPhones() {
  const orders = JSON.parse(localStorage.getItem('pizzay_customer_orders') || '[]');
  const uniquePhones = Array.from(new Set(orders.map(o => o.phone)));
  if (uniquePhones.length === 0) {
    alert('No customer phone numbers to copy.');
    return;
  }

  const text = uniquePhones.join(', ');
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied ${uniquePhones.length} customer phone numbers to clipboard!`);
  });
}

/* ==========================================================================
   EVENT LISTENERS & INTERACTIVITY
   ========================================================================== */
function setupEventListeners() {
  // Category tabs filter
  document.querySelectorAll('.category-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.getAttribute('data-category');
      renderMenuItems();
    });
  });

  // Search input
  const searchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (clearSearchBtn) clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      renderMenuItems();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderMenuItems();
    });
  }

  // Cart Drawer open/close
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Submit Order via WhatsApp
  const submitOrderBtn = document.getElementById('submitOrderBtn');
  if (submitOrderBtn) submitOrderBtn.addEventListener('click', processWhatsAppOrder);

  // Customization Modal
  const closeCustBtn = document.getElementById('closeCustomizeModalBtn');
  const custOverlay = document.getElementById('customizeModalOverlay');
  const confirmAddBtn = document.getElementById('confirmAddToCartBtn');

  if (closeCustBtn) closeCustBtn.addEventListener('click', closeCustomizeModal);
  if (custOverlay) {
    custOverlay.addEventListener('click', (e) => {
      if (e.target === custOverlay) closeCustomizeModal();
    });
  }
  if (confirmAddBtn) confirmAddBtn.addEventListener('click', addCustomizedItemToCart);

  // Radio button change in modal
  document.querySelectorAll('#customizeModal input[type="radio"]').forEach(rb => {
    rb.addEventListener('change', calculateModalTotal);
  });
  document.querySelectorAll('#customizeModal input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', calculateModalTotal);
  });

  // Branch Selector Dropdown
  const branchPill = document.getElementById('branchSelectorToggle');
  const branchMenu = document.getElementById('branchDropdownMenu');
  if (branchPill && branchMenu) {
    branchPill.addEventListener('click', (e) => {
      e.stopPropagation();
      branchPill.classList.toggle('open');
      branchMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      branchPill.classList.remove('open');
      branchMenu.classList.remove('show');
    });

    branchMenu.querySelectorAll('.branch-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const branchKey = opt.getAttribute('data-branch');
        const phone = opt.getAttribute('data-phone');
        const addr = opt.getAttribute('data-address');
        const name = branchKey === 'shamsabad' ? 'Rawalpindi (Shamsabad)' : 'Islamabad (Ghori Town)';

        state.selectedBranch = { id: branchKey, name: name, phone: phone, address: addr };

        branchMenu.querySelectorAll('.branch-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');

        document.getElementById('activeBranchDisplay').textContent = name;
        document.getElementById('cartBranchNameDisplay').textContent = name;

        showToast(`Selected ${name} branch`);
      });
    });
  }

  // Branch buttons on branch cards
  document.querySelectorAll('.set-branch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const branchKey = btn.getAttribute('data-branch');
      const phone = btn.getAttribute('data-phone');
      const addr = btn.getAttribute('data-address');
      const name = branchKey === 'shamsabad' ? 'Rawalpindi (Shamsabad)' : 'Islamabad (Ghori Town)';

      state.selectedBranch = { id: branchKey, name: name, phone: phone, address: addr };
      document.getElementById('activeBranchDisplay').textContent = name;
      document.getElementById('cartBranchNameDisplay').textContent = name;

      showToast(`Ordering from ${name}!`);
      openCart();
    });
  });

  const cartChangeBranchBtn = document.getElementById('cartChangeBranchBtn');
  if (cartChangeBranchBtn) {
    cartChangeBranchBtn.addEventListener('click', () => {
      const isShamsabad = state.selectedBranch.id === 'shamsabad';
      const newKey = isShamsabad ? 'ghori_town' : 'shamsabad';
      const newPhone = isShamsabad ? '923095229121' : '923105050481';
      const newAddr = isShamsabad ? 'Ghori Town Phase 5, Islamabad' : 'Bilal Colony, Shamsabad, Rawalpindi';
      const newName = isShamsabad ? 'Islamabad (Ghori Town)' : 'Rawalpindi (Shamsabad)';

      state.selectedBranch = { id: newKey, name: newName, phone: newPhone, address: newAddr };
      document.getElementById('activeBranchDisplay').textContent = newName;
      document.getElementById('cartBranchNameDisplay').textContent = newName;
      showToast(`Switched to ${newName}`);
    });
  }

  // Owner Portal
  const openAdminBtn = document.getElementById('openAdminModalBtn');
  const closeAdminBtn = document.getElementById('closeAdminModalBtn');
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  const copyNumbersBtn = document.getElementById('copyNumbersBtn');

  if (openAdminBtn) openAdminBtn.addEventListener('click', openAdminPortal);
  if (closeAdminBtn) closeAdminBtn.addEventListener('click', () => document.getElementById('adminModalOverlay').classList.remove('show'));
  if (exportCsvBtn) exportCsvBtn.addEventListener('click', exportOrdersCSV);
  if (copyNumbersBtn) copyNumbersBtn.addEventListener('click', copyAllCustomerPhones);
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   3D HERO HOVER TILT EFFECTS
   ========================================================================== */
function init3DEffects() {
  const wrapper = document.getElementById('hero3DWrapper');
  const card = document.getElementById('hero3DCard');
  if (!wrapper || !card) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(-8deg) rotateX(6deg)`;
  });
}
