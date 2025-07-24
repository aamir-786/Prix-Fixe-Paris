<?php
require_once 'config.php';

// Set content type to JSON with UTF-8
header('Content-Type: application/json; charset=utf-8');

// Handle different request methods
$method = $_SERVER['REQUEST_METHOD'];

try {
    switch ($method) {
        case 'POST':
            handleRestaurantSubmission();
            break;
        case 'GET':
            handleDataRequest();
            break;
        default:
            jsonResponse(false, 'Méthode non supportée');
    }
} catch (Exception $e) {
    handleError('Erreur serveur', $e->getMessage());
}

function handleRestaurantSubmission() {
    // Sanitize input data
    $data = sanitizeInput($_POST);
    
    // Required fields
    $requiredFields = ['name', 'arrondissement', 'address'];
    $errors = validateRequired($requiredFields, $data);
    
    if (!empty($errors)) {
        jsonResponse(false, implode(' ', $errors));
    }
    
    // Additional validation
    if (!is_numeric($data['arrondissement']) || $data['arrondissement'] < 1 || $data['arrondissement'] > 20) {
        jsonResponse(false, 'Arrondissement invalide (1-20)');
    }
    
    if (!empty($data['lunch_price_min']) && !is_numeric($data['lunch_price_min'])) {
        jsonResponse(false, 'Prix minimum invalide');
    }
    
    if (!empty($data['lunch_price_max']) && !is_numeric($data['lunch_price_max'])) {
        jsonResponse(false, 'Prix maximum invalide');
    }
    
    try {
        $pdo = getDBConnection();
        
        // Check if restaurant already exists
        $checkSql = "SELECT id FROM restaurants WHERE name = :name AND arrondissement = :arrondissement";
        $checkStmt = $pdo->prepare($checkSql);
        $checkStmt->execute([
            ':name' => $data['name'],
            ':arrondissement' => $data['arrondissement']
        ]);
        
        if ($checkStmt->fetch()) {
            jsonResponse(false, 'Un restaurant avec ce nom existe déjà dans cet arrondissement');
        }
        
        // Insert new restaurant
        $sql = "INSERT INTO restaurants (
            name, arrondissement, neighborhood, address, phone, website,
            cuisine_type, lunch_price_min, lunch_price_max, notes, reservation_info,
            created_at
        ) VALUES (
            :name, :arrondissement, :neighborhood, :address, :phone, :website,
            :cuisine_type, :lunch_price_min, :lunch_price_max, :notes, :reservation_info,
            NOW()
        )";
        
        $stmt = $pdo->prepare($sql);
        $result = $stmt->execute([
            ':name' => $data['name'],
            ':arrondissement' => $data['arrondissement'],
            ':neighborhood' => $data['neighborhood'] ?? null,
            ':address' => $data['address'],
            ':phone' => $data['phone'] ?? null,
            ':website' => $data['website'] ?? null,
            ':cuisine_type' => $data['cuisine_type'] ?? null,
            ':lunch_price_min' => !empty($data['lunch_price_min']) ? (float)$data['lunch_price_min'] : null,
            ':lunch_price_max' => !empty($data['lunch_price_max']) ? (float)$data['lunch_price_max'] : null,
            ':notes' => $data['notes'] ?? null,
            ':reservation_info' => $data['reservation_info'] ?? null
        ]);
        
        if ($result) {
            $restaurantId = $pdo->lastInsertId();
            jsonResponse(true, 'Restaurant ajouté avec succès', ['id' => $restaurantId]);
        } else {
            jsonResponse(false, 'Erreur lors de l\'ajout du restaurant');
        }
        
    } catch (PDOException $e) {
        handleError('Erreur de base de données', $e->getMessage());
    }
}

function handleDataRequest() {
    $arrondissement = $_GET['arrondissement'] ?? null;
    $neighborhood = $_GET['neighborhood'] ?? null;
    
    if (!$arrondissement && !$neighborhood) {
        jsonResponse(false, 'Paramètre manquant');
    }
    
    try {
        $pdo = getDBConnection();
        
        if ($arrondissement) {
            $sql = "SELECT * FROM restaurants WHERE arrondissement = :arrondissement ORDER BY name";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([':arrondissement' => $arrondissement]);
        } else {
            $sql = "SELECT * FROM restaurants WHERE LOWER(neighborhood) LIKE LOWER(:neighborhood) ORDER BY name";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([':neighborhood' => '%' . $neighborhood . '%']);
        }
        
        $restaurants = $stmt->fetchAll();
        
        // Format price display
        foreach ($restaurants as &$restaurant) {
            if ($restaurant['lunch_price_min'] && $restaurant['lunch_price_max']) {
                $restaurant['price_display'] = $restaurant['lunch_price_min'] . '-' . $restaurant['lunch_price_max'] . '€';
            } elseif ($restaurant['lunch_price_min']) {
                $restaurant['price_display'] = 'À partir de ' . $restaurant['lunch_price_min'] . '€';
            } elseif ($restaurant['lunch_price_max']) {
                $restaurant['price_display'] = 'Jusqu\'à ' . $restaurant['lunch_price_max'] . '€';
            } else {
                $restaurant['price_display'] = 'Prix non spécifié';
            }
        }
        
        jsonResponse(true, 'Données récupérées', $restaurants);
        
    } catch (PDOException $e) {
        handleError('Erreur de base de données', $e->getMessage());
    }
}
?>