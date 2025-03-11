<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obrigado - Sítio Dona Cici - EducaAbelha</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <?php include 'includes/header.php'; ?>
    </header>

    <main>
        <section class="thank-you-section">
            <div class="section-header">
                <h2>Obrigado!</h2>
                <div class="divider"></div>
            </div>
            
            <div class="thank-you-content">
                <?php
                $tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';
                
                if ($tipo == 'contato') {
                    echo '<h3>Sua mensagem foi enviada com sucesso!</h3>';
                    echo '<p>Agradecemos pelo seu contato. Nossa equipe retornará em breve.</p>';
                } elseif ($tipo == 'newsletter') {
                    echo '<h3>Inscrição realizada com sucesso!</h3>';
                    echo '<p>Você agora receberá nossas novidades por e-mail.</p>';
                } else {
                    echo '<h3>Agradecemos sua visita!</h3>';
                    echo '<p>Obrigado por conhecer o projeto Sítio Dona Cici - EducaAbelha.</p>';
                }
                ?>
                
                <div class="thank-you-image">
                    <img src="images/abelha-agradecimento.jpg" alt="Abelha nativa sem ferrão">
                </div>
                
                <a href="index.php" class="return-button">Voltar para a página inicial</a>
            </div>
        </section>
    </main>

    <footer>
        <?php include 'includes/footer.php'; ?>
    </footer>

    <script src="js/script.js"></script>
</body>
</html> 