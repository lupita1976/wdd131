// ===== Recipe Data (Array of Objects) =====
let recipes = [
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

// ===== Load Submitted Recipes from localStorage =====
function loadSubmittedRecipes() {
    const stored = localStorage.getItem('submittedRecipes');
    if (stored) {
        try {
            const submitted = JSON.parse(stored);
            // Add submitted recipes to the main recipes array
            submitted.forEach(recipe => {
                // Avoid duplicates by checking ID
                if (!recipes.find(r => r.id === recipe.id)) {
                    recipes.push(recipe);
                }
            });
        } catch (e) {
            console.error('Error loading submitted recipes:', e);
        }
    }
}

// Load submitted recipes on page load
loadSubmittedRecipes();

// ===== DOM Elements =====
const recipesGrid = document.getElementById('recipes-grid');
const featuredGrid = document.getElementById('featured-recipes-grid');
const favoritesGrid = document.getElementById('favorites-grid');
const submittedGrid = document.getElementById('submitted-grid');
const searchInput = document.getElementById('recipe-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('no-results');
const noFavorites = document.getElementById('no-favorites');
const noSubmitted = document.getElementById('no-submitted');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');
const recipeModal = document.getElementById('recipe-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');

// ===== Form Elements =====
const recipeForm = document.getElementById('recipe-form');
const formMessage = document.getElementById('form-message');

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

    // Determine which grid to render based on current page
    if (recipesGrid) {
        renderRecipes(filtered, recipesGrid);
    } else if (featuredGrid) {
        const filteredFeatured = filtered.filter(recipe => recipe.featured);
        renderRecipes(filteredFeatured, featuredGrid, false);
    }
}

// ===== Function 3: Handle Filter Button Clicks =====
function handleFilterClick(event) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    filterRecipes();
}

// ===== Function 4: Add Click Listeners to Recipe Cards =====
function addCardClickListeners() {
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (event.target.classList.contains('favorite-btn')) {
                return;
            }
            
            const recipeId = parseInt(card.dataset.id);
            
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

    const stored = localStorage.getItem('viewedRecipes');
    if (stored) {
        viewedRecipes = JSON.parse(stored);
    }

    if (!viewedRecipes.includes(recipeId)) {
        viewedRecipes.push(recipeId);
        localStorage.setItem('viewedRecipes', JSON.stringify(viewedRecipes));
    }
}

// ===== Function 7: Toggle Favorite =====
function toggleFavorite(recipeId) {
    let favorites = [];

    const stored = localStorage.getItem('favorites');
    if (stored) {
        favorites = JSON.parse(stored);
    }

    const index = favorites.indexOf(recipeId);
    
    if (index > -1) {
        const recipe = recipes.find(r => r.id === recipeId);
        const recipeName = recipe ? recipe.title : 'this recipe';
        
        const confirmRemove = confirm(`Do you really want to remove "${recipeName}" from your favorites?`);
        
        if (!confirmRemove) {
            return;
        }
        
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    
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
            event.stopPropagation();
            const recipeId = parseInt(btn.dataset.id);
            toggleFavorite(recipeId);
        });
    });
}

// ===== Function 11: Render Favorites =====
function renderFavorites() {
    if (!favoritesGrid) return;

    const stored = localStorage.getItem('favorites');
    
    if (!stored) {
        favoritesGrid.innerHTML = '';
        noFavorites.classList.remove('hidden');
        return;
    }

    const favoriteIds = JSON.parse(stored);
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
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) return;

    const isFavorite = isRecipeFavorite(recipe.id);

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
                    <span></span>
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
    document.body.style.overflow = 'hidden';

    const modalFavoriteBtn = modalBody.querySelector('.modal-favorite-btn');
    modalFavoriteBtn.addEventListener('click', () => {
        toggleFavorite(recipeId);
        openRecipeModal(recipeId);
    });

    saveViewedRecipe(recipeId);
}

// ===== Function 13: Close Recipe Modal =====
function closeRecipeModal() {
    recipeModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// ===== Function 14: Form Validation =====
function validateField(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    let isValid = true;
    let errorMessage = '';

    // Remove previous states
    field.classList.remove('error', 'success');
    if (errorElement) errorElement.textContent = '';

    // Check if required and empty
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = `${field.previousElementSibling.textContent.replace('*', '').trim()} is required.`;
    }
    // Check minlength
    else if (field.minLength > 0 && field.value.trim().length < field.minLength) {
        isValid = false;
        errorMessage = `Must be at least ${field.minLength} characters.`;
    }
    // Check URL format
    else if (field.type === 'url' && field.value.trim()) {
        try {
            new URL(field.value.trim());
        } catch {
            isValid = false;
            errorMessage = 'Please enter a valid URL.';
        }
    }
    // Check number range
    else if (field.type === 'number') {
        const numValue = parseInt(field.value);
        if (isNaN(numValue) || numValue < parseInt(field.min) || numValue > parseInt(field.max)) {
            isValid = false;
            errorMessage = `Please enter a number between ${field.min} and ${field.max}.`;
        }
    }

    // Update UI
    if (!isValid) {
        field.classList.add('error');
        if (errorElement) errorElement.textContent = errorMessage;
    } else if (field.value.trim()) {
        field.classList.add('success');
    }

    return isValid;
}

// ===== Function 15: Validate Entire Form =====
function validateForm() {
    const fields = recipeForm.querySelectorAll('input, select, textarea');
    let isFormValid = true;

    fields.forEach(field => {
        if (field.hasAttribute('required') || field.value.trim()) {
            const fieldValid = validateField(field);
            if (!fieldValid) {
                isFormValid = false;
            }
        }
    });

    return isFormValid;
}

// ===== Function 16: Handle Form Submission =====
function handleFormSubmit(event) {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
        showFormMessage('Please fix the errors above before submitting.', 'error');
        return;
    }

    // Get form values
    const recipeName = document.getElementById('recipe-name').value.trim();
    const cuisineType = document.getElementById('cuisine-type').value;
    const difficulty = document.getElementById('difficulty').value;
    const servings = document.getElementById('servings').value.trim();
    const prepTime = document.getElementById('prep-time').value.trim();
    const cookTime = document.getElementById('cook-time').value.trim();
    const imageUrl = document.getElementById('image-url').value.trim();
    const description = document.getElementById('description').value.trim();
    const ingredientsText = document.getElementById('ingredients').value.trim();
    const instructionsText = document.getElementById('instructions').value.trim();

    // Parse ingredients and instructions (split by new line)
    const ingredients = ingredientsText.split('\n').filter(line => line.trim());
    const instructions = instructionsText.split('\n').filter(line => line.trim());

    // Use default image if none provided
    const defaultImage = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop';
    const finalImage = imageUrl || defaultImage;

    // Create new recipe object
    const newRecipe = {
        id: Date.now(), // Use timestamp as unique ID
        title: recipeName,
        cuisine: cuisineType,
        difficulty: difficulty,
        prepTime: prepTime,
        cookTime: cookTime,
        servings: servings,
        description: description,
        image: finalImage,
        featured: false,
        ingredients: ingredients,
        instructions: instructions,
        submitted: true,
        submittedDate: new Date().toISOString()
    };

    // Save to localStorage
    let submittedRecipes = [];
    const stored = localStorage.getItem('submittedRecipes');
    if (stored) {
        submittedRecipes = JSON.parse(stored);
    }
    submittedRecipes.push(newRecipe);
    localStorage.setItem('submittedRecipes', JSON.stringify(submittedRecipes));

    // Add to main recipes array
    recipes.push(newRecipe);

    // Show success message
    showFormMessage(`🎉 Success! "${recipeName}" has been submitted and added to our collection.`, 'success');

    // Reset form
    recipeForm.reset();
    clearFormStates();

    // Re-render submitted recipes
    renderSubmittedRecipes();

    // Scroll to submitted recipes section
    setTimeout(() => {
        document.querySelector('.submitted-recipes').scrollIntoView({ behavior: 'smooth' });
    }, 500);
}

// ===== Function 17: Show Form Message =====
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.classList.remove('hidden');

    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
}

// ===== Function 18: Clear Form States =====
function clearFormStates() {
    const fields = recipeForm.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
        field.classList.remove('error', 'success');
    });
    const errorMessages = recipeForm.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.textContent = '';
    });
}

// ===== Function 19: Render Submitted Recipes =====
function renderSubmittedRecipes() {
    if (!submittedGrid) return;

    const stored = localStorage.getItem('submittedRecipes');
    
    if (!stored) {
        submittedGrid.innerHTML = '';
        noSubmitted.classList.remove('hidden');
        return;
    }

    const submittedRecipes = JSON.parse(stored);

    if (submittedRecipes.length === 0) {
        submittedGrid.innerHTML = '';
        noSubmitted.classList.remove('hidden');
    } else {
        noSubmitted.classList.add('hidden');
        renderRecipes(submittedRecipes, submittedGrid, true);
    }
}

// ===== Function 20: Character Counter for Description =====
function updateCharCounter() {
    const descriptionField = document.getElementById('description');
    const counter = document.getElementById('description-counter');
    
    if (descriptionField && counter) {
        const currentLength = descriptionField.value.length;
        const maxLength = descriptionField.maxLength || 500;
        counter.textContent = `${currentLength} / ${maxLength} characters`;
        
        // Change color when approaching limit
        if (currentLength > maxLength * 0.9) {
            counter.style.color = '#dc3545';
        } else if (currentLength > maxLength * 0.7) {
            counter.style.color = '#ffc107';
        } else {
            counter.style.color = 'var(--color-text-light)';
        }
    }
}

// ===== Event Listeners =====
// Search input
if (searchInput) {
    searchInput.addEventListener('input', filterRecipes);
}

// Filter buttons
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
    if (event.key === 'Escape' && recipeModal && !recipeModal.classList.contains('hidden')) {
        closeRecipeModal();
    }
});

// Form submission
if (recipeForm) {
    recipeForm.addEventListener('submit', handleFormSubmit);
}

// Real-time validation on blur
if (recipeForm) {
    const formFields = recipeForm.querySelectorAll('input, select, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', () => {
            if (field.hasAttribute('required') || field.value.trim()) {
                validateField(field);
            }
        });
        
        field.addEventListener('input', () => {
            // Clear error when user starts typing
            if (field.classList.contains('error')) {
                field.classList.remove('error');
                const errorElement = document.getElementById(`${field.id}-error`);
                if (errorElement) errorElement.textContent = '';
            }
        });
    });
}

// Character counter for description
const descriptionField = document.getElementById('description');
if (descriptionField) {
    descriptionField.addEventListener('input', updateCharCounter);
}

// Form reset handler
if (recipeForm) {
    recipeForm.addEventListener('reset', () => {
        setTimeout(() => {
            clearFormStates();
            formMessage.classList.add('hidden');
            if (descriptionField) updateCharCounter();
        }, 10);
    });
}

// ===== Initialize Page =====
if (recipesGrid) {
    // We're on the recipes page
    renderRecipes(recipes, recipesGrid);
    renderFavorites();
} else if (featuredGrid) {
    // We're on the home page
    const featuredRecipes = recipes.filter(recipe => recipe.featured);
    renderRecipes(featuredRecipes, featuredGrid, false);
}

if (submittedGrid) {
    // We're on the submit page
    renderSubmittedRecipes();
}

// Log to console for debugging
console.log('Flavor Journey - Page loaded successfully!');
console.log(`Total recipes: ${recipes.length}`);