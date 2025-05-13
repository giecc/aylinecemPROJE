<?php
require 'Database.php';

// Hata raporlamayı aç
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Giriş verisini al
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Verileri kontrol et
if (!$data) {
    die(json_encode(['success' => false, 'message' => 'Geçersiz veri formatı']));
}

// Gerekli alanlar
$required = ['name', 'email', 'password'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        die(json_encode(['success' => false, 'message' => "$field alanı boş olamaz"]));
    }
}

// Email formatı kontrolü
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    die(json_encode(['success' => false, 'message' => 'Geçersiz email formatı']));
}

try {
    $db = new Database();
    $conn = $db->getConnection();
    
    // Email kontrolü (kilitli okuma)
    $check = $conn->prepare("SELECT 1 FROM Kullanicilar WITH (UPDLOCK) WHERE Email = ?");
    $check->execute([$data['email']]);
    
    if ($check->fetch()) {
        die(json_encode(['success' => false, 'message' => 'Bu email zaten kayıtlı']));
    }

    // Şifreyi hashle
    $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);
    
    // Kayıt işlemi
    $stmt = $conn->prepare("INSERT INTO Kullanicilar (Ad, Soyad, Email, Sifre, KayitTarihi, Aktif) 
                          VALUES (?, ?, ?, ?, GETDATE(), 1)");
    
    $stmt->execute([
        $data['name'],
        $data['surname'] ?? '',
        $data['email'],
        $hashedPassword
    ]);
    
    // Etkilenen satır sayısını kontrol et
    if ($stmt->rowCount() > 0) {
        echo json_encode([
            'success' => true,
            'message' => 'Kayıt başarılı'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Kayıt eklenemedi'
        ]);
    }

} catch (PDOException $e) {
    // Özel hata loglama
    $errorMsg = date('Y-m-d H:i:s') . " - HATA: " . $e->getMessage() . "\n";
    file_put_contents('sql_errors.log', $errorMsg, FILE_APPEND);
    
    echo json_encode([
        'success' => false,
        'message' => 'Veritabanı hatası',
        'error_code' => $e->getCode()
    ]);
}
?>