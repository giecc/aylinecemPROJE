<?php
require_once 'config/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $database = new Database();
        $conn = $database->getConnection();

        $ad = $_POST['ad'];
        $soyad = $_POST['soyad'];
        $email = $_POST['email'];
        $sifre = password_hash($_POST['sifre'], PASSWORD_BCRYPT);

        $sql = "INSERT INTO Kullanicilar (Ad, Soyad, Email, Sifre) 
                VALUES (?, ?, ?, ?)";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute([$ad, $soyad, $email, $sifre]);

        echo "Kayıt başarılı! Giriş yapabilirsiniz.";
    } catch (PDOException $e) {
        echo "Hata: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Kayıt Ol</title>
</head>
<body>
    <h1>Kullanıcı Kayıt</h1>
    <form method="POST">
        <div>
            <label>Ad:</label>
            <input type="text" name="ad" required>
        </div>
        <div>
            <label>Soyad:</label>
            <input type="text" name="soyad" required>
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" required>
        </div>
        <div>
            <label>Şifre:</label>
            <input type="password" name="sifre" required>
        </div>
        <button type="submit">Kayıt Ol</button>
    </form>
</body>
</html>