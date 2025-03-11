// Navegação responsiva
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Gráfico de objetivos futuros
const createGoalsChart = () => {
    const ctx = document.getElementById('goalsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Expansão da estrutura (30%)',
                'Metodologia educacional (25%)',
                'Meliponário (20%)',
                'Impacto social (15%)',
                'Empreendedorismo (10%)'
            ],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    '#4CAF50',
                    '#8BC34A',
                    '#CDDC39',
                    '#FFC107',
                    '#FF9800'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    fontFamily: 'Open Sans',
                    fontSize: 14
                }
            }
        }
    });
}

// Formulário de contato
const handleContactForm = () => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Aqui você adicionaria a lógica para enviar o formulário
            // Pode usar fetch API para enviar para um backend ou serviço como Formspree
            
            alert('Obrigado pelo seu contato! Retornaremos em breve.');
            form.reset();
        });
    }
}

// Newsletter
const handleNewsletterForm = () => {
    const form = document.getElementById('newsletterForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Lógica para cadastrar na newsletter
            
            alert('E-mail cadastrado com sucesso!');
            form.reset();
        });
    }
}

// Smooth scroll para links de navegação
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Navegação responsiva
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
    
    // Dropdown no mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Hero slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        // Remover classes ativas
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Adicionar classes ativas ao slide atual
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Atualizar índice atual
        currentSlide = index;
    }
    
    function nextSlideFunc() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    function prevSlideFunc() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    }
    
    // Iniciar slider automático
    function startSlideInterval() {
        slideInterval = setInterval(nextSlideFunc, 5000);
    }
    
    // Parar slider automático
    function stopSlideInterval() {
        clearInterval(slideInterval);
    }
    
    // Eventos do slider
    if (slides.length > 0 && dots.length > 0) {
        // Iniciar slider
        startSlideInterval();
        
        // Eventos dos botões
        if (prevSlide && nextSlide) {
            prevSlide.addEventListener('click', function() {
                prevSlideFunc();
                stopSlideInterval();
                startSlideInterval();
            });
            
            nextSlide.addEventListener('click', function() {
                nextSlideFunc();
                stopSlideInterval();
                startSlideInterval();
            });
        }
        
        // Eventos dos dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
                stopSlideInterval();
                startSlideInterval();
            });
        });
    }
    
    // Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const prevTestimonial = document.querySelector('.prev-testimonial');
    const nextTestimonial = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    let testimonialInterval;
    
    function showTestimonial(index) {
        // Remover classes ativas
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        // Adicionar classes ativas ao slide atual
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        
        // Atualizar índice atual
        currentTestimonial = index;
    }
    
    function nextTestimonialFunc() {
        let nextIndex = currentTestimonial + 1;
        if (nextIndex >= testimonialSlides.length) {
            nextIndex = 0;
        }
        showTestimonial(nextIndex);
    }
    
    function prevTestimonialFunc() {
        let prevIndex = currentTestimonial - 1;
        if (prevIndex < 0) {
            prevIndex = testimonialSlides.length - 1;
        }
        showTestimonial(prevIndex);
    }
    
    // Iniciar slider automático
    function startTestimonialInterval() {
        testimonialInterval = setInterval(nextTestimonialFunc, 6000);
    }
    
    // Parar slider automático
    function stopTestimonialInterval() {
        clearInterval(testimonialInterval);
    }
    
    // Eventos do slider de depoimentos
    if (testimonialSlides.length > 0 && testimonialDots.length > 0) {
        // Iniciar slider
        startTestimonialInterval();
        
        // Eventos dos botões
        if (prevTestimonial && nextTestimonial) {
            prevTestimonial.addEventListener('click', function() {
                prevTestimonialFunc();
                stopTestimonialInterval();
                startTestimonialInterval();
            });
            
            nextTestimonial.addEventListener('click', function() {
                nextTestimonialFunc();
                stopTestimonialInterval();
                startTestimonialInterval();
            });
        }
        
        // Eventos dos dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showTestimonial(index);
                stopTestimonialInterval();
                startTestimonialInterval();
            });
        });
    }
    
    // Gráfico de objetivos futuros
    const goalsChart = document.getElementById('goalsChart');
    
    if (goalsChart) {
        // Verificar se Chart.js está carregado
        if (typeof Chart !== 'undefined') {
            new Chart(goalsChart, {
                type: 'doughnut',
                data: {
                    labels: [
                        'Expansão da estrutura (30%)',
                        'Metodologia educacional (25%)',
                        'Meliponário (20%)',
                        'Impacto social (15%)',
                        'Empreendedorismo (10%)'
                    ],
                    datasets: [{
                        data: [30, 25, 20, 15, 10],
                        backgroundColor: [
                            '#2E7D32',
                            '#388E3C',
                            '#43A047',
                            '#4CAF50',
                            '#66BB6A'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    family: 'Open Sans',
                                    size: 12
                                },
                                padding: 20
                            }
                        }
                    },
                    cutout: '60%'
                }
            });
        } else {
            console.warn('Chart.js não está carregado. O gráfico não será renderizado.');
            
            // Criar um elemento de fallback
            const fallbackElement = document.createElement('div');
            fallbackElement.className = 'chart-fallback';
            fallbackElement.innerHTML = `
                <p>O gráfico não pôde ser carregado.</p>
                <ul>
                    <li><strong>Expansão da estrutura:</strong> 30%</li>
                    <li><strong>Metodologia educacional:</strong> 25%</li>
                    <li><strong>Meliponário:</strong> 20%</li>
                    <li><strong>Impacto social:</strong> 15%</li>
                    <li><strong>Empreendedorismo:</strong> 10%</li>
                </ul>
            `;
            
            goalsChart.parentNode.replaceChild(fallbackElement, goalsChart);
        }
    }
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Não remover este comentário - o PHP processará o formulário
            // e.preventDefault();
            
            // Validação do formulário no lado do cliente
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            // Validar nome
            if (!name.value.trim()) {
                isValid = false;
                showError(name, 'Por favor, informe seu nome');
            } else {
                removeError(name);
            }
            
            // Validar email
            if (!email.value.trim()) {
                isValid = false;
                showError(email, 'Por favor, informe seu e-mail');
            } else if (!isValidEmail(email.value)) {
                isValid = false;
                showError(email, 'Por favor, informe um e-mail válido');
            } else {
                removeError(email);
            }
            
            // Validar mensagem
            if (!message.value.trim()) {
                isValid = false;
                showError(message, 'Por favor, escreva sua mensagem');
            } else {
                removeError(message);
            }
            
            // Se o formulário não for válido, impedir o envio
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Formulário de newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            // Não remover este comentário - o PHP processará o formulário
            // e.preventDefault();
            
            // Validação do formulário no lado do cliente
            const email = newsletterForm.querySelector('input[type="email"]');
            let isValid = true;
            
            // Validar email
            if (!email.value.trim()) {
                isValid = false;
                showError(email, 'Por favor, informe seu e-mail');
            } else if (!isValidEmail(email.value)) {
                isValid = false;
                showError(email, 'Por favor, informe um e-mail válido');
            } else {
                removeError(email);
            }
            
            // Se o formulário não for válido, impedir o envio
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Funções auxiliares para validação de formulários
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (!errorElement) {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = message;
            formGroup.appendChild(error);
        } else {
            errorElement.textContent = message;
        }
        
        input.classList.add('error-input');
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        input.classList.remove('error-input');
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Animações ao scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                const animation = element.dataset.animation || 'fadeIn';
                element.classList.add(`animate-${animation}`);
            }
        });
    }
    
    // Verificar elementos visíveis no carregamento inicial
    checkScroll();
    
    // Verificar elementos ao rolar a página
    window.addEventListener('scroll', checkScroll);
    
    // Smooth scroll para links de navegação
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            //
        });
    });
}); 