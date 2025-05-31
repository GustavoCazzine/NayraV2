document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector('.catalogo__carrossel');
    const destacado = carrossel.querySelector('.catalogo__card.destacado');

    if (carrossel && destacado) {
        const carrosselRect = carrossel.getBoundingClientRect();
        const destacadoRect = destacado.getBoundingClientRect();

        const scrollLeft = destacado.offsetLeft - (carrossel.clientWidth / 2) + (destacado.clientWidth / 2);
        carrossel.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.querySelector('.whatsapp-button');
    const whatsappTooltip = document.querySelector('.whatsapp-tooltip');
    let tooltipShown = false;

    // Função para mostrar/esconder o botão
    function toggleWhatsAppButton() {
        if (window.scrollY > 100) {
            whatsappButton.classList.add('visible');
            whatsappButton.classList.remove('hidden');

            if (!tooltipShown) {
                whatsappTooltip.classList.add('visible');
                tooltipShown = true;

                setTimeout(() => {
                    whatsappTooltip.classList.add('fade-out');

                    setTimeout(() => {
                        whatsappTooltip.classList.remove('visible', 'fade-out');
                    }, 500);
                }, 2000);
            }
        } else {
            whatsappButton.classList.remove('visible');
            whatsappButton.classList.add('hidden');
        }
    }

    // Função debounce para evitar chamadas excessivas
    function debounce(func, wait) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // Escuta o scroll e chama a função com debounce
    window.addEventListener('scroll', debounce(toggleWhatsAppButton, 100));

    toggleWhatsAppButton(); // Executa uma vez ao carregar
});

// Cards Feedbacks
const slides = [
    {
        nome: "Ana Souza",
        texto: "Amei o atendimento! Profissional maravilhosa e ambiente acolhedor.",
        imagem: "assets/img/Feedbacks/Cliente01.avif"
    },
    {
        nome: "Bianca Lima",
        texto: "Meu cílios ficaram perfeitos, exatamente como eu queria!",
        imagem: "assets/img/Feedbacks/Cliente02.avif"
    },
    {
        nome: "Camila Torres",
        texto: "Nunca recebi tantos elogios pelas minhas sobrancelhas. Recomendo de olhos fechados!",
        imagem: "assets/img/Feedbacks/Cliente03.avif"
    },
    {
        nome: "Débora Martins",
        texto: "O resultado superou minhas expectativas. Atendimento atencioso do início ao fim.",
        imagem: "assets/img/Feedbacks/Cliente04.avif"
    },
    {
        nome: "Fernanda Alves",
        texto: "Ambiente impecável e técnica incrível. Me senti muito segura durante todo o procedimento.",
        imagem: "assets/img/Feedbacks/Cliente05.avif"
    },
    {
        nome: "Gabriela Rocha",
        texto: "Saí renovada! O cuidado e o carinho fazem toda a diferença. Voltarei sempre!",
        imagem: "assets/img/Feedbacks/Cliente06.avif"
    },
    {
        nome: "Helena Dias",
        texto: "Profissional detalhista e dedicada. Meus cílios ficaram lindos e super naturais.",
        imagem: "assets/img/Feedbacks/Cliente07.avif"
    },
    {
        nome: "Isabela Ferreira",
        texto: "Experiência maravilhosa! Atendimento humanizado e resultado impecável.",
        imagem: "assets/img/Feedbacks/Cliente08.avif"
    }
];

const wrapper = document.getElementById('swiper-wrapper');

slides.forEach(slide => {
    const div = document.createElement('div');
    div.className = 'swiper-slide';
    div.innerHTML = `
        <div class="card-feedback">
            <div class="header">
                <img src="${slide.imagem}" alt="${slide.nome}">
                <div class="user-info">
                    <strong>@${slide.nome}</strong>
                </div>
            </div>
            <div class="comment">
                <p>"${slide.texto}"</p>
            </div>
        </div>
    `;
    wrapper.appendChild(div);
});

// Carrossel
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // Em telas maiores ou iguais a 768px (tablets)
        768: {
            slidesPerView: 'auto', // Permite mostrar quantos slides couberem
            spaceBetween: 30,
            centeredSlides: true, // Centraliza o slide ativo
        },
        // Em telas maiores ou iguais a 1024px (desktops)
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
        }
    }
});


// Cursos (adaptados para a estrutura minimalista)
const cursos = [
    {
        titulo: "Desperte seu Olhar de Artista com Extensão de Cílios",
        beneficio: "Inicie sua carreira Lash com o curso para iniciantes!",
        imagem: "assets/img/cursos/cilios.jpg",
        mensagemWhats: "Olá! Quero me inscrever no curso de Lash Iniciante.",
        pdfLink: "/caminho/para/o/pdf-do-curso-1.pdf"
    },
    {
        titulo: "By Perfect Lash: Volume Brasileiro que Conquista",
        beneficio: "Domine a técnica mais desejada e eleve seu nível!",
        imagem: "assets/img/cursos/lash.jpg",
        mensagemWhats: "Olá! Quero saber sobre o curso By Perfect Lash.",
        pdfLink: "/caminho/para/o/pdf-do-curso-2.pdf"
    },
    {
        titulo: "Sobrancelhas Perfeitas: Design, Henna e Geometria",
        beneficio: "Transforme olhares com designs simétricos e lucrativos!",
        imagem: "assets/img/cursos/sobrancelhas.png",
        mensagemWhats: "Olá! Tenho interesse no curso de Sobrancelhas.",
        pdfLink: "/caminho/para/o/pdf-do-curso-3.pdf"
    }
];

const lista = document.getElementById("cursos-lista");

function abrirWhatsApp(mensagem) {
    const url = `https://wa.me/5519999670165?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

cursos.forEach(curso => {
    const card = document.createElement("div");
    card.className = "curso-card-minimal";
    card.innerHTML = `
        <div class="curso-card-minimal__conteudo">
            <h3 class="curso-card-minimal__titulo texto-com-gradiente">${curso.titulo}</h3>
            <p class="curso-card-minimal__chamada">${curso.beneficio}</p>
            <p class="curso-card-minimal__incentivo">🔥 Vagas Limitadas! Transforme sua paixão agora!</p>
            <div class="curso-card-minimal__botoes">
                <a href="https://wa.me/5519999670165?text=${encodeURIComponent(curso.mensagemWhats)}" target="_blank" class="curso-card-minimal__cta">Quero me inscrever!</a>
                <a href="${curso.pdfLink}" target="_blank" class="curso-card-minimal__pdf-link"><i class="fas fa-file-pdf"></i> Ver Detalhes</a>
            </div>
        </div>
        <div class="curso-card-minimal__imagem">
            <img src="${curso.imagem}" alt="${curso.titulo}">
        </div>
    `;
    lista.appendChild(card);
});


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

let scrollListenerAplicado = false;

// Renderiza os serviços na tela
function mostrarServicos(tipo) {
    const container = document.getElementById("catalogo-carrossel");
    if (!container) return; // Adiciona verificação se o container existe
    container.innerHTML = "";

    const servicos = tipo === "sobrancelhas" ? servicosSobrancelhas : servicosCilios;

    // DUPLICAR para simular carrossel infinito (opcional, pode remover se não quiser duplicar)
    // const servicosDuplicados = [...servicos, ...servicos]; 
    // Por simplicidade, vamos usar apenas 'servicos' por enquanto
    const servicosParaRenderizar = servicos;


    servicosParaRenderizar.forEach((servico) => {
        const card = document.createElement("div");
        card.className = "catalogo__card";
        card.setAttribute("role", "group");
        card.setAttribute("aria-label", `Detalhes sobre ${servico.titulo}`); // Melhor acessibilidade

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
    const botaoAtivo = document.querySelector(`.catalogo__botao[onclick*="'${tipo}'"]`); // Ajuste no seletor
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
            
            // Destaca se o centro do card estiver suficientemente próximo do centro do container
            card.classList.toggle("destacado", distancia < (cardRect.width / 2) * 0.8 ); // 0.8 é um fator de sensibilidade
        });
    };

    // Remove listener antigo para evitar duplicação se a função for chamada múltiplas vezes
    if (container._scrollListener) {
        container.removeEventListener("scroll", container._scrollListener);
    }
    
    container._scrollListener = () => {
        window.requestAnimationFrame(destacarCardCentral);
    };

    container.addEventListener("scroll", container._scrollListener);
    
    // Chamar uma vez para o estado inicial após os cards serem renderizados
    window.requestAnimationFrame(destacarCardCentral);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarServicos("sobrancelhas");

    // A lógica de scroll inicial pode precisar de um pequeno delay 
    // para garantir que tudo esteja renderizado e as dimensões corretas.
    setTimeout(() => {
        const container = document.getElementById("catalogo-carrossel");
        if (!container) return;
        const primeiroCard = container.querySelector(".catalogo__card");
        if (primeiroCard) {
            // Calcula a posição para centralizar o primeiro card
            const scrollPosition = primeiroCard.offsetLeft - (container.offsetWidth / 2) + (primeiroCard.offsetWidth / 2);
            container.scrollTo({
                left: scrollPosition,
                behavior: "smooth"
            });
        }
        // Garante que o destaque seja aplicado após o scroll inicial
        setTimeout(aplicarSnapHighlight, 50); // Delay adicional para o scroll completar
    }, 100); // Delay inicial
});

document.addEventListener("DOMContentLoaded", () => {
    const socialBar = document.getElementById("socialBar");
    const toggleBar = document.getElementById("toggleBar");

    let isVisible = false;

    function updateTogglePosition() {
        if (isVisible) {
            toggleBar.classList.remove("floating");
            toggleBar.classList.add("shifted");
            socialBar.classList.add("visible");
        } else {
            toggleBar.classList.remove("shifted");
            toggleBar.classList.add("floating");
            socialBar.classList.remove("visible");
        }
    }

    toggleBar.addEventListener("click", () => {
        isVisible = !isVisible;
        updateTogglePosition();
    });

    // Inicializa como flutuando
    updateTogglePosition();
});



// --- DADOS DOS SERVIÇOS PARA O QUIZ ---
const listaSobrancelhasQuiz = [
    { id: 'design_sobrancelha', titulo: "Design de Sobrancelha", descricao: "Trabalhamos com o formato natural...", caracteristicas: ["Formato natural", "Desenho único", "Pode ser natural ou marcado"], imagem: 'assets/img/servicos/sobrancelhas/Personalizado.png' },
    { id: 'design_com_henna', titulo: "Design com Henna", descricao: "Ideal para quem tem falhas...", caracteristicas: ["Preenchimento de falhas", "Natural", "Levemente marcado"], imagem: 'assets/img/servicos/sobrancelhas/Henna.png' },
    { id: 'brow_lamination', titulo: "Brow Lamination", descricao: "Alinhamento dos fios por até 8 semanas...", caracteristicas: ["Alinhamento duradouro", "Preenche falhas", "Volume"], imagem: 'assets/img/servicos/sobrancelhas/BrowLamination.png' },
    { id: 'nanobrows', titulo: "NanoBrows", descricao: "Evolução da micropigmentação...", caracteristicas: ["Fios realistas", "Indolor", "Volume", "Correção do formato"], imagem: 'assets/img/servicos/sobrancelhas/NanoBrow.png' }
];
const listaCiliosQuiz = [
    { id: 'lash_lifting', titulo: "Lash Lifting", descricao: "Curvamento dos fios naturais...", caracteristicas: ["Curvamento natural", "Pode tingir", "Hidrata os fios"], imagem: 'assets/img/servicos/cilios/LashLifting.png' },
    { id: 'volume_brasileiro', titulo: "Volume Brasileiro", descricao: "Fios em formato de Y...", caracteristicas: ["Volume", "Preenche 80% a 100% dos fios"], imagem: 'assets/img/servicos/cilios/VolumeBrasileiro.png' },
    { id: 'volume_moana', titulo: "Volume Moana", descricao: "Volume encantador e natural...", caracteristicas: ["Volume", "Naturalidade", "Elegância"], imagem: 'assets/img/servicos/cilios/VolumeMoana.png' },
    { id: 'volume_jasmine', titulo: "Volume Jasmine", descricao: "Volume e olhar encantador...", caracteristicas: ["Volume", "Elegância", "Sofisticação"], imagem: 'assets/img/servicos/cilios/VolumeJasmine.png' },
    { id: 'extensoes_pro', titulo: "Extensões Pro", descricao: "Maior preenchimento e durabilidade...", caracteristicas: ["Preenchimento", "Durabilidade", "Sem manutenção"], imagem: 'assets/img/servicos/cilios/Pro.png' },
    { id: 'fox_eyes', titulo: "Efeito Fox Eyes", descricao: "Alonga e levanta os cílios...", caracteristicas: ["Alongamento", "Lifting", "Sofisticado"], imagem: 'assets/img/servicos/cilios/FoxEyses.png' },
    { id: 'volume_shine', titulo: "Volume Shine", descricao: "Volume luminoso e radiante...", caracteristicas: ["Volume", "Luminoso", "Radiante"], imagem: 'assets/img/servicos/cilios/VolumeShine.png' }
];

// --- PERGUNTAS DO QUIZ (Com lógica otimizada para "Ambos") ---
const quizPerguntas = [
    { // Pergunta 0
        pergunta: "Qual área você deseja realçar principalmente?",
        tipo: "unica",
        opcoes: ["Cílios", "Sobrancelhas", "Ambos"],
        pontuacao: { "Cílios": { areas: { cilios: 1 } }, "Sobrancelhas": { areas: { sobrancelhas: 1 } }, "Ambos": { areas: { sobrancelhas: 1, cilios: 1, ambos: 1 } } }
    },
    { // Pergunta 1 - Cílios (Efeito) - MANTER para Ambos
        pergunta: "Qual o efeito de cílios que você mais deseja?",
        tipo: "unica",
        opcoes: ["Cílios curvados e alongados naturalmente", "Cílios com volume e preenchimento", "Um olhar mais exótico e marcante"],
        pontuacao: { "Cílios curvados e alongados naturalmente": { lash_lifting: 1, volume_moana: 0.7 }, "Cílios com volume e preenchimento": { volume_brasileiro: 0.8, volume_jasmine: 0.9, volume_shine: 0.8 }, "Um olhar mais exótico e marcante": { fox_eyes: 1, extensoes_pro: 0.6 } },
        condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0
    },
    { // Pergunta 2 - Cílios (Manutenção) - MANTER para Ambos
        pergunta: "Com que frequência você prefere fazer a manutenção dos cílios?",
        tipo: "unica",
        opcoes: ["Prefiro um procedimento sem manutenção", "Estou disposta a fazer manutenção regular", "Prefiro algo de curta duração para eventos"],
        pontuacao: { "Prefiro um procedimento sem manutenção": { extensoes_pro: 1 }, "Estou disposta a fazer manutenção regular": { volume_brasileiro: 0.7, volume_moana: 0.6, volume_jasmine: 0.7, volume_shine: 0.6, lash_lifting: 0.6, fox_eyes: 0.6 }, "Prefiro algo de curta duração para eventos": { lash_lifting: 0.5} },
        condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0
    },
    { // Pergunta 3 - Cílios (Estilo) - PULAR se "Ambos" (a menos que queira 3 de cílios)
        pergunta: "Qual estilo de cílios você acha mais atraente?",
        tipo: "unica",
        opcoes: ["Cílios discretos e elegantes", "Cílios mais chamativos e volumosos", "Um estilo que levante o olhar"],
        pontuacao: { "Cílios discretos e elegantes": { volume_moana: 0.8, lash_lifting: 0.7 }, "Cílios mais chamativos e volumosos": { volume_brasileiro: 0.7, volume_jasmine: 0.9, volume_shine: 0.8, extensoes_pro: 0.7 }, "Um estilo que levante o olhar": { fox_eyes: 1 } },
        condicao: (respostas) => respostas.areas?.cilios > 0 && !respostas.areas?.ambos // SÓ se for APENAS cílios
    },
    { // Pergunta 4 - Cílios (Sensibilidade) - PULAR se "Ambos"
        pergunta: "Você tem alguma sensibilidade nos olhos ou prefere evitar produtos químicos fortes?",
        tipo: "unica",
        opcoes: ["Sim, tenho sensibilidade", "Não tenho problemas com isso"],
        pontuacao: { "Sim, tenho sensibilidade": { lash_lifting: 0.7 }, "Não tenho problemas com isso": { } },
        condicao: (respostas) => respostas.areas?.cilios > 0 && !respostas.areas?.ambos
    },
    { // Pergunta 5 - Cílios (Prioridade) - PULAR se "Ambos"
        pergunta: "Qual a sua prioridade ao escolher um procedimento para cílios?",
        tipo: "unica",
        opcoes: ["Realçar a beleza natural", "Transformar o olhar", "Praticidade e durabilidade"],
        pontuacao: { "Realçar a beleza natural": { lash_lifting: 0.9, volume_moana: 0.7 }, "Transformar o olhar": { volume_brasileiro: 0.7, volume_jasmine: 0.7, volume_shine: 0.7, fox_eyes: 0.6 }, "Praticidade e durabilidade": { extensoes_pro: 0.9 } },
        condicao: (respostas) => respostas.areas?.cilios > 0 && !respostas.areas?.ambos
    },
    { // Pergunta 6 - Sobrancelhas (Formato) - MANTER para Ambos
        pergunta: "Qual o formato de sobrancelha que você mais te agrada?",
        tipo: "unica",
        opcoes: ["Natural, seguindo o formato original", "Mais definido e marcado", "Mais volumoso e cheio"],
        pontuacao: { "Natural, seguindo o formato original": { design_sobrancelha: 1, brow_lamination: 0.7, nanobrows: 0.5 }, "Mais definido e marcado": { design_com_henna: 0.9, nanobrows: 0.8 }, "Mais volumoso e cheio": { brow_lamination: 0.9, nanobrows: 0.6 } },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0
    },
    { // Pergunta 7 - Sobrancelhas (Duração) - MANTER para Ambos
        pergunta: "Você busca um procedimento de longa duração para as sobrancelhas?",
        tipo: "unica",
        opcoes: ["Sim, quero algo que dure", "Não, prefiro opções temporárias"],
        pontuacao: { "Sim, quero algo que dure": { nanobrows: 1, brow_lamination: 0.5 }, "Não, prefiro opções temporárias": { design_sobrancelha: 0.6, design_com_henna: 0.7 } },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0
    },
    { // Pergunta 8 - Sobrancelhas (Preocupação) - PULAR se "Ambos" (a menos que queira 3 de sobrancelhas)
        pergunta: "Qual a sua maior preocupação com suas sobrancelhas?",
        tipo: "unica",
        opcoes: ["Falhas e assimetrias", "Pouca definição e cor", "Fios desalinhados e sem forma"],
        pontuacao: { "Falhas e assimetrias": { nanobrows: 0.9, design_com_henna: 0.7 }, "Pouca definição e cor": { design_com_henna: 0.8, design_sobrancelha: 0.7 }, "Fios desalinhados e sem forma": { brow_lamination: 1 } },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 && !respostas.areas?.ambos // SÓ se for APENAS sobrancelhas
    },
    { // Pergunta 9 - Sobrancelhas (Estilo) - PULAR se "Ambos"
        pergunta: "Qual estilo de sobrancelha você considera ideal para você?",
        tipo: "unica",
        opcoes: ["Sobrancelhas delicadas e sutis", "Sobrancelhas expressivas e marcantes"],
        pontuacao: { "Sobrancelhas delicadas e sutis": { design_sobrancelha: 0.8, brow_lamination: 0.6, nanobrows: 0.5 }, "Sobrancelhas expressivas e marcantes": { design_com_henna: 0.9, nanobrows: 0.7 } },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 && !respostas.areas?.ambos
    },
    { // Pergunta 10 - Sobrancelhas (Importância) - PULAR se "Ambos"
        pergunta: "O que é mais importante para você em um serviço de sobrancelhas?",
        tipo: "unica",
        opcoes: ["Realçar a beleza natural do rosto", "Corrigir imperfeições e definir o olhar", "Praticidade e facilidade no dia a dia"],
        pontuacao: { "Realçar a beleza natural do rosto": { design_sobrancelha: 0.9 }, "Corrigir imperfeições e definir o olhar": { nanobrows: 0.8, design_com_henna: 0.7 }, "Praticidade e facilidade no dia a dia": { brow_lamination: 0.8 } },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 && !respostas.areas?.ambos
    },
    { // Pergunta 11 - Ambos específica - PULAR para reduzir
        pergunta: "Ao realçar seu olhar completo, qual o seu foco principal?",
        tipo: "unica",
        opcoes: ["Cílios mais expressivos", "Sobrancelhas bem definidas", "Um equilíbrio perfeito entre os dois"],
        pontuacao: { "Cílios mais expressivos": { areas: { ciliosBonus: 0.2 } }, "Sobrancelhas bem definidas": { areas: { sobrancelhasBonus: 0.2 } }, "Um equilíbrio perfeito entre os dois": { areas: { equilibrio: 0.1 } } },
        condicao: (respostas) => false // Pular esta para o caminho "Ambos" ficar mais curto
    },
    { // Pergunta 12 - Ambos específica - MANTER
        pergunta: "Considerando um look completo, você prefere um visual mais natural ou mais produzido/transformador?",
        tipo: "unica",
        opcoes: ["Natural e elegante", "Produzido e impactante"],
        pontuacao: { "Natural e elegante": { naturalFactorGlobal: 1 }, "Produzido e impactante": { transformadorFactorGlobal: 1 } },
        condicao: (respostas) => respostas.areas?.ambos > 0
    },
    { // Pergunta 13 - Ambos específica - PULAR para reduzir
        pergunta: "Qual sua maior prioridade ao combinar os dois serviços?",
        tipo: "unica",
        opcoes: ["Durabilidade e menos manutenção", "Resultado mais impactante possível", "Processo mais rápido e suave"],
        pontuacao: { "Durabilidade e menos manutenção": { comboPrioridade: 'durabilidade' }, "Resultado mais impactante possível": { comboPrioridade: 'impacto' }, "Processo mais rápido e suave": { comboPrioridade: 'rapidez' } },
        condicao: (respostas) => false // Pular esta para o caminho "Ambos" ficar mais curto
    },
    { // Pergunta 14 - Ambos específica - MANTER
        pergunta: "Você busca procedimentos que economizem tempo na sua rotina de beleza diária?",
        tipo: "unica",
        opcoes: ["Sim, quero praticidade!", "Não me importo tanto com o tempo da rotina"],
        pontuacao: { "Sim, quero praticidade!": { praticidadeGlobal: 1 }, "Não me importo tanto com o tempo da rotina": { } },
        condicao: (respostas) => respostas.areas?.ambos > 0
    },
    { // Pergunta 15 - Ambos específica - PULAR para reduzir
        pergunta: "Qual a sua expectativa geral ao combinar serviços de cílios e sobrancelhas?",
        tipo: "unica",
        opcoes: ["Um resultado elegante e equilibrado", "Um visual marcante e glamoroso"],
        pontuacao: { "Um resultado elegante e equilibrado": { expectativaGlobal: 'equilibrio' }, "Um visual marcante e glamoroso": { expectativaGlobal: 'glamour' } },
        condicao: (respostas) => false // Pular esta para o caminho "Ambos" ficar mais curto
    }
];

// --- Variáveis Globais para Elementos do DOM e Estado do Quiz ---
let abrirQuizLinkEl, quizModalEl, quizContainerEl, resultadoElementEl, 
    perguntaEl, opcoesEl, quizProgressoEl, 
    quizProgressoDivEl, 
    servicoRecomendadoMsgEl, whatsappLinkEl;
let fecharQuizBotoesEl = []; 

let perguntaAtualIndex = 0;
const respostasUsuario = { areas: {} }; 
const pontuacaoSobrancelhas = {};
const pontuacaoCilios = {};

// --- FUNÇÕES PRINCIPAIS DO QUIZ ---

function inicializarPontuacoesQuiz() {
    listaSobrancelhasQuiz.forEach(servico => pontuacaoSobrancelhas[servico.id] = 0);
    listaCiliosQuiz.forEach(servico => pontuacaoCilios[servico.id] = 0);
}

function abrirQuiz() { 
    if (!quizModalEl) { 
        console.error("Quiz não pode abrir: elemento #quiz-modal não foi encontrado.");
        return; 
    }
    quizModalEl.style.display = 'flex';
    perguntaAtualIndex = 0;
    Object.keys(respostasUsuario).forEach(key => { 
        if (key !== 'areas') delete respostasUsuario[key]; 
    });
    respostasUsuario.areas = {}; 
    inicializarPontuacoesQuiz();

    if (quizContainerEl) quizContainerEl.style.display = 'flex'; 
    if (resultadoElementEl) resultadoElementEl.style.display = 'none'; 
    
    if (quizProgressoDivEl) { 
        quizProgressoDivEl.style.width = '0%';
        quizProgressoDivEl.textContent = '0%';
    }
    mostrarProximaPerguntaQuiz(); 
}

function fecharQuiz() { 
    if (quizModalEl) {
        quizModalEl.style.display = 'none';
    }
}

function atualizarBarraProgressoQuiz() {
    if (!quizProgressoDivEl) { return; }
    let totalDePerguntasNoCaminho = 0;
    for (let i = 0; i < quizPerguntas.length; i++) {
        if (!quizPerguntas[i].condicao || quizPerguntas[i].condicao(respostasUsuario)) {
            totalDePerguntasNoCaminho++;
        }
    }
    let perguntasRespondidasEVisiveis = 0;
    for (let i = 0; i < perguntaAtualIndex; i++) { 
        if (!quizPerguntas[i].condicao || quizPerguntas[i].condicao(respostasUsuario)) {
            perguntasRespondidasEVisiveis++;
        }
    }
    const progresso = totalDePerguntasNoCaminho > 0 ? (perguntasRespondidasEVisiveis / totalDePerguntasNoCaminho) * 100 : 0;
    quizProgressoDivEl.style.width = `${Math.min(progresso, 100)}%`;
    quizProgressoDivEl.textContent = `${Math.round(Math.min(progresso, 100))}%`;
}

function mostrarProximaPerguntaQuiz() {
    atualizarBarraProgressoQuiz(); 
    while (perguntaAtualIndex < quizPerguntas.length &&
           quizPerguntas[perguntaAtualIndex].condicao &&
           !quizPerguntas[perguntaAtualIndex].condicao(respostasUsuario)) {
        perguntaAtualIndex++;
    }

    if (perguntaAtualIndex >= quizPerguntas.length) {
        mostrarResultadoQuiz();
        return;
    }
    
    const perguntaAtual = quizPerguntas[perguntaAtualIndex];
    if (perguntaEl) perguntaEl.textContent = perguntaAtual.pergunta;
    if (opcoesEl) opcoesEl.innerHTML = ""; 

    perguntaAtual.opcoes.forEach(opcaoTexto => {
        const botaoOpcao = document.createElement("button");
        botaoOpcao.type = "button"; 
        botaoOpcao.textContent = opcaoTexto;
        botaoOpcao.addEventListener("click", () => {
            selecionarRespostaQuiz(opcaoTexto, perguntaAtual.pontuacao, botaoOpcao);
        });
        if (opcoesEl) opcoesEl.appendChild(botaoOpcao);
    });
}

function selecionarRespostaQuiz(opcaoSelecionada, pontuacoesOpcao, botaoClicado) {
    respostasUsuario[`q${perguntaAtualIndex}`] = opcaoSelecionada;
    if (pontuacoesOpcao && pontuacoesOpcao[opcaoSelecionada]) {
        const scores = pontuacoesOpcao[opcaoSelecionada];
        Object.keys(scores).forEach(key => {
            if (key === 'areas') { 
                Object.keys(scores.areas).forEach(area => {
                    respostasUsuario.areas[area] = (respostasUsuario.areas[area] || 0) + scores.areas[area];
                });
            } else { 
                if (listaSobrancelhasQuiz.some(s => s.id === key)) {
                    pontuacaoSobrancelhas[key] = (pontuacaoSobrancelhas[key] || 0) + scores[key];
                } else if (listaCiliosQuiz.some(s => s.id === key)) {
                    pontuacaoCilios[key] = (pontuacaoCilios[key] || 0) + scores[key];
                } else {
                     respostasUsuario[key] = scores[key]; 
                }
            }
        });
    }
    if(opcoesEl) {
        opcoesEl.querySelectorAll('button').forEach(b => b.classList.remove('selecionado'));
    }
    botaoClicado.classList.add('selecionado');
    setTimeout(() => {
        perguntaAtualIndex++; 
        mostrarProximaPerguntaQuiz(); 
    }, 300); 
}
    
function recomendarServicosQuiz() {
    let recomendacaoSobrancelhas = null;
    let maxPontuacaoSobrancelhas = -1;
    for (const id in pontuacaoSobrancelhas) {
        if (pontuacaoSobrancelhas[id] > maxPontuacaoSobrancelhas) {
            maxPontuacaoSobrancelhas = pontuacaoSobrancelhas[id];
            recomendacaoSobrancelhas = listaSobrancelhasQuiz.find(s => s.id === id);
        }
    }
    let recomendacaoCilios = null;
    let maxPontuacaoCilios = -1;
    for (const id in pontuacaoCilios) {
        if (pontuacaoCilios[id] > maxPontuacaoCilios) {
            maxPontuacaoCilios = pontuacaoCilios[id];
            recomendacaoCilios = listaCiliosQuiz.find(s => s.id === id);
        }
    }
    const querAmbos = respostasUsuario.areas?.ambos > 0;
    const indicouSobrancelhasApenas = respostasUsuario.areas?.sobrancelhas > 0 && !respostasUsuario.areas?.cilios && !querAmbos;
    const indicouCiliosApenas = respostasUsuario.areas?.cilios > 0 && !respostasUsuario.areas?.sobrancelhas && !querAmbos;

    if (querAmbos && recomendacaoSobrancelhas && recomendacaoCilios) {
        return { tipo: 'combo', sobrancelhas: recomendacaoSobrancelhas, cilios: recomendacaoCilios };
    } else if (indicouSobrancelhasApenas && recomendacaoSobrancelhas) {
        return { tipo: 'sobrancelhas', servico: recomendacaoSobrancelhas };
    } else if (indicouCiliosApenas && recomendacaoCilios) {
        return { tipo: 'cilios', servico: recomendacaoCilios };
    } else if (respostasUsuario.areas?.sobrancelhas > 0 && respostasUsuario.areas?.cilios > 0 && recomendacaoSobrancelhas && recomendacaoCilios) {
        return { tipo: 'combo', sobrancelhas: recomendacaoSobrancelhas, cilios: recomendacaoCilios };
    } else if (maxPontuacaoSobrancelhas >= 0 && recomendacaoSobrancelhas) { 
         return { tipo: 'sobrancelhas', servico: recomendacaoSobrancelhas };
    } else if (maxPontuacaoCilios >= 0 && recomendacaoCilios) { 
        return { tipo: 'cilios', servico: recomendacaoCilios };
    }
    return { tipo: 'generico', mensagem: "Com base nas suas respostas, não foi possível identificar uma sugestão específica. Que tal conversarmos para um atendimento personalizado?" };
}

function mostrarResultadoQuiz() { 
    if (!quizContainerEl || !resultadoElementEl || !servicoRecomendadoMsgEl || !whatsappLinkEl) {
        return;
    }
    const recomendacao = recomendarServicosQuiz();
    let conteudoHTML = '';
    let textoWhatsapp = "Olá! Fiz o quiz e gostaria de mais informações";
    let tituloResultadoPrincipal = "Seu Tratamento Ideal é:";
    const tituloH3Resultado = resultadoElementEl.querySelector('h3');

    if (recomendacao.tipo === 'combo' && recomendacao.sobrancelhas && recomendacao.cilios) {
        tituloResultadoPrincipal = "Para um Olhar Completo, Sugerimos:";
        conteudoHTML = `
            <strong>${respostasUsuario.expectativaGlobal === 'glamour' ? 'Para um look impactante:' : 
                      (respostasUsuario.naturalFactorGlobal ? 'Para um resultado natural e elegante:' : 'Sua combinação ideal:')}</strong>
            <div class="servico-combo-item">
                <img src="${recomendacao.sobrancelhas.imagem}" alt="${recomendacao.sobrancelhas.titulo}" onerror="this.src='assets/img/placeholder-imagem.png';">
                <h4>${recomendacao.sobrancelhas.titulo}</h4>
                <p>${recomendacao.sobrancelhas.descricao}</p>
            </div>
            <strong class="separador-combo">+</strong>
            <div class="servico-combo-item">
                <img src="${recomendacao.cilios.imagem}" alt="${recomendacao.cilios.titulo}" onerror="this.src='assets/img/placeholder-imagem.png';">
                <h4>${recomendacao.cilios.titulo}</h4>
                <p>${recomendacao.cilios.descricao}</p>
            </div>
        `;
        textoWhatsapp = `Olá! Fiz o quiz e o resultado foi o combo de ${recomendacao.sobrancelhas.titulo} e ${recomendacao.cilios.titulo}. Gostaria de agendar!`;
    } else if ((recomendacao.tipo === 'sobrancelhas' || recomendacao.tipo === 'cilios') && recomendacao.servico) {
        tituloResultadoPrincipal = recomendacao.tipo === 'sobrancelhas' ? "Para suas Sobrancelhas, sugerimos:" : "Para seus Cílios, sugerimos:";
        conteudoHTML = `
            <div class="servico-combo-item">
                <img src="${recomendacao.servico.imagem}" alt="${recomendacao.servico.titulo}" onerror="this.src='assets/img/placeholder-imagem.png';">
                <h4>${recomendacao.servico.titulo}</h4>
                <p>${recomendacao.servico.descricao}</p>
            </div>
        `;
        textoWhatsapp = `Olá! Fiz o quiz e o resultado foi ${recomendacao.servico.titulo}. Gostaria de agendar!`;
    } else { 
        tituloResultadoPrincipal = "Resultado do Quiz"; 
        conteudoHTML = `<p style="font-size: var(--tamanho-subtitulo);">${recomendacao.mensagem || "Converse conosco para uma recomendação personalizada!"}</p>`;
        if(whatsappLinkEl) whatsappLinkEl.style.display = 'none'; 
    }

    if (tituloH3Resultado) tituloH3Resultado.textContent = tituloResultadoPrincipal;
    if (servicoRecomendadoMsgEl) {
        servicoRecomendadoMsgEl.className = 'servico-recomendado-msg'; 
        if (recomendacao.tipo === 'combo') {
            servicoRecomendadoMsgEl.classList.add('resultado-combo');
        } else if (recomendacao.tipo === 'sobrancelhas' || recomendacao.tipo === 'cilios') {
            servicoRecomendadoMsgEl.classList.add('resultado-unico');
        }
        servicoRecomendadoMsgEl.innerHTML = conteudoHTML;
    }

    if (recomendacao.tipo !== 'generico' && whatsappLinkEl) {
        whatsappLinkEl.href = `https://wa.me/5519999670165?text=${encodeURIComponent(textoWhatsapp)}`;
        whatsappLinkEl.style.display = 'inline-block';
    }
    
    if (quizContainerEl) quizContainerEl.style.display = 'none';
    if (resultadoElementEl) resultadoElementEl.style.display = 'flex'; 
    
    if(quizProgressoDivEl) {
        quizProgressoDivEl.style.width = '100%';
        quizProgressoDivEl.textContent = 'Concluído!';
    }
}

// --- INICIALIZAÇÃO E EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', function() {
    function criarModalQuizSeNaoExistir() {
        if (!document.getElementById('quiz-modal')) {
            const modalHTML = `
                <div id="quiz-modal" style="display: none;">
                    <div id="quiz-container" style="display: flex; flex-direction: column;">
                        <button type="button" class="quiz-fechar-botao" aria-label="Fechar Quiz">X</button>
                        <h2>Descubra o tratamento ideal!</h2>
                        <div id="pergunta"></div>
                        <div id="opcoes"></div>
                        <div id="quiz-progresso"><div style="width: 0%;">0%</div></div>
                    </div>
                    <div id="resultado" style="display: none;">
                        <button type="button" class="quiz-fechar-botao" aria-label="Fechar Quiz">X</button>
                        <h3>Seu Tratamento Ideal é:</h3>
                        <div id="servico-recomendado-msg"></div>
                        <a href="#" id="whatsapp-link" target="_blank" style="display: none;">Agendar pelo WhatsApp</a>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }
    }
    criarModalQuizSeNaoExistir(); 

    abrirQuizLinkEl = document.getElementById('abrir-quiz-link');
    quizModalEl = document.getElementById('quiz-modal');
    
    if (!quizModalEl) {
        console.error("CRÍTICO: O elemento #quiz-modal NÃO FOI ENCONTRADO ou criado dinamicamente! O quiz não pode funcionar.");
        if(abrirQuizLinkEl) { 
            abrirQuizLinkEl.style.pointerEvents = "none";
            abrirQuizLinkEl.style.opacity = "0.5";
            abrirQuizLinkEl.title = "Quiz indisponível (erro: #quiz-modal não encontrado)";
        }
        return; 
    }

    quizContainerEl = document.getElementById('quiz-container');
    resultadoElementEl = document.getElementById('resultado');
    fecharQuizBotoesEl = quizModalEl.querySelectorAll('.quiz-fechar-botao'); 
    perguntaEl = document.getElementById('pergunta');
    opcoesEl = document.getElementById('opcoes');
    quizProgressoEl = document.getElementById('quiz-progresso'); 
    quizProgressoDivEl = quizProgressoEl ? quizProgressoEl.querySelector('div') : null; 
    servicoRecomendadoMsgEl = document.getElementById('servico-recomendado-msg');
    whatsappLinkEl = document.getElementById('whatsapp-link');

    if (!quizProgressoDivEl && quizProgressoEl) {
        const innerProgDiv = document.createElement('div');
        innerProgDiv.style.width = '0%';
        innerProgDiv.textContent = '0%';
        quizProgressoEl.appendChild(innerProgDiv);
        quizProgressoDivEl = innerProgDiv;
    }

    if (abrirQuizLinkEl) {
        abrirQuizLinkEl.addEventListener('click', function(event) {
            event.preventDefault();
            abrirQuiz(); 
        });
    }

    fecharQuizBotoesEl.forEach(botao => {
        botao.addEventListener('click', fecharQuiz); 
    });

    quizModalEl.addEventListener('click', (event) => {
        if (event.target === quizModalEl) { 
            fecharQuiz(); 
        }
    });

    document.addEventListener('keydown', (event) => { 
        if (quizModalEl && quizModalEl.style.display === 'flex' && event.key === 'Escape') {
            fecharQuiz(); 
        }
    });
});

function abrirQuizExterno() {
    if (typeof abrirQuiz === "function") abrirQuiz();
}

function fecharQuizExterno() {
    if (typeof fecharQuiz === "function") fecharQuiz();
}