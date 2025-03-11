<section id="contato" class="contact-section">
    <div class="section-header">
        <h2>Entre em Contato</h2>
        <div class="divider"></div>
    </div>
    
    <div class="contact-intro">
        <h3>Faça Parte Desta Transformação</h3>
        <p>O Sítio Dona Cici - EducaAbelha busca parceiros e investidores que acreditem no poder da educação ambiental e na preservação das abelhas nativas sem ferrão para construir um futuro mais sustentável.</p>
    </div>
    
    <div class="contact-wrapper">
        <div class="contact-container">
            <div class="contact-info">
                <div class="contact-methods">
                    <div class="contact-method">
                        <i class="fas fa-phone"></i>
                        <h4>Telefone</h4>
                        <p>(XX) XXXXX-XXXX</p>
                    </div>
                    <div class="contact-method">
                        <i class="fas fa-envelope"></i>
                        <h4>E-mail</h4>
                        <p>contato@sitiodonacibi.com.br</p>
                    </div>
                    <div class="contact-method">
                        <i class="fas fa-map-marker-alt"></i>
                        <h4>Endereço</h4>
                        <p>Sítio Dona Cici, Estrada Municipal XXX, Km X</p>
                    </div>
                </div>
                
                <div class="social-links">
                    <h4>Siga-nos nas redes sociais</h4>
                    <div class="social-icons">
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="contact-form-container">
                <form id="contactForm" method="post" action="process/process_contact.php">
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Telefone</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="interest">Interesse</label>
                        <select id="interest" name="interest">
                            <option value="parceria">Parceria</option>
                            <option value="investimento">Investimento</option>
                            <option value="visita">Agendar Visita</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensagem</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" class="submit-button">Enviar Mensagem</button>
                </form>
            </div>
        </div>
    </div>
    
    <div class="newsletter-wrapper">
        <div class="newsletter">
            <h3>Receba nossas novidades</h3>
            <p>Inscreva-se em nossa newsletter para acompanhar o desenvolvimento do projeto</p>
            <form id="newsletterForm" method="post" action="process/process_newsletter.php">
                <div class="newsletter-form-group">
                    <input type="email" name="newsletter_email" placeholder="Seu melhor e-mail" required>
                    <button type="submit">Inscrever-se</button>
                </div>
            </form>
        </div>
    </div>
</section> 