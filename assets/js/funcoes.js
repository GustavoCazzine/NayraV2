/* =================================================================== */
/* ============= JAVASCRIPT COMPLETO E ORGANIZADO ==================== */
/* =================================================================== */
/* Autor: Nayra Ananias
/* Versão: 1.0
/* Descrição: Script principal para funcionalidades do site.
/* =================================================================== */


/* =================================================================== */
/* ======================= DADOS DO SITE ============================= */
/* =================================================================== */
// Dados para a seção Catálogo
const servicosSobrancelhas = [
    {
        titulo: "Brow Lamination",
        descricao: "Alinhamento e fixação dos fios para sobrancelhas mais cheias, alinhadas e com efeito natural.",
        caracteristicas: ["+ Volume", "Fios alinhados", "Natural"],
        imagem: "assets/img/servicos/sobrancelhas/BrowLamination.png"
    },
    {
        titulo: "Nanobrows",
        descricao: "Técnica avançada de micropigmentação fio a fio para um resultado hiper-realista e delicado.",
        caracteristicas: ["Fio a fio", "Realista", "Duradouro"],
        imagem: "assets/img/servicos/sobrancelhas/NanoBrow.png"
    },
    {
        titulo: "Design personalizado",
        descricao: "Modelagem exclusiva para valorizar o formato do seu rosto, respeitando sua identidade.",
        caracteristicas: ["Exclusivo", "Harmonia", "Preciso"],
        imagem: "assets/img/servicos/sobrancelhas/Personalizado.png"
    },
    {
        titulo: "Designer com henna",
        descricao: "Coloração temporária para realçar e preencher as sobrancelhas, com design sob medida.",
        caracteristicas: ["Definido", "Colorido", "Preenchido"],
        imagem: "assets/img/servicos/sobrancelhas/Henna.png"
    }
];

const servicosCilios = [
    {
        titulo: "Volume Brasileiro",
        descricao: "Técnica de volume que utiliza leques abertos para um efeito cheio e sofisticado, ideal para quem busca destaque.",
        caracteristicas: ["Super volume", "Impacto", "Destaque"],
        imagem: "assets/img/servicos/cilios/VolumeBrasileiro.png"
    },
    {
        titulo: "Lash Lifting",
        descricao: "Procedimento que curva e levanta os cílios naturais, proporcionando um olhar mais aberto e natural sem extensões.",
        caracteristicas: ["Curvado", "Natural", "Sem extensão"],
        imagem: "assets/img/servicos/cilios/LashLifting.png"
    },
    {
        titulo: "Fox Eyes",
        descricao: "Técnica que alonga e levanta o canto externo dos olhos, criando um efeito de olhar alongado e sensual.",
        caracteristicas: ["Olhar felino", "Lifting", "Sensual"],
        imagem: "assets/img/servicos/cilios/FoxEyses.png"
    }
];

// Dados para a seção Feedbacks
const slidesFeedbacks = [
    { 
        nome: "Ana Souza", 
        texto: "Amei o atendimento! Profissional maravilhosa e ambiente acolhedor. Me senti super segura e o resultado ficou incrível!", 
        imagem: "assets/img/Feedbacks/Cliente01.avif",
        rating: 5, // << NOVO: Avaliação em estrelas
        source: "google", // << NOVO: Fonte (google, instagram, whatsapp)
        destaque: "Profissional maravilhosa e ambiente acolhedor." // << NOVO: A melhor frase
    },
    { 
        nome: "Bianca Lima", 
        texto: "Meu cílios ficaram perfeitos, exatamente como eu queria! A durabilidade é ótima e o trabalho super delicado.", 
        imagem: "assets/img/Feedbacks/Cliente02.avif",
        rating: 5,
        source: "instagram",
        destaque: "Meu cílios ficaram perfeitos!"
    },
    { 
        nome: "Camila Torres", 
        texto: "Nunca recebi tantos elogios pelas minhas sobrancelhas. A Nayra tem a mão muito leve e um senso de visagismo incrível. Recomendo de olhos fechados!", 
        imagem: "assets/img/Feedbacks/Cliente03.avif",
        rating: 5,
        source: "whatsapp",
        destaque: "Nunca recebi tantos elogios pelas minhas sobrancelhas."
    }
];

// Dados para a seção Cursos
const combos = [
    {
        nome: "Combo Impacto Laminado",
        imagem: "assets/img/combos/Combo1.jpg", // Atualize com o caminho real da imagem
        descricao: "Cílios volumosos com acabamento impecável e sobrancelhas perfeitamente alinhadas com a técnica de Brow Lamination.",
        servicos: ["Volume Brasileiro", "Brow Lamination"],
        destaque: true
    },
    {
        nome: "Combo Moana Perfeito",
        imagem: "assets/img/combos/Combo2.jpg", // Atualize com o caminho real da imagem
        descricao: "Um olhar marcante com o charme natural do Volume Moana e sobrancelhas desenhadas com precisão usando henna.",
        servicos: ["Volume Moana", "Design com Henna"],
        destaque: false
    }
];


const cursos = [
    { 
        titulo: "Extensão de Cílios - Iniciante", 
        chamada: "Desperte seu Olhar de Artista com Extensão de Cílios.",
        imagem: "assets/img/cursos/lash.jpg",
        conteudo: {
            "para_quem": "Para iniciantes que desejam ingressar no mercado de cílios com uma base sólida, mesmo sem nenhuma experiência prévia.",
            "aprendizado": ["História e fundamentos da extensão", "Biossegurança e saúde ocular", "Materiais e ferramentas", "Técnica de Fio a Fio Clássico", "Mapeamento e visagismo do olhar", "Manutenção e remoção segura"],
            "incluso": ["Apostila completa", "Certificado profissional", "Kit inicial com materiais de alta qualidade", "Aula prática em modelo real", "Suporte contínuo pós-curso"],
            "duracao": "2 dias intensivos (16 horas)"
        }
    },
    { 
        titulo: "Especialização em Volume Brasileiro", 
        chamada: "By Perfect Lash: Domine a técnica que conquista.",
        imagem: "assets/img/cursos/cilios.jpg",
        conteudo: {
            "para_quem": "Para lash designers já certificadas na técnica clássica que buscam se diferenciar, aumentar seu portfólio e faturamento.",
            "aprendizado": ["O que são os fios em formato 'Y'", "Diferença entre Volume Brasileiro e Russo", "Técnica de acoplagem para volume", "Como criar o famoso 'efeito delineado'", "Manutenção e durabilidade da técnica", "Dicas de precificação e marketing"],
            "incluso": ["Apostila de especialização", "Certificado de especialista", "Material completo para uso em aula", "Acesso a Grupo VIP de Alunas"],
            "duracao": "1 dia de imersão (8 horas)"
        }
    },
    { 
        titulo: "Design de Sobrancelhas com Henna", 
        chamada: "Sobrancelhas Perfeitas: Design, Henna e Geometria.",
        imagem: "assets/img/cursos/sobrancelhas.png",
        conteudo: {
            "para_quem": "Para iniciantes ou profissionais que desejam se tornar especialistas em sobrancelhas.",
            "aprendizado": ["Mapeamento facial com paquímetro e linha", "Visagismo aplicado ao design", "Epilação correta com pinça", "Colorimetria e preparação da henna", "Aplicação com efeito ombré e sem marcações", "Finalização e dicas de fotografia"],
            "incluso": ["Apostila técnica ilustrada", "Certificado de Designer Profissional", "Todo o material para uso em aula", "Lista com os melhores fornecedores"],
            "duracao": "2 dias (16 horas)"
        }
    }
];

/* =================================================================== */
/* ======================== FUNÇÕES DO SITE ========================== */
/* =================================================================== */
function inicializarCabecalhoResponsivo() {
    const cabecalho = document.getElementById('cabecalho');
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('.cabecalho__link');

    // Se algum elemento essencial não existir, a função para.
    if (!cabecalho || !menuToggle) return;

    // Função para abrir e fechar o menu
    function toggleMenu() {
        document.body.classList.toggle('menu-aberto');
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    }

    // Fecha o menu se um link for clicado
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (document.body.classList.contains('menu-aberto')) {
                toggleMenu();
            }
        });
    });
    
    // Adiciona os event listeners
    menuToggle.addEventListener('click', toggleMenu);
    
    // Lógica de scroll (não precisa de mudança)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            cabecalho.classList.add('cabecalho--scrolled');
        } else {
            cabecalho.classList.remove('cabecalho--scrolled');
        }
    });
}

// ---------------------------- CATÁLOGO DE SERVIÇOS ----------------------------
function mostrarServicos(tipo) {
    const container = document.getElementById("catalogo-carrossel");
    if (!container) return;
    container.innerHTML = "";

    const servicos = tipo === "sobrancelhas" ? servicosSobrancelhas : servicosCilios;

    servicos.forEach((servico) => {
        const card = document.createElement("div");
        card.className = "catalogo__card";
        card.setAttribute("role", "group");
        card.setAttribute("aria-label", `Detalhes sobre ${servico.titulo}`);

        card.innerHTML = `
            <img src="${servico.imagem}" alt="Imagem ilustrativa do serviço ${servico.titulo}" loading="lazy" onerror="this.onerror=null; this.src='assets/img/placeholder-imagem.png';">
            <div class="catalogo__card__conteudo">
                <h3 class="catalogo__card__titulo">${servico.titulo}</h3>
                <p class="catalogo__card__descricao">${servico.descricao}</p>
                <div class="catalogo__card__caracteristicas">
                    ${servico.caracteristicas.map(item => `<span>${item}</span>`).join("")}
                </div>
                <div class="catalogo__cta">
                    <a href="https://wa.me/5519999670165?text=Oi%20Nayra!%20😊%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20${encodeURIComponent(servico.titulo)}%20e%20agendar%20um%20horário." target="_blank">Agendar agora</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll(".catalogo__botao").forEach(botao => {
        botao.classList.remove("ativo");
    });
    const botaoAtivo = document.querySelector(`.catalogo__botao[onclick*="'${tipo}'"]`);
    if (botaoAtivo) {
        botaoAtivo.classList.add("ativo");
    }
    
    aplicarSnapHighlight();
}

function aplicarSnapHighlight() {
    const container = document.getElementById("catalogo-carrossel");
    if (!container) return;

    const destacarCardCentral = () => {
        const cards = container.querySelectorAll(".catalogo__card");
        if (cards.length === 0) return;

        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distancia = Math.abs(containerCenter - cardCenter);
            
            card.classList.toggle("destacado", distancia < (cardRect.width / 2) * 0.8);
        });
    };

    if (container._scrollListener) {
        container.removeEventListener("scroll", container._scrollListener);
    }
    
    container._scrollListener = () => {
        window.requestAnimationFrame(destacarCardCentral);
    };

    container.addEventListener("scroll", container._scrollListener);
    
    window.requestAnimationFrame(destacarCardCentral);
}

function inicializarDragToScroll(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        // Posição inicial do clique = Posição do mouse na página - deslocamento do container
        startX = e.pageX - container.offsetLeft;
        // Posição inicial do scroll
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Para a função se o mouse não estiver pressionado
        e.preventDefault(); // Impede ações padrão (como selecionar texto)
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2.5; // O * 2.5 faz o scroll ser mais rápido e responsivo
        container.scrollLeft = scrollLeft - walk;
    });
}

// ---------------------------- SEÇÃO DE CURSOS ----------------------------
function renderizarCursos() {
    const container = document.getElementById('cursos-lista');
    if (!container) return;
    
    container.innerHTML = ''; // Limpa o container

    cursos.forEach(curso => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'curso-card';

        cardDiv.innerHTML = `
            <div class="curso-card__preview">
                <img src="${curso.imagem}" alt="Imagem do curso ${curso.titulo}" class="curso-card__imagem">
                <div class="curso-card__info">
                    <h3>${curso.titulo}</h3>
                    <p>${curso.chamada}</p>
                    <button class="curso-card__toggle-btn">Ver Detalhes</button>
                </div>
            </div>

            <div class="curso-card__detalhes">
                <div class="detalhes__grid">
                    <div>
                        <h4>Para Quem é Este Curso?</h4>
                        <p>${curso.conteudo.para_quem}</p>
                    </div>
                    <div>
                        <h4>O que Você Vai Aprender:</h4>
                        <ul>
                            ${curso.conteudo.aprendizado.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4>O que Está Incluso:</h4>
                        <ul>
                            ${curso.conteudo.incluso.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4>Duração:</h4>
                        <p><strong>${curso.conteudo.duracao}</strong></p>
                    </div>
                </div>
                <div class="detalhes__cta-final">
                        <a href="https://wa.me/5519999670165?text=Oi, Nayra! Tenho interesse no curso de ${encodeURIComponent(curso.titulo)}." class="botao-principal" target="_blank">Quero me Inscrever</a>
                </div>
            </div>
        `;
        container.appendChild(cardDiv);
    });

}

// 3. NOVA FUNÇÃO PARA A INTERATIVIDADE DE EXPANSÃO
function inicializarCardsDeCursoExpansiveis() {
    const todosOsBotoes = document.querySelectorAll('.curso-card__toggle-btn');
    
    todosOsBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const card = botao.closest('.curso-card');
            card.classList.toggle('expandido');

            // Muda o texto do botão
            if (card.classList.contains('expandido')) {
                botao.textContent = 'Fechar Detalhes';
            } else {
                botao.textContent = 'Ver Detalhes';
            }
        });
    });
}


function inicializarCarrosselInfinito() {
    // 1. Seleciona o container principal
    const scroller = document.querySelector(".scroller");
    if (!scroller) return;

    // 2. Adiciona o atributo para o CSS ativar a animação
    scroller.setAttribute("data-animated", true);

    // 3. Pega a lista de feedbacks
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // 4. A MÁGICA: Duplica cada item e adiciona ao final para o loop ser perfeito
    scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        // Adiciona um atributo para esconder a duplicata de leitores de tela (acessibilidade)
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
    });
}


function popularFeedbacks() {
    const list = document.getElementById('feedbacks-list');
    if (!list) return;

    list.innerHTML = ''; // Limpa a lista

    slidesFeedbacks.forEach(slide => {
        const listItem = document.createElement('li'); // Agora criamos um <li>
        
        // Lógica das estrelas e fonte (mantida da versão anterior)
        let estrelasHTML = Array(slide.rating).fill('<i class="fas fa-star"></i>').join('');
        let sourceIcon = '';
        if (slide.source === 'google') sourceIcon = '<i class="fab fa-google"></i>';
        if (slide.source === 'instagram') sourceIcon = '<i class="fab fa-instagram"></i>';
        if (slide.source === 'whatsapp') sourceIcon = '<i class="fab fa-whatsapp"></i>';

        listItem.innerHTML = `
            <div class="card-feedback">
                <div class="card-feedback__header">
                    <img src="${slide.imagem}" alt="Foto da cliente ${slide.nome}">
                    <div class="user-info">
                        <strong>${slide.nome}</strong>
                        <div class="rating-source">
                            <div class="estrelas">${estrelasHTML}</div>
                            <div class="source">${sourceIcon}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="frase-destaque">"${slide.destaque}"</p>
                    <p class="texto-completo">${slide.texto}</p>
                </div>
            </div>
        `;
        list.appendChild(listItem);
    });

    // Depois que todos os cards foram adicionados, inicializa a animação
    inicializarCarrosselInfinito();
}

function renderizarCombos() {
    const container = document.querySelector('.combos__container');
    if (!container) return; // Para o código se o container não for encontrado
    
    container.innerHTML = ''; // Limpa o container antes de adicionar os novos cards

    combos.forEach(combo => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'combo-card';
        if (combo.destaque) {
            cardDiv.classList.add('destaque');
        }

        // Monta o HTML do card, agora sem a seção de preços
        cardDiv.innerHTML = `
            ${combo.destaque ? '<div class="combo-card__badge">Mais Pedido</div>' : ''}
            
            <div class="combo-card__imagem">
                <img src="${combo.imagem}" alt="Imagem do ${combo.nome}">
            </div>

            <div class="combo-card__conteudo">
                <h3 class="combo-card__title">${combo.nome}</h3>
                
                <p class="combo-card__description">${combo.descricao}</p>

                <ul class="combo-card__servicos">
                    ${combo.servicos.map(servico => `<li><i class="fas fa-check"></i> ${servico}</li>`).join('')}
                </ul>

                <a href="https://wa.me/5519999670165?text=Oi, Nayra! Tenho interesse no ${encodeURIComponent(combo.nome)} e gostaria de saber mais." class="combo-card__cta" target="_blank">Quero esse Combo</a>
            </div>
        `;

        container.appendChild(cardDiv);
    });
}

// ---------------------------- COMPONENTES DE UI GERAL ----------------------------
function inicializarAnimacoesDeScroll() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!("IntersectionObserver" in window) || animatedElements.length === 0) {
        animatedElements.forEach(element => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => observer.observe(element));
}

function inicializarBotaoWhatsApp() {
    const whatsappButton = document.querySelector('.whatsapp-button');
    const whatsappTooltip = document.querySelector('.whatsapp-tooltip');
    if (!whatsappButton || !whatsappTooltip) return;

    let tooltipShown = false;

    function toggleWhatsAppButton() {
        if (window.scrollY > 100) {
            whatsappButton.classList.add('visible');
            if (!tooltipShown) {
                whatsappTooltip.classList.add('visible');
                tooltipShown = true;
                setTimeout(() => {
                    whatsappTooltip.classList.add('fade-out');
                    setTimeout(() => whatsappTooltip.classList.remove('visible', 'fade-out'), 500);
                }, 2000);
            }
        } else {
            whatsappButton.classList.remove('visible');
        }
    }
    
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    window.addEventListener('scroll', debounce(toggleWhatsAppButton, 100));
    toggleWhatsAppButton();
}




/* =================================================================== */
/* ================== INICIALIZAÇÃO PRINCIPAL             ============ */
/* =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializadores Gerais
    inicializarCabecalhoResponsivo();
    inicializarAnimacoesDeScroll();
    inicializarBotaoWhatsApp();
    
    // Inicializadores de Seção (verificam se a seção existe antes de rodar)
    if (document.getElementById('catalogo-carrossel')) {
        mostrarServicos("sobrancelhas");
    }

    inicializarDragToScroll('.catalogo__carrossel');


    if (document.querySelector('.combos__container')) {
        renderizarCombos();
    }
    
    // CORREÇÃO: Chamando as funções dos CURSOS na ordem certa
    if (document.getElementById('cursos-lista')) {
        renderizarCursos(); // 1. Renderiza os cards
        inicializarCardsDeCursoExpansiveis(); // 2. Adiciona a interatividade de expandir
    }
    
    if (document.getElementById('feedbacks-list')) {
        popularFeedbacks();
    }
});