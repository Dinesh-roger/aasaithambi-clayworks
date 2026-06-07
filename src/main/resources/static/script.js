/* ============================================================
   AasaiThambi Clay Works – script.js
   All interactivity: products, cart, filters, animations, etc.
   ============================================================ */

'use strict';

/* ===== PRODUCT DATA ===== */
const PRODUCTS = [
    {
        id: 1,
        name: "Sri Siddhi Vinayagar",
        category: "3-5",
        categoryLabel: "3–5 Ft",
        size: "3 Feet",
        price: 4500,
        oldPrice: 6000,
        rating: 5,
        reviews: 128,
        badge: "bestseller",
        badgeLabel: "Best Seller",
        eco: false,
        img: "images/3 feet.webp",
        imgFallback: "https://placehold.co/400x350/d4a843/1a0a00?text=3+Ft+Vinayagar&font=playfair-display"
    },
    {
        id: 2,
        name: " Ganapathi Premium",
        category: "3-5",
        categoryLabel: "3–5 Ft",
        size: "5 Feet",
        price: 7800,
        oldPrice: 10000,
        rating: 5,
        reviews: 94,
        badge: "new",
        badgeLabel: "New Arrival",
        eco: false,
        img: "images/3 feet2.webp",
        imgFallback: "https://placehold.co/400x350/8b4513/ffd700?text=5+Ft+Vinayagar&font=playfair-display"
    },
    {
        id: 3,
        name: "Eco Clay Vinayagar",
        category: "6-8",
        categoryLabel: "6–8 Ft",
        size: "6 Feet",
        price: 12000,
        oldPrice: 15000,
        rating: 4.5,
        reviews: 67,
        badge: "eco",
        badgeLabel: "Eco Friendly",
        eco: true,
        img: "ima",
        imgFallback: "https://placehold.co/400x350/2d7a22/ffd700?text=Eco+Vinayagar&font=playfair-display"
    },
    {
        id: 4,
        name: "Majestic Pandal Ganapathi",
        category: "6-8",
        categoryLabel: "6–8 Ft",
        size: "8 Feet",
        price: 18500,
        oldPrice: 22000,
        rating: 5,
        reviews: 42,
        badge: "bestseller",
        badgeLabel: "Best Seller",
        eco: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Idol_of_Ganesha.jpg/640px-Idol_of_Ganesha.jpg",
        imgFallback: "https://placehold.co/400x350/b5451b/ffd700?text=8+Ft+Vinayagar&font=playfair-display"
    },
    {
        id: 5,
        name: "Divine Festival Vinayagar",
        category: "9-11",
        categoryLabel: "9–11 Ft",
        size: "9 Feet",
        price: 28000,
        oldPrice: 34000,
        rating: 5,
        reviews: 31,
        badge: "new",
        badgeLabel: "New Design",
        eco: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lord_Ganesha_Photo.jpg/640px-Lord_Ganesha_Photo.jpg",
        imgFallback: "https://placehold.co/400x350/4a2c0a/ffd700?text=9+Ft+Vinayagar&font=playfair-display"
    },
    {
        id: 6,
        name: "Royal Temple Ganapathi",
        category: "9-11",
        categoryLabel: "9–11 Ft",
        size: "11 Feet",
        price: 38000,
        oldPrice: 45000,
        rating: 5,
        reviews: 19,
        badge: "bestseller",
        badgeLabel: "Premium",
        eco: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ganesh_Idol.jpg/640px-Ganesh_Idol.jpg",
        imgFallback: "https://placehold.co/400x350/1a0a00/ffd700?text=11+Ft+Vinayagar&font=playfair-display"
    },
    {
        id: 7,
        name: "Grand Mahotsav Vinayagar",
        category: "12-13",
        categoryLabel: "12–13 Ft",
        size: "12 Feet",
        price: 55000,
        oldPrice: 68000,
        rating: 5,
        reviews: 11,
        badge: "new",
        badgeLabel: "Limited Edition",
        eco: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ganesha_Artwork.jpg/640px-Ganesha_Artwork.jpg",
        imgFallback: "https://placehold.co/400x350/c0392b/ffd700?text=12+Ft+Vinayagar&font=playfair-display"
    },
    {
        id: 8,
        name: "Triumph Ganapathi Supreme",
        category: "12-13",
        categoryLabel: "12–13 Ft",
        size: "13 Feet",
        price: 75000,
        oldPrice: 90000,
        rating: 5,
        reviews: 7,
        badge: "bestseller",
        badgeLabel: "Grand Master",
        eco: false,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ganesha_stone_sculpture.jpg/640px-Ganesha_stone_sculpture.jpg",
        imgFallback: "https://placehold.co/400x350/2c1810/ffd700?text=13+Ft+Vinayagar&font=playfair-display"
    }
];

/* ===== STATE ===== */
let cart = [];
let wishlist = [];
let currentFilter = 'all';

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    renderProducts('all');
    initFilterButtons();
    initScrollEvents();
    initIntersectionObserver();
    animateStats();
    initNavHighlight();
});

/* ===== PARTICLES ===== */
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    const symbols = ['🕉️', '✨', '🌸', '⭐', '🔱'];
    for (let i = 0; i < 18; i++) {
        const p = document.createElement('div');
        p.className = 'hero-particle';
        p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.cssText = `
      position: absolute;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      font-size: ${Math.random() * 14 + 10}px;
      opacity: ${Math.random() * 0.3 + 0.05};
      animation: particleFly ${Math.random() * 15 + 12}s linear ${Math.random() * 8}s infinite;
      pointer-events: none;
    `;
        container.appendChild(p);
    }
}

/* ===== RENDER PRODUCTS ===== */
function renderProducts(filter) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const filtered = filter === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === filter);

    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-gopuram" style="font-size:3rem; color: var(--gold); opacity:0.3;"></i>
        <p style="color: var(--text-light); font-family: var(--font-body); margin-top:16px;">
          No idols found in this category. <br/><a href="#contact" style="color:var(--gold);">Request a custom order!</a>
        </p>
      </div>
    `;
        return;
    }

    filtered.forEach((product, index) => {
        const stars = generateStars(product.rating);
        const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-lg-3 reveal';
        col.style.transitionDelay = `${index * 0.07}s`;
        col.innerHTML = `
      <div class="product-card">
        <div class="product-img-wrap">
          <img
            src="${product.img}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.src='${product.imgFallback}'"
          />
          <div class="product-badge ${product.badge}">
            ${product.badgeLabel}
          </div>
          ${product.eco ? '<div class="product-badge eco" style="top:44px;">🌿 Eco</div>' : ''}
          ${discount > 0 ? `<div style="position:absolute;top:${product.eco ? '80px' : '44px'};left:12px;background:#e74c3c;color:white;font-size:0.68rem;font-weight:700;padding:3px 9px;border-radius:50px;font-family:var(--font-body);">-${discount}%</div>` : ''}
          <div class="product-actions">
            <button class="product-action-btn" title="Add to Wishlist" onclick="toggleWishlist(${product.id}, this)">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button class="product-action-btn" title="Quick View" onclick="quickView(${product.id})">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button class="product-action-btn" title="Share" onclick="shareProduct(${product.id})">
              <i class="fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
        <div class="product-body">
          <div class="product-category">${product.categoryLabel}</div>
          <div class="product-name">${product.name}</div>
          <div class="product-stars">
            ${stars}
            <span>(${product.reviews} reviews)</span>
          </div>
          <div class="product-size">Size: <strong>${product.size}</strong></div>
          <div class="product-price-row">
            <div>
              <span class="product-price">₹${formatPrice(product.price)}</span>
              <span class="product-old-price">₹${formatPrice(product.oldPrice)}</span>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
              <i class="fa-solid fa-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;
        grid.appendChild(col);
    });

    // Re-observe newly added elements
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
        initIntersectionObserver();
    }, 50);
}

/* ===== STARS GENERATOR ===== */
function generateStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            html += '<i class="fa-solid fa-star"></i>';
        } else if (rating >= i - 0.5) {
            html += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            html += '<i class="fa-regular fa-star"></i>';
        }
    }
    return html;
}

/* ===== PRICE FORMAT ===== */
function formatPrice(num) {
    return num.toLocaleString('en-IN');
}

/* ===== FILTER BUTTONS ===== */
function initFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const f = btn.getAttribute('data-filter');
            currentFilter = f;
            renderProducts(f);
        });
    });
}

/* ===== CATEGORY CARDS FILTER ===== */
function filterProducts(filter) {
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });

    // Map category card filters
    const map = {
        '3-5': '3-5', '6-8': '6-8', '9-11': '9-11', '12-13': '12-13',
        'eco': 'all', 'custom': 'all'
    };
    const actualFilter = map[filter] || 'all';

    // Sync filter button
    setTimeout(() => {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === actualFilter) {
                btn.classList.add('active');
            }
        });
        renderProducts(actualFilter);
    }, 600);
}

/* ===== CART ===== */
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
        showToast(`Added another ${product.name} to cart!`);
    } else {
        cart.push({ ...product, qty: 1 });
        showToast(`${product.name} added to cart! 🛒`);
    }

    updateCart();
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    renderCartItems();
    showToast('Item removed from cart.');
}

function updateCart() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').textContent = count;
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');

    if (cart.length === 0) {
        container.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-gopuram"></i>
        <p>Your cart is empty.<br/>Add a divine idol!</p>
      </div>
    `;
        footer.style.display = 'none';
        return;
    }

    container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}"
           onerror="this.src='${item.imgFallback}'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${formatPrice(item.price)} × ${item.qty}</div>
        <div style="font-size:0.75rem; color:var(--text-light); font-family:var(--font-body);">${item.size}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join('');

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    document.getElementById('cartTotal').textContent = `₹${formatPrice(total)}`;
    footer.style.display = 'block';
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function openCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.add('open');
    overlay.classList.add('active');
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    showToast(`🙏 Thank you! Redirecting to payment for ₹${formatPrice(total)}...`);
    setTimeout(() => {
        toggleCart();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

// Cart button
document.getElementById('cartBtn').addEventListener('click', toggleCart);

/* ===== WISHLIST ===== */
function toggleWishlist(productId, btn) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const icon = btn.querySelector('i');
    if (wishlist.find(id => id === productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        icon.className = 'fa-regular fa-heart';
        btn.style.color = '';
        showToast(`Removed from wishlist.`);
    } else {
        wishlist.push(productId);
        icon.className = 'fa-solid fa-heart';
        btn.style.color = '#e74c3c';
        showToast(`${product.name} added to wishlist! ❤️`);
    }
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

/* ===== QUICK VIEW ===== */
function quickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Remove existing modal
    const existing = document.getElementById('quickViewModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'quickViewModal';
    modal.style.cssText = `
    position: fixed; inset: 0; z-index: 3000;
    background: rgba(0,0,0,0.75); backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center; padding: 20px;
  `;
    modal.innerHTML = `
    <div style="
      background: #fff; border-radius: 20px; max-width: 720px; width: 100%;
      overflow: hidden; display: flex; flex-wrap: wrap;
      box-shadow: 0 32px 80px rgba(0,0,0,0.4);
      animation: fadeInScale 0.35s ease both;
    ">
      <div style="width: 320px; flex-shrink: 0; max-width: 100%;">
        <img src="${product.img}" alt="${product.name}"
             onerror="this.src='${product.imgFallback}'"
             style="width:100%; height:360px; object-fit:cover;" />
      </div>
      <div style="flex:1; padding:32px; min-width:240px;">
        <div style="font-size:0.72rem; color:var(--terracotta); font-family:var(--font-body); font-weight:700; letter-spacing:2px; text-transform:uppercase; margin-bottom:8px;">${product.categoryLabel}</div>
        <h3 style="font-family:var(--font-display); color:var(--deep-brown); font-size:1.2rem; margin-bottom:12px;">${product.name}</h3>
        <div style="margin-bottom:12px;">${generateStars(product.rating)} <span style="font-size:0.8rem; color:var(--text-light);">(${product.reviews} reviews)</span></div>
        <div style="margin-bottom:16px;">
          <span style="font-family:var(--font-display); font-size:1.5rem; color:var(--terracotta);">₹${formatPrice(product.price)}</span>
          <span style="font-size:0.9rem; color:var(--text-light); text-decoration:line-through; margin-left:8px;">₹${formatPrice(product.oldPrice)}</span>
        </div>
        <ul style="list-style:none; padding:0; margin-bottom:20px; font-family:var(--font-body); font-size:0.88rem; color:var(--text-mid);">
          <li style="margin-bottom:8px;">📐 <strong>Size:</strong> ${product.size}</li>
          <li style="margin-bottom:8px;">🌿 <strong>Material:</strong> ${product.eco ? 'Eco-Friendly Clay' : 'Premium River Clay'}</li>
          <li style="margin-bottom:8px;">🎨 <strong>Finish:</strong> Hand-painted with natural colours</li>
          <li style="margin-bottom:8px;">📦 <strong>Delivery:</strong> Pan-India, 7–14 days</li>
        </ul>
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          <button onclick="addToCart(${product.id}); document.getElementById('quickViewModal').remove();"
            class="btn-primary-custom" style="font-size:0.85rem; padding:12px 24px;">
            <i class="fa-solid fa-cart-plus me-2"></i> Add to Cart
          </button>
          <button onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'}); document.getElementById('quickViewModal').remove();"
            class="btn-outline-custom" style="font-size:0.85rem; padding:12px 24px;">
            Custom Order
          </button>
        </div>
      </div>
      <button onclick="document.getElementById('quickViewModal').remove();"
        style="
          position:absolute; top:16px; right:16px; width:36px; height:36px;
          background:rgba(0,0,0,0.15); border:none; border-radius:50%; cursor:pointer;
          font-size:1rem; color:white; display:flex; align-items:center; justify-content:center;
        ">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `;
    modal.style.position = 'fixed';
    document.body.appendChild(modal);
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.remove();
    });
}

/* ===== SHARE ===== */
function shareProduct(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (navigator.share) {
        navigator.share({
            title: `${product.name} – AasaiThambi Clay Works`,
            text: `Check out this beautiful ${product.size} Vinayagar idol at ₹${formatPrice(product.price)}!`,
            url: window.location.href
        }).catch(() => { });
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('Link copied to clipboard! 🔗');
        }).catch(() => {
            showToast('Share: ' + window.location.href);
        });
    }
}

/* ===== TOAST ===== */
function showToast(message) {
    const toastEl = document.getElementById('mainToast');
    const toastMsg = document.getElementById('toastMsg');
    if (!toastEl || !toastMsg) return;
    toastMsg.textContent = message;

    // Bootstrap toast
    let toast = bootstrap.Toast.getInstance(toastEl);
    if (!toast) {
        toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    }
    toast.show();
}

/* ===== SEARCH ===== */
function handleSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query) ||
        p.size.toLowerCase().includes(query)
    );

    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        const grid = document.getElementById('productGrid');
        grid.innerHTML = '';

        if (results.length === 0) {
            grid.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fa-solid fa-magnifying-glass" style="font-size:3rem; color:var(--gold); opacity:0.3;"></i>
          <p style="margin-top:16px; font-family:var(--font-body); color:var(--text-light);">
            No results for "<strong>${query}</strong>". <a href="#contact" style="color:var(--gold);">Request custom order</a>
          </p>
        </div>
      `;
        } else {
            results.forEach((product, index) => {
                renderSingleProductCard(product, grid, index);
            });
            showToast(`Found ${results.length} idol(s) matching "${query}"`);
        }

        // Reset filter buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        const allBtn = document.querySelector('[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
    }, 700);
}

function renderSingleProductCard(product, grid, index) {
    const stars = generateStars(product.rating);
    const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-lg-3 reveal visible';
    col.style.transitionDelay = `${index * 0.07}s`;
    col.innerHTML = `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${product.img}" alt="${product.name}" loading="lazy"
             onerror="this.src='${product.imgFallback}'" />
        <div class="product-badge ${product.badge}">${product.badgeLabel}</div>
        ${discount > 0 ? `<div style="position:absolute;top:44px;left:12px;background:#e74c3c;color:white;font-size:0.68rem;font-weight:700;padding:3px 9px;border-radius:50px;font-family:var(--font-body);">-${discount}%</div>` : ''}
        <div class="product-actions">
          <button class="product-action-btn" onclick="toggleWishlist(${product.id}, this)"><i class="fa-regular fa-heart"></i></button>
          <button class="product-action-btn" onclick="quickView(${product.id})"><i class="fa-regular fa-eye"></i></button>
          <button class="product-action-btn" onclick="shareProduct(${product.id})"><i class="fa-solid fa-share-nodes"></i></button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-category">${product.categoryLabel}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-stars">${stars}<span>(${product.reviews} reviews)</span></div>
        <div class="product-size">Size: <strong>${product.size}</strong></div>
        <div class="product-price-row">
          <div>
            <span class="product-price">₹${formatPrice(product.price)}</span>
            <span class="product-old-price">₹${formatPrice(product.oldPrice)}</span>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            <i class="fa-solid fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  `;
    grid.appendChild(col);
}

// Enter key on search
document.addEventListener('DOMContentLoaded', () => {
    const si = document.getElementById('searchInput');
    if (si) {
        si.addEventListener('keydown', e => {
            if (e.key === 'Enter') handleSearch();
        });
    }
});

/* ===== SCROLL EVENTS ===== */
function initScrollEvents() {
    const nav = document.getElementById('mainNav');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Navbar scroll effect
        if (scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Back to top
        if (scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== INTERSECTION OBSERVER (reveal animations) ===== */
function initIntersectionObserver() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
}

/* ===== COUNTER ANIMATION ===== */
function animateStats() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));
}

function animateCounter(el, target) {
    const duration = 2000;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        el.textContent = Math.floor(current);
    }, duration / steps);
}

/* ===== NAV ACTIVE HIGHLIGHT ON SCROLL ===== */
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) current = sec.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

/* ===== CONTACT FORM ===== */
function submitContact() {
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const size = document.getElementById('contactSize').value;
    const qty = document.getElementById('contactQty').value;
    const msg = document.getElementById('contactMsg').value.trim();

    if (!name) { showToast('Please enter your name.'); return; }
    if (!phone) { showToast('Please enter your phone number.'); return; }

    // Simulate submission
    const btn = document.querySelector('#contactForm .btn-primary-custom');
    const origText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Sending...';
    btn.disabled = true;

    fetch('http://localhost:8080/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            idolSize: size,
            quantity: parseInt(qty) || 1,
            message: msg
        })
    })
        .then(res => res.json())
        .then(data => {
            btn.innerHTML = '<i class="fa-solid fa-check me-2"></i> Sent Successfully!';
            btn.style.background = 'linear-gradient(135deg, #2d7a22, #1a5c12)';
            showToast(`🙏 Thank you, ${name}! We'll call you within 24 hours.`);
            ['contactName', 'contactPhone', 'contactEmail', 'contactSize', 'contactQty', 'contactMsg']
                .forEach(id => { document.getElementById(id).value = ''; });
            setTimeout(() => {
                btn.innerHTML = origText;
                btn.disabled = false;
                btn.style.background = '';
            }, 4000);
        })
        .catch(() => {
            showToast('Something went wrong. Please try again.');
            btn.innerHTML = origText;
            btn.disabled = false;
        });
}



/* ===== NEWSLETTER ===== */
function subscribeNewsletter() {
    const input = document.getElementById('newsletterEmail');
    const email = input.value.trim();

    if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address.');
        return;
    }

    fetch('http://localhost:8080/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
    })
        .then(res => res.json())
        .then(data => {
            showToast(`🎉 ${data.message} Welcome, ${email.split('@')[0]}!`);
            input.value = '';
        })
        .catch(() => {
            showToast('Something went wrong. Please try again.');
        });
}

/* ===== ACCOUNT BUTTON ===== */
document.addEventListener('DOMContentLoaded', () => {
    const accBtn = document.getElementById('accountBtn');
    if (accBtn) {
        accBtn.addEventListener('click', () => {
            showToast('Login / Register feature coming soon! 🙏');
        });
    }

    const wishBtn = document.getElementById('wishlistBtn');
    if (wishBtn) {
        wishBtn.addEventListener('click', () => {
            if (wishlist.length === 0) {
                showToast('Your wishlist is empty. Click ❤️ on any idol to add!');
            } else {
                showToast(`You have ${wishlist.length} item(s) in your wishlist! ❤️`);
            }
        });
    }
});

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener('keydown', e => {
    // Escape closes cart and modals
    if (e.key === 'Escape') {
        const cart = document.getElementById('cartSidebar');
        const modal = document.getElementById('quickViewModal');
        if (cart && cart.classList.contains('open')) toggleCart();
        if (modal) modal.remove();
    }
    // '/' focuses search
    if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        const si = document.getElementById('searchInput');
        if (si) si.focus();
    }
});

/* ===== REVEAL ANIMATION CLASSES ON SECTIONS ===== */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feature-card').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.1}s`;
    });
    document.querySelectorAll('.category-card').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.08}s`;
    });
    document.querySelectorAll('.process-step').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.12}s`;
    });
    document.querySelectorAll('.gallery-item').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.08}s`;
    });
    document.querySelectorAll('.testimonial-card').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.12}s`;
    });
    document.querySelector('.about-image-wrap') && document.querySelector('.about-image-wrap').classList.add('reveal-left');
    document.querySelector('.about-section .col-lg-6:last-child') && document.querySelector('.about-section .col-lg-6:last-child').classList.add('reveal-right');

    initIntersectionObserver();
});