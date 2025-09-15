// Função para mostrar erros ou dicas
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMsg = formGroup.querySelector(".error-message");
    errorMsg.innerHTML = message;
    errorMsg.style.display = "block";
    input.style.borderColor = "red";
}

// Função para limpar erros
function clearError(input) {
    const formGroup = input.parentElement;
    const errorMsg = formGroup.querySelector(".error-message");
    errorMsg.innerText = "";
    errorMsg.style.display = "none";
    input.style.borderColor = "#ccc";
}

// Função para limpar os campos do formulário quando finaliza
function clearFormFields(form) {
    const fields = form.querySelectorAll('input, textarea');
    fields.forEach(field => {
        field.value = '';
    });
}

// Máscara de CPF
document.getElementById("cpf")?.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
});

// Validação de login com a API de validação do HTML5
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário

    const emailInput = document.getElementById("loginEmail");
    const senhaInput = document.getElementById("loginSenha");

    let isFormValid = true;

    if (!emailInput.checkValidity()) {
        showError(emailInput, "Por favor, insira um e-mail válido.");
        isFormValid = false;
    } else {
        clearError(emailInput);
    }

    if (!senhaInput.checkValidity()) {
        showError(senhaInput, "A senha deve ter pelo menos 8 caracteres.");
        isFormValid = false;
    } else {
        clearError(senhaInput);
    }

    if (isFormValid) {
        const emailCorreto = "teste@nexus.com";
        const senhaCorreta = "Senha@123";

        if (emailInput.value !== emailCorreto || senhaInput.value !== senhaCorreta) {
            showError(emailInput, "E-mail ou senha incorretos.");
            showError(senhaInput, "E-mail ou senha incorretos.");
        } else {
            alert("Login realizado com sucesso!");
            clearFormFields(e.target);
        }
    }
});

// Validação de Cadastro
document.getElementById("cadastroForm")?.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const email = document.getElementById("cadEmail");
    const senha = document.getElementById("cadSenha");

    let valid = true;

    if (!nome.checkValidity()) {
        showError(nome, "Por favor, digite seu nome completo.");
        valid = false;
    } else {
        clearError(nome);
    }

    if (!cpf.checkValidity() || cpf.value.length !== 14) {
        showError(cpf, "Por favor, digite um CPF válido.");
        valid = false;
    } else {
        clearError(cpf);
    }

    if (!email.checkValidity()) {
        showError(email, "Por favor, insira um e-mail válido.");
        valid = false;
    } else {
        clearError(email);
    }

    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha.value);

    if (!senha.checkValidity() || !hasSpecialChar) {
        showError(senha, "A senha deve ter 8 ou mais caracteres e pelo menos um caractere especial.");
        valid = false;
    } else {
        clearError(senha);
    }

    if (valid) {
        alert("Cadastro realizado com sucesso!");
        clearFormFields(e.target);
    }
});

// Evento de input para o campo de senha no cadastro
document.getElementById("cadSenha")?.addEventListener("input", (e) => {
    const senhaInput = e.target;
    const formGroup = senhaInput.parentElement;
    const errorMsg = formGroup.querySelector(".error-message");

    const hasLength = senhaInput.value.length >= 8;
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senhaInput.value);

    const lengthTip = `A senha deve conter 8 ou mais caracteres`;
    const specialCharTip = `A senha deve conter pelo menos um caractere especial`;

    let finalMessage = '';

    if (hasLength) {
        finalMessage += `<span style="color: green;">✓ ${lengthTip}</span><br>`;
    } else {
        finalMessage += `<span style="color: #888;">✗ ${lengthTip}</span><br>`;
    }

    if (hasSpecialChar) {
        finalMessage += `<span style="color: green;">✓ ${specialCharTip}</span>`;
    } else {
        finalMessage += `<span style="color: #888;">✗ ${specialCharTip}</span>`;
    }

    errorMsg.innerHTML = finalMessage;
    errorMsg.style.display = 'block';

    if (hasLength && hasSpecialChar) {
        senhaInput.style.borderColor = "#ccc";
    } else {
        senhaInput.style.borderColor = "red";
    }
});

// Impede que o clique no botão "Inscreva-se" acione o link do card
function handleEnrollClick(event) {
    event.stopPropagation();
}

// Carrossel de imagens e informações
document.addEventListener("DOMContentLoaded", () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const imageCount = images.length;
    let currentIndex = 0;
    let slideWidth = carouselSlide.clientWidth;

    window.addEventListener("resize", () => {
        slideWidth = carouselSlide.clientWidth;
        updateCarousel();
    });

    function nextSlide() {
        currentIndex = (currentIndex + 1) % imageCount;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        updateCarousel();
    }

    function updateCarousel() {
        carouselSlide.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    let autoSlideInterval = setInterval(nextSlide, 5000);

    nextBtn.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        nextSlide();
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

    prevBtn.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        prevSlide();
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

    updateCarousel();

    // Carrossel de cursos
    const coursesCarousel = document.querySelector(".courses-carousel");
    const nextCourseBtn = document.getElementById("next-course");
    const prevCourseBtn = document.getElementById("prev-course");
    const scrollAmount = 330;

    if (nextCourseBtn && coursesCarousel) {
        nextCourseBtn.addEventListener("click", () => {
            coursesCarousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    if (prevCourseBtn && coursesCarousel) {
        prevCourseBtn.addEventListener("click", () => {
            coursesCarousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Redirecionamento ao clicar no card de curso
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        card.addEventListener('click', function (event) {
            const enrollBtn = this.querySelector('.enroll-btn');

            if (enrollBtn && enrollBtn.contains(event.target)) {
                return;
            }

            const courseLink = this.dataset.href;
            if (courseLink) {
                window.location.href = courseLink;
            }
        });
    });

    // Menu hamburguer para mobile
    const hamburguerMenu = document.querySelector('.hamburguer-menu');
    const navList = document.querySelector('.nav-list');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    hamburguerMenu.addEventListener('click', () => {
        hamburguerMenu.classList.toggle('active');
        navList.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        hamburguerMenu.classList.remove('active');
        navList.classList.remove('active');
        document.body.classList.remove('menu-open');
        overlay.classList.remove('active');
    });

    // Fecha o menu quando um link é clicado
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburguerMenu.classList.remove('active');
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
                overlay.classList.remove('active');
            }
        });
    });

    // Código para alternar o dark mode (atualizado para ambos os botões)
    const darkModeToggleDesktop = document.getElementById('dark-mode-toggle-desktop');
    const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    };

    // Função para aplicar o modo com base no localStorage
    const applyTheme = () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    // Aplica o tema ao carregar a página
    applyTheme();

    // Adiciona o evento de clique para ambos os botões
    if (darkModeToggleDesktop) {
        darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
    }
    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('click', toggleDarkMode);
    }
});