<?php
// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $interest = filter_input(INPUT_POST, 'interest', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Validar dados
    if (empty($name) || empty($email) || empty($message)) {
        echo "Por favor, preencha todos os campos obrigatórios.";
        exit;
    }
    
    // Configurar e-mail
    $to = "contato@sitiodonacibi.com.br"; // Substitua pelo e-mail correto
    $subject = "Novo contato do site - $interest";
    
    $email_content = "Nome: $name\n";
    $email_content .= "E-mail: $email\n";
    $email_content .= "Telefone: $phone\n";
    $email_content .= "Interesse: $interest\n\n";
    $email_content .= "Mensagem:\n$message\n";
    
    $headers = "From: $email\r\n";
    
    // Enviar e-mail
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirecionar para página de agradecimento
        header("Location: ../obrigado.php?tipo=contato");
        exit;
    } else {
        echo "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.";
    }
} else {
    // Se alguém tentar acessar diretamente este arquivo
    header("Location: ../index.php");
    exit;
}
?> 