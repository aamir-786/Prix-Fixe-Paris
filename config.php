<?php
// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'prix_fixe_paris');
define('DB_USER', 'username');
define('DB_PASS', 'Mypasswored');
define('DB_CHARSET', 'utf8mb4');

// Set PHP to use UTF-8
ini_set('default_charset', 'UTF-8');
mb_internal_encoding('UTF-8');

// Database connection with UTF-8 support
function getDBConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci"
        ];
        
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        return $pdo;
    } catch (PDOException $e) {
        error_log("Database connection failed: " . $e->getMessage());
        throw new Exception("Connection à la base de données échouée");
    }
}

// Sanitize input data
function sanitizeInput($data) {
    if (is_array($data)) {
        return array_map('sanitizeInput', $data);
    }
    
    $data = trim($data);
    $data = stripslashes($data);
    return $data;
}

// Validate required fields
function validateRequired($fields, $data) {
    $errors = [];
    
    foreach ($fields as $field) {
        if (empty($data[$field])) {
            $errors[] = "Le champ '$field' est requis.";
        }
    }
    
    return $errors;
}

// Format response as JSON
function jsonResponse($success, $message = '', $data = null) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

// Error handling
function handleError($message, $logMessage = null) {
    if ($logMessage) {
        error_log($logMessage);
    }
    jsonResponse(false, $message);
}
?>