// ===== Recipe Data (Array of Objects) =====
const recipes = [
    {
        id: 1,
        title: "Classic Margherita Pizza",
        cuisine: "italian",
        difficulty: "Medium",
        prepTime: "30 min",
        cookTime: "15 min",
        servings: "4",
        description: "A traditional Italian pizza with fresh mozzarella, tomatoes, and basil on a crispy thin crust.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
        featured: true,
        ingredients: [
            "2 cups all-purpose flour",
            "3/4 cup warm water",
            "1 tsp active dry yeast",
            "1 tsp salt",
            "1 tbsp olive oil",
            "1/2 cup San Marzano tomato sauce",
            "8 oz fresh mozzarella, sliced",
            "Fresh basil leaves",
            "Extra virgin olive oil for drizzling"
        ],
        instructions: [
            "In a large bowl, combine flour, yeast, and salt. Add warm water and olive oil, mixing until a dough forms.",
            "Knead the dough on a floured surface for 8-10 minutes until smooth and elastic.",
            "Let the dough rise in a covered bowl for 1 hour until doubled in size.",
            "Preheat your oven to 475°F (245°C) with a pizza stone or baking sheet inside.",
            "Roll out the dough on a floured surface to your desired thickness.",
            "Spread tomato sauce evenly over the dough, leaving a small border for the crust.",
            "Arrange mozzarella slices over the sauce.",
            "Bake for 12-15 minutes until the crust is golden and cheese is bubbly.",
            "Remove from oven, top with fresh basil leaves, and drizzle with olive oil. Serve immediately."
        ]
    },
    {
        id: 2,
        title: "Chicken Tacos",
        cuisine: "mexican",
        difficulty: "Easy",
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "6",
        description: "Seasoned chicken tacos topped with fresh salsa, avocado, and cilantro on warm corn tortillas.",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop",
        featured: true,
        ingredients: [
            "1 lb chicken breast, diced",
            "2 tbsp taco seasoning",
            "12 corn tortillas",
            "1 cup fresh salsa",
            "2 avocados, sliced",
            "1/2 cup fresh cilantro, chopped",
            "1 lime, cut into wedges",
            "1/2 cup sour cream",
            "1 cup shredded lettuce"
        ],
        instructions: [
            "Season diced chicken with taco seasoning and a splash of water.",
            "Heat a skillet over medium-high heat and cook chicken for 8-10 minutes until fully cooked and slightly crispy.",
            "Warm tortillas in a dry skillet or microwave for 30 seconds.",
            "Assemble tacos: place chicken on tortillas, top with salsa, avocado slices, cilantro, and sour cream.",
            "Squeeze fresh lime juice over tacos and serve with shredded lettuce on the side."
        ]
    },
    {
        id: 3,
        title: "Pad Thai",
        cuisine: "asian",
        difficulty: "Medium",
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "4",
        description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and a tangy tamarind sauce.",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop",
        featured: true,
        ingredients: [
            "8 oz rice noodles",
            "1/2 lb shrimp, peeled and deveined",
            "1/2 cup firm tofu, cubed",
            "3 tbsp tamarind paste",
            "2 tbsp fish sauce",
            "1 tbsp brown sugar",
            "2 eggs",
            "1 cup bean sprouts",
            "1/4 cup roasted peanuts, crushed",
            "3 green onions, sliced",
            "Lime wedges for serving"
        ],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes, then drain.",
            "Mix tamarind paste, fish sauce, and brown sugar to create the sauce.",
            "Heat oil in a wok or large skillet over high heat. Cook shrimp for 2-3 minutes until pink, then set aside.",
            "Add tofu to the wok and cook until golden. Push to the side and scramble eggs in the same pan.",
            "Add drained noodles and sauce to the wok, tossing to combine. Cook for 2-3 minutes.",
            "Return shrimp to the wok, add bean sprouts and half the green onions. Toss everything together.",
            "Serve topped with crushed peanuts, remaining green onions, and lime wedges."
        ]
    },
    {
        id: 4,
        title: "Greek Salad",
        cuisine: "mediterranean",
        difficulty: "Easy",
        prepTime: "15 min",
        cookTime: "0 min",
        servings: "4",
        description: "Fresh cucumbers, tomatoes, olives, and feta cheese drizzled with olive oil and oregano.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop",
        featured: true,
        ingredients: [
            "4 large tomatoes, cut into wedges",
            "1 cucumber, sliced",
            "1 red onion, thinly sliced",
            "1 cup Kalamata olives",
            "8 oz feta cheese, cubed",
            "1/4 cup extra virgin olive oil",
            "2 tbsp red wine vinegar",
            "1 tsp dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a large bowl, combine tomatoes, cucumber, red onion, and olives.",
            "Add feta cheese cubes on top.",
            "In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper.",
            "Drizzle dressing over the salad just before serving.",
            "Toss gently and serve immediately. Best enjoyed fresh!"
        ]
    },
    {
        id: 5,
        title: "Spaghetti Carbonara",
        cuisine: "italian",
        difficulty: "Medium",
        prepTime: "10 min",
        cookTime: "20 min",
        servings: "4",
        description: "Creamy pasta with eggs, Parmesan cheese, pancetta, and black pepper.",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop",
        featured: false,
        ingredients: [
            "1 lb spaghetti",
            "6 oz pancetta or guanciale, diced",
            "4 large eggs",
            "1 cup Parmesan cheese, grated",
            "1/2 cup Pecorino Romano, grated",
            "Freshly ground black pepper",
            "Salt for pasta water"
        ],
        instructions: [
            "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
            "While pasta cooks, fry pancetta in a large skillet over medium heat until crispy, about 8 minutes.",
            "In a bowl, whisk together eggs, Parmesan, Pecorino, and a generous amount of black pepper.",
            "Reserve 1 cup of pasta water, then drain the spaghetti.",
            "Add hot pasta to the skillet with pancetta (remove from heat).",
            "Quickly pour egg mixture over pasta, tossing constantly to create a creamy sauce. Add pasta water as needed.",
            "Serve immediately with extra cheese and black pepper on top."
        ]
    },
    {
        id: 6,
        title: "Sushi Roll",
        cuisine: "asian",
        difficulty: "Hard",
        prepTime: "40 min",
        cookTime: "20 min",
        servings: "4",
        description: "Fresh sushi rolls with salmon, avocado, and cucumber wrapped in nori and seasoned rice.",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=600&fit=crop",
        featured: false,
        ingredients: [
            "2 cups sushi rice",
            "3 tbsp rice vinegar",
            "1 tbsp sugar",
            "1 tsp salt",
            "4 nori sheets",
            "8 oz fresh salmon, sliced into strips",
            "1 avocado, sliced",
            "1 cucumber, julienned",
            "Soy sauce for serving",
            "Wasabi and pickled ginger for serving"
        ],
        instructions: [
            "Rinse sushi rice until water runs clear. Cook according to package directions.",
            "Mix rice vinegar, sugar, and salt. Fold into cooked rice and let cool to room temperature.",
            "Place a nori sheet shiny-side down on a bamboo sushi mat.",
            "Spread a thin layer of rice over the nori, leaving a 1-inch border at the top.",
            "Arrange salmon, avocado, and cucumber in a line across the center of the rice.",
            "Using the bamboo mat, roll the sushi tightly away from you, applying gentle pressure.",
            "Seal the edge with a bit of water. Let rest for 5 minutes.",
            "Using a sharp wet knife, cut the roll into 8 pieces. Serve with soy sauce, wasabi, and ginger."
        ]
    }
];

// ===== DOM Elements =====
const recipesGrid = document.getElementById('recipes-grid');
const featuredGrid = document.getElementById('featured-recipes-grid');
const favoritesGrid = document.getElementById('favorites-grid');
const searchInput = document.getElementById('recipe-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('no-results');
const noFavorites = document.getElementById('no-favorites');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');
const recipeModal = document.getElementById('recipe-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');

// ===== Function 1: Render Recipe Cards =====
function renderRecipes(recipesToRender, gridElement, showFavoriteBtn = true) {
    // Clear existing content
    gridElement.innerHTML = '';

    // Check if there are recipes to display
    if (recipesToRender.length === 0) {
        if (gridElement === recipesGrid || gridElement === featuredGrid) {
            noResults.classList.remove('hidden');
        }
        return;
    }

    if (gridElement === recipesGrid || gridElement === featuredGrid) {
        noResults.classList.add('hidden');
    }

    // Use array method forEach to iterate
    recipesToRender.forEach(recipe => {
        const isFavorite = isRecipeFavorite(recipe.id);
        
        // Use template literal for building HTML string
        const recipeCard = `
            <article class="recipe-card" role="listitem" data-id="${recipe.id}">
                ${showFavoriteBtn ? `<button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${recipe.id}" aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">❤️</button>` : ''}
                <img
                    src="${recipe.image}"
                    alt="${recipe.title} - a delicious ${recipe.cuisine} dish"
                    class="recipe-card-image"
                    loading="lazy"
                    width="400"
                    height="300"
                >
                <div class="recipe-card-content">
                    <span class="recipe-card-cuisine">${recipe.cuisine}</span>
                    <h3 class="recipe-card-title">${recipe.title}</h3>
                    <div class="recipe-card-meta">
                        <span>⏱ ${recipe.prepTime}</span>
                        <span>📊 ${recipe.difficulty}</span>
                    </div>
                    <p class="recipe-card-description">${recipe.description}</p>
                </div>
            </article>
        `;
        gridElement.insertAdjacentHTML('beforeend', recipeCard);
    });

    // Add click event listeners to new cards
    addCardClickListeners();
    
    // Add favorite button listeners if applicable
    if (showFavoriteBtn) {
        addFavoriteButtonListeners();
    }
}

// ===== Function 2: Filter Recipes =====
function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.cuisine;

    // Use array filter method
    const filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
                             recipe.description.toLowerCase().includes(searchTerm);
        const matchesCuisine = activeFilter === 'all' || recipe.cuisine === activeFilter;
        return matchesSearch && matchesCuisine;
    });

    renderRecipes(filtered, recipesGrid);
}

// ===== Function 3: Handle Filter Button Clicks =====
function handleFilterClick(event) {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    event.target.classList.add('active');

    // Re-filter recipes
    filterRecipes();
}

// ===== Function 4: Add Click Listeners to Recipe Cards =====
function addCardClickListeners() {
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Don't open modal if clicking favorite button
            if (event.target.classList.contains('favorite-btn')) {
                return;
            }
            
            const recipeId = parseInt(card.dataset.id);
            
            // Use conditional branching
            if (recipeId) {
                openRecipeModal(recipeId);
            }
        });
    });
}

// ===== Function 5: Toggle Mobile Menu =====
function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
}

// ===== Function 6: Save to LocalStorage =====
function saveViewedRecipe(recipeId) {
    let viewedRecipes = [];

    // Retrieve from localStorage
    const stored = localStorage.getItem('viewedRecipes');
    if (stored) {
        viewedRecipes = JSON.parse(stored);
    }

    // Use conditional branching to avoid duplicates
    if (!viewedRecipes.includes(recipeId)) {
        viewedRecipes.push(recipeId);
        localStorage.setItem('viewedRecipes', JSON.stringify(viewedRecipes));
    }
}

// ===== Function 7: Toggle Favorite =====
function toggleFavorite(recipeId) {
    let favorites = [];

    // Retrieve from localStorage
    const stored = localStorage.getItem('favorites');
    if (stored) {
        favorites = JSON.parse(stored);
    }

    // Use conditional branching
    const index = favorites.indexOf(recipeId);
    if (index > -1) {
        // Remove from favorites
        favorites.splice(index, 1);
    } else {
        // Add to favorites
        favorites.push(recipeId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update UI
    updateFavoriteButtons();
    renderFavorites();
}

// ===== Function 8: Check if Recipe is Favorite =====
function isRecipeFavorite(recipeId) {
    const stored = localStorage.getItem('favorites');
    if (stored) {
        const favorites = JSON.parse(stored);
        return favorites.includes(recipeId);
    }
    return false;
}

// ===== Function 9: Update Favorite Buttons =====
function updateFavoriteButtons() {
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        const recipeId = parseInt(btn.dataset.id);
        const isFavorite = isRecipeFavorite(recipeId);
        
        if (isFavorite) {
            btn.classList.add('active');
            btn.setAttribute('aria-label', 'Remove from favorites');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-label', 'Add to favorites');
        }
    });
}

// ===== Function 10: Add Favorite Button Listeners =====
function addFavoriteButtonListeners() {
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent card click
            const recipeId = parseInt(btn.dataset.id);
            toggleFavorite(recipeId);
        });
    });
}

// ===== Function 11: Render Favorites =====
function renderFavorites() {
    const stored = localStorage.getItem('favorites');
    
    if (!stored) {
        favoritesGrid.innerHTML = '';
        noFavorites.classList.remove('hidden');
        return;
    }

    const favoriteIds = JSON.parse(stored);
    
    // Use array filter method to get favorite recipes
    const favoriteRecipes = recipes.filter(recipe => favoriteIds.includes(recipe.id));

    if (favoriteRecipes.length === 0) {
        favoritesGrid.innerHTML = '';
        noFavorites.classList.remove('hidden');
    } else {
        noFavorites.classList.add('hidden');
        renderRecipes(favoriteRecipes, favoritesGrid, true);
    }
}

// ===== Function 12: Open Recipe Modal =====
function openRecipeModal(recipeId) {
    // Use array find method
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) return;

    const isFavorite = isRecipeFavorite(recipe.id);

    // Use template literal for modal content
    const modalContent = `
        <div class="modal-body-content">
            <img
                src="${recipe.image}"
                alt="${recipe.title}"
                class="modal-image"
                loading="lazy"
            >
            <span class="modal-cuisine">${recipe.cuisine}</span>
            <h2 class="modal-title">${recipe.title}</h2>
            <div class="modal-meta">
                <div class="modal-meta-item">
                    <span>⏱</span>
                    <span>Prep: ${recipe.prepTime}</span>
                </div>
                <div class="modal-meta-item">
                    <span>🔥</span>
                    <span>Cook: ${recipe.cookTime}</span>
                </div>
                <div class="modal-meta-item">
                    <span>📊</span>
                    <span>${recipe.difficulty}</span>
                </div>
                <div class="modal-meta-item">
                    <span>🍽️</span>
                    <span>Serves: ${recipe.servings}</span>
                </div>
            </div>
            <p class="modal-description">${recipe.description}</p>
            
            <h3 class="modal-section-title">Ingredients</h3>
            <ul class="modal-ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            
            <h3 class="modal-section-title">Instructions</h3>
            <ol class="modal-instructions-list">
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
            
            <button class="modal-favorite-btn ${isFavorite ? 'active' : ''}" data-id="${recipe.id}">
                ${isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
            </button>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    recipeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Add event listener to modal favorite button
    const modalFavoriteBtn = modalBody.querySelector('.modal-favorite-btn');
    modalFavoriteBtn.addEventListener('click', () => {
        toggleFavorite(recipeId);
        openRecipeModal(recipeId); // Refresh modal
    });

    // Save to viewed recipes
    saveViewedRecipe(recipeId);
}

// ===== Function 13: Close Recipe Modal =====
function closeRecipeModal() {
    recipeModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// ===== Event Listeners =====
// Search input - listen for input events
if (searchInput) {
    searchInput.addEventListener('input', filterRecipes);
}

// Filter buttons - listen for click events
filterButtons.forEach(btn => {
    btn.addEventListener('click', handleFilterClick);
});

// Mobile menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

// Modal close button
if (modalClose) {
    modalClose.addEventListener('click', closeRecipeModal);
}

// Close modal when clicking outside
if (recipeModal) {
    recipeModal.addEventListener('click', (event) => {
        if (event.target === recipeModal) {
            closeRecipeModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !recipeModal.classList.contains('hidden')) {
        closeRecipeModal();
    }
});

// ===== Initialize Page =====
// Check which page we're on and render accordingly
if (recipesGrid) {
    // We're on the recipes page - render all recipes
    renderRecipes(recipes, recipesGrid);
    renderFavorites();
} else if (featuredGrid) {
    // We're on the home page - render only featured recipes
    const featuredRecipes = recipes.filter(recipe => recipe.featured);
    renderRecipes(featuredRecipes, featuredGrid, false);
}

// Log to console for debugging
console.log('Flavor Journey - Page loaded successfully!');
console.log(`Total recipes: ${recipes.length}`);