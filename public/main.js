

let products = [];

if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
} else {
    products = [
        { name: "Classic Tee", price: 799, category: "T-shirt", image: "https://example.com" }
    ];
}

function renderProducts() {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';
    products.forEach(p => {
        container.innerHTML += `
      <div>
        <img src="${p.image}" width="200">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
    });
}
//  renderProducts();

// /************* Product data (six collections) *************/
// const cordSetProducts = [
//     { id: 'c1', name: 'Linen Cord Set', price: 2199, images: ['/public/shree.jpg', 'https://placehold.co/600x750/f0e68c/000?text=Back'], description: 'Lightweight and breathable linen cord set, perfect for a relaxed summer look. The shirt and shorts are designed for maximum comfort and style.' },
//     { id: 'c2', name: 'Tweed Cord Set', price: 2599, images: ['https://placehold.co/600x750/d2b48c/000?text=Front', , 'https://placehold.co/600x750/d2b48c/000?text=Back'], description: 'A stylish tweed cord set with a sophisticated feel. The jacket and trousers are crafted from a durable and comfortable tweed blend.' },
//     { id: 'c3', name: 'Casual Cord Set', price: 1899, images: ['https://placehold.co/600x750/a9a9a9/000?text=Front', 'https://placehold.co/600x750/a9a9a9/000?text=Right', 'https://placehold.co/600x750/a9a9a9/000?text=Back'], description: 'An everyday cord set designed for comfort and ease. The shirt and pants are made from a soft cotton blend, making it perfect for lounging or a casual day out.' },
//     { id: 'c4', name: 'Striped Cord Set', price: 2399, images: ['https://placehold.co/600x750/4682b4/fff?text=Front', 'https://placehold.co/600x750/4682b4/fff?text=Right', 'https://placehold.co/600x750/4682b4/fff?text=Back'], description: 'Stand out with our striped cord set. The vertical stripes create a sleek and modern silhouette, while the breathable fabric keeps you comfortable.' },
//     { id: 'c5', name: 'Winter Cord Set', price: 2799, images: ['https://placehold.co/600x750/8b4513/fff?text=Front', 'https://placehold.co/600x750/8b4513/fff?text=Right', 'https://placehold.co/600x750/8b4513/fff?text=Back'], description: 'Stay warm and stylish with our winter cord set. The jacket and pants are lined with soft fleece for extra warmth, making it the perfect choice for colder weather.' }
// ];

// const poloProducts = [
//     { id: 'p1', name: 'Classic Polo', price: 1499, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'A timeless classic for any occasion. Our classic polo shirt is made from 100% cotton for a comfortable and breathable fit. Available in multiple colors.' },
//     { id: 'p2', name: 'Striped Polo', price: 1699, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Add a touch of style with our striped polo shirt. Features a subtle striped pattern and a soft feel. Perfect for a casual day out.' },
//     { id: 'p3', name: 'Slim Polo', price: 1599, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Our slim polo offers a modern, tailored fit. Designed to be flattering while providing a full range of motion. A must-have in your wardrobe.' },
//     { id: 'p4', name: 'Printed Polo', price: 1799, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'Stand out from the crowd with our unique printed polo. The vibrant print and soft fabric make it a comfortable and stylish choice for any event.' },
//     { id: 'p5', name: 'Sporty Polo', price: 1899, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'A sporty polo designed for an active lifestyle. Features a comfortable stretch fabric and a stylish design that can be worn on or off the field.' }
// ];

// const hoodieProducts = [
//     { id: 'h1', name: 'Oversized Hoodie', price: 1999, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Relaxed and comfortable oversized hoodie. Made from a thick cotton blend to keep you warm on chilly days. Perfect for layering.' },
//     { id: 'h2', name: 'Zip-Up Hoodie', price: 1799, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Versatile and easy to wear, our zip-up hoodie is a staple for any wardrobe. Features a high-quality zipper and soft fleece lining.' },
//     { id: 'h3', name: 'Fleece Pullover', price: 1899, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Our fleece pullover is exceptionally soft and warm. A great choice for lounging at home or a casual outing. Provides maximum comfort.' },
//     { id: 'h4', name: 'Embroidered Pullover', price: 2199, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'Features a unique, subtle embroidery design. This pullover offers a blend of style and comfort. Made with a durable, soft fabric.' },
//     { id: 'h5', name: 'Lightweight Hoodie', price: 1699, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'A lightweight hoodie perfect for mild weather. Provides a comfortable layer without feeling bulky. Great for a morning run or casual wear.' }
// ];

// const racingProducts = [
//     { id: 'r1', name: 'Racing Jacket V1', price: 2999, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Our signature racing jacket with bold colors and graphics. Inspired by motorsport heritage, this jacket is a statement piece. Made from durable, wind-resistant material.' },
//     { id: 'r2', name: 'Moto Racing Jacket', price: 3499, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Designed for the open road. Our moto racing jacket provides both style and protection. Features padded elbows and a comfortable fit for long rides.' },
//     { id: 'r3', name: 'Windbreaker Race', price: 2599, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'A lightweight windbreaker jacket with a racing-inspired design. Perfect for a quick run or a casual day. Protects from wind and light rain.' },
//     { id: 'r4', name: 'Vintage Race Jacket', price: 3199, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'A vintage-inspired racing jacket with a classic look. Features retro patches and a comfortable lining. A timeless piece for any wardrobe.' },
//     { id: 'r5', name: 'Sport Racing Jacket', price: 2899, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'A stylish and comfortable sport racing jacket. Features a streamlined design and a soft, breathable material. Perfect for a sporty look.' }
// ];

// const trackProducts = [
//     { id: 't1', name: 'Slim Track Pants', price: 1399, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Our slim-fit track pants offer a modern, tapered look. Made from a comfortable stretch fabric for a full range of motion. Perfect for the gym or a casual day out.' },
//     { id: 't2', name: 'Regular Track Pants', price: 1499, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'A classic fit for maximum comfort. Our regular track pants are made from a soft, durable material. Features deep pockets and an adjustable waistband.' },
//     { id: 't3', name: 'Cargo Track Pants', price: 1699, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Our cargo track pants offer a functional and stylish look. Features multiple pockets for your essentials. Made from a durable, tear-resistant fabric.' },
//     { id: 't4', name: 'Performance Track Pants', price: 1599, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'Engineered for performance. Our performance track pants are made from a lightweight, moisture-wicking fabric. Ideal for running and sports.' },
//     { id: 't5', name: 'Fleece Lined Track Pants', price: 1899, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'Stay warm on chilly days with our fleece-lined track pants. Features a soft fleece lining for maximum comfort. Great for winter workouts.' }
// ];

// const jerseyProducts = [
//     { id: 'j1', name: 'Team Jersey', price: 1199, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'Show your team spirit with our team jersey. Made from a breathable, lightweight material. Perfect for the big game or a casual day out.' },
//     { id: 'j2', name: 'Training Jersey', price: 999, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back', 'https://placehold.co/600x750/333/fff?text=Left'], description: 'A comfortable and durable training jersey. Designed for a full range of motion. Features a soft, moisture-wicking fabric.' },
//     { id: 'j3', name: 'Retro Football Jersey', price: 1599, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'A retro-inspired football jersey with a classic look. Features a vintage team logo and a comfortable lining. A timeless piece for any wardrobe.' },
//     { id: 'j4', name: 'Basketball Jersey', price: 1499, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'A basketball jersey designed for the court. Features a lightweight, breathable material. Perfect for a pickup game or a casual day out.' },
//     { id: 'j5', name: 'Workout Tank Jersey', price: 899, images: ['https://placehold.co/600x750/000/fff?text=Front', 'https://placehold.co/600x750/111/fff?text=Right', 'https://placehold.co/600x750/222/fff?text=Back'], description: 'A workout tank jersey designed for an active lifestyle. Features a lightweight, moisture-wicking fabric. Perfect for the gym or a run.' }
// ];

// // Flatten all products for easy lookup
// const allProducts = [...cordSetProducts, ...poloProducts, ...hoodieProducts, ...racingProducts, ...trackProducts, ...jerseyProducts];

/************* State & DOM references *************/

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let shoppingBag = [];
let selectedSize = '';
let selectedQuantity = 1;
let currentProduct = null;

const cordGrid = document.getElementById('cord-grid');
const poloGrid = document.getElementById('polo-grid');
const hoodieGrid = document.getElementById('hoodie-grid');
const racingGrid = document.getElementById('racing-grid');
const trackGrid = document.getElementById('track-grid');
const jerseyGrid = document.getElementById('jersey-grid');

const wishlistGrid = document.getElementById('WISHLIST');
const bagGrid = document.getElementById('bag-grid');
const productModal = document.getElementById('product-modal');
const modalProductName = document.getElementById('modal-product-name');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductDescription = document.getElementById('modal-product-description');
const sizeOptions = document.getElementById('size-options');
const productQty = document.getElementById('product-qty');
const modalOrderBtn = document.getElementById('modal-order-btn');
const modalAddToBagBtn = document.getElementById('modal-add-to-bag-btn');

const wishlistCountEl = document.getElementById('wishlist-count');
const bagCountEl = document.getElementById('bag-count');
const homeButtonContainer = document.getElementById('home-button-container');

const heroSection = document.getElementById('hero-section'); // Added reference to hero section
const mainContent = document.querySelector('main'); // Added reference to main content

const whatsappNumber = "918080519043"; // Your WhatsApp number with country code

/************* Card generation + interactions *************/
function generateProductCard(product) {
    const isLiked = wishlist.some(i => i.id === product.id);
    const heartFillColor = isLiked ? '#333' : 'none';
    const heartStrokeColor = isLiked ? '#333' : 'currentColor';
    return `
                <div class="product-card group relative bg-white rounded-lg overflow-hidden transition-shadow duration-300 grow-on-hover" data-product-id="${product.id}" data-images='${JSON.stringify(product.images)}'>
                    <div class="img-container relative w-full overflow-hidden">
                        ${product.images.map((img, index) => `<img src="${img}" alt="${product.name} View ${index + 1}" class="product-image ${index === 0 ? 'opacity-100' : 'opacity-0'}">`).join('')}
                        <button class="wishlist-btn absolute top-2 right-2 p-2 bg-white bg-opacity-70 rounded-full z-10 text-gray-500" data-product-id="${product.id}" title="Add to wishlist">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="${heartFillColor}" stroke="${heartStrokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 1.24-3.72 2.76L12 7.5l-1.72-2.74C9.5 4.24 8.26 3 6.5 3A5.5 5.5 0 0 0 1 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        </button>
                    </div>
                    <div class="p-4 text-center">
                        <h3 class="text-sm font-medium mb-1 truncate-ellipsis">${product.name}</h3>
                        <p class="text-base font-semibold text-gray-700">₹${product.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="add-to-bag-btn bg-white text-gray-900 font-bold py-2 px-6 rounded-full text-sm" data-product-id="${product.id}">ADD TO BAG</button>
                    </div>
                </div>
            `;
}

function bind3DAndButtons(gridElement) {
    if (!gridElement) return;
    gridElement.querySelectorAll('.product-card').forEach(card => {
        const images = JSON.parse(card.dataset.images || '[]');
        const imageElements = Array.from(card.querySelectorAll('.product-image'));

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width || 1;
            const imageIndex = Math.floor((x / width) * images.length);
            imageElements.forEach((img, idx) => img.style.opacity = idx === imageIndex ? '1' : '0');
        });

        card.addEventListener('mouseleave', () => {
            imageElements.forEach((img, idx) => img.style.opacity = idx === 0 ? '1' : '0');
        });
    });
}

function renderProducts(list, gridElement) {
    if (!gridElement) return;
    gridElement.innerHTML = list.map(generateProductCard).join('');
    bind3DAndButtons(gridElement);
    syncWishlistIcons(); // 🔥 important
}


/************* Wishlist & Bag management *************/
function updateCounts() {
    wishlistCountEl.textContent = wishlist.length;
    bagCountEl.textContent = shoppingBag.length;
}

function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
    } else {
        wishlist.push(productId);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateCounts();
    syncWishlistIcons();
}



function addToBag(product) {
    shoppingBag.push(product);
    updateCounts();
}

function removeFromBag(index) {
    shoppingBag.splice(index, 1);
    updateCounts();
    renderShoppingBag();
}

function renderWishlist() {
    if (!wishlistGrid) return;

    if (wishlist.length === 0) {
        wishlistGrid.innerHTML =
          `<p class="col-span-full text-center text-gray-600">
            Your wishlist is empty.
          </p>`;
        return;
    }

    const items = wishlist
        .map(id => findProductById(id))
        .filter(Boolean);

    wishlistGrid.innerHTML = items
        .map(generateProductCard)
        .join('');

    bind3DAndButtons(wishlistGrid);
    syncWishlistIcons();
}



function renderShoppingBag() {
    if (!bagGrid) return;
   const gridContainer = bagGrid;
    if (shoppingBag.length === 0) {
        gridContainer.innerHTML = `<p class="col-span-full text-center text-gray-600">Your shopping bag is empty.</p>`;
        return;
    }
    const itemsHtml = shoppingBag.map((product, i) => `
                <div class="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                    <img src="${product.images[0]}" alt="${product.name}" class="w-20 h-24 object-cover rounded-md">
                    <div class="flex-1">
                        <p class="font-semibold">${product.name}</p>
                        <p class="text-sm text-gray-600">₹${product.price.toLocaleString('en-IN')}</p>
                        <p class="text-xs text-gray-500">Size: ${product.size}</p>
                        <p class="text-xs text-gray-500">Qty: ${product.quantity}</p>
                    </div>
                    <div class="text-right">
                        <button class="remove-from-bag-btn text-gray-500" data-index="${i}">Remove</button>
                    </div>
                </div>
            `).join('');

    const subtotal = shoppingBag.reduce((s, p) => s + (Number(p.price) * p.quantity), 0);
    gridContainer.innerHTML = `
                <div class="space-y-4">
                    ${itemsHtml}
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h4 class="text-lg font-bold mb-2">Order Summary</h4>
                        <div class="flex justify-between text-gray-700"><span>Subtotal</span><span>₹${subtotal.toLocaleString('en-IN')}</span></div>
                        <div class="flex justify-between text-gray-700"><span>Shipping</span><span>FREE</span></div>
                        <div class="flex justify-between font-bold text-lg mt-4 border-t pt-4"><span>Total</span><span>₹${subtotal.toLocaleString('en-IN')}</span></div>
                        <button onclick="orderOnWhatsAppFromBag()" class="w-full bg-green-500 text-white font-semibold py-3 rounded-md transition-colors hover:bg-green-600 mt-6">ORDER ON WHATSAPP</button>
                    </div>
                </div>
            `;
}

/************* WhatsApp Order Function *************/
function orderOnWhatsAppFromBag() {
    if (shoppingBag.length === 0) {
        // Use a custom modal or message box instead of alert
        alert("Your bag is empty!");
        return;
    }

    let message = "Hello, I’d like to order:\n\n";
    let total = 0;

    shoppingBag.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (Size: ${item.size}, Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
        total += item.price * item.quantity;
    });

    message += `\nTotal: ₹${total.toLocaleString('en-IN')}\n\nPlease confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
}

/************* Product Modal Logic *************/

function findProductById(productId) {
    const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    if (!card) return null;

    return {
        id: productId,
        name: card.querySelector('h2, h3')?.textContent.trim(),
        price: Number(
            card.querySelector('p')?.textContent.replace('₹', '').trim()
        ),
        images: JSON.parse(card.dataset.images || '[]'),
        description: card.querySelector('.view-btn')?.dataset.desc || 'Description coming soon'
    };
}



function openProductModal(productId) {
    currentProduct = findProductById(productId);
    if (!currentProduct) return;

    modalProductName.textContent = currentProduct.name;
    modalProductPrice.textContent = `₹${currentProduct.price.toLocaleString('en-IN')}`;
    modalProductImage.src = currentProduct.images[0];
    modalProductImage.alt = currentProduct.name;
    modalProductDescription.textContent = currentProduct.description;

    productModal.classList.add('is-active');
    selectedSize = '';
    productQty.value = 1;
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('bg-gray-900', 'text-white'));

    sizeOptions.querySelectorAll('.size-btn').forEach(btn => {
        btn.onclick = () => {
            selectedSize = btn.dataset.size;
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('bg-gray-900', 'text-white'));
            btn.classList.add('bg-gray-900', 'text-white');
        };
    });
    document.getElementById('increment-qty').onclick = () => productQty.value = parseInt(productQty.value) + 1;
    document.getElementById('decrement-qty').onclick = () => {
        const currentVal = parseInt(productQty.value);
        if (currentVal > 1) productQty.value = currentVal - 1;
    };
    modalOrderBtn.onclick = () => {
        if (!selectedSize) {
            alert('Please select a size!');
            return;
        }
        orderOnWhatsAppFromModal(currentProduct, selectedSize, productQty.value);
    };
    modalAddToBagBtn.onclick = () => {
        if (!selectedSize) {
            alert('Please select a size!');
            return;
        }
        addToBag({ ...currentProduct, size: selectedSize, quantity: parseInt(productQty.value) });
        closeProductModal();
        alert(`${currentProduct.name} (Size: ${selectedSize}, Qty: ${productQty.value}) added to bag!`);
    };
}

function closeProductModal() {
    productModal.classList.remove('is-active');
}

function orderOnWhatsAppFromModal(product, size, quantity) {
    const message = `Hello, I'd like to order the following product:\n\n` +
        `Product: ${product.name}\n` +
        `Size: ${size}\n` +
        `Quantity: ${quantity}\n` +
        `Total Price: ₹${(product.price * quantity).toLocaleString('en-IN')}\n\n` +
        `Please confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
}



/************* Page rendering (navigation) *************/
function showOnly(sectionIds = []) {
   const allSections = [
 'explore-styles',
 'video-section',
 'PRODUCTS',
 'WISHLIST',
 'BAG'
];

    allSections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.display = sectionIds.includes(id) ? '' : 'none';
    });

    if (sectionIds.includes('home') || (sectionIds.includes('explore-styles') && sectionIds.length > 1)) {
        homeButtonContainer.style.display = 'none';
    } else {
        homeButtonContainer.style.display = '';
        homeButtonContainer.classList.add('slide-up-fade-in');
    }
}

function renderPage(page, pushState = true) {
    const video = document.getElementById('promo-video');
  const sectionsToDisplay = {
  home: ['explore-styles', 'video-section', 'PRODUCTS'],
  women: ['explore-styles', 'video-section', 'PRODUCTS'],
  men: ['explore-styles', 'video-section', 'PRODUCTS'],
  wishlist: ['WISHLIST'],
  bag: ['BAG']
};

    const sectionIds = sectionsToDisplay[page] || [];
    showOnly(sectionIds);

    // Logic to control the Hero Section visibility
    if (page === 'home' || page === 'women' || page === 'men') {
        heroSection.classList.remove('hidden-hero');
        mainContent.style.marginTop = '5rem'; // Default margin to offset header
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    } else { // wishlist, bag, or any other section where the hero should be hidden
        heroSection.classList.add('hidden-hero');
        mainContent.style.marginTop = '5rem'; // Ensure content starts right under the header
        if (video) {
            video.pause();
        }
    }

    if (page === 'home' || page === 'women' || page === 'men') {
        renderAllCategoryGrids();
    }

    if (page === 'wishlist') renderWishlist();
    if (page === 'bag') renderShoppingBag();

    // Scroll to the top if the hero is hidden
    if (heroSection.classList.contains('hidden-hero') && pushState) {
        // Use a slight delay to allow the CSS height transition to finish before scrolling
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 300);
    }

    if (pushState) {
        history.pushState({ page: page }, '', `#${page}`);
    }
}

function showSection(sectionId) {
    showOnly([sectionId, 'home-button-container']);
}

function syncWishlistIcons() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const pid = btn.dataset.productId;
        const isLiked = wishlist.some(p => p.id === pid);
        const svg = btn.querySelector('svg');

        if (!svg) return;

        svg.setAttribute('fill', isLiked ? '#333' : 'none');
        svg.setAttribute('stroke', isLiked ? '#333' : 'currentColor');
    });
}

/************* Global event delegation *************/
document.addEventListener('click', (e) => {
    console.log('Click target:', e.target);

    const link = e.target.closest('[data-page]');
    if (link) {
        e.preventDefault();
        const page = link.dataset.page;
        renderPage(page);
        document.getElementById('mobile-menu').classList.add('-translate-x-full');
        return;
    }

   const wishlistBtn = e.target.closest('.wishlist-btn');
if (wishlistBtn) {
    e.preventDefault();
    e.stopImmediatePropagation();

    const pid = wishlistBtn.dataset.productId;
    toggleWishlist(pid);
    return;
}


    const addBtn = e.target.closest('.add-to-bag-btn');
    if (addBtn) {
        e.stopPropagation();
        const pid = addBtn.dataset.productId;
        const product = findProductById(pid);
        if (product) {
            addToBag({ ...product, size: "N/A", quantity: 1 });
            updateCounts();
            addBtn.textContent = 'Added';
            setTimeout(() => addBtn.textContent = 'ADD TO BAG', 800);
        }
        return;
    }

    const removeBtn = e.target.closest('.remove-from-bag-btn');
    if (removeBtn) {
        const index = Number(removeBtn.dataset.index);
        if (!isNaN(index)) {
            removeFromBag(index);
        }
        return;
    }

    // Handle view button clicks
    const viewBtn = e.target.closest('.view-btn, button[data-name]');
    if (viewBtn) {
        e.stopPropagation();
        const productData = {
            id: viewBtn.closest('.product-card')?.dataset.productId || 'temp_' + Date.now(),
            name: viewBtn.dataset.name,
            price: parseInt(viewBtn.dataset.price),
            description: viewBtn.dataset.desc,
            images: [viewBtn.dataset.image]
        };
        console.log('Opening modal with product:', productData);
        openProductModal(productData.id, productData);
        return;
    }

    const productCard = e.target.closest('.product-card');
    if (productCard &&
        !e.target.closest('.wishlist-btn') &&
        !e.target.closest('.add-to-bag-btn') &&
        !e.target.closest('button[data-name]')) {
        console.log('Product card clicked:', productCard);
        const pid = productCard.dataset.productId;
        openProductModal(pid);
        return;
    }
});

/************* Mobile menu toggles *************/
document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('-translate-x-full');
});
document.getElementById('mobile-menu-close').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('-translate-x-full');
});

/************* Modal close button *************/
document.getElementById('close-modal-btn').addEventListener('click', closeProductModal);

/************* Initial render *************/
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('full-screen-logo').style.opacity = '0';
    }, 1400);
    setTimeout(() => {
        document.getElementById('full-screen-logo').style.display = 'none';
    }, 2200);

    updateCounts();
    const initialPage = window.location.hash.substring(1) || 'home';
    renderPage(initialPage, false);
});

// Listen for back/forward button presses
window.addEventListener('popstate', (event) => {
    const page = event.state && event.state.page ? event.state.page : 'home';
    renderPage(page, false);
});
