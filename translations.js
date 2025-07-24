// Translation system for Prix Fixe Paris
const translations = {
    fr: {
        // Header
        siteTitle: "Prix Fixe Paris",
        tagline: "Restaurants • Menu du Jour • Formule du Midi",
        navHome: "Accueil",
        navAbout: "À Propos",
        navAdd: "Ajouter",
        
        // Home page
        welcomeTitle: "Bienvenue sur Prix Fixe Paris",
        welcomeText: "Nous nous concentrons sur les restaurants qui proposent des <em>menus du jour</em>, des <em>formules du midi</em> et des menus à prix fixe pour le déjeuner.",
        searchByArrondissement: "Recherche par Arrondissement",
        selectArrondissement: "Sélectionnez un arrondissement",
        searchByNeighborhood: "Recherche par Quartier",
        orDivider: "ou",
        noResults: "Aucun résultat",
        noResultsMessage: "Aucun restaurant trouvé pour cette sélection.",
        neighborhoodsIncluded: "Quartiers inclus:",
        neighborhoodsOf: "Quartiers de",
        lunchMenu: "Menu du midi:",
        detailedInfo: "Informations détaillées",
        notes: "Notes:",
        reservation: "Réservation:",
        
        // Arrondissements
        arr1: "1er Arrondissement - Louvre",
        arr2: "2e Arrondissement - Bourse", 
        arr3: "3e Arrondissement - Temple",
        arr4: "4e Arrondissement - Hôtel-de-Ville",
        arr5: "5e Arrondissement - Panthéon",
        arr6: "6e Arrondissement - Luxembourg",
        arr7: "7e Arrondissement - Palais-Bourbon",
        arr8: "8e Arrondissement - Élysée",
        arr9: "9e Arrondissement - Opéra",
        arr10: "10e Arrondissement - Entrepôt",
        arr11: "11e Arrondissement - Popincourt",
        arr12: "12e Arrondissement - Reuilly",
        arr13: "13e Arrondissement - Gobelins",
        arr14: "14e Arrondissement - Observatoire",
        arr15: "15e Arrondissement - Vaugirard",
        arr16: "16e Arrondissement - Passy",
        arr17: "17e Arrondissement - Batignolles-Monceau",
        arr18: "18e Arrondissement - Butte-Montmartre",
        arr19: "19e Arrondissement - Buttes-Chaumont",
        arr20: "20e Arrondissement - Ménilmontant",
        
        // Neighborhoods
        louvre: "Louvre",
        chatelet: "Châtelet",
        grandsBlvds: "Grands Boulevards",
        marais: "Le Marais",
        ileSaintLouis: "Île Saint-Louis",
        latinQuarter: "Quartier Latin",
        saintGermain: "Saint-Germain",
        invalides: "Invalides",
        champsElysees: "Champs-Élysées",
        pigalle: "Pigalle",
        bastille: "Bastille",
        montmartre: "Montmartre",
        
        // About page
        aboutTitle: "À Propos de Prix Fixe Paris",
        aboutContent: "Contenu à venir...",
        
        // Form page
        addRestaurantTitle: "Ajouter un Nouveau Restaurant",
        restaurantName: "Nom du Restaurant",
        arrondissement: "Arrondissement",
        selectOption: "Sélectionnez",
        neighborhood: "Quartier",
        neighborhoodPlaceholder: "ex: Le Marais, Saint-Germain...",
        fullAddress: "Adresse Complète",
        addressPlaceholder: "Rue, numéro, code postal Paris",
        phone: "Téléphone",
        phonePlaceholder: "01 42 xx xx xx",
        website: "Site Web",
        websitePlaceholder: "https://...",
        cuisineType: "Type de Cuisine",
        cuisinePlaceholder: "ex: Française traditionnelle, Bistrot, Brasserie...",
        lunchPriceMin: "Prix Menu Midi (Min) €",
        lunchPriceMax: "Prix Menu Midi (Max) €",
        notesComments: "Notes et Commentaires",
        notesPlaceholder: "Spécialités, ambiance, particularités du menu du jour...",
        reservationInfo: "Informations de Réservation",
        reservationPlaceholder: "Réservation recommandée, accepte les groupes, horaires d'ouverture...",
        addRestaurant: "Ajouter le Restaurant",
        reset: "Réinitialiser",
        required: "*",
        
        // Form messages
        submitting: "Envoi en cours...",
        successMessage: "Restaurant ajouté avec succès!",
        errorMessage: "Erreur lors de l'ajout du restaurant.",
        connectionError: "Erreur de connexion. Veuillez réessayer.",
        
        // Footer
        footerText: "© 2025 Prix Fixe Paris. Tous droits réservés.",
        
        // UI Controls
        language: "Langue",
        theme: "Thème",
        lightMode: "Mode Jour",
        darkMode: "Mode Nuit"
    },
    en: {
        // Header
        siteTitle: "Prix Fixe Paris",
        tagline: "Restaurants • Daily Menu • Lunch Specials",
        navHome: "Home",
        navAbout: "About",
        navAdd: "Add",
        
        // Home page
        welcomeTitle: "Welcome to Prix Fixe Paris",
        welcomeText: "We focus on restaurants that offer <em>daily menus</em>, <em>lunch specials</em>, and fixed-price lunch menus.",
        searchByArrondissement: "Search by District",
        selectArrondissement: "Select a district",
        searchByNeighborhood: "Search by Neighborhood",
        orDivider: "or",
        noResults: "No Results",
        noResultsMessage: "No restaurants found for this selection.",
        neighborhoodsIncluded: "Neighborhoods included:",
        neighborhoodsOf: "Neighborhoods of",
        lunchMenu: "Lunch menu:",
        detailedInfo: "Detailed Information",
        notes: "Notes:",
        reservation: "Reservation:",
        
        // Arrondissements
        arr1: "1st District - Louvre",
        arr2: "2nd District - Bourse",
        arr3: "3rd District - Temple", 
        arr4: "4th District - Hôtel-de-Ville",
        arr5: "5th District - Panthéon",
        arr6: "6th District - Luxembourg",
        arr7: "7th District - Palais-Bourbon",
        arr8: "8th District - Élysée",
        arr9: "9th District - Opéra",
        arr10: "10th District - Entrepôt",
        arr11: "11th District - Popincourt",
        arr12: "12th District - Reuilly",
        arr13: "13th District - Gobelins",
        arr14: "14th District - Observatoire",
        arr15: "15th District - Vaugirard",
        arr16: "16th District - Passy",
        arr17: "17th District - Batignolles-Monceau",
        arr18: "18th District - Butte-Montmartre",
        arr19: "19th District - Buttes-Chaumont",
        arr20: "20th District - Ménilmontant",
        
        // Neighborhoods
        louvre: "Louvre",
        chatelet: "Châtelet",
        grandsBlvds: "Grands Boulevards",
        marais: "Le Marais",
        ileSaintLouis: "Île Saint-Louis",
        latinQuarter: "Latin Quarter",
        saintGermain: "Saint-Germain",
        invalides: "Invalides",
        champsElysees: "Champs-Élysées",
        pigalle: "Pigalle",
        bastille: "Bastille",
        montmartre: "Montmartre",
        
        // About page
        aboutTitle: "About Prix Fixe Paris",
        aboutContent: "Content coming soon...",
        
        // Form page
        addRestaurantTitle: "Add a New Restaurant",
        restaurantName: "Restaurant Name",
        arrondissement: "District",
        selectOption: "Select",
        neighborhood: "Neighborhood",
        neighborhoodPlaceholder: "e.g.: Le Marais, Saint-Germain...",
        fullAddress: "Full Address",
        addressPlaceholder: "Street, number, postal code Paris",
        phone: "Phone",
        phonePlaceholder: "01 42 xx xx xx",
        website: "Website",
        websitePlaceholder: "https://...",
        cuisineType: "Cuisine Type",
        cuisinePlaceholder: "e.g.: Traditional French, Bistro, Brasserie...",
        lunchPriceMin: "Lunch Menu Price (Min) €",
        lunchPriceMax: "Lunch Menu Price (Max) €",
        notesComments: "Notes and Comments",
        notesPlaceholder: "Specialties, atmosphere, daily menu features...",
        reservationInfo: "Reservation Information",
        reservationPlaceholder: "Reservation recommended, accepts groups, opening hours...",
        addRestaurant: "Add Restaurant",
        reset: "Reset",
        required: "*",
        
        // Form messages
        submitting: "Submitting...",
        successMessage: "Restaurant added successfully!",
        errorMessage: "Error adding restaurant.",
        connectionError: "Connection error. Please try again.",
        
        // Footer
        footerText: "© 2025 Prix Fixe Paris. All rights reserved.",
        
        // UI Controls
        language: "Language",
        theme: "Theme",
        lightMode: "Light Mode",
        darkMode: "Dark Mode"
    }
};

// Translation manager
class TranslationManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'fr';
        this.init();
    }
    
    init() {
        this.updateLanguage(this.currentLanguage);
    }
    
    updateLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.translatePage();
        this.updateLanguageSelector();
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            
            if (translation) {
                if (element.tagName === 'INPUT' && element.type !== 'submit') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
        
        // Update document language
        document.documentElement.lang = this.currentLanguage;
    }
    
    getTranslation(key) {
        return translations[this.currentLanguage]?.[key] || translations.fr[key] || key;
    }
    
    updateLanguageSelector() {
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLanguage);
        });
    }
}

// Theme manager
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        this.updateTheme(this.currentTheme);
    }
    
    updateTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeSelector();
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.updateTheme(newTheme);
    }
    
    updateThemeSelector() {
        const themeButtons = document.querySelectorAll('.theme-btn');
        themeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === this.currentTheme);
        });
        
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.classList.toggle('dark', this.currentTheme === 'dark');
        }
    }
}

// Initialize managers
let translationManager;
let themeManager;

document.addEventListener('DOMContentLoaded', function() {
    translationManager = new TranslationManager();
    themeManager = new ThemeManager();
    
    // Language switcher event listeners
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            translationManager.updateLanguage(btn.dataset.lang);
        });
    });
    
    // Theme switcher event listeners
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            themeManager.updateTheme(btn.dataset.theme);
        });
    });
    
    // Theme toggle button
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            themeManager.toggleTheme();
        });
    }
});

// Export for use in other scripts
window.translationManager = translationManager;
window.themeManager = themeManager;