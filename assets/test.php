<?php
require_once 'config/db.php';

try {
    $database = new Database();
    $conn = $database->getConnection();
    
    echo "Veritabanına başarıyla bağlanıldı!";
    
    // Ek bilgi için:
    echo "<pre>";
    print_r($conn->getAttribute(PDO::ATTR_CONNECTION_STATUS));
    echo "</pre>";
    
} catch (PDOException $e) {
    die("Bağlantı hatası: " . $e->getMessage());
}
?>