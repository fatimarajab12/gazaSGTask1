// Extended product data with ratings, stock, sale status, and descriptions
const products = [
    { 
        name: "Laptop", 
        category: "Electronics", 
        price: 1000, 
        image: "https://via.placeholder.com/300x200?text=Laptop",
        rating: 4.5,
        stock: true,
        description: "A high-performance laptop perfect for work and gaming.",
        onSale: true
    },
    { 
        name: "T-Shirt", 
        category: "Clothing", 
        price: 20, 
        image: "https://via.placeholder.com/300x200?text=T-Shirt",
        rating: 4.0,
        stock: true,
        description: "A comfortable and stylish t-shirt for daily wear.",
        onSale: false
    },
    { 
        name: "Smartphone", 
        category: "Electronics", 
        price: 500, 
        image: "https://via.placeholder.com/300x200?text=Smartphone",
        rating: 4.7,
        stock: false,  // Out of stock
        description: "A sleek smartphone with a stunning display.",
        onSale: true
    },
    { 
        name: "Jeans", 
        category: "Clothing", 
        price: 40, 
        image: "https://via.placeholder.com/300x200?text=Jeans",
        rating: 4.2,
        stock: true,
        description: "Durable and fashionable jeans for all occasions.",
        onSale: false
    },
    { 
        name: "Action Figure", 
        category: "Toys", 
        price: 25, 
        image: "https://via.placeholder.com/300x200?text=Action+Figure",
        rating: 4.5,
        stock: true,
        description: "A collectible action figure from your favorite franchise.",
        onSale: true
    },
    { 
        name: "Board Game", 
        category: "Toys", 
        price: 30, 
        image: "https://via.placeholder.com/300x200?text=Board+Game",
        rating: 4.8,
        stock: true,
        description: "A fun-filled board game for the whole family.",
        onSale: false
    },
    { 
        name: "Headphones", 
        category: "Electronics", 
        price: 150, 
        image: "https://via.placeholder.com/300x200?text=Headphones",
        rating: 4.6,
        stock: true,
        description: "Noise-cancelling headphones with immersive sound.",
        onSale: true
    },
    { 
        name: "Jacket", 
        category: "Clothing", 
        price: 100, 
        image: "https://via.placeholder.com/300x200?text=Jacket",
        rating: 4.3,
        stock: true,
        description: "A stylish jacket to keep you warm and fashionable.",
        onSale: false
    },
    { 
        name: "Tablet", 
        category: "Electronics", 
        price: 300, 
        image: "https://via.placeholder.com/300x200?text=Tablet",
        rating: 4.4,
        stock: false,  // Out of stock
        description: "A powerful tablet for work and entertainment on the go.",
        onSale: true
    },
    { 
        name: "Sneakers", 
        category: "Clothing", 
        price: 60, 
        image: "https://via.placeholder.com/300x200?text=Sneakers",
        rating: 4.7,
        stock: true,
        description: "Comfortable and trendy sneakers for everyday wear.",
        onSale: true
    },
    { 
        name: "Dollhouse", 
        category: "Toys", 
        price: 70, 
        image: "https://via.placeholder.com/300x200?text=Dollhouse",
        rating: 4.5,
        stock: true,
        description: "A beautiful dollhouse with intricate details and furniture.",
        onSale: false
    },
    { 
        name: "Smartwatch", 
        category: "Electronics", 
        price: 200, 
        image: "https://via.placeholder.com/300x200?text=Smartwatch",
        rating: 4.6,
        stock: true,
        description: "A smartwatch that tracks your fitness and notifications.",
        onSale: true
    },
    { 
        name: "Winter Coat", 
        category: "Clothing", 
        price: 120, 
        image: "https://via.placeholder.com/300x200?text=Winter+Coat",
        rating: 4.4,
        stock: true,
        description: "A warm winter coat with a cozy lining.",
        onSale: false
    },
    { 
        name: "Lego Set", 
        category: "Toys", 
        price: 80, 
        image: "https://via.placeholder.com/300x200?text=Lego+Set",
        rating: 4.9,
        stock: false,  // Out of stock
        description: "A challenging and fun Lego set for builders of all ages.",
        onSale: true
    }
];



function generateProductCards(products) {
    return products.map(product => {
        // Star rating logic
        const fullStars = Math.floor(product.rating);
        const halfStar = product.rating % 1 !== 0;
        let ratingStars = '';
        for (let i = 0; i < fullStars; i++) {
            ratingStars += '<i class="fas fa-star"></i>';
        }
        if (halfStar) {
            ratingStars += '<i class="fas fa-star-half-alt"></i>';
        }

        return `
            <div class="product-card">
                ${product.onSale ? '<div class="sale-label">Sale</div>' : ''}
                <i class="fas fa-heart wishlist"></i>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h2>${product.name}</h2>
                <div class="rating">${ratingStars}</div>
                <p class="product-description">${product.description}</p>
                <p class="price">$${product.price}</p>
                <p class="stock ${product.stock ? '' : 'out-of-stock'}">
                    ${product.stock ? 'In Stock' : 'Out of Stock'}
                </p>
                <button>${product.stock ? 'Add to Cart' : 'Notify Me'}</button>
            </div>
        `;
    }).join('');
}

// Function to filter products by category and search term
function displayProducts(category, searchQuery = '') {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products

    // Filter products by category
    let filteredProducts = category === 'All' 
        ? products 
        : products.filter(product => product.category === category);

    // Further filter products by search query (name or price)
    if (searchQuery) {
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(lowerCaseSearchQuery) ||
            product.price.toString().includes(lowerCaseSearchQuery)
        );
    }

    // Render the filtered product list
    productList.innerHTML = generateProductCards(filteredProducts);
}

// Set up event listeners for filter buttons
const filterButtons = document.querySelectorAll('.filter-section button');
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        const searchInput = document.getElementById('search-input').value;
        displayProducts(category, searchInput);
    });
});

// Set up event listener for search input
document.getElementById('search-input').addEventListener('input', (e) => {
    const searchQuery = e.target.value;
    const activeCategoryButton = document.querySelector('.filter-section button.active');
    const activeCategory = activeCategoryButton ? activeCategoryButton.getAttribute('data-category') : 'All';
    displayProducts(activeCategory, searchQuery);
});

// Initial display of all products
displayProducts('All');


