// Sample restaurant data for demonstration
const restaurantData = {
    1: {
        name: "1er Arrondissement - Louvre",
        neighborhoods: "Saint-Germain-l'Auxerrois, Les Halles, Palais-Royal, Place Vendôme",
        restaurants: [
            {
                id: 1,
                name: "Bistrot de l'Entracte",
                address: "47 Rue Montpensier, 75001 Paris",
                cuisine: "Bistrot traditionnel",
                price: "22-28€",
                notes: "Menu du jour changé quotidiennement. Spécialités: escargots, coq au vin. Ambiance authentique près du Palais-Royal.",
                reservation: "Réservation recommandée. Ouvert du mardi au samedi, 12h-14h30 et 19h-22h30."
            },
            {
                id: 2,
                name: "La Poule au Pot",
                address: "9 Rue Vauvilliers, 75001 Paris",
                cuisine: "Cuisine française classique",
                price: "26-32€",
                notes: "Restaurant historique depuis 1935. Formule du midi excellente. Décor Belle Époque préservé.",
                reservation: "Réservation obligatoire. Service continu de 12h à 2h du matin."
            }
        ]
    },
    2: {
        name: "2e Arrondissement - Bourse",
        neighborhoods: "Gaillon, Vivienne, Mail, Bonne-Nouvelle",
        restaurants: [
            {
                id: 3,
                name: "L'Ami Jean",
                address: "27 Rue Mauconseil, 75002 Paris",
                cuisine: "Bistrot moderne",
                price: "24-30€",
                notes: "Menu du jour créatif avec produits de saison. Ambiance conviviale et chaleureuse.",
                reservation: "Réservation conseillée. Fermé dimanche et lundi."
            }
        ]
    },
    3: {
        name: "3e Arrondissement - Temple",
        neighborhoods: "Arts-et-Métiers, Enfants-Rouges, Archives, Sainte-Avoye",
        restaurants: [
            {
                id: 4,
                name: "Breizh Café",
                address: "109 Rue Vieille du Temple, 75003 Paris",
                cuisine: "Crêperie moderne",
                price: "18-25€",
                notes: "Crêpes et galettes revisitées. Menu du midi original avec des produits bretons de qualité.",
                reservation: "Réservation recommandée, surtout le week-end."
            }
        ]
    }
};

// Neighborhood data mapping
const neighborhoodData = {
    'louvre': {
        arrondissement: 1,
        fullName: 'Louvre',
        neighborhoods: 'Saint-Germain-l\'Auxerrois, Les Halles, Palais-Royal, Place Vendôme'
    },
    'chatelet': {
        arrondissement: 1,
        fullName: 'Châtelet',
        neighborhoods: 'Châtelet, Pont-Neuf, Rue de Rivoli'
    },
    'grands-boulevards': {
        arrondissement: 2,
        fullName: 'Grands Boulevards',
        neighborhoods: 'Gaillon, Vivienne, Mail, Bonne-Nouvelle'
    },
    'marais': {
        arrondissement: 3,
        fullName: 'Le Marais',
        neighborhoods: 'Arts-et-Métiers, Enfants-Rouges, Archives, Sainte-Avoye'
    },
    'ile-saint-louis': {
        arrondissement: 4,
        fullName: 'Île Saint-Louis',
        neighborhoods: 'Île Saint-Louis, Notre-Dame, Hôtel de Ville'
    },
    'latin-quarter': {
        arrondissement: 5,
        fullName: 'Quartier Latin',
        neighborhoods: 'Sorbonne, Val-de-Grâce, Jardin des Plantes, Saint-Victor'
    },
    'saint-germain': {
        arrondissement: 6,
        fullName: 'Saint-Germain',
        neighborhoods: 'Saint-Germain-des-Prés, Luxembourg, Monnaie, Odéon'
    },
    'invalides': {
        arrondissement: 7,
        fullName: 'Invalides',
        neighborhoods: 'Saint-Thomas-d\'Aquin, Invalides, École-Militaire, Gros-Caillou'
    },
    'champs-elysees': {
        arrondissement: 8,
        fullName: 'Champs-Élysées',
        neighborhoods: 'Champs-Élysées, Faubourg-du-Roule, Madeleine, Europe'
    },
    'pigalle': {
        arrondissement: 9,
        fullName: 'Pigalle',
        neighborhoods: 'Saint-Georges, Chaussée-d\'Antin, Faubourg-Montmartre, Rochechouart'
    },
    'bastille': {
        arrondissement: 11,
        fullName: 'Bastille',
        neighborhoods: 'Folie-Méricourt, Saint-Ambroise, Roquette, Sainte-Marguerite'
    },
    'montmartre': {
        arrondissement: 18,
        fullName: 'Montmartre',
        neighborhoods: 'Montmartre, Clignancourt, Goutte-d\'Or, Chapelle'
    }
};

// DOM elements
const arrondissementSelect = document.getElementById('arrondissement-select');
const neighborhoodCards = document.querySelectorAll('.neighborhood-card');
const resultsSection = document.getElementById('results-section');
const resultsContent = document.getElementById('results-content');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    
    // Initialize translation and theme managers if available
    if (window.translationManager) {
        window.translationManager.translatePage();
    }
});

function initializeEventListeners() {
    // Arrondissement dropdown
    if (arrondissementSelect) {
        arrondissementSelect.addEventListener('change', handleArrondissementChange);
    }

    // Neighborhood cards
    neighborhoodCards.forEach(card => {
        card.addEventListener('click', handleNeighborhoodClick);
    });

    // Form submission
    const restaurantForm = document.getElementById('restaurant-form');
    if (restaurantForm) {
        restaurantForm.addEventListener('submit', handleFormSubmission);
    }
}

function handleArrondissementChange(event) {
    const selectedArrondissement = event.target.value;
    
    if (!selectedArrondissement) {
        hideResults();
        return;
    }

    const arrondissementNum = parseInt(selectedArrondissement);
    displayArrondissementResults(arrondissementNum);
}

function handleNeighborhoodClick(event) {
    const card = event.currentTarget;
    const neighborhood = card.dataset.neighborhood;
    const arrondissementNum = parseInt(card.dataset.arrondissement);
    
    displayNeighborhoodResults(neighborhood, arrondissementNum);
}

function displayArrondissementResults(arrondissementNum) {
    const data = restaurantData[arrondissementNum];
    
    if (!data) {
        const message = window.translationManager ? 
            window.translationManager.getTranslation('noResultsMessage') : 
            `Aucun restaurant trouvé pour le ${arrondissementNum}e arrondissement.`;
        showNoResultsMessage(message);
        return;
    }

    let html = `
        <div class="arrondissement-header fade-in">
            <h3>${data.name}</h3>
        </div>
        <div class="neighborhood-list fade-in">
            <h4 data-translate="neighborhoodsIncluded">Quartiers inclus:</h4>
            <p>${data.neighborhoods}</p>
        </div>
        <div class="restaurants-list fade-in">
            ${data.restaurants.map(restaurant => createRestaurantCard(restaurant)).join('')}
        </div>
    `;

    showResults(html);
}

function displayNeighborhoodResults(neighborhood, arrondissementNum) {
    const neighborhoodInfo = neighborhoodData[neighborhood];
    const data = restaurantData[arrondissementNum];
    
    if (!neighborhoodInfo || !data) {
        const message = window.translationManager ? 
            window.translationManager.getTranslation('noResultsMessage') : 
            'Aucun restaurant trouvé pour ce quartier.';
        showNoResultsMessage(message);
        return;
    }

    let html = `
        <div class="arrondissement-header fade-in">
            <h3>${arrondissementNum}e Arrondissement - ${neighborhoodInfo.fullName}</h3>
        </div>
        <div class="neighborhood-list fade-in">
            <h4><span data-translate="neighborhoodsOf">Quartiers de</span> ${neighborhoodInfo.fullName}:</h4>
            <p>${neighborhoodInfo.neighborhoods}</p>
        </div>
        <div class="restaurants-list fade-in">
            ${data.restaurants.map(restaurant => createRestaurantCard(restaurant)).join('')}
        </div>
    `;

    showResults(html);
}

function createRestaurantCard(restaurant) {
    const lunchMenuText = window.translationManager ? 
        window.translationManager.getTranslation('lunchMenu') : 
        'Menu du midi:';
    const detailedInfoText = window.translationManager ? 
        window.translationManager.getTranslation('detailedInfo') : 
        'Informations détaillées';
    const notesText = window.translationManager ? 
        window.translationManager.getTranslation('notes') : 
        'Notes:';
    const reservationText = window.translationManager ? 
        window.translationManager.getTranslation('reservation') : 
        'Réservation:';
        
    return `
        <div class="restaurant-card" onclick="toggleRestaurantDetails(${restaurant.id})">
            <h5>${restaurant.name}</h5>
            <p class="address">${restaurant.address}</p>
            <span class="cuisine">${restaurant.cuisine}</span>
            <p class="price">${lunchMenuText} ${restaurant.price}</p>
            <div id="details-${restaurant.id}" class="restaurant-details" style="display: none;">
                <h6>${detailedInfoText}</h6>
                <div class="detail-item">
                    <strong>${notesText}</strong>
                    <p>${restaurant.notes}</p>
                </div>
                <div class="detail-item">
                    <strong>${reservationText}</strong>
                    <p>${restaurant.reservation}</p>
                </div>
            </div>
        </div>
    `;
}

function toggleRestaurantDetails(restaurantId) {
    const detailsElement = document.getElementById(`details-${restaurantId}`);
    
    if (detailsElement.style.display === 'none') {
        detailsElement.style.display = 'block';
        detailsElement.classList.add('fade-in');
    } else {
        detailsElement.style.display = 'none';
        detailsElement.classList.remove('fade-in');
    }
}

function showResults(html) {
    resultsContent.innerHTML = html;
    resultsSection.style.display = 'block';
    
    // Re-translate new content if translation manager is available
    if (window.translationManager) {
        window.translationManager.translatePage();
    }
    
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideResults() {
    resultsSection.style.display = 'none';
}

function showNoResultsMessage(message) {
    const noResultsTitle = window.translationManager ? 
        window.translationManager.getTranslation('noResults') : 
        'Aucun résultat';
        
    const html = `
        <div class="fade-in" style="text-align: center; padding: 48px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <h3 style="color: var(--text-secondary); margin-bottom: 16px;">${noResultsTitle}</h3>
            <p style="color: #718096;">${message}</p>
        </div>
    `;
    showResults(html);
}

function handleFormSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const messageElement = document.getElementById('form-message');
    
    const submittingText = window.translationManager ? 
        window.translationManager.getTranslation('submitting') : 
        'Envoi en cours...';
    const successText = window.translationManager ? 
        window.translationManager.getTranslation('successMessage') : 
        'Restaurant ajouté avec succès!';
    const errorText = window.translationManager ? 
        window.translationManager.getTranslation('errorMessage') : 
        'Erreur lors de l\'ajout du restaurant.';
    const connectionErrorText = window.translationManager ? 
        window.translationManager.getTranslation('connectionError') : 
        'Erreur de connexion. Veuillez réessayer.';
    
    // Show loading state
    showFormMessage(submittingText, 'info');
    
    // Simulate form submission (replace with actual PHP submission)
    fetch('data.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showFormMessage(successText, 'success');
            event.target.reset();
        } else {
            showFormMessage(data.message || errorText, 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showFormMessage(connectionErrorText, 'error');
    });
}

function showFormMessage(message, type) {
    const messageElement = document.getElementById('form-message');
    
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `form-message ${type}`;
        messageElement.style.display = 'block';
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 5000);
        }
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for all anchor links
document.addEventListener('click', function(event) {
    if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});