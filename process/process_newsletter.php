<?php
// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar e-mail
    $email = filter_input(INPUT_POST, 'newsletter_email', FILTER_SANITIZE_EMAIL);
    
    // Validar e-mail
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor, forneça um e-mail válido.";
        exit;
    }
    
    // Aqui você pode adicionar o código para salvar o e-mail em um banco de dados
    // ou enviar para um serviço de e-mail marketing como Mailchimp
    
    // Exemplo simples: salvar em um arquivo
    $file = fopen("../data/newsletter_subscribers.txt", "a");
    fwrite($file, $email . "," . date("Y-m-d H:i:s") . "\n");
    fclose($file);
    
    // Redirecionar para página de agradecimento
    header("Location: ../obrigado.php?tipo=newsletter");
    exit;
} else {
    // Se alguém tentar acessar diretamente este arquivo
    header("Location: ../index.php");
    exit;
}
?> 