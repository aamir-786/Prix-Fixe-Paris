# Prix Fixe Paris - Restaurant Directory

Une application web élégante pour découvrir les restaurants parisiens proposant des menus du jour, formules du midi et menus à prix fixe.

## Fonctionnalités

### Pages Principales
- **Accueil** : Recherche par arrondissement ou quartier avec liste interactive des restaurants
- **À Propos** : Information sur le site (contenu à compléter)
- **Ajouter** : Formulaire pour ajouter de nouveaux restaurants

### Fonctionnalités Techniques
- Design responsive (mobile, tablette, desktop)
- Support complet UTF-8 pour les caractères spéciaux français
- Interface JavaScript interactive
- Intégration PHP/MySQL sécurisée
- Validation des formulaires côté client et serveur

## Structure des Fichiers

```
/
├── index.html          # Page d'accueil
├── about.html          # Page à propos
├── form.html           # Formulaire d'ajout
├── style.css           # Styles CSS principaux
├── script.js           # JavaScript interactif
├── config.php          # Configuration base de données
├── data.php            # API PHP pour les données
├── database.sql        # Structure de la base MySQL
└── README.md           # Ce fichier
```

## Installation

### 1. Serveur Web
Placez tous les fichiers sur votre serveur web (Apache/Nginx avec PHP 7.4+).

### 2. Base de Données
```sql
-- Créer la base de données
mysql -u root -p < database.sql
```

### 3. Configuration
Modifiez `config.php` avec vos paramètres :
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'prix_fixe_paris');
define('DB_USER', 'votre_utilisateur');
define('DB_PASS', 'votre_mot_de_passe');
```

### 4. Permissions
```bash
chmod 644 *.html *.css *.js *.md
chmod 755 *.php
```

## Utilisation

### Recherche de Restaurants
1. **Par Arrondissement** : Sélectionnez dans le menu déroulant
2. **Par Quartier** : Cliquez sur une carte de quartier
3. **Détails** : Cliquez sur un restaurant pour voir ses informations complètes

### Ajout de Restaurant
1. Remplissez le formulaire avec les informations requises
2. Les champs marqués * sont obligatoires
3. Support des caractères spéciaux (accents, cédilles, etc.)

## API Endpoints

### GET /data.php
- `?arrondissement=1` : Restaurants du 1er arrondissement
- `?neighborhood=marais` : Restaurants du quartier

### POST /data.php
Ajout d'un nouveau restaurant via formulaire.

## Responsive Design

### Breakpoints
- **Mobile** : < 768px (navigation verticale, cartes empilées)
- **Tablette** : 768px - 1024px (grille adaptée)
- **Desktop** : > 1024px (mise en page complète)

### Optimisations Mobile
- Navigation pliable
- Cartes de quartier en une colonne
- Formulaires adaptés tactile
- Images responsives

## Sécurité

### Validation
- Sanitisation des entrées utilisateur
- Requêtes préparées (PDO)
- Validation côté client et serveur
- Gestion d'erreurs sécurisée

### UTF-8
- Configuration MySQL : `utf8mb4_unicode_ci`
- Headers PHP appropriés
- Méta charset HTML5

## Personnalisation

### Couleurs (CSS Variables)
```css
:root {
  --primary: #2C5282;
  --secondary: #4299E1;
  --accent: #D69E2E;
}
```

### Données
- Modifiez `script.js` pour les données de démonstration
- Ajoutez des quartiers dans `database.sql`
- Personnalisez les messages dans `data.php`

## Support Navigateurs

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile Safari/Chrome

## Performance

- CSS optimisé (~ 8KB)
- JavaScript modulaire (~ 6KB)
- Images Pexels optimisées
- Requêtes SQL indexées

## Déploiement

1. Testez en local avec XAMPP/WAMP
2. Transférez via FTP/SFTP
3. Configurez la base de données
4. Testez les fonctionnalités
5. Activez les logs d'erreur PHP

---

**Développé avec ❤️ pour Prix Fixe Paris**