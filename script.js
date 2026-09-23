const dadosAjuda = {
    identificacao: {
        titulo: "Como começar",
        html: `
            <div class="ajuda-conteudo">
                <h3>Identificação</h3>
                <p>Esta é a única tela de identificação do projeto. Depois de preencher os dados corretamente, você entra na experiência e não precisa preencher novamente durante a navegação.</p>
                <ul class="ajuda-lista">
                    <li><strong>Nome:</strong> informe seu nome completo.</li>
                    <li><strong>Turma:</strong> informe sua turma.</li>
                    <li><strong>E-mail:</strong> informe um e-mail válido.</li>
                    <li><strong>Confirmação:</strong> marque a caixa para liberar o acesso.</li>
                </ul>
                <p>O botão de entrada só fica disponível quando os campos obrigatórios estiverem válidos.</p>
            </div>`
    },
    inicio: {
        titulo: "Sobre esta página",
        html: `
            <div class="ajuda-conteudo">
                <h3>Início</h3>
                <p>Esta página apresenta a proposta do projeto e mostra os caminhos disponíveis.</p>
                <ul class="ajuda-lista">
                    <li><strong>Cientistas:</strong> conheça as nove mulheres selecionadas.</li>
                    <li><strong>Quiz:</strong> teste o que você aprendeu.</li>
                    <li><strong>Jogo:</strong> complete uma missão científica interativa.</li>
                    <li><strong>Feedback:</strong> avalie a experiência.</li>
                </ul>
                <p>Você pode navegar livremente usando o menu superior.</p>
            </div>`
    },
    cientistas: {
        titulo: "Explorar cientistas",
        html: `
            <div class="ajuda-conteudo">
                <h3>Como explorar</h3>
                <p>Clique em qualquer card para abrir o perfil completo da cientista.</p>
                <ul class="ajuda-lista">
                    <li><strong>Filtros:</strong> use as áreas para encontrar cientistas específicas.</li>
                    <li><strong>História:</strong> conheça a trajetória de cada uma.</li>
                    <li><strong>Contribuições:</strong> veja os principais trabalhos.</li>
                    <li><strong>Curiosidades:</strong> descubra informações adicionais.</li>
                    <li><strong>Legado:</strong> entenda a importância de cada trajetória.</li>
                </ul>
            </div>`
    },
    quiz: {
        titulo: "Como funciona o quiz",
        html: `
            <div class="ajuda-conteudo">
                <h3>Teste seus conhecimentos</h3>
                <p>O quiz possui 10 perguntas sobre as cientistas apresentadas no projeto.</p>
                <ul class="ajuda-lista">
                    <li><strong>Uma alternativa:</strong> escolha a resposta que considera correta.</li>
                    <li><strong>Feedback:</strong> depois de responder, veja a explicação.</li>
                    <li><strong>Pontuação:</strong> cada acerto vale 1 ponto.</li>
                    <li><strong>Resultado:</strong> ao final, veja sua pontuação e nível de aproveitamento.</li>
                </ul>
            </div>`
    },
    jogo: {
        titulo: "Como jogar",
        html: `
            <div class="ajuda-conteudo">
                <h3>Expedição Científica</h3>
                <p>Você atravessa um laboratório em uma fase de plataforma 2D para recuperar nove registros científicos e levar todos até o Arquivo.</p>
                <ul class="ajuda-lista">
                    <li><strong>Movimento:</strong> use ← → ou A/D para correr.</li>
                    <li><strong>Pulo:</strong> use ↑, W ou Espaço.</li>
                    <li><strong>Registros:</strong> cada item representa uma das nove cientistas.</li>
                    <li><strong>Obstáculos:</strong> evite os inimigos vermelhos ou pule sobre eles.</li>
                    <li><strong>Vidas:</strong> você começa com 3.</li>
                    <li><strong>Tempo:</strong> a missão dura 60 segundos.</li>
                    <li><strong>Final:</strong> depois de recuperar os 9 registros, chegue à bandeira.</li>
                </ul>
                <p>O jogo não apresenta perguntas. O desafio é explorar, pular, desviar e chegar ao final com todos os registros.</p>
            </div>`
    },
    feedback: {
        titulo: "Sobre o feedback",
        html: `
            <div class="ajuda-conteudo">
                <h3>Avalie a experiência</h3>
                <p>Conte como foi sua experiência com o projeto.</p>
                <ul class="ajuda-lista">
                    <li><strong>Nota:</strong> escolha de 1 a 5 estrelas.</li>
                    <li><strong>Parte favorita:</strong> selecione o que mais gostou.</li>
                    <li><strong>Aprendizado:</strong> conte o que ficou marcado.</li>
                    <li><strong>Melhoria:</strong> diga o que poderia ser diferente.</li>
                    <li><strong>Recomendação:</strong> informe se recomendaria o projeto.</li>
                </ul>
            </div>`
    }
};

const cientistas = [
    {
        id: 1, nome: "Marie Curie", area: "Física e Química", filtro: "fisica",
        periodo: "1867 — 1934", inicial: "MC", imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Marie_Curie.jpg",
        resumo: "Pioneira nos estudos da radioatividade e primeira pessoa a receber dois Prêmios Nobel em áreas científicas diferentes.",
        biografia: "Nascida Maria Skłodowska em Varsóvia, em 1867, Marie Curie mudou-se para Paris para continuar seus estudos. Na Universidade de Paris, estudou física e matemática e iniciou uma trajetória científica que transformaria a compreensão da matéria. Ao lado de Pierre Curie, investigou fenômenos de radiação e identificou novos elementos, como o polônio e o rádio. Em uma época em que as mulheres enfrentavam grandes barreiras acadêmicas, Marie construiu uma carreira científica de enorme impacto.",
        contribuicoes: ["Pesquisas pioneiras sobre radioatividade.", "Descoberta dos elementos polônio e rádio.", "Desenvolvimento de métodos para estudar materiais radioativos.", "Atuação na aplicação da radiação à medicina durante a Primeira Guerra Mundial."],
        curiosidades: ["Foi a primeira mulher a receber um Prêmio Nobel.", "Recebeu Nobel de Física em 1903 e de Química em 1911.", "Seu trabalho abriu caminhos importantes para a física nuclear e a medicina."],
        legado: "Seu trabalho mudou a física, a química e a medicina. Marie Curie tornou-se um dos maiores símbolos da participação das mulheres na ciência."
    },
    {
        id: 2, nome: "Ada Lovelace", area: "Computação", filtro: "computacao",
        periodo: "1815 — 1852", inicial: "AL", imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Ada_Lovelace_portrait.jpg",
        resumo: "Matemática considerada uma das primeiras pessoas a perceber o potencial geral das máquinas de computação.",
        biografia: "Augusta Ada King, conhecida como Ada Lovelace, nasceu em Londres. Ela estudou matemática em uma época em que o acesso das mulheres ao ensino científico era limitado. Ao conhecer o trabalho de Charles Babbage e sua Máquina Analítica, Ada percebeu que a máquina poderia fazer muito mais do que cálculos numéricos. Em suas anotações sobre a máquina, descreveu um método para calcular números de Bernoulli, frequentemente apontado como um dos primeiros algoritmos destinados a ser processado por uma máquina.",
        contribuicoes: ["Escreveu notas fundamentais sobre a Máquina Analítica.", "Descreveu um algoritmo para a máquina de Babbage.", "Antecipou a ideia de computadores trabalhando com símbolos além de números.", "Tornou-se uma referência histórica na programação."],
        curiosidades: ["Sua mãe incentivou fortemente sua formação em matemática.", "A linguagem de programação Ada recebeu esse nome em sua homenagem.", "Seu trabalho aconteceu décadas antes da construção dos computadores modernos."],
        legado: "Ada Lovelace é lembrada como uma figura pioneira da computação por ter imaginado possibilidades para máquinas programáveis muito antes da era digital."
    },
    {
        id: 3, nome: "Katherine Johnson", area: "Matemática", filtro: "matematica",
        periodo: "1918 — 2020", inicial: "KJ", imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Katherine_Johnson_1983.jpg",
        resumo: "Matemática norte-americana cujos cálculos foram fundamentais para missões espaciais da NASA.",
        biografia: "Katherine Johnson nasceu na Virgínia Ocidental, nos Estados Unidos. Demonstrou grande talento para a matemática desde cedo e precisou superar barreiras de acesso à educação. Na NASA, então NACA, trabalhou como calculadora humana e depois como matemática de destaque. Ela verificou e realizou cálculos de trajetórias para missões espaciais, incluindo o voo de John Glenn, e contribuiu para o planejamento de missões posteriores.",
        contribuicoes: ["Cálculos de trajetórias para missões espaciais.", "Verificação dos cálculos da missão orbital de John Glenn.", "Contribuições para o planejamento de missões Apollo.", "Trabalho matemático em uma época de forte segregação racial e de gênero nos EUA."],
        curiosidades: ["John Glenn pediu que Katherine verificasse os cálculos feitos pelos computadores antes de seu voo orbital.", "Trabalhou por décadas no programa espacial norte-americano.", "Sua história foi apresentada no filme 'Hidden Figures'."],
        legado: "Katherine Johnson ajudou a demonstrar como a matemática é essencial para a exploração espacial e tornou-se uma inspiração para novas gerações de cientistas."
    },
    {
        id: 4, nome: "Rosalind Franklin", area: "Química e Biologia", filtro: "quimica",
        periodo: "1920 — 1958", inicial: "RF", imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosalind_Franklin.jpg",
        resumo: "Química e cristalógrafa cujas imagens e pesquisas contribuíram decisivamente para a compreensão da estrutura do DNA.",
        biografia: "Rosalind Franklin nasceu em Londres e estudou química na Universidade de Cambridge. Especializou-se em cristalografia de raios X e aplicou essa técnica ao estudo de materiais biológicos. No King's College London, produziu dados importantes sobre a estrutura do DNA. Seu trabalho, especialmente as imagens obtidas por difração de raios X, forneceu evidências essenciais para compreender a estrutura helicoidal da molécula. Franklin também realizou pesquisas importantes sobre vírus.",
        contribuicoes: ["Pesquisas de difração de raios X aplicadas ao DNA.", "Produção de dados fundamentais para a compreensão da estrutura do DNA.", "Pesquisas estruturais sobre vírus.", "Contribuições importantes para a química e biologia molecular."],
        curiosidades: ["A famosa Fotografia 51 foi produzida no contexto de suas pesquisas sobre DNA.", "Após o trabalho com DNA, estudou estruturas de vírus.", "Seu reconhecimento histórico cresceu muito após sua morte."],
        legado: "Rosalind Franklin é hoje reconhecida como uma cientista essencial para a história da biologia molecular e da cristalografia."
    },
    {
        id: 5, nome: "Chien-Shiung Wu", area: "Física", filtro: "fisica",
        periodo: "1912 — 1997", inicial: "CW", imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Informal_portrait_of_Chien-shiung_Wu.jpg",
        resumo: "Física experimental conhecida por experimentos decisivos em física nuclear e de partículas.",
        biografia: "Chien-Shiung Wu nasceu na China e estudou física antes de seguir carreira nos Estados Unidos. Tornou-se uma das principais físicas experimentais do século XX. Durante a Segunda Guerra Mundial, participou do Projeto Manhattan. Posteriormente, realizou um experimento famoso com cobalto-60 que demonstrou que a conservação da paridade não se aplicava a certas interações fracas, confirmando uma previsão teórica importante.",
        contribuicoes: ["Experimentos fundamentais sobre a interação fraca.", "Demonstração experimental da violação da paridade.", "Pesquisas em física nuclear.", "Participação em pesquisas relacionadas ao Projeto Manhattan."],
        curiosidades: ["Era conhecida por sua precisão experimental.", "Recebeu o Prêmio Wolf de Física em 1978.", "Seu trabalho teve grande importância para a física de partículas."],
        legado: "Wu é lembrada como uma das grandes físicas experimentais do século XX, mostrando como experimentos precisos podem transformar teorias científicas."
    },
    {
        id: 6, nome: "Dorothy Crowfoot Hodgkin", area: "Química", filtro: "quimica",
        periodo: "1910 — 1994", inicial: "DH", imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Professor_Dorothy_Hodgkin.jpg",
        resumo: "Química britânica que utilizou cristalografia de raios X para revelar estruturas moleculares complexas.",
        biografia: "Dorothy Crowfoot Hodgkin nasceu no Egito e desenvolveu desde cedo interesse pela química e pelos cristais. Em Oxford, especializou-se em cristalografia de raios X. Seu trabalho permitiu determinar estruturas tridimensionais de moléculas importantes, incluindo a penicilina e a vitamina B12. Também determinou a estrutura da insulina, uma pesquisa que levou muitos anos.",
        contribuicoes: ["Determinação da estrutura da penicilina.", "Determinação da estrutura da vitamina B12.", "Pesquisas estruturais sobre a insulina.", "Avanços no uso da cristalografia para estudar moléculas."],
        curiosidades: ["Recebeu o Prêmio Nobel de Química em 1964.", "Sua pesquisa sobre insulina levou muitos anos.", "A cristalografia permitiu visualizar estruturas moleculares de maneira indireta."],
        legado: "Seu trabalho ajudou a consolidar a química estrutural e teve impacto na compreensão de medicamentos e moléculas biologicamente importantes."
    },
    {
        id: 7, nome: "Emmy Noether", area: "Matemática", filtro: "matematica",
        periodo: "1882 — 1935", inicial: "EN", imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Emmy_Noether.jpg",
        resumo: "Matemática alemã cujas ideias transformaram a álgebra abstrata e a física teórica.",
        biografia: "Amalie Emmy Noether nasceu na Alemanha e tornou-se uma das matemáticas mais influentes do século XX. Em um ambiente acadêmico que oferecia poucas oportunidades às mulheres, desenvolveu trabalhos profundos em álgebra abstrata. Na física teórica, seu famoso teorema estabeleceu uma relação fundamental entre simetrias contínuas e leis de conservação, influenciando profundamente a física moderna.",
        contribuicoes: ["Avanços fundamentais na álgebra abstrata.", "Teorema de Noether relacionando simetrias e leis de conservação.", "Influência na matemática moderna e na física teórica.", "Formação de uma importante escola de pensamento matemático."],
        curiosidades: ["Albert Einstein estava entre os cientistas que reconheceram a importância de seu trabalho.", "Ela lecionou em condições difíceis por causa das barreiras impostas às mulheres.", "Seu teorema é fundamental em áreas da física moderna."],
        legado: "Emmy Noether é considerada uma das maiores matemáticas da história. Seu trabalho conecta matemática e física de maneira profunda."
    },
    {
        id: 8, nome: "Tu Youyou", area: "Química e Farmacologia", filtro: "quimica",
        periodo: "1930 —", inicial: "TY", imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Tu_Youyou_4987-2015.jpg",
        resumo: "Pesquisadora chinesa cujo trabalho levou ao desenvolvimento de um tratamento essencial contra a malária.",
        biografia: "Tu Youyou nasceu em Ningbo, na China, e estudou farmacognosia e áreas relacionadas às plantas medicinais. Durante um projeto de pesquisa contra a malária, sua equipe investigou conhecimentos tradicionais e milhares de compostos. A partir desse trabalho, Tu liderou pesquisas que resultaram na identificação e desenvolvimento da artemisinina, substância de enorme importância no tratamento da malária.",
        contribuicoes: ["Descoberta e desenvolvimento da artemisinina.", "Pesquisas com plantas e medicamentos tradicionais.", "Contribuição decisiva para o combate à malária.", "Integração entre conhecimento tradicional e métodos científicos."],
        curiosidades: ["Recebeu o Prêmio Nobel de Fisiologia ou Medicina em 2015.", "Foi a primeira cidadã da China continental a receber um Nobel em uma categoria científica.", "Seu trabalho teve grande impacto na saúde pública mundial."],
        legado: "A artemisinina tornou-se uma ferramenta fundamental contra a malária. Tu Youyou mostrou como pesquisa científica e conhecimentos tradicionais podem dialogar."
    },
    {
        id: 9, nome: "Nise da Silveira", area: "Medicina", filtro: "medicina",
        periodo: "1905 — 1999", inicial: "NS", imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Nise_da_Silveira.jpg",
        resumo: "Médica brasileira que revolucionou práticas de cuidado em saúde mental por meio de abordagens mais humanas e expressivas.",
        biografia: "Nise da Silveira nasceu em Maceió e formou-se em medicina na Bahia, sendo uma das poucas mulheres de sua turma. No trabalho em instituições psiquiátricas, recusou métodos violentos e práticas que considerava desumanas. Defendeu atividades expressivas, especialmente pintura e modelagem, como formas de comunicação e cuidado. Seu trabalho com imagens produzidas pelos pacientes também dialogou com a psicologia de Carl Jung.",
        contribuicoes: ["Defesa de formas mais humanas de cuidado em saúde mental.", "Uso de pintura, modelagem e atividades expressivas no tratamento.", "Criação do Museu de Imagens do Inconsciente.", "Importante atuação brasileira na história da psiquiatria."],
        curiosidades: ["Fundou em 1952 o Museu de Imagens do Inconsciente.", "Seu trabalho valorizava a expressão artística dos pacientes.", "É uma das referências brasileiras na humanização do cuidado em saúde mental."],
        legado: "Nise da Silveira deixou um legado importante para a psiquiatria brasileira ao defender respeito, expressão e dignidade no cuidado de pessoas em sofrimento psíquico."
    }
];

const perguntasQuiz = [
    { tema: "RADIOATIVIDADE", pergunta: "Qual cientista ficou conhecida por seus estudos pioneiros sobre a radioatividade?", opcoes: ["Ada Lovelace", "Marie Curie", "Emmy Noether", "Nise da Silveira"], correta: 1, explicacao: "Marie Curie foi pioneira nos estudos da radioatividade e descobriu, com Pierre Curie, os elementos polônio e rádio.", dica: "Pense na cientista que estudou elementos como o rádio e o polônio." },
    { tema: "COMPUTAÇÃO", pergunta: "Por qual motivo Ada Lovelace é considerada uma pioneira da computação?", opcoes: ["Por construir o primeiro computador eletrônico", "Por criar a internet", "Por descrever um algoritmo para a Máquina Analítica", "Por inventar o transistor"], correta: 2, explicacao: "Ada escreveu um método para a Máquina Analítica de Charles Babbage, sendo uma referência histórica na programação.", dica: "Observe a alternativa que fala de uma sequência de instruções para uma máquina." },
    { tema: "ESPAÇO", pergunta: "Qual foi uma das principais contribuições de Katherine Johnson para a NASA?", opcoes: ["Construir foguetes", "Calcular trajetórias de missões espaciais", "Descobrir um planeta", "Criar os primeiros satélites"], correta: 1, explicacao: "Katherine Johnson realizou cálculos matemáticos fundamentais para trajetórias de missões espaciais.", dica: "Pense nos cálculos necessários para saber o caminho de uma nave no espaço." },
    { tema: "DNA", pergunta: "Qual técnica foi fundamental nas pesquisas de Rosalind Franklin sobre o DNA?", opcoes: ["Difração de raios X", "Microscopia eletrônica", "Radioastronomia", "Eletrocardiografia"], correta: 0, explicacao: "Franklin utilizou cristalografia e difração de raios X para estudar a estrutura do DNA.", dica: "Pense na técnica que usa raios X para revelar estruturas muito pequenas." },
    { tema: "FÍSICA", pergunta: "Chien-Shiung Wu ficou famosa por experimentos relacionados a qual conceito?", opcoes: ["Gravidade quântica", "Violação da paridade", "Expansão do universo", "Fotossíntese"], correta: 1, explicacao: "Seu experimento com cobalto-60 forneceu evidência experimental da violação da conservação da paridade em interações fracas.", dica: "Pense em um conceito da física relacionado à simetria em interações fracas." },
    { tema: "QUÍMICA", pergunta: "Qual cientista determinou estruturas moleculares importantes como a da penicilina e da vitamina B12?", opcoes: ["Dorothy Crowfoot Hodgkin", "Tu Youyou", "Rosalind Franklin", "Marie Curie"], correta: 0, explicacao: "Dorothy Crowfoot Hodgkin utilizou cristalografia de raios X para determinar estruturas moleculares complexas.", dica: "Pense na cientista que estudava moléculas usando cristais e raios X." },
    { tema: "MATEMÁTICA", pergunta: "O famoso Teorema de Noether estabelece uma relação profunda entre:", opcoes: ["Cores e luz", "Simetrias e leis de conservação", "Genes e proteínas", "Planetas e oceanos"], correta: 1, explicacao: "O Teorema de Noether relaciona simetrias contínuas de um sistema a leis de conservação.", dica: "Pense na relação entre uma simetria da natureza e uma quantidade que se conserva." },
    { tema: "MALÁRIA", pergunta: "Qual substância está diretamente ligada ao trabalho de Tu Youyou?", opcoes: ["Penicilina", "Artemisinina", "Insulina", "Rádio"], correta: 1, explicacao: "Tu Youyou liderou pesquisas que levaram à identificação e desenvolvimento da artemisinina, usada contra a malária.", dica: "Pense no tratamento desenvolvido a partir de uma planta usada contra a malária." },
    { tema: "BRASIL", pergunta: "Qual foi uma característica marcante do trabalho de Nise da Silveira?", opcoes: ["Defesa de práticas mais humanas em saúde mental", "Criação do primeiro computador brasileiro", "Estudos sobre radioatividade", "Pesquisa sobre missões espaciais"], correta: 0, explicacao: "Nise da Silveira rejeitou métodos violentos e valorizou atividades expressivas e artísticas no cuidado em saúde mental.", dica: "Pense na utilização da arte e da expressão como parte do cuidado em saúde mental." },
    { tema: "HISTÓRIA", pergunta: "Qual cientista da experiência recebeu dois Prêmios Nobel em categorias científicas diferentes?", opcoes: ["Katherine Johnson", "Marie Curie", "Ada Lovelace", "Rosalind Franklin"], correta: 1, explicacao: "Marie Curie recebeu o Nobel de Física em 1903 e o Nobel de Química em 1911.", dica: "Pense na única cientista da lista que recebeu dois Prêmios Nobel em áreas diferentes." }
];

const desafiosJogo = [
    { cientista: "Marie Curie", inicial: "MC", pergunta: "Qual área de pesquisa tornou Marie Curie mundialmente conhecida?", opcoes: ["Radioatividade", "Astronomia observacional", "Botânica", "Geologia"], correta: 0, mensagem: "Estação desbloqueada! A pesquisa de Marie Curie ajudou a transformar a física e a química." },
    { cientista: "Ada Lovelace", inicial: "AL", pergunta: "O que Ada Lovelace descreveu em suas anotações sobre a Máquina Analítica?", opcoes: ["Um algoritmo", "Uma vacina", "Um foguete", "Um telescópio"], correta: 0, mensagem: "Estação desbloqueada! Ada percebeu possibilidades para máquinas programáveis muito antes dos computadores modernos." },
    { cientista: "Katherine Johnson", inicial: "KJ", pergunta: "O trabalho de Katherine Johnson estava diretamente ligado a:", opcoes: ["Trajetórias espaciais", "Vulcões", "Oceanos", "Fósseis"], correta: 0, mensagem: "Estação desbloqueada! Seus cálculos foram importantes para missões espaciais da NASA." },
    { cientista: "Rosalind Franklin", inicial: "RF", pergunta: "Qual técnica Franklin utilizou para estudar o DNA?", opcoes: ["Difração de raios X", "Ressonância magnética", "Radar", "Termografia"], correta: 0, mensagem: "Estação desbloqueada! Seus dados foram fundamentais para compreender a estrutura do DNA." },
    { cientista: "Chien-Shiung Wu", inicial: "CW", pergunta: "Wu ficou conhecida por importantes experimentos em:", opcoes: ["Física nuclear", "Paleontologia", "Ecologia", "Meteorologia"], correta: 0, mensagem: "Estação desbloqueada! Seu experimento sobre paridade teve grande impacto na física de partículas." },
    { cientista: "Dorothy Hodgkin", inicial: "DH", pergunta: "Qual técnica foi central no trabalho de Dorothy Hodgkin?", opcoes: ["Cristalografia de raios X", "Fotografia comum", "Ultrassom", "GPS"], correta: 0, mensagem: "Estação desbloqueada! Ela revelou estruturas de moléculas importantes para a ciência e a medicina." },
    { cientista: "Emmy Noether", inicial: "EN", pergunta: "O Teorema de Noether conecta:", opcoes: ["Simetrias e leis de conservação", "Clima e oceanos", "Células e tecidos", "Som e música"], correta: 0, mensagem: "Estação desbloqueada! Emmy Noether transformou a matemática e influenciou profundamente a física teórica." },
    { cientista: "Tu Youyou", inicial: "TY", pergunta: "Qual substância está ligada à descoberta de Tu Youyou?", opcoes: ["Artemisinina", "Insulina", "Penicilina", "Rádio"], correta: 0, mensagem: "Estação desbloqueada! A artemisinina se tornou uma ferramenta essencial no combate à malária." },
    { cientista: "Nise da Silveira", inicial: "NS", pergunta: "Qual abordagem marcou o trabalho de Nise da Silveira?", opcoes: ["Atividades expressivas e cuidado humanizado", "Métodos de punição", "Pesquisas espaciais", "Engenharia genética"], correta: 0, mensagem: "Estação desbloqueada! Nise ajudou a transformar a forma de pensar o cuidado em saúde mental no Brasil." }
];

// Descobre qual página está aberta.
function pegarPagina() {
    return document.body.dataset.pagina || "identificacao";
}

// Abre a ajuda com o conteúdo da página atual.
function abrirAjuda() {
    const barra = document.getElementById("barraAjuda");
    const conteudo = document.getElementById("conteudoAjuda");
    const titulo = document.getElementById("tituloAjuda");
    if (!barra || !conteudo) return;
    const dados = dadosAjuda[pegarPagina()] || dadosAjuda.inicio;
    titulo.textContent = dados.titulo;
    conteudo.innerHTML = dados.html;
    barra.classList.add("aberta");
}

// Fecha a barra de ajuda.
function fecharAjuda() {
    const barra = document.getElementById("barraAjuda");
    if (barra) barra.classList.remove("aberta");
}

// Liga os botões da ajuda.
function configurarAjuda() {
    const botao = document.getElementById("botaoAjuda");
    const fechar = document.getElementById("fecharAjuda");
    if (botao) botao.addEventListener("click", abrirAjuda);
    if (fechar) fechar.addEventListener("click", fecharAjuda);
}

// Guarda os dados para não pedir a identificação de novo.
function salvarIdentificacao(nome, turma, email) {
    localStorage.setItem("dadosVisitante", JSON.stringify({ nome, turma, email }));
    localStorage.setItem("identificacaoConcluida", "true");
}

// Mostra o nome do visitante no menu e no jogo.
function carregarVisitante() {
    const dados = JSON.parse(localStorage.getItem("dadosVisitante") || "null");
    const elementos = document.querySelectorAll("#nomeUsuarioMenu, #nomeJogadorJogo");
    elementos.forEach(elemento => {
        if (dados && dados.nome) elemento.textContent = dados.nome;
    });
}

// Impede entrar nas outras páginas sem identificação.
function verificarAcesso() {
    const pagina = pegarPagina();
    if (pagina !== "identificacao" && localStorage.getItem("identificacaoConcluida") !== "true") {
        window.location.href = "index.html";
    }
}

// Limpa a identificação quando o usuário sai.
function configurarSair() {
    const botao = document.getElementById("botaoSair");
    if (!botao) return;
    botao.addEventListener("click", () => {
        localStorage.removeItem("identificacaoConcluida");
        localStorage.removeItem("dadosVisitante");
        window.location.href = "index.html";
    });
}

// Valida o formulário de identificação.
function configurarIdentificacao() {
    const form = document.getElementById("formularioIdentificacao");
    if (!form) return;

    const nome = document.getElementById("nome");
    const turma = document.getElementById("turma");
    const email = document.getElementById("email");
    const aceite = document.getElementById("aceite");
    const botao = document.getElementById("botaoContinuar");

    function validar() {
        let valido = true;

        if (nome.value.trim().length < 3) {
            document.getElementById("erroNome").textContent = "Digite seu nome completo.";
            valido = false;
        } else {
            document.getElementById("erroNome").textContent = "";
        }

        if (turma.value.trim().length < 2) {
            document.getElementById("erroTurma").textContent = "Informe sua turma.";
            valido = false;
        } else {
            document.getElementById("erroTurma").textContent = "";
        }

        if (!email.validity.valid || email.value.trim() === "") {
            document.getElementById("erroEmail").textContent = "Digite um e-mail válido.";
            valido = false;
        } else {
            document.getElementById("erroEmail").textContent = "";
        }

        botao.disabled = !(valido && aceite.checked);
        return valido && aceite.checked;
    }

    [nome, turma, email, aceite].forEach(campo => campo.addEventListener("input", validar));
    aceite.addEventListener("change", validar);

    form.addEventListener("submit", event => {
        event.preventDefault();
        if (!validar()) return;

        salvarIdentificacao(nome.value.trim(), turma.value.trim(), email.value.trim());

        if (form.action.includes("COLE_AQUI")) {
            window.location.href = "inicio.html";
        } else {
            form.submit();
            setTimeout(() => window.location.href = "inicio.html", 350);
        }
    });
}

// Monta os cards das cientistas.
function mostrarCientistas(lista) {
    const grade = document.getElementById("gradeCientistas");
    if (!grade) return;

    grade.innerHTML = "";

    lista.forEach((cientista, indice) => {
        const card = document.createElement("article");
        card.className = "card-cientista";
        card.dataset.filtro = cientista.filtro;
        card.innerHTML = `
            <div class="card-imagem">
                <span class="card-numero">0${indice + 1}</span>
                <span class="card-area">${cientista.area}</span>
                <img class="foto-cientista-card" src="${cientista.imagem}" alt="Retrato de ${cientista.nome}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"><div class="avatar-cientista fallback-avatar">${cientista.inicial}</div>
            </div>
            <div class="card-conteudo">
                <h2>${cientista.nome}</h2>
                <span class="periodo">${cientista.periodo}</span>
                <p>${cientista.resumo}</p>
                <span class="card-abrir">Abrir perfil completo →</span>
            </div>
        `;
        card.addEventListener("click", () => abrirModalCientista(cientista));
        grade.appendChild(card);
    });
}

// Mostra os detalhes de uma cientista.
function abrirModalCientista(cientista) {
    const modal = document.getElementById("modalCientista");
    if (!modal) return;

    document.getElementById("modalAvatar").innerHTML = `<img src="${cientista.imagem}" alt="Retrato de ${cientista.nome}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"><span class="avatar-fallback-modal">${cientista.inicial}</span>`;
    document.getElementById("modalArea").textContent = cientista.area;
    document.getElementById("modalNome").textContent = cientista.nome;
    document.getElementById("modalResumo").textContent = cientista.resumo;
    document.getElementById("modalBiografia").textContent = cientista.biografia;
    document.getElementById("modalLegado").textContent = cientista.legado;

    document.getElementById("modalContribuicoes").innerHTML =
        "<ul>" + cientista.contribuicoes.map(item => `<li>${item}</li>`).join("") + "</ul>";

    document.getElementById("modalCuriosidades").innerHTML =
        "<ul>" + cientista.curiosidades.map(item => `<li>${item}</li>`).join("") + "</ul>";

    modal.classList.add("aberto");
    document.body.classList.add("modal-aberto");
}

// Fecha os detalhes da cientista.
function fecharModalCientista() {
    const modal = document.getElementById("modalCientista");
    if (!modal) return;
    modal.classList.remove("aberto");
    document.body.classList.remove("modal-aberto");
}

// Configura busca, filtros e cards das cientistas.
function configurarCientistas() {
    if (!document.getElementById("gradeCientistas")) return;

    mostrarCientistas(cientistas);

    document.querySelectorAll(".filtro").forEach(botao => {
        botao.addEventListener("click", () => {
            document.querySelectorAll(".filtro").forEach(item => item.classList.remove("ativo"));
            botao.classList.add("ativo");

            const filtro = botao.dataset.filtro;
            if (filtro === "todos") mostrarCientistas(cientistas);
            else mostrarCientistas(cientistas.filter(item => item.filtro === filtro));
        });
    });

    const fechar = document.getElementById("fecharModal");
    const fundo = document.getElementById("fundoModal");
    if (fechar) fechar.addEventListener("click", fecharModalCientista);
    if (fundo) fundo.addEventListener("click", fecharModalCientista);
}

let estadoQuiz = {
    perguntaAtual: 0,
    pontos: 0,
    escolhida: null,
    respondida: false
};

// Começa uma nova tentativa do quiz.
function iniciarQuiz() {
    estadoQuiz = { perguntaAtual: 0, pontos: 0, escolhida: null, respondida: false };
    const container = document.getElementById("quizContainer");
    const resultado = document.getElementById("resultadoQuiz");
    if (!container || !resultado) return;

    container.classList.remove("escondido");
    resultado.classList.add("escondido");
    mostrarPergunta();
}

// Mostra a pergunta atual.
function mostrarPergunta() {
    const pergunta = perguntasQuiz[estadoQuiz.perguntaAtual];
    const numero = estadoQuiz.perguntaAtual + 1;

    document.getElementById("numeroQuestao").textContent = `QUESTÃO ${String(numero).padStart(2, "0")}`;
    document.getElementById("contadorQuestao").textContent = `${numero} / ${perguntasQuiz.length}`;
    document.getElementById("progressoQuiz").style.width = `${(numero / perguntasQuiz.length) * 100}%`;
    document.getElementById("temaQuestao").textContent = pergunta.tema;
    document.getElementById("textoQuestao").textContent = pergunta.pergunta;

    const alternativas = document.getElementById("alternativas");
    alternativas.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.className = "alternativa";
        botao.innerHTML = `<span class="letra">${String.fromCharCode(65 + indice)}</span><span>${opcao}</span>`;
        botao.addEventListener("click", () => selecionarAlternativa(indice));
        alternativas.appendChild(botao);
    });

    document.getElementById("feedbackQuestao").textContent = "";
    document.getElementById("feedbackQuestao").className = "feedback-questao";

    // Reseta a dica sempre que uma nova pergunta aparece.
    const dica = document.getElementById("dicaQuestao");
    const botaoDica = document.getElementById("botaoDica");
    dica.textContent = "";
    dica.className = "dica-questao";
    botaoDica.disabled = false;

    const proxima = document.getElementById("botaoProxima");
    proxima.disabled = true;
    proxima.querySelector("span").textContent = "Responder";

    estadoQuiz.escolhida = null;
    estadoQuiz.respondida = false;
}

// Marca a alternativa escolhida.
function selecionarAlternativa(indice) {
    if (estadoQuiz.respondida) return;

    estadoQuiz.escolhida = indice;
    document.querySelectorAll("#alternativas .alternativa").forEach((botao, i) => {
        botao.classList.toggle("selecionada", i === indice);
    });

    document.getElementById("botaoProxima").disabled = false;
}

// Confere a resposta e atualiza a pontuação.
function responderPergunta() {
    if (estadoQuiz.escolhida === null) return;

    const pergunta = perguntasQuiz[estadoQuiz.perguntaAtual];
    const botoes = document.querySelectorAll("#alternativas .alternativa");
    const feedback = document.getElementById("feedbackQuestao");

    botoes.forEach(botao => botao.disabled = true);

    if (estadoQuiz.escolhida === pergunta.correta) {
        estadoQuiz.pontos++;
        botoes[estadoQuiz.escolhida].classList.add("correta");
        feedback.textContent = "Correto! " + pergunta.explicacao;
        feedback.classList.add("certo");
    } else {
        botoes[estadoQuiz.escolhida].classList.add("errada");
        botoes[pergunta.correta].classList.add("correta");
        feedback.textContent = "Não foi dessa vez. " + pergunta.explicacao;
        feedback.classList.add("errado");
    }

    estadoQuiz.respondida = true;
    const proxima = document.getElementById("botaoProxima");
    proxima.querySelector("span").textContent =
        estadoQuiz.perguntaAtual === perguntasQuiz.length - 1 ? "Ver resultado" : "Próxima";
}

// Mostra o resultado final do quiz.
function finalizarQuiz() {
    document.getElementById("quizContainer").classList.add("escondido");
    document.getElementById("resultadoQuiz").classList.remove("escondido");

    const pontos = estadoQuiz.pontos;
    document.getElementById("pontuacaoFinal").textContent = pontos;

    let titulo = "";
    let texto = "";

    if (pontos >= 9) {
        titulo = "Você mandou muito bem!";
        texto = "Seu conhecimento sobre as cientistas está excelente.";
    } else if (pontos >= 7) {
        titulo = "Ótimo resultado!";
        texto = "Você aprendeu bastante. Continue explorando o projeto para conhecer ainda mais histórias.";
    } else if (pontos >= 5) {
        titulo = "Bom começo!";
        texto = "Você já conhece várias histórias, mas pode voltar aos perfis para reforçar seus conhecimentos.";
    } else {
        titulo = "Hora de explorar mais!";
        texto = "Volte à página das cientistas, descubra novas histórias e tente o quiz novamente.";
    }

    document.getElementById("tituloResultado").textContent = titulo;
    document.getElementById("textoResultado").textContent = texto;
    localStorage.setItem("ultimaPontuacaoQuiz", pontos);
}

// Configura os botões e o formulário do quiz.
function configurarQuiz() {
    if (!document.getElementById("quizContainer")) return;

    iniciarQuiz();

    document.getElementById("botaoProxima").addEventListener("click", () => {
        if (!estadoQuiz.respondida) {
            responderPergunta();
        } else if (estadoQuiz.perguntaAtual < perguntasQuiz.length - 1) {
            estadoQuiz.perguntaAtual++;
            mostrarPergunta();
        } else {
            finalizarQuiz();
        }
    });

    document.getElementById("refazerQuiz").addEventListener("click", iniciarQuiz);

    // Mostra uma dica sem entregar diretamente a resposta.
    document.getElementById("botaoDica").addEventListener("click", () => {
        const pergunta = perguntasQuiz[estadoQuiz.perguntaAtual];
        const dica = document.getElementById("dicaQuestao");
        dica.textContent = pergunta.dica;
        dica.classList.add("visivel");
        document.getElementById("botaoDica").disabled = true;
    });
}

let jogo = {
    rodando: false,
    finalizado: false,
    x: 60,
    y: 390,
    vx: 0,
    vy: 0,
    larguraJogador: 34,
    alturaJogador: 46,
    velocidade: 0.65,
    velocidadeMax: 4.6,
    pulo: -12,
    gravidade: 0.62,
    noChao: false,
    cameraX: 0,
    pontos: 0,
    tempo: 60,
    vidas: 3,
    registros: [],
    estrelas: [],
    inimigos: [],
    plataformas: [],
    molas: [],
    checkpoints: [],
    checkpointAtual: 0,
    particulas: [],
    bandeira: null,
    ultimoTempo: 0,
    intervaloTempo: null,
    animacao: null,
    esquerda: false,
    direita: false,
    pular: false,
    puloPressionado: false,
    invulneravel: 0,
    zona: 1,
    zonaAviso: 0,
    mundoLargura: 5200
};

const fragmentosCientificos = [
    { cientista: 'Marie Curie', sigla: 'MC', titulo: 'RÁDIO' },
    { cientista: 'Ada Lovelace', sigla: 'AL', titulo: 'ALGORITMO' },
    { cientista: 'Katherine Johnson', sigla: 'KJ', titulo: 'TRAJETÓRIA' },
    { cientista: 'Rosalind Franklin', sigla: 'RF', titulo: 'DNA' },
    { cientista: 'Chien-Shiung Wu', sigla: 'CW', titulo: 'PARIDADE' },
    { cientista: 'Dorothy Hodgkin', sigla: 'DH', titulo: 'CRISTAL' },
    { cientista: 'Emmy Noether', sigla: 'EN', titulo: 'SIMETRIA' },
    { cientista: 'Tu Youyou', sigla: 'TY', titulo: 'ARTEMISININA' },
    { cientista: 'Nise da Silveira', sigla: 'NS', titulo: 'EXPRESSÃO' }
];

// Configura os controles e o botão de início do jogo.
function configurarJogo() {
    const canvas = document.getElementById('telaJogo');
    const botaoIniciar = document.getElementById('botaoMensagemJogo');
    if (!canvas || !botaoIniciar) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    criarPlataformaJogo(canvas);
    desenharPlataformaJogo(ctx, canvas);

    botaoIniciar.type = 'button';
    botaoIniciar.onclick = function () {
        if (jogo.finalizado) criarPlataformaJogo(canvas);
        document.getElementById('mensagemJogo').classList.add('escondido');
        iniciarJogo(canvas, ctx);
    };

    const reiniciar = document.getElementById('botaoReiniciarJogo');
    if (reiniciar) {
        reiniciar.type = 'button';
        reiniciar.onclick = function () {
            reiniciarJogo(canvas, ctx);
        };
    }

    document.querySelectorAll('.controles-mobile button').forEach(botao => {
        botao.addEventListener('pointerdown', function (event) {
            event.preventDefault();
            const tecla = botao.dataset.tecla;
            if (tecla === 'ArrowLeft') jogo.esquerda = true;
            if (tecla === 'ArrowRight') jogo.direita = true;
            if (tecla === 'ArrowUp') jogo.pular = true;
        });
        ['pointerup', 'pointercancel', 'pointerleave'].forEach(tipo => {
            botao.addEventListener(tipo, function () {
                const tecla = botao.dataset.tecla;
                if (tecla === 'ArrowLeft') jogo.esquerda = false;
                if (tecla === 'ArrowRight') jogo.direita = false;
                if (tecla === 'ArrowUp') jogo.pular = false;
            });
        });
    });

    window.addEventListener('keydown', function (event) {
        const tecla = event.key;
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'a', 'A', 'd', 'D', 'w', 'W', ' '].includes(tecla)) {
            event.preventDefault();
        }
        if (['ArrowLeft', 'a', 'A'].includes(tecla)) jogo.esquerda = true;
        if (['ArrowRight', 'd', 'D'].includes(tecla)) jogo.direita = true;
        if (['ArrowUp', 'w', 'W', ' '].includes(tecla)) jogo.pular = true;
    });

    window.addEventListener('keyup', function (event) {
        if (['ArrowLeft', 'a', 'A'].includes(event.key)) jogo.esquerda = false;
        if (['ArrowRight', 'd', 'D'].includes(event.key)) jogo.direita = false;
        if (['ArrowUp', 'w', 'W', ' '].includes(event.key)) jogo.pular = false;
    });
}

// Cria o mapa e os objetos da fase.
function criarPlataformaJogo(canvas) {
    clearInterval(jogo.intervaloTempo);
    cancelAnimationFrame(jogo.animacao);

    jogo.rodando = false;
    jogo.finalizado = false;
    jogo.x = 60;
    jogo.y = 390;
    jogo.vx = 0;
    jogo.vy = 0;
    jogo.cameraX = 0;
    jogo.pontos = 0;
    jogo.tempo = 60;
    jogo.vidas = 3;
    jogo.checkpointAtual = 0;
    jogo.particulas = [];
    jogo.invulneravel = 0;
    jogo.zona = 1;
    jogo.zonaAviso = 0;
    jogo.esquerda = false;
    jogo.direita = false;
    jogo.pular = false;
    jogo.puloPressionado = false;

    jogo.plataformas = [
        {x:0,y:450,w:520,h:70}, {x:650,y:450,w:470,h:70}, {x:1250,y:450,w:560,h:70},
        {x:1940,y:450,w:500,h:70}, {x:2570,y:450,w:570,h:70}, {x:3270,y:450,w:500,h:70},
        {x:3900,y:450,w:560,h:70}, {x:4590,y:450,w:520,h:70},
        {x:260,y:350,w:150,h:20}, {x:760,y:335,w:160,h:20}, {x:1010,y:275,w:150,h:20},
        {x:1340,y:350,w:160,h:20}, {x:1590,y:285,w:170,h:20}, {x:2040,y:345,w:160,h:20},
        {x:2290,y:275,w:160,h:20}, {x:2710,y:345,w:160,h:20}, {x:2980,y:270,w:170,h:20},
        {x:3390,y:345,w:160,h:20}, {x:3650,y:280,w:170,h:20}, {x:3990,y:345,w:160,h:20},
        {x:4260,y:270,w:170,h:20}, {x:4680,y:345,w:160,h:20}, {x:4920,y:275,w:170,h:20}
    ];

    const posicoes = [
        [310,300], [820,285], [1080,225], [1390,300], [1650,235],
        [2100,295], [2350,225], [2760,295], [3035,220]
    ];

    jogo.registros = fragmentosCientificos.map((item, i) => ({
        ...item,
        x: posicoes[i][0], y: posicoes[i][1], w: 34, h: 34,
        coletado: false, fase: i < 3 ? 1 : i < 6 ? 2 : 3, animacao: Math.random() * 6
    }));

    jogo.estrelas = [
        {x:450,y:405,w:20,h:20,coletada:false}, {x:960,y:405,w:20,h:20,coletada:false},
        {x:1500,y:405,w:20,h:20,coletada:false}, {x:1840,y:405,w:20,h:20,coletada:false},
        {x:2400,y:405,w:20,h:20,coletada:false}, {x:3140,y:405,w:20,h:20,coletada:false},
        {x:3740,y:405,w:20,h:20,coletada:false}, {x:4450,y:405,w:20,h:20,coletada:false}
    ];

    jogo.inimigos = [
        criarInimigo(350,418,180,480,1.0), criarInimigo(800,303,760,900,0.8),
        criarInimigo(1430,418,1300,1770,1.1), criarInimigo(2160,418,2000,2370,1.15),
        criarInimigo(2830,313,2710,2840,0.85), criarInimigo(3470,418,3330,3690,1.15),
        criarInimigo(4100,418,3950,4420,1.25), criarInimigo(4760,313,4680,4840,0.9)
    ];

    jogo.molas = [
        {x:490,y:430,w:28,h:20,forca:-15}, {x:1190,y:430,w:28,h:20,forca:-15},
        {x:2430,y:430,w:28,h:20,forca:-15}, {x:3760,y:430,w:28,h:20,forca:-15},
        {x:4470,y:430,w:28,h:20,forca:-15}
    ];

    jogo.checkpoints = [60, 1260, 2580, 3910];
    jogo.bandeira = {x:5040,y:300,w:40,h:150};
    atualizarPainelJogo();
}

function criarInimigo(x, y, limiteA, limiteB, velocidade) {
    return {x, y, w:32, h:32, limiteA, limiteB, velocidade, direcao:1, animacao:Math.random() * 6, ativo:true};
}

// Inicia o relógio e o loop do jogo.
function iniciarJogo(canvas, ctx) {
    if (jogo.rodando) return;
    jogo.rodando = true;
    jogo.finalizado = false;
    jogo.ultimoTempo = performance.now();
    clearInterval(jogo.intervaloTempo);
    jogo.intervaloTempo = setInterval(function () {
        if (!jogo.rodando) return;
        jogo.tempo--;
        atualizarPainelJogo();
        if (jogo.tempo <= 0) terminarPlataforma(false, canvas, ctx, 'O tempo acabou.');
    }, 1000);
    cancelAnimationFrame(jogo.animacao);
    jogo.animacao = requestAnimationFrame(function (tempo) {
        loopPlataforma(canvas, ctx, tempo);
    });
}

// Atualiza e desenha o jogo a cada frame.
function loopPlataforma(canvas, ctx, agora) {
    if (!jogo.rodando) return;
    const dt = Math.min((agora - jogo.ultimoTempo) / 16.67, 1.5);
    jogo.ultimoTempo = agora;
    atualizarPlataforma(canvas, dt);
    desenharPlataformaJogo(ctx, canvas);
    jogo.animacao = requestAnimationFrame(function (tempo) {
        loopPlataforma(canvas, ctx, tempo);
    });
}

// Atualiza o movimento do personagem.
function atualizarPlataforma(canvas, dt) {
    if (jogo.invulneravel > 0) jogo.invulneravel -= dt;
    if (jogo.zonaAviso > 0) jogo.zonaAviso -= dt;

    if (jogo.esquerda) jogo.vx -= jogo.velocidade * dt;
    if (jogo.direita) jogo.vx += jogo.velocidade * dt;
    if (!jogo.esquerda && !jogo.direita) jogo.vx *= Math.pow(0.78, dt);
    jogo.vx = Math.max(-jogo.velocidadeMax, Math.min(jogo.velocidadeMax, jogo.vx));

    if (jogo.pular && !jogo.puloPressionado && jogo.noChao) {
        jogo.vy = jogo.pulo;
        jogo.noChao = false;
        jogo.puloPressionado = true;
        criarParticulas(jogo.x + 17, jogo.y + 46, 'bege');
    }
    if (!jogo.pular) jogo.puloPressionado = false;

    const antigoX = jogo.x;
    const antigoY = jogo.y;
    jogo.x += jogo.vx * dt;
    jogo.x = Math.max(0, Math.min(jogo.mundoLargura - jogo.larguraJogador, jogo.x));
    resolverColisaoHorizontal(antigoX);

    jogo.vy += jogo.gravidade * dt;
    jogo.y += jogo.vy * dt;
    resolverColisaoVertical(antigoY);
    verificarMolas();

    if (jogo.y > canvas.height + 100) perderVida(canvas);

    jogo.cameraX = jogo.x - canvas.width * 0.38;
    jogo.cameraX = Math.max(0, Math.min(jogo.mundoLargura - canvas.width, jogo.cameraX));

    verificarRegistros();
    verificarEstrelas();
    atualizarInimigos(canvas, dt);
    atualizarParticulas(dt);
    atualizarZona();
    verificarBandeira(canvas);
}

function resolverColisaoHorizontal(antigoX) {
    jogo.plataformas.forEach(function (p) {
        const bateu = jogo.x + jogo.larguraJogador > p.x && jogo.x < p.x + p.w &&
            jogo.y + jogo.alturaJogador > p.y + 4 && jogo.y < p.y + p.h;
        if (!bateu) return;
        if (jogo.vx > 0 && antigoX + jogo.larguraJogador <= p.x) {
            jogo.x = p.x - jogo.larguraJogador;
            jogo.vx = 0;
        }
        if (jogo.vx < 0 && antigoX >= p.x + p.w) {
            jogo.x = p.x + p.w;
            jogo.vx = 0;
        }
    });
}

function resolverColisaoVertical(antigoY) {
    jogo.noChao = false;
    jogo.plataformas.forEach(function (p) {
        const sobre = jogo.x + jogo.larguraJogador > p.x + 2 && jogo.x < p.x + p.w - 2;
        const caiu = antigoY + jogo.alturaJogador <= p.y && jogo.y + jogo.alturaJogador >= p.y && jogo.vy >= 0;
        const bateuCabeca = antigoY >= p.y + p.h && jogo.y <= p.y + p.h && jogo.vy < 0;

        if (sobre && caiu) {
            jogo.y = p.y - jogo.alturaJogador;
            jogo.vy = 0;
            jogo.noChao = true;
        }
        if (sobre && bateuCabeca) {
            jogo.y = p.y + p.h;
            jogo.vy = 0;
        }
    });
}

function verificarMolas() {
    jogo.molas.forEach(function (mola) {
        const sobre = jogo.x + jogo.larguraJogador > mola.x && jogo.x < mola.x + mola.w;
        const toca = jogo.y + jogo.alturaJogador >= mola.y && jogo.y + jogo.alturaJogador <= mola.y + mola.h + 8;
        if (sobre && toca && jogo.vy >= 0) {
            jogo.y = mola.y - jogo.alturaJogador;
            jogo.vy = mola.forca;
            jogo.noChao = false;
            criarParticulas(mola.x + 14, mola.y, 'laranja');
        }
    });
}

function verificarRegistros() {
    jogo.registros.forEach(function (item) {
        item.animacao += 0.06;
        if (item.coletado) return;
        if (colide(jogo.x, jogo.y, jogo.larguraJogador, jogo.alturaJogador, item.x, item.y, item.w, item.h)) {
            item.coletado = true;
            jogo.pontos += 100;
            criarParticulas(item.x + 17, item.y + 17, 'laranja');
            atualizarPainelJogo();
        }
    });
}

function verificarEstrelas() {
    jogo.estrelas.forEach(function (item) {
        if (item.coletada) return;
        if (colide(jogo.x, jogo.y, jogo.larguraJogador, jogo.alturaJogador, item.x, item.y, item.w, item.h)) {
            item.coletada = true;
            jogo.pontos += 25;
            criarParticulas(item.x + 10, item.y + 10, 'laranja');
            atualizarPainelJogo();
        }
    });
}

// Faz os obstáculos andarem de um lado para o outro.
function atualizarInimigos(canvas, dt) {
    jogo.inimigos.forEach(function (inimigo) {
        if (!inimigo.ativo) return;

        inimigo.x += inimigo.velocidade * inimigo.direcao * dt;

        if (inimigo.x <= inimigo.limiteA) {
            inimigo.x = inimigo.limiteA;
            inimigo.direcao = 1;
        }
        if (inimigo.x + inimigo.w >= inimigo.limiteB) {
            inimigo.x = inimigo.limiteB - inimigo.w;
            inimigo.direcao = -1;
        }

        if (jogo.invulneravel > 0 || !colide(jogo.x, jogo.y, jogo.larguraJogador, jogo.alturaJogador, inimigo.x, inimigo.y, inimigo.w, inimigo.h)) return;

        const pisou = jogo.vy > 0 && jogo.y + jogo.alturaJogador - 8 < inimigo.y + 10;
        if (pisou) {
            inimigo.ativo = false;
            jogo.vy = -8;
            jogo.pontos += 75;
            criarParticulas(inimigo.x + 16, inimigo.y + 16, 'laranja');
            atualizarPainelJogo();
        } else {
            perderVida(canvas);
        }
    });
}

function atualizarParticulas(dt) {
    jogo.particulas.forEach(function (p) {
        p.x += p.dx * dt;
        p.y += p.dy * dt;
        p.dy += 0.10 * dt;
        p.vida -= dt;
    });
    jogo.particulas = jogo.particulas.filter(p => p.vida > 0);
}

function criarParticulas(x, y, tipo) {
    const quantidade = 7;
    for (let i = 0; i < quantidade; i++) {
        jogo.particulas.push({
            x: x, y: y,
            dx: (Math.random() - 0.5) * 4,
            dy: (Math.random() - 0.5) * 5,
            vida: 25,
            tipo: tipo
        });
    }
}

function atualizarZona() {
    jogo.checkpoints.forEach(function (x, i) {
        if (jogo.x >= x) jogo.checkpointAtual = Math.max(jogo.checkpointAtual, i);
    });

    const novaZona = jogo.x < 1750 ? 1 : jogo.x < 3500 ? 2 : 3;
    if (novaZona !== jogo.zona) {
        jogo.zona = novaZona;
        jogo.zonaAviso = 90;
        jogo.pontos += 50;
        atualizarPainelJogo();
    }
}

function verificarBandeira(canvas) {
    const chegou = colide(jogo.x, jogo.y, jogo.larguraJogador, jogo.alturaJogador,
        jogo.bandeira.x, jogo.bandeira.y, jogo.bandeira.w, jogo.bandeira.h);
    if (!chegou) return;

    const registros = jogo.registros.filter(item => item.coletado).length;
    if (registros === 9) {
        terminarPlataforma(true, canvas, canvas.getContext('2d'), 'Você recuperou todos os registros e chegou ao final da expedição.');
    }
}

function colide(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

function perderVida(canvas) {
    if (jogo.invulneravel > 0 || !jogo.rodando) return;
    jogo.vidas--;
    jogo.pontos = Math.max(0, jogo.pontos - 50);
    jogo.invulneravel = 80;
    jogo.x = jogo.checkpoints[jogo.checkpointAtual];
    jogo.y = 390;
    jogo.vx = 0;
    jogo.vy = 0;
    criarParticulas(jogo.x + 17, jogo.y + 20, 'vermelho');
    atualizarPainelJogo();

    if (jogo.vidas <= 0) {
        terminarPlataforma(false, canvas, canvas.getContext('2d'), 'Você perdeu as três vidas.');
    }
}

function terminarPlataforma(vitoria, canvas, ctx, detalhe) {
    if (jogo.finalizado) return;
    jogo.rodando = false;
    jogo.finalizado = true;
    clearInterval(jogo.intervaloTempo);
    cancelAnimationFrame(jogo.animacao);

    const titulo = document.getElementById('tituloMensagemJogo');
    const texto = document.getElementById('textoMensagemJogo');
    const descricao = document.getElementById('descricaoMensagemJogo');
    const botao = document.getElementById('botaoMensagemJogo');
    const registros = jogo.registros.filter(item => item.coletado).length;
    const estrelas = jogo.estrelas.filter(item => item.coletada).length;

    titulo.textContent = vitoria ? 'MISSÃO CONCLUÍDA' : 'MISSÃO ENCERRADA';
    texto.textContent = vitoria ? 'O Arquivo Científico foi restaurado.' : 'Tente novamente para concluir a expedição.';
    descricao.textContent = `${detalhe} Pontos: ${jogo.pontos} • Registros: ${registros}/9 • Estrelas: ${estrelas}/8.`;
    botao.textContent = 'Jogar novamente';
    document.getElementById('mensagemJogo').classList.remove('escondido');
    localStorage.setItem('ultimaPontuacaoJogo', jogo.pontos);
    atualizarPainelJogo();
    desenharPlataformaJogo(ctx, canvas);
}

function reiniciarJogo(canvas, ctx) {
    criarPlataformaJogo(canvas);
    document.getElementById('tituloMensagemJogo').textContent = 'ARQUIVO CIENTÍFICO';
    document.getElementById('textoMensagemJogo').textContent = 'Recupere os nove registros.';
    document.getElementById('descricaoMensagemJogo').textContent = 'Explore a fase, pule os obstáculos, recupere as nove cientistas e chegue à bandeira. Use ← → ou A/D e ↑, W ou Espaço.';
    document.getElementById('botaoMensagemJogo').textContent = 'Iniciar missão';
    document.getElementById('mensagemJogo').classList.remove('escondido');
    desenharPlataformaJogo(ctx, canvas);
}

// Atualiza os dados mostrados fora do canvas.
function atualizarPainelJogo() {
    const descobertas = document.getElementById('contadorDescobertas');
    const pontos = document.getElementById('pontosJogo');
    const tempo = document.getElementById('tempoJogo');
    const combo = document.getElementById('comboJogo');
    const objetivo = document.getElementById('objetivoAtual');
    const registros = jogo.registros.filter(item => item.coletado).length;

    if (descobertas) descobertas.textContent = `${registros} / 9`;
    if (pontos) pontos.textContent = jogo.pontos;
    if (tempo) tempo.textContent = jogo.tempo;
    if (combo) combo.textContent = `${jogo.vidas} vidas`;

    const colecao = document.getElementById('colecaoJogo');
    if (colecao) {
        colecao.innerHTML = fragmentosCientificos.map(function (item) {
            const ativa = jogo.registros.some(function (registro) {
                return registro.cientista === item.cientista && registro.coletado;
            });
            return `<div class="chip-cientista-jogo ${ativa ? 'coletada' : ''}" title="${item.cientista}"><span>${ativa ? '✓' : item.sigla}</span><strong>${item.cientista}</strong></div>`;
        }).join('');
    }

    if (objetivo) {
        objetivo.textContent = registros === 9
            ? 'Todos os registros foram recuperados. Chegue à bandeira para concluir.'
            : `Recupere ${9 - registros} registro${9 - registros === 1 ? '' : 's'} e atravesse a fase.`;
    }
}

function desenharPlataformaJogo(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(-jogo.cameraX, 0);
    desenharFundoPlataforma(ctx, canvas);
    jogo.plataformas.forEach(function (p) { desenharPlataforma(ctx, p); });
    jogo.molas.forEach(function (mola) { desenharMola(ctx, mola); });
    jogo.estrelas.forEach(function (item) { if (!item.coletada) desenharEstrela(ctx, item); });
    jogo.registros.forEach(function (item) { if (!item.coletado) desenharArtefato(ctx, item); });
    jogo.inimigos.forEach(function (inimigo) { if (inimigo.ativo) desenharInimigo(ctx, inimigo); });
    jogo.checkpoints.forEach(function (x, i) { desenharCheckpoint(ctx, x, i); });
    desenharBandeira(ctx);
    desenharJogador(ctx);
    jogo.particulas.forEach(function (p) { desenharParticulaJogo(ctx, p); });
    ctx.restore();
    desenharHudPlataforma(ctx, canvas);
}

function desenharFundoPlataforma(ctx, canvas) {
    const fundos = ['#dce5ea', '#e8dfcf', '#d7e0df'];
    ctx.fillStyle = fundos[jogo.zona - 1];
    ctx.fillRect(jogo.cameraX, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#2f6690';
    ctx.fillRect(jogo.cameraX, 420, canvas.width, 30);
}

function desenharJogador(ctx) {
    if (jogo.invulneravel > 0 && Math.floor(jogo.invulneravel / 5) % 2 === 0) return;
    ctx.save();
    ctx.translate(jogo.x, jogo.y);
    ctx.fillStyle = '#10243a';
    ctx.fillRect(3, 0, 28, 9);
    ctx.fillStyle = '#f3e8d5';
    ctx.fillRect(7, 9, 20, 17);
    ctx.fillStyle = '#df762f';
    ctx.fillRect(5, 25, 24, 17);
    ctx.fillStyle = '#f3e8d5';
    ctx.fillRect(0, 27, 7, 12);
    ctx.fillRect(27, 27, 7, 12);
    ctx.fillStyle = '#10243a';
    ctx.fillRect(7, 42, 9, 4);
    ctx.fillRect(20, 42, 9, 4);
    ctx.fillRect(21, 13, 3, 3);
    ctx.restore();
}

function desenharArtefato(ctx, item) {
    const y = item.y + Math.sin(item.animacao) * 4;
    ctx.fillStyle = '#f3e8d5';
    ctx.fillRect(item.x - 4, y - 4, 42, 42);
    ctx.strokeStyle = '#df762f';
    ctx.lineWidth = 3;
    ctx.strokeRect(item.x, y, 34, 34);
    ctx.fillStyle = '#17324d';
    ctx.font = '700 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(item.sigla, item.x + 17, y + 21);
    ctx.font = '700 8px Arial';
    ctx.fillText(item.titulo, item.x + 17, y - 9);
}

function desenharEstrela(ctx, item) {
    ctx.fillStyle = '#df762f';
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
        const angulo = -Math.PI / 2 + i * Math.PI / 5;
        const raio = i % 2 === 0 ? 10 : 4;
        const x = item.x + 10 + Math.cos(angulo) * raio;
        const y = item.y + 10 + Math.sin(angulo) * raio;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
}

function desenharInimigo(ctx, inimigo) {
    ctx.fillStyle = '#b94b43';
    ctx.fillRect(inimigo.x, inimigo.y + 8, inimigo.w, 24);
    ctx.fillStyle = '#10243a';
    ctx.fillRect(inimigo.x + 5, inimigo.y, 22, 13);
    ctx.fillStyle = '#f3e8d5';
    ctx.fillRect(inimigo.x + 8, inimigo.y + 4, 4, 4);
    ctx.fillRect(inimigo.x + 20, inimigo.y + 4, 4, 4);
}

function desenharPlataforma(ctx, p) {
    ctx.fillStyle = '#c7b696';
    ctx.fillRect(p.x, p.y, p.w, p.h);
    ctx.fillStyle = '#17324d';
    ctx.fillRect(p.x, p.y, p.w, 8);
}

function desenharMola(ctx, mola) {
    ctx.fillStyle = '#df762f';
    ctx.fillRect(mola.x, mola.y + 6, mola.w, mola.h - 6);
    ctx.fillStyle = '#f3e8d5';
    ctx.fillRect(mola.x + 4, mola.y, mola.w - 8, 6);
}

function desenharCheckpoint(ctx, x, indice) {
    if (indice === 0) return;
    ctx.fillStyle = indice <= jogo.checkpointAtual ? '#df762f' : '#7b858b';
    ctx.fillRect(x, 392, 5, 58);
    ctx.fillRect(x + 5, 396, 24, 13);
}

function desenharBandeira(ctx) {
    const x = jogo.bandeira.x;
    ctx.fillStyle = '#17324d';
    ctx.fillRect(x, jogo.bandeira.y, 6, 150);
    ctx.fillStyle = '#df762f';
    ctx.beginPath();
    ctx.moveTo(x + 6, jogo.bandeira.y + 8);
    ctx.lineTo(x + 70, jogo.bandeira.y + 30);
    ctx.lineTo(x + 6, jogo.bandeira.y + 52);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#17324d';
    ctx.font = '700 8px Arial';
    ctx.fillText('FIM', x + 20, jogo.bandeira.y + 35);
}

function desenharParticulaJogo(ctx, p) {
    const cores = { bege: '#f3e8d5', laranja: '#df762f', vermelho: '#b94b43' };
    ctx.fillStyle = cores[p.tipo] || '#f3e8d5';
    ctx.fillRect(p.x, p.y, 4, 4);
}

function desenharHudPlataforma(ctx, canvas) {
    ctx.fillStyle = '#17324d';
    ctx.fillRect(18, 18, canvas.width - 36, 55);

    ctx.fillStyle = '#f3e8d5';
    ctx.font = '700 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`ÁREA ${jogo.zona}/3`, 35, 42);

    ctx.font = '10px Arial';
    ctx.fillText(`REGISTROS ${jogo.registros.filter(item => item.coletado).length}/9`, 145, 40);
    ctx.fillText(`ESTRELAS ${jogo.estrelas.filter(item => item.coletada).length}/8`, 285, 40);
    ctx.fillText(`PONTOS ${jogo.pontos}`, 415, 40);
    ctx.fillText(`VIDAS ${jogo.vidas}`, 545, 40);

    ctx.fillStyle = jogo.tempo <= 10 ? '#f0a07b' : '#df762f';
    ctx.font = '700 14px Arial';
    ctx.fillText(`${jogo.tempo}s`, 650, 42);

    if (jogo.zonaAviso > 0) {
        ctx.fillStyle = '#df762f';
        ctx.font = '700 11px Arial';
        ctx.fillText(`ÁREA ${jogo.zona}`, 760, 42);
    }
}

// Configura o formulário de feedback.
function configurarFeedback() {
    const form = document.getElementById("formularioFeedback");
    if (!form) return;

    const estrelas = document.querySelectorAll("#estrelas button");
    const nota = document.getElementById("nota");
    const botao = document.getElementById("botaoEnviarFeedback");

    estrelas.forEach(estrela => {
        estrela.addEventListener("click", () => {
            const valor = Number(estrela.dataset.nota);
            nota.value = valor;
            estrelas.forEach(item => item.classList.toggle("ativa", Number(item.dataset.nota) <= valor));
            verificarFeedback();
        });
    });

    form.addEventListener("input", verificarFeedback);
    form.addEventListener("change", verificarFeedback);

    function verificarFeedback() {
        botao.disabled = !(form.checkValidity() && nota.value !== "");
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        if (!form.checkValidity() || nota.value === "") return;

        if (!form.action.includes("COLE_AQUI")) form.submit();

        // Depois do envio, deixamos somente a mensagem de agradecimento.
        document.querySelector(".area-feedback .cabecalho-pagina").classList.add("escondido");
        form.closest(".feedback-grid").classList.add("escondido");
        document.getElementById("feedbackFinal").classList.remove("escondido");

        // Deixa a tela de agradecimento fixa e sem a ajuda, pois ela não é mais necessária.
        document.body.classList.add("feedback-enviado");
        document.getElementById("botaoAjuda").classList.add("escondido");
    });
}

// Inicia somente o que existir na página aberta.
document.addEventListener("DOMContentLoaded", () => {
    verificarAcesso();
    configurarAjuda();
    configurarSair();
    carregarVisitante();
    configurarIdentificacao();
    configurarCientistas();
    configurarQuiz();
    configurarJogo();
    configurarFeedback();
});