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
    { nome: "Ana Souza", texto: "Amei o atendimento! Profissional maravilhosa e ambiente acolhedor.", imagem: "assets/img/Feedbacks/Cliente01.avif" },
    { nome: "Bianca Lima", texto: "Meu cílios ficaram perfeitos, exatamente como eu queria!", imagem: "assets/img/Feedbacks/Cliente02.avif" },
    { nome: "Camila Torres", texto: "Nunca recebi tantos elogios pelas minhas sobrancelhas. Recomendo de olhos fechados!", imagem: "assets/img/Feedbacks/Cliente03.avif" },
    { nome: "Débora Martins", texto: "O resultado superou minhas expectativas. Atendimento atencioso do início ao fim.", imagem: "assets/img/Feedbacks/Cliente04.avif" },
    { nome: "Fernanda Alves", texto: "Ambiente impecável e técnica incrível. Me senti muito segura durante todo o procedimento.", imagem: "assets/img/Feedbacks/Cliente05.avif" },
    { nome: "Gabriela Rocha", texto: "Saí renovada! O cuidado e o carinho fazem toda a diferença. Voltarei sempre!", imagem: "assets/img/Feedbacks/Cliente06.avif" },
    { nome: "Helena Dias", texto: "Profissional detalhista e dedicada. Meus cílios ficaram lindos e super naturais.", imagem: "assets/img/Feedbacks/Cliente07.avif" },
    { nome: "Isabela Ferreira", texto: "Experiência maravilhosa! Atendimento humanizado e resultado impecável.", imagem: "assets/img/Feedbacks/Cliente08.avif" }
];

// Dados para a seção Cursos
const cursos = [
    { titulo: "Desperte seu Olhar de Artista com Extensão de Cílios", beneficio: "Inicie sua carreira Lash com o curso para iniciantes!", imagem: "assets/img/cursos/cilios.jpg", mensagemWhats: "Olá! Quero me inscrever no curso de Lash Iniciante." },
    { titulo: "By Perfect Lash: Volume Brasileiro que Conquista", beneficio: "Domine a técnica mais desejada e eleve seu nível!", imagem: "assets/img/cursos/lash.jpg", mensagemWhats: "Olá! Quero saber sobre o curso By Perfect Lash." },
    { titulo: "Sobrancelhas Perfeitas: Design, Henna e Geometria", beneficio: "Transforme olhares com designs simétricos e lucrativos!", imagem: "assets/img/cursos/sobrancelhas.png", mensagemWhats: "Olá! Tenho interesse no curso de Sobrancelhas." }
];

// Dados para o Quiz
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
const quizPerguntas = [
    { pergunta: "Qual área você deseja realçar principalmente?", tipo: "unica", opcoes: ["Cílios", "Sobrancelhas", "Ambos"], pontuacao: { "Cílios": { areas: { cilios: 1 } }, "Sobrancelhas": { areas: { sobrancelhas: 1 } }, "Ambos": { areas: { sobrancelhas: 1, cilios: 1, ambos: 1 } } } },
    { pergunta: "Qual o efeito de cílios que você mais deseja?", tipo: "unica", opcoes: ["Cílios curvados e alongados naturalmente", "Cílios com volume e preenchimento", "Um olhar mais exótico e marcante"], pontuacao: { "Cílios curvados e alongados naturalmente": { lash_lifting: 1, volume_moana: 0.7 }, "Cílios com volume e preenchimento": { volume_brasileiro: 0.8, volume_jasmine: 0.9, volume_shine: 0.8 }, "Um olhar mais exótico e marcante": { fox_eyes: 1, extensoes_pro: 0.6 } }, condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0 },
    { pergunta: "Com que frequência você prefere fazer a manutenção dos cílios?", tipo: "unica", opcoes: ["Prefiro um procedimento sem manutenção", "Estou disposta a fazer manutenção regular", "Prefiro algo de curta duração para eventos"], pontuacao: { "Prefiro um procedimento sem manutenção": { extensoes_pro: 1 }, "Estou disposta a fazer manutenção regular": { volume_brasileiro: 0.7, volume_moana: 0.6, volume_jasmine: 0.7, volume_shine: 0.6, lash_lifting: 0.6, fox_eyes: 0.6 }, "Prefiro algo de curta duração para eventos": { lash_lifting: 0.5} }, condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0 },
    { pergunta: "Qual estilo de cílios você acha mais atraente?", tipo: "unica", opcoes: ["Cílios discretos e elegantes", "Cílios mais chamativos e volumosos", "Um estilo que levante o olhar"], pontuacao: { "Cílios discretos e elegantes": { volume_moana: 0.8, lash_lifting: 0.7 }, "Cílios mais chamativos e volumosos": { volume_brasileiro: 0.7, volume_jasmine: 0.9, volume_shine: 0.8, extensoes_pro: 0.7 }, "Um estilo que levante o olhar": { fox_eyes: 1 } }, condicao: (respostas) => respostas.areas?.cilios > 0 && !respostas.areas?.ambos },
    { pergunta: "Você tem alguma sensibilidade nos olhos ou prefere evitar produtos químicos fortes?", tipo: "unica", opcoes: ["Sim, tenho sensibilidade", "Não tenho problemas com isso"], pontuacao: { "Sim, tenho sensibilidade": { lash_lifting: 0.7 }, "Não tenho problemas com isso": { } }, condicao: (respostas) => respostas.areas?.cilios > 0 && !respostas.areas?.ambos },
    { pergunta: "Qual a sua prioridade ao escolher um procedimento para cílios?", tipo: "unica", opcoes: ["Realçar a beleza natural", "Transformar o olhar", "Praticidade e durabilidade"], pontuacao: { "Realçar a beleza natural": { lash_lifting: 0.9, volume_moana: 0.7 }, "Transformar o olhar": { volume_brasileiro: 0.7, volume_jasmine: 0.7, volume_shine: 0.7, fox_eyes: 0.6 }, "Praticidade e durabilidade": { extensoes_pro: 0.9 } }, condicao: (respostas) => respostas.areas?.cilios > 0 && !respostas.areas?.ambos },
    { pergunta: "Qual o formato de sobrancelha que você mais te agrada?", tipo: "unica", opcoes: ["Natural, seguindo o formato original", "Mais definido e marcado", "Mais volumoso e cheio"], pontuacao: { "Natural, seguindo o formato original": { design_sobrancelha: 1, brow_lamination: 0.7, nanobrows: 0.5 }, "Mais definido e marcado": { design_com_henna: 0.9, nanobrows: 0.8 }, "Mais volumoso e cheio": { brow_lamination: 0.9, nanobrows: 0.6 } }, condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0 },
    { pergunta: "Você busca um procedimento de longa duração para as sobrancelhas?", tipo: "unica", opcoes: ["Sim, quero algo que dure", "Não, prefiro opções temporárias"], pontuacao: { "Sim, quero algo que dure": { nanobrows: 1, brow_lamination: 0.5 }, "Não, prefiro opções temporárias": { design_sobrancelha: 0.6, design_com_henna: 0.7 } }, condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0 },
    { pergunta: "Qual a sua maior preocupação com suas sobrancelhas?", tipo: "unica", opcoes: ["Falhas e assimetrias", "Pouca definição e cor", "Fios desalinhados e sem forma"], pontuacao: { "Falhas e assimetrias": { nanobrows: 0.9, design_com_henna: 0.7 }, "Pouca definição e cor": { design_com_henna: 0.8, design_sobrancelha: 0.7 }, "Fios desalinhados e sem forma": { brow_lamination: 1 } }, condicao: (respostas) => respostas.areas?.sobrancelhas > 0 && !respostas.areas?.ambos },
    { pergunta: "Qual estilo de sobrancelha você considera ideal para você?", tipo: "unica", opcoes: ["Sobrancelhas delicadas e sutis", "Sobrancelhas expressivas e marcantes"], pontuacao: { "Sobrancelhas delicadas e sutis": { design_sobrancelha: 0.8, brow_lamination: 0.6, nanobrows: 0.5 }, "Sobrancelhas expressivas e marcantes": { design_com_henna: 0.9, nanobrows: 0.7 } }, condicao: (respostas) => respostas.areas?.sobrancelhas > 0 && !respostas.areas?.ambos },
    { pergunta: "O que é mais importante para você em um serviço de sobrancelhas?", tipo: "unica", opcoes: ["Realçar a beleza natural do rosto", "Corrigir imperfeições e definir o olhar", "Praticidade e facilidade no dia a dia"], pontuacao: { "Realçar a beleza natural do rosto": { design_sobrancelha: 0.9 }, "Corrigir imperfeições e definir o olhar": { nanobrows: 0.8, design_com_henna: 0.7 }, "Praticidade e facilidade no dia a dia": { brow_lamination: 0.8 } }, condicao: (respostas) => respostas.areas?.sobrancelhas > 0 && !respostas.areas?.ambos },
    { pergunta: "Considerando um look completo, você prefere um visual mais natural ou mais produzido/transformador?", tipo: "unica", opcoes: ["Natural e elegante", "Produzido e impactante"], pontuacao: { "Natural e elegante": { naturalFactorGlobal: 1 }, "Produzido e impactante": { transformadorFactorGlobal: 1 } }, condicao: (respostas) => respostas.areas?.ambos > 0 },
    { pergunta: "Você busca procedimentos que economizem tempo na sua rotina de beleza diária?", tipo: "unica", opcoes: ["Sim, quero praticidade!", "Não me importo tanto com o tempo da rotina"], pontuacao: { "Sim, quero praticidade!": { praticidadeGlobal: 1 }, "Não me importo tanto com o tempo da rotina": { } }, condicao: (respostas) => respostas.areas?.ambos > 0 }
];


/* =================================================================== */
/* ======================== FUNÇÕES DO SITE ========================== */
/* =================================================================== */

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

// ---------------------------- SEÇÃO DE CURSOS ----------------------------
function renderizarCursos() {
    const lista = document.getElementById("cursos-lista");
    if (!lista) return;

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
                </div>
            </div>
            <div class="curso-card-minimal__imagem">
                <img src="${curso.imagem}" alt="${curso.titulo}">
            </div>
        `;
        lista.appendChild(card);
    });
}

// ---------------------------- CARROSSEL DE FEEDBACKS ----------------------------
function inicializarCarrosselFeedbacks() {
    const wrapper = document.getElementById('swiper-wrapper');
    if (!wrapper) return;

    slidesFeedbacks.forEach(slide => {
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

    new Swiper('.swiper', {
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
            768: {
                slidesPerView: 'auto',
                spaceBetween: 30,
                centeredSlides: true,
            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 40,
                centeredSlides: true,
            }
        }
    });
}

// ---------------------------- LÓGICA DO QUIZ ----------------------------
let perguntaAtualIndex = 0;
const respostasUsuario = { areas: {} }; 
const pontuacaoSobrancelhas = {};
const pontuacaoCilios = {};

function inicializarPontuacoesQuiz() {
    listaSobrancelhasQuiz.forEach(servico => pontuacaoSobrancelhas[servico.id] = 0);
    listaCiliosQuiz.forEach(servico => pontuacaoCilios[servico.id] = 0);
}

function abrirQuiz() { 
    const quizModalEl = document.getElementById('quiz-modal');
    if (!quizModalEl) return; 

    quizModalEl.style.display = 'flex';
    perguntaAtualIndex = 0;
    Object.keys(respostasUsuario).forEach(key => { 
        if (key !== 'areas') delete respostasUsuario[key]; 
    });
    respostasUsuario.areas = {}; 
    inicializarPontuacoesQuiz();

    document.getElementById('quiz-container').style.display = 'flex'; 
    document.getElementById('resultado').style.display = 'none'; 
    
    const quizProgressoDivEl = document.querySelector('#quiz-progresso > div');
    if (quizProgressoDivEl) { 
        quizProgressoDivEl.style.width = '0%';
        quizProgressoDivEl.textContent = '0%';
    }
    mostrarProximaPerguntaQuiz(); 
}

function fecharQuiz() { 
    const quizModalEl = document.getElementById('quiz-modal');
    if (quizModalEl) {
        quizModalEl.style.display = 'none';
    }
}

function atualizarBarraProgressoQuiz() {
    const quizProgressoDivEl = document.querySelector('#quiz-progresso > div');
    if (!quizProgressoDivEl) return;

    let totalDePerguntasNoCaminho = quizPerguntas.filter(q => !q.condicao || q.condicao(respostasUsuario)).length;
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
    while (perguntaAtualIndex < quizPerguntas.length && quizPerguntas[perguntaAtualIndex].condicao && !quizPerguntas[perguntaAtualIndex].condicao(respostasUsuario)) {
        perguntaAtualIndex++;
    }

    if (perguntaAtualIndex >= quizPerguntas.length) {
        mostrarResultadoQuiz();
        return;
    }
    
    const perguntaAtual = quizPerguntas[perguntaAtualIndex];
    document.getElementById('pergunta').textContent = perguntaAtual.pergunta;
    const opcoesEl = document.getElementById('opcoes');
    opcoesEl.innerHTML = ""; 

    perguntaAtual.opcoes.forEach(opcaoTexto => {
        const botaoOpcao = document.createElement("button");
        botaoOpcao.type = "button"; 
        botaoOpcao.textContent = opcaoTexto;
        botaoOpcao.addEventListener("click", () => selecionarRespostaQuiz(opcaoTexto, perguntaAtual.pontuacao, botaoOpcao));
        opcoesEl.appendChild(botaoOpcao);
    });
}

function selecionarRespostaQuiz(opcaoSelecionada, pontuacoesOpcao, botaoClicado) {
    respostasUsuario[`q${perguntaAtualIndex}`] = opcaoSelecionada;
    if (pontuacoesOpcao && pontuacoesOpcao[opcaoSelecionada]) {
        const scores = pontuacoesOpcao[opcaoSelecionada];
        Object.keys(scores).forEach(key => {
            if (key === 'areas') { 
                Object.assign(respostasUsuario.areas, scores.areas);
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
    document.querySelectorAll('#opcoes button').forEach(b => b.classList.remove('selecionado'));
    botaoClicado.classList.add('selecionado');
    setTimeout(() => {
        perguntaAtualIndex++; 
        mostrarProximaPerguntaQuiz(); 
    }, 300); 
}
    
function recomendarServicosQuiz() {
    let recomendacaoSobrancelhas = Object.keys(pontuacaoSobrancelhas).reduce((a, b) => pontuacaoSobrancelhas[a] > pontuacaoSobrancelhas[b] ? a : b);
    let recomendacaoCilios = Object.keys(pontuacaoCilios).reduce((a, b) => pontuacaoCilios[a] > pontuacaoCilios[b] ? a : b);

    const querAmbos = respostasUsuario.areas?.ambos > 0;
    const indicouSobrancelhasApenas = respostasUsuario.areas?.sobrancelhas > 0 && !respostasUsuario.areas?.cilios && !querAmbos;
    const indicouCiliosApenas = respostasUsuario.areas?.cilios > 0 && !respostasUsuario.areas?.sobrancelhas && !querAmbos;

    if (querAmbos) {
        return { tipo: 'combo', sobrancelhas: listaSobrancelhasQuiz.find(s => s.id === recomendacaoSobrancelhas), cilios: listaCiliosQuiz.find(s => s.id === recomendacaoCilios) };
    } else if (indicouSobrancelhasApenas) {
        return { tipo: 'sobrancelhas', servico: listaSobrancelhasQuiz.find(s => s.id === recomendacaoSobrancelhas) };
    } else if (indicouCiliosApenas) {
        return { tipo: 'cilios', servico: listaCiliosQuiz.find(s => s.id === recomendacaoCilios) };
    }
    return { tipo: 'generico', mensagem: "Com base nas suas respostas, não foi possível identificar uma sugestão específica. Que tal conversarmos para um atendimento personalizado?" };
}

function mostrarResultadoQuiz() { 
    const recomendacao = recomendarServicosQuiz();
    const resultadoElementEl = document.getElementById('resultado');
    const servicoRecomendadoMsgEl = document.getElementById('servico-recomendado-msg');
    const whatsappLinkEl = document.getElementById('whatsapp-link');
    const tituloH3Resultado = resultadoElementEl.querySelector('h3');
    let conteudoHTML = '';
    let textoWhatsapp = "Olá! Fiz o quiz e gostaria de mais informações";
    let tituloResultadoPrincipal = "Seu Tratamento Ideal é:";

    if (recomendacao.tipo === 'combo' && recomendacao.sobrancelhas && recomendacao.cilios) {
        tituloResultadoPrincipal = "Para um Olhar Completo, Sugerimos:";
        conteudoHTML = `
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
        if (recomendacao.tipo === 'combo') servicoRecomendadoMsgEl.classList.add('resultado-combo');
        else if (recomendacao.tipo !== 'generico') servicoRecomendadoMsgEl.classList.add('resultado-unico');
        servicoRecomendadoMsgEl.innerHTML = conteudoHTML;
    }

    if (recomendacao.tipo !== 'generico' && whatsappLinkEl) {
        whatsappLinkEl.href = `https://wa.me/5519999670165?text=${encodeURIComponent(textoWhatsapp)}`;
        whatsappLinkEl.style.display = 'inline-block';
    }
    
    document.getElementById('quiz-container').style.display = 'none';
    resultadoElementEl.style.display = 'flex'; 
    
    const quizProgressoDivEl = document.querySelector('#quiz-progresso > div');
    if(quizProgressoDivEl) {
        quizProgressoDivEl.style.width = '100%';
        quizProgressoDivEl.textContent = 'Concluído!';
    }
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


function inicializarQuizModal() {
    function criarModalQuizSeNaoExistir() {
        if (document.getElementById('quiz-modal')) return;
        const modalHTML = `
            <div id="quiz-modal" style="display: none;">
                <div id="quiz-container" style="display: flex; flex-direction: column;">
                    <button type="button" class="quiz-fechar-botao" aria-label="Fechar Quiz">X</button>
                    <h2>Descubra o tratamento ideal!</h2>
                    <div id="pergunta"></div>
                    <div id="opcoes"></div>
                    <div id="quiz-progresso"><div>0%</div></div>
                </div>
                <div id="resultado" style="display: none;">
                    <button type="button" class="quiz-fechar-botao" aria-label="Fechar Quiz">X</button>
                    <h3>Seu Tratamento Ideal é:</h3>
                    <div id="servico-recomendado-msg"></div>
                    <a href="#" id="whatsapp-link" target="_blank" style="display: none;">Agendar pelo WhatsApp</a>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    criarModalQuizSeNaoExistir(); 

    const abrirQuizLinkEl = document.getElementById('abrir-quiz-link');
    const quizModalEl = document.getElementById('quiz-modal');
    if (!quizModalEl) return;

    if (abrirQuizLinkEl) {
        abrirQuizLinkEl.addEventListener('click', (e) => {
            e.preventDefault();
            abrirQuiz(); 
        });
    }

    quizModalEl.querySelectorAll('.quiz-fechar-botao').forEach(botao => {
        botao.addEventListener('click', fecharQuiz); 
    });

    quizModalEl.addEventListener('click', (e) => {
        if (e.target === quizModalEl) fecharQuiz(); 
    });

    document.addEventListener('keydown', (e) => { 
        if (quizModalEl.style.display === 'flex' && e.key === 'Escape') fecharQuiz(); 
    });
}

function inicializarCarrosselComArraste() {
    const container = document.getElementById("catalogo-carrossel");
    if (!container) return;

    // Lógica de scroll inicial para centralizar o primeiro card
    setTimeout(() => {
        const primeiroCard = container.querySelector(".catalogo__card");
        if (primeiroCard) {
            const scrollPosition = primeiroCard.offsetLeft - (container.offsetWidth / 2) + (primeiroCard.offsetWidth / 2);
            container.scrollTo({ left: scrollPosition, behavior: "smooth" });
        }
        setTimeout(aplicarSnapHighlight, 50);
    }, 100);

    // Lógica para arrastar com o mouse
    let isDown = false, startX, scrollLeft;
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    container.addEventListener('mouseleave', () => { isDown = false; container.classList.remove('active'); });
    container.addEventListener('mouseup', () => { isDown = false; container.classList.remove('active'); });
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}


/* =================================================================== */
/* ================== INICIALIZAÇÃO PRINCIPAL ======================== */
/* =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Renderização de conteúdo dinâmico
    mostrarServicos("sobrancelhas");
    renderizarCursos();
    inicializarCarrosselFeedbacks();

    // Inicialização de componentes de UI
    inicializarAnimacoesDeScroll();
    inicializarBotaoWhatsApp();
    inicializarQuizModal();
    inicializarCarrosselComArraste();
});