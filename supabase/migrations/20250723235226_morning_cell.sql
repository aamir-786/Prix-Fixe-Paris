-- Prix Fixe Paris Database Schema
-- MySQL/MariaDB with UTF-8 support

-- Create database with UTF-8 support
CREATE DATABASE IF NOT EXISTS prix_fixe_paris 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE prix_fixe_paris;

-- Create restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    arrondissement TINYINT NOT NULL CHECK (arrondissement BETWEEN 1 AND 20),
    neighborhood VARCHAR(100),
    address TEXT NOT NULL,
    phone VARCHAR(20),
    website VARCHAR(255),
    cuisine_type VARCHAR(100),
    lunch_price_min DECIMAL(5,2),
    lunch_price_max DECIMAL(5,2),
    notes TEXT,
    reservation_info TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_arrondissement (arrondissement),
    INDEX idx_neighborhood (neighborhood),
    INDEX idx_cuisine_type (cuisine_type),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create neighborhoods reference table
CREATE TABLE IF NOT EXISTS neighborhoods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    arrondissement TINYINT NOT NULL CHECK (arrondissement BETWEEN 1 AND 20),
    description TEXT,
    
    UNIQUE KEY unique_neighborhood_arrondissement (name, arrondissement),
    INDEX idx_arrondissement (arrondissement)
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Insert sample neighborhoods data
INSERT INTO neighborhoods (name, arrondissement, description) VALUES
('Louvre', 1, 'Saint-Germain-l\'Auxerrois, Les Halles, Palais-Royal, Place Vendôme'),
('Châtelet', 1, 'Châtelet, Pont-Neuf, Rue de Rivoli'),
('Grands Boulevards', 2, 'Gaillon, Vivienne, Mail, Bonne-Nouvelle'),
('Le Marais', 3, 'Arts-et-Métiers, Enfants-Rouges, Archives, Sainte-Avoye'),
('Île Saint-Louis', 4, 'Île Saint-Louis, Notre-Dame, Hôtel de Ville'),
('Quartier Latin', 5, 'Sorbonne, Val-de-Grâce, Jardin des Plantes, Saint-Victor'),
('Saint-Germain', 6, 'Saint-Germain-des-Prés, Luxembourg, Monnaie, Odéon'),
('Invalides', 7, 'Saint-Thomas-d\'Aquin, Invalides, École-Militaire, Gros-Caillou'),
('Champs-Élysées', 8, 'Champs-Élysées, Faubourg-du-Roule, Madeleine, Europe'),
('Pigalle', 9, 'Saint-Georges, Chaussée-d\'Antin, Faubourg-Montmartre, Rochechouart'),
('Canal Saint-Martin', 10, 'Saint-Vincent-de-Paul, Porte-Saint-Denis, Porte-Saint-Martin, Hôpital-Saint-Louis'),
('Bastille', 11, 'Folie-Méricourt, Saint-Ambroise, Roquette, Sainte-Marguerite'),
('Nation', 12, 'Bel-Air, Picpus, Bercy, Quinze-Vingts'),
('Bibliothèque', 13, 'Salpêtrière, Gare, Maison-Blanche, Croulebarbe'),
('Montparnasse', 14, 'Montparnasse, Santé, Petit-Montrouge, Plaisance'),
('Vaugirard', 15, 'Saint-Lambert, Necker, Grenelle, Javel'),
('Trocadéro', 16, 'Auteuil, Muette, Porte-Dauphine, Chaillot'),
('Batignolles', 17, 'Ternes, Plaine-Monceau, Batignolles-Monceau, Épinettes'),
('Montmartre', 18, 'Montmartre, Clignancourt, Goutte-d\'Or, Chapelle'),
('Buttes-Chaumont', 19, 'Villette, Pont-de-Flandre, Amérique, Combat'),
('Belleville', 20, 'Belleville, Saint-Fargeau, Père-Lachaise, Charonne');

-- Insert sample restaurant data
INSERT INTO restaurants (name, arrondissement, neighborhood, address, phone, cuisine_type, lunch_price_min, lunch_price_max, notes, reservation_info) VALUES
('Bistrot de l\'Entracte', 1, 'Louvre', '47 Rue Montpensier, 75001 Paris', '01 42 97 57 76', 'Bistrot traditionnel', 22.00, 28.00, 'Menu du jour changé quotidiennement. Spécialités: escargots, coq au vin. Ambiance authentique près du Palais-Royal.', 'Réservation recommandée. Ouvert du mardi au samedi, 12h-14h30 et 19h-22h30.'),

('La Poule au Pot', 1, 'Châtelet', '9 Rue Vauvilliers, 75001 Paris', '01 42 36 32 96', 'Cuisine française classique', 26.00, 32.00, 'Restaurant historique depuis 1935. Formule du midi excellente. Décor Belle Époque préservé.', 'Réservation obligatoire. Service continu de 12h à 2h du matin.'),

('L\'Ami Jean', 2, 'Grands Boulevards', '27 Rue Mauconseil, 75002 Paris', '01 47 05 86 89', 'Bistrot moderne', 24.00, 30.00, 'Menu du jour créatif avec produits de saison. Ambiance conviviale et chaleureuse.', 'Réservation conseillée. Fermé dimanche et lundi.'),

('Breizh Café', 3, 'Le Marais', '109 Rue Vieille du Temple, 75003 Paris', '01 42 72 13 77', 'Crêperie moderne', 18.00, 25.00, 'Crêpes et galettes revisitées. Menu du midi original avec des produits bretons de qualité.', 'Réservation recommandée, surtout le week-end.'),

('L\'As du Fallafel', 4, 'Le Marais', '34 Rue des Rosiers, 75004 Paris', '01 48 87 63 60', 'Cuisine moyen-orientale', 12.00, 18.00, 'Célèbre fallafel du Marais. Formule rapide mais de qualité. Toujours beaucoup de monde.', 'Pas de réservation. Fermé le samedi (shabbat).'),

('Le Procope', 6, 'Saint-Germain', '13 Rue de l\'Ancienne Comédie, 75006 Paris', '01 40 46 79 00', 'Brasserie historique', 25.00, 35.00, 'Plus ancien café de Paris (1686). Menu du jour dans un cadre historique exceptionnel.', 'Réservation recommandée. Ouvert tous les jours.'),

('L\'Ami Pierre', 11, 'Bastille', '9 Rue de la Main d\'Or, 75011 Paris', '01 47 00 17 35', 'Bistrot de quartier', 19.00, 26.00, 'Authentique bistrot parisien. Menu du jour fait maison. Excellente cave à vins.', 'Réservation conseillée. Fermé dimanche soir et lundi.');

-- Create indexes for better performance
CREATE INDEX idx_restaurants_search ON restaurants (arrondissement, neighborhood, cuisine_type);
CREATE FULLTEXT INDEX idx_restaurants_fulltext ON restaurants (name, notes, reservation_info);

-- Create a view for easy restaurant listing with neighborhood info
CREATE VIEW restaurant_listings AS
SELECT 
    r.*,
    n.description as neighborhood_description
FROM restaurants r
LEFT JOIN neighborhoods n ON r.neighborhood = n.name AND r.arrondissement = n.arrondissement
ORDER BY r.arrondissement, r.neighborhood, r.name;