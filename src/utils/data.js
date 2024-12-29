import { course_images, other_images } from "./images";

const courses = [
    {
        id: "xMHCZl",
        category: "python",
        image: course_images.python_1,
        course_name: "Aprenda Python: O Curso Completo de Programação Python",
        description: "Aprenda tudo sobre Python do zero ao avançado, incluindo Python GUI, Análise de Dados com Python e muito mais!",
        rating_count: 3059,
        rating_star: 4.4,
        students: 18430,
        creator: "Avinash Jain, The Codex",
        updated_date: "09/2015",
        lang: "inglês",
        actual_price: 424.95,
        discounted_price: 49.95,
        what_you_will_learn: [
            "Criar seus próprios Programas Python",
            "Tornar-se um Programador Python experiente",
            "Analisar a Web e Criar seus próprios Jogos"
        ],
        content: [
            "Começando com Python",
            "Os Fundamentos (Tipos de Dados)",
            "Condições e Loops",
            "Funções!",
            "Classes! (Programação Orientada a Objetos)",
            "Entrada/Saída de Arquivos",
            "Usando Módulos Python"
        ]
    },
    {
        id: "dtfo9e",
        category: "python",
        image: course_images.python_2,
        course_name: "Aprendendo Python para Análise e Visualização de Dados",
        description: "Aprenda Python e como usá-lo para analisar, visualizar e apresentar dados. Inclui diversos exemplos de código e horas de vídeo!",
        rating_count: 3059,
        rating_star: 4.3,
        students: 184053,
        creator: "Jose Portilla",
        updated_date: "09/2019",
        lang: "inglês",
        actual_price: 424.95,
        discounted_price: 49.95,
        what_you_will_learn: [
            "Ter um nível de habilidade intermediário em programação Python.",
            "Usar a biblioteca numpy para criar e manipular arrays.",
            "Aprender a trabalhar com vários formatos de dados em Python, incluindo: JSON, HTML e Planilhas do MS Excel.",
            "Ter um portfólio de diversos projetos de análise de dados."
        ],
        content: [
            "Introdução ao Curso e Python",
            "Aprendendo Numpy",
            "Visualização de Dados",
            "Projetos Exemplos",
            "Machine Learning",
            "SQL e Python",
            "Web Scraping com Python"
        ]
    },
    {
        id: "fLroW6",
        category: "python",
        image: course_images.python_6,
        course_name: "Python para Iniciantes - Aprenda Programação do Zero",
        description: "Python para Iniciantes: Este curso é destinado a iniciantes absolutos em programação ou em Python!",
        rating_count: 1844,
        rating_star: 4.3,
        students: 7330,
        creator: "Edwin Diaz, Coding Faculty Solutionss",
        updated_date: "05/2022",
        lang: "inglês",
        actual_price: 424.95,
        discounted_price: 49.95,
        what_you_will_learn: [
            "Aprender a linguagem Python",
            "Aprender as habilidades CORE para entender qualquer linguagem de programação",
        ],
        content: [
            "Fundamentos da programação",
            "Começando com Python",
            "Noções básicas de Python",
            "Estruturas condicionais",
            "Funções",
            "Trabalhando com arquivos",
        ]
    },
    {
        id: "VwkN_o",
        category: "python",
        image: course_images.python_7,
        course_name: "Python para Iniciantes: Este curso é destinado a iniciantes absolutos em programação ou em Python.",
        description: "Introdução ao Python para iniciantes. Aprenda Python completo do zero!",
        rating_count: 2780,
        rating_star: 4.3,
        students: 29082,
        creator: "Abrar Hussain",
        updated_date: "09/2019",
        lang: "inglês",
        actual_price: 149.95,
        discounted_price: 24.90,
        what_you_will_learn: [
            "Criar programas Python totalmente funcionais",
            "Aprender sobre estruturas de loop e condicionais",
            "Trabalhar com manipulação de arquivos Python",
            "Manipular strings e dados"
        ],
        content: [
            "Começando",
            "O Básico",
            "Entrada do Usuário",
            "Funções e Arquivos",
            "Classes e Objetos",
            "Gráficos e Animações",
        ]
    },
    {
        id: "xJB-WU",
        category: "python",
        image: course_images.python_8,
        course_name: "Python Além do Básico - Programação Orientada a Objetos",
        description: "De Classes à Herança - OOP em Profundidade para Programadores Python",
        rating_count: 2941,
        rating_star: 4.2,
        students: 10450,
        creator: "Infinite Skills",
        updated_date: "09/2019",
        lang: "inglês",
        actual_price: 249.95,
        discounted_price: 24.90,
        what_you_will_learn: [
            "Projetar Classes Python Orientadas a Objetos Reutilizáveis",
            "Como lidar com Erros",
            "Trabalhar com manipulação de arquivos Python",
            "Aplicar Conceitos de OOP para lidar com complexidade"
        ],
        content: [
            "Introdução ao Python Orientado a Objetos",
            "Classes",
            "Herança e Polimorfismo",
            "Recursos Avançados",
            "Serialização de Objetos",
            "Eficiência e Testes",
            "Conclusão"
        ]
    },
    {
        id: "PLbaSD",
        category: "python",
        image: course_images.python_9,
        course_name: "Mãos à Obra com Análise de Sentimentos em Python",
        description: "Descubra como analisar a opinião pública em textos utilizando Python. Aprenda a construir modelos de classificação de sentimentos e a aplicar essa técnica em diversos domínios.",
        rating_count: 3500,
        rating_star: 4.7,
        students: 18200,
        creator: "Julia Santos, Cientista de Dados",
        updated_date: "05/2023",
        lang: "portugues",
        actual_price: 99.99,
        discounted_price: 69.99,
        what_you_will_learn: [
            "Pré-processamento de texto",
            "Vectorização de texto",
            "Modelos de classificação de sentimentos",
            "Avaliação de modelos"
        ],
        content: [
            "Introdução à Análise de Sentimentos",
            "NLTK: A Biblioteca Essencial para PLN",
            "Construindo um Classificador de Sentimentos",
            "Aplicando a Análise de Sentimentos em Dados Reais"
        ],
    },
    {
        id: "aBC-D12",
        category: "python",
        image: course_images.python_10,
        course_name: "Python para Análise de Dados - Do Básico ao Avançado",
        description: "Aprenda a manipular, analisar e visualizar dados com Python usando bibliotecas como Pandas e Matplotlib.",
        rating_count: 1875,
        rating_star: 4.5,
        students: 8520,
        creator: "Data Science Academy",
        updated_date: "05/2023",
        lang: "portugues",
        actual_price: 299.99,
        discounted_price: 29.90,
        what_you_will_learn: [
            "Manipulação de Dados com Pandas",
            "Visualização de Dados com Matplotlib e Seaborn",
            "Análise Estatística com Scipy",
            "Limpeza e Preparação de Dados"
        ],
        content: [
            "Introdução à Análise de Dados",
            "Pandas: Manipulação de Dados",
            "Visualização de Dados com Matplotlib",
            "Análise Estatística com Python",
            "Limpeza e Preparação de Dados",
            "Projetos Práticos",
            "Conclusão"
        ]
    },
    {
        id: "dEF-G34",
        category: "python",
        image: course_images.python_4,
        course_name: "Automação com Python - Scripts e Ferramentas",
        description: "Domine a automação de tarefas repetitivas usando Python, desde web scraping até automação de planilhas.",
        rating_count: 2200,
        rating_star: 4.6,
        students: 7650,
        creator: "Tech Innovators",
        updated_date: "08/2022",
        lang: "inglês",
        actual_price: 199.99,
        discounted_price: 19.90,
        what_you_will_learn: [
            "Automatizar tarefas diárias com Python",
            "Web Scraping com BeautifulSoup e Requests",
            "Manipulação de Planilhas com OpenPyXL e Pandas",
            "Criação de Scripts para Automação"
        ],
        content: [
            "Introdução à Automação com Python",
            "Web Scraping: Coletando Dados da Web",
            "Manipulação de Planilhas Excel",
            "Automatizando Tarefas do Dia a Dia",
            "Criando Scripts Eficientes",
            "Projetos Práticos de Automação",
            "Conclusão"
        ]
    },
    {
        id: "qjdYG4",
        category: "desenvolvimento web",
        image: course_images.web_dev_1,
        course_name: "Torne-se um Desenvolvedor Web Certificado em HTML, CSS e JavaScript",
        description: "Cobertura completa de HTML, CSS e JavaScript enquanto você ganha quatro certificações respeitáveis",
        rating_count: 2760,
        rating_star: 4.1,
        students: 33455,
        creator: "Tech Learning Network, Mark Lassoff",
        updated_date: "11/2020",
        lang: "inglês",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Prepare-se para o Exame de Certificação da Indústria",
            "Horas e Horas de Instrução em Vídeo",
            "Mais de 25 Exercícios Práticos Envolventes",
            "Instrutor Disponível por E-mail ou nos Fóruns",
            "Cobertura Abrangente de HTML e CSS"
        ],
        content: [
            "Sua Caixa de Ferramentas de Desenvolvimento",
            "Especialista Certificado em HTML5 2019",
            "Especialista Certificado em CSS 2019",
            "Especialista em JavaScript 2019",
            "jQuery para Desenvolvimento de Aplicações",
            "Tudo o que você queria saber sobre formatação de texto",
            "Hiperlinks - Conectando Páginas e Conteúdos",
            "Mídia Digital",
            "Exibindo Dados em Tabelas e iFrames",
            "Estilizando com CSS"
        ]
    },
    {
        id: "3pm9Ab",
        category: "desenvolvimento web",
        image: course_images.web_dev_2,
        course_name: "O Curso Completo de Desenvolvedor Web Fullstack 2020",
        description: "Aprenda HTML5, CSS3, JavaScript, Python, Wagtail CMS, PHP e MySQL do zero!",
        rating_count: 6200,
        rating_star: 4.3,
        students: 90360,
        creator: "Gustavo Guanabara",
        updated_date: "09/2019",
        lang: "portugues",
        actual_price: 72.99,
        discounted_price: 14.99,
        what_you_will_learn: [
            "Aprenda Python do básico ao avançado",
            "Muitos projetos, grandes e pequenos!",
            "Aprenda PHP para execução de código no servidor",
            "Construa um site de Login/Registro/Área exclusiva para membros, assim como o Facebook",
            "Aprenda a pilha LAMP: Linux, Apache, PHP e MySQL",
            "Aprenda HTML5, CSS3, Vanilla JS (ES6+), Python, Wagtail CMS, PHP e MySQL tudo do zero"
        ],
        content: [
            "O Desenvolvedor HTML Definitivo: Introdução",
            "Começando",
            "HTML Avançado",
            "Formatação de Texto",
            "Fontes e Estilização de Fontes",
            "Links e seus 'estados'",
            "Seletores melhores",
            "Posições",
            "Seletores Avançados",
            "Introdução ao CSS3",
            "Imagens de Fundo CSS3",
            "Gradientes CSS3",
            "Formatação de Texto CSS3",
            "Transições CSS3",
            "Animações CSS3",
            "Flexbox CSS3",
            "Design Responsivo"
        ]
    },
    {
        id: "RuUs0x",
        category: "desenvolvimento web",
        image: course_images.web_dev_3,
        course_name: "Introdução ao Desenvolvimento Web",
        description: "Você está interessado em aprender Desenvolvimento Web? Inscreva-se neste curso gratuito para uma introdução dinâmica à profissão!",
        rating_count: 1740,
        rating_star: 4,
        students: 22309,
        creator: "Tech Learning Network, Mark Lassoff",
        updated_date: "10/2020",
        lang: "inglês",
        actual_price: 19.99,
        discounted_price: 8.99,
        what_you_will_learn: [
            "Entender as tecnologias usadas no desenvolvimento web",
            "Aplicar a estrutura de documentos HTML",
            "Adicionar imagens a uma página web",
            "Compreender o modelo de cores HTML/CSS",
            "Alterar propriedades de texto CSS",
            "Conhecer o papel da programação Javascript no desenvolvimento web",
            "Criar um programa básico em Javascript para coletar dados",
            "Entender os próximos passos para aprender habilidades profissionais de desenvolvimento web"
        ],
        content: [
            "Ferramentas e HTML",
            "CSS",
            "Javascript",
            "Palestra Bônus"
        ]
    },
    {
        id: "e_0hBc",
        category: "desenvolvimento web",
        image: course_images.web_dev_6,
        course_name: "Como Administrar um Negócio de Desenvolvimento Web: O Guia Completo",
        description: "Aprenda como iniciar e fazer crescer um negócio de desenvolvimento web de sucesso. Comece a vender em menos de uma semana.",
        rating_count: 1577,
        rating_star: 4.8,
        students: 33100,
        creator: "Evan Kimbrell",
        updated_date: "8/2022",
        lang: "inglês",
        actual_price: 70.99,
        discounted_price: 14.99,
        what_you_will_learn: [
            "Entender como funcionam as pilhas de desenvolvimento e escolher qual pilha é ideal para você",
            "Decidir entre contratar funcionários internos ou freelancers para o seu negócio",
            "Escolher uma combinação vencedora de características que você deseja que seu negócio transmita",
            "Encontrar maneiras baratas e profissionais de criar uma presença online",
            "Dominar as maiores plataformas de contratação: Freelancer e Upwork",
            "Criar e organizar um portfólio profissional e eficaz",
            "Utilizar 15 estratégias diferentes para atrair clientes potenciais",
            "Usar ferramentas como Proposify e Nusii para criar e agilizar propostas"
        ],
        content: [
            "Introdução",
            "Os Essenciais",
            "Planejando sua estratégia",
            "Configurando sua presença",
            "Encontrando subcontratados",
            "Construindo um portfólio",
            "Conseguindo clientes",
            "Construindo propostas",
            "Gerenciando clientes",
            "Melhores práticas"
        ]
    },
    {
        id: "z9dxdw",
        category: "desenvolvimento web",
        image: course_images.web_dev_5,
        course_name: "Ultimate Web Designer & Web Developer Course",
        description: "Become a Full-Stack Web Designer in 2022 - Learn Everything from Web Design Fundamentals to Front-End Web Development",
        rating_count: 2941,
        rating_star: 4.6,
        students: 10450,
        creator: "Brad Hussey",
        updated_date: "3/2022",
        lang: "inglês",
        actual_price: 50.99,
        discounted_price: 11.99,
        what_you_will_learn: [
            "Build 23+ custom web design & development projects by hand",
            "Plan, design and code your very own self-directed website project from scratch to launch!",
            "Code websites & applications with HTML5 & CSS3",
            "Comfortably use Adobe Photoshop for photo manipulation, graphics creation & design",
            "Design a professional and modern business card in Adobe Photoshop",
            "Learn visual design fundamentals for beginners",
            "Learn how to choose the correct font combinations for your projects",
            "Design, build and manage custom database-driven websites with MySQL"
        ],
        content: [
            "Hey! Welcome to the course!",
            "Introduction to Visual Design for Web Designers & Web Developers",
            "Designing Websites, Graphics & Interfaces with Figma",
            "Introduction to Adobe Photoshop",
            "Introduction to Web Design (and more Photoshop)",
            "Advanced Web Design Challenge",
            "Introduction to HTML",
            "Intermediate HTML",
            "Advanced HTML & HTML5",
            "Expert HTML & HTML5"
        ]
    },
    {
        id: "F1nD3v",
        category: "desenvolvimento web",
        image: course_images.web_dev_7,
        course_name: "Formação Front-end - HTML, CSS, JavaScript, React e +",
        description: "Aprenda a construir interfaces incríveis com HTML, CSS, JavaScript e React. Torne-se um desenvolvedor front-end completo!",
        rating_count: 1200,
        rating_star: 4.7,
        students: 25000,
        creator: "Matheus Battisti",
        updated_date: "05/2023",
        lang: "português",
        actual_price: 99.99,
        discounted_price: 29.99,
        what_you_will_learn: [
            "Dominar HTML5 e CSS3 para criar layouts responsivos",
            "Programar interatividade com JavaScript",
            "Construir aplicações modernas com React",
            "Gerenciar estados e props em componentes React",
            "Integrar APIs e trabalhar com dados dinâmicos",
            "Melhores práticas de desenvolvimento front-end"
        ],
        content: [
            "Introdução ao Desenvolvimento Front-end",
            "HTML Básico e Avançado",
            "CSS e Design Responsivo",
            "JavaScript: Fundamentos e Avançado",
            "Introdução ao React",
            "Gerenciamento de Estado com Redux",
            "Construindo um Projeto Final"
        ]
    },
    {
        id: "F2nD3v",
        category: "desenvolvimento web",
        image: course_images.web_dev_8,
        course_name: "Desenvolvimento Front-end Completo: HTML, CSS, JavaScript e React",
        description: "Transforme-se em um desenvolvedor front-end completo com este curso abrangente que cobre tudo, desde HTML até React.",
        rating_count: 950,
        rating_star: 4.5,
        students: 18000,
        creator: "Matheus Battisti",
        updated_date: "06/2023",
        lang: "português",
        actual_price: 89.99,
        discounted_price: 19.99,
        what_you_will_learn: [
            "Criar páginas web responsivas e acessíveis",
            "Utilizar JavaScript para adicionar interatividade",
            "Construir aplicações SPA com React",
            "Trabalhar com bibliotecas e frameworks populares",
            "Implementar boas práticas de SEO e performance"
        ],
        content: [
            "Fundamentos do HTML e CSS",
            "JavaScript para Iniciantes",
            "Introdução ao React",
            "Componentes e Ciclo de Vida",
            "Gerenciamento de Estilos com CSS-in-JS",
            "Desenvolvendo um Projeto Completo"
        ]
    },
    {
        id: "F3nD3v",
        category: "desenvolvimento web",
        image: course_images.web_dev_9,
        course_name: "Curso Completo de Front-end: HTML, CSS, JavaScript e React",
        description: "Aprenda a criar sites e aplicações web modernas com HTML, CSS, JavaScript e React. Ideal para iniciantes e intermediários.",
        rating_count: 1100,
        rating_star: 4.6,
        students: 22000,
        creator: "Matheus Battisti",
        updated_date: "07/2023",
        lang: "português",
        actual_price: 79.99,
        discounted_price: 24.99,
        what_you_will_learn: [
            "Dominar a estruturação de páginas com HTML",
            "Estilizar páginas web com CSS",
            "Adicionar interatividade com JavaScript",
            "Criar aplicações dinâmicas com React",
            "Trabalhar com APIs e dados externos"
        ],
        content: [
            "Introdução ao Curso",
            "HTML: Estrutura e Semântica",
            "CSS: Estilização e Layout",
            "JavaScript: Interatividade e DOM",
            "React: Componentes e Hooks",
            "Projeto Final: Construindo uma Aplicação Completa"
        ]
    },
    {
        id: "X8Pg1X",
        category: "ciência dos dados",
        image: course_images.data_science_6,
        course_name: "Ciência de Dados A-Z™: Exercícios de Ciência de Dados da Vida Real Incluídos",
        description: "Aprenda Ciência de Dados passo a passo através de exemplos reais de Análise. Mineração de Dados, Modelagem, Visualização com Tableau e mais!",
        rating_count: 32103,
        rating_star: 4.5,
        students: 204985,
        creator: "Kirill Eremenko, Ligency Team",
        updated_date: "09/2022",
        lang: "inglês",
        actual_price: 77.99,
        discounted_price: 16.99,
        what_you_will_learn: [
            "Executar com sucesso todas as etapas em um projeto complexo de Ciência de Dados",
            "Realizar Mineração de Dados no Tableau",
            "Aplicar o método dos Mínimos Quadrados Ordinários para criar Regressões Lineares",
            "Avaliar o R-quadrado Ajustado para todos os tipos de modelos",
            "Criar uma Regressão Linear Múltipla (MLR)",
            "Interpretar coeficientes de uma MLR",
            "Usar os métodos de Eliminação Reversa, Seleção Direta e Eliminação Bidirecional para criar modelos estatísticos",
            "Ler uma Matriz de Confusão"
        ],
        content: [
            "O que é Ciência de Dados?",
            "Parte 1: Visualização",
            "Introdução ao Tableau",
            "Mineração de Dados Avançada com Tableau",
            "Revisão de Estatísticas",
            "Regressão Linear Simples",
            "Manutenção de Modelos",
            "Programação SQL para Ciência de Dados"
        ]
    },
    {
        id: "9Ui0L1",
        category: "ciência dos dados",
        image: course_images.data_science_2,
        course_name: "Aprendizado de Máquina, Ciência de Dados e Aprendizado Profundo com Python",
        description: "Tutorial completo prático de aprendizado de máquina com ciência de dados, TensorFlow, inteligência artificial e redes neurais.",
        rating_count: 27687,
        rating_star: 4.5,
        students: 166929,
        creator: "Sundog Education por Frank Kane",
        updated_date: "2/2022",
        lang: ["inglês", "francês"],
        actual_price: 87.99,
        discounted_price: 14.99,
        what_you_will_learn: [
            "Construir redes neurais artificiais com TensorFlow e Keras",
            "Classificar imagens, dados e sentimentos usando aprendizado profundo",
            "Visualização de Dados com MatPlotLib e Seaborn",
            "Classificar dados usando agrupamento K-Means, Máquinas de Vetores de Suporte (SVM), KNN, Árvores de Decisão, Naive Bayes e PCA",
            "Construir um sistema de recomendação de filmes usando filtragem colaborativa baseada em itens e usuários",
            "Interpretar coeficientes de uma Regressão Linear Múltipla (MLR)"
        ],
        content: [
            "Revisão de Estatísticas e Probabilidade, e Prática de Python",
            "Modelos Preditivos",
            "Aprendizado de Máquina com Python",
            "Sistemas de Recomendação",
            "Mais Técnicas de Mineração de Dados e Aprendizado de Máquina",
            "Lidando com Dados do Mundo Real",
            "Apache Spark: Aprendizado de Máquina em Big Data",
            "Aprendizado Profundo e Redes Neurais"
        ]
    },
    {
        id: "TKGumi",
        category: "ciência dos dados",
        image: course_images.data_science_3,
        course_name: "Ciência de Dados: Aprendizado Profundo e Redes Neurais em Python",
        description: "A análise mais profunda da teoria das redes neurais para aprendizado de máquina, com código em Python puro e TensorFlow.",
        rating_count: 8513,
        rating_star: 4.8,
        students: 50184,
        creator: "Lazy Programmer Inc.",
        updated_date: "8/2022",
        lang: ["inglês", "português"],
        actual_price: 90.99,
        discounted_price: 19.99,
        what_you_will_learn: [
            "Aprender como o Aprendizado Profundo REALMENTE funciona (não apenas alguns diagramas e código mágico de caixa preta)",
            "Codificar uma rede neural do zero em Python e numpy",
            "Descrever diferentes tipos de redes neurais e os diferentes tipos de problemas para os quais são usadas",
            "Criar uma rede neural com uma saída que tenha K > 2 classes usando softmax",
            "Instalar o TensorFlow"
        ],
        content: [
            "Preliminares: De Neurônios a Redes Neurais",
            "Treinando uma rede neural",
            "Aprendizado de Máquina Prático",
            "TensorFlow, exercícios, prática e o que aprender a seguir",
            "Projeto: Reconhecimento de Expressões Faciais",
            "Aulas Suplementares sobre Retropropagação",
            "Discussão em Nível Superior"
        ]
    },
    {
        id: "oETsMx",
        category: "ciência dos dados",
        image: course_images.data_science_4,
        course_name: "Programação em R A-Z™: R para Ciência de Dados com Exercícios Reais!",
        description: "Aprenda a programar em R e R Studio. Análise de Dados, Ciência de Dados, Análise Estatística, Pacotes, Funções, GGPlot2.",
        rating_count: 47264,
        rating_star: 4.8,
        students: 237914,
        creator: "Kirill Eremenko, Ligency Team",
        updated_date: "11/2021",
        lang: "inglês",
        actual_price: 45.99,
        discounted_price: 6.99,
        what_you_will_learn: [
            "Aprender a programar em R em um bom nível",
            "Aprender os princípios fundamentais da programação",
            "Aprender a criar variáveis",
            "Aprender a criar um loop while() e um loop for() em R",
            "Aprender a função matrix(), aprender rbind() e cbind()",
            "Aprender a personalizar o R Studio de acordo com suas preferências"
        ],
        content: [
            "Começando com o Pé Direito",
            "Princípios Fundamentais da Programação",
            "Fundamentos do R",
            "Matrizes",
            "Data Frames",
            "Visualização Avançada com GGPlot2",
            "Soluções para os Deveres de Casa"
        ]
    },
    {
        id: "-aWjaj",
        category: "ciência dos dados",
        image: course_images.data_science_5,
        course_name: "Bootcamp de Ciência de Dados e Aprendizado de Máquina com R",
        description: "Aprenda a usar a linguagem de programação R para ciência de dados, aprendizado de máquina e visualização de dados!",
        rating_count: 32103,
        rating_star: 5,
        students: 204985,
        creator: "Jose Portilla",
        updated_date: "12/2020",
        lang: ["inglês", "árabe"],
        actual_price: 77.99,
        discounted_price: 16.99,
        what_you_will_learn: [
            "Programar em R",
            "Criar Visualizações de Dados",
            "Usar R para manipular dados facilmente",
            "Usar R para Ciência de Dados",
            "Usar R para Análise de Dados",
            "Usar R para lidar com arquivos csv, excel, SQL ou web scraping",
            "Usar R para Algoritmos de Aprendizado de Máquina"
        ],
        content: [
            "Melhores Práticas do Curso",
            "Configuração de Instalação no Windows",
            "Configuração de Instalação no Mac OS",
            "Instalação no Linux",
            "Visão Geral do Ambiente de Desenvolvimento",
            "Introdução aos Fundamentos do R",
            "Data Frames em R"
        ]
    },
    {
        id: "12vgDc",
        category: "ciência dos dados",
        image: course_images.data_science_7,
        course_name: "Mergulhe nos Dados: Análise Exploratória com Python",
        description: "Descubra insights valiosos em seus dados através da análise exploratória. Utilize técnicas e ferramentas do Python para visualizar, transformar e entender seus dados.",
        rating_count: 10759,
        rating_star: 4.8,
        students: 16000,
        creator: "Ana Carolina Silva, Data Scientist",
        updated_date: "11/2023",
        lang: "portuguese",
        actual_price: 119.99,
        discounted_price: 69.99,
        what_you_will_learn: [
            "Carregar e limpar dados com Pandas",
            "Visualização de dados com Matplotlib e Seaborn",
            "Estatística descritiva e inferencial",
            "Análise de correlação e agrupamento"
        ],
        content: [
            "Introdução à Análise Exploratória de Dados",
            "Pandas: Manipulação de DataFrames",
            "Visualização de dados: Explorando gráficos",
            "Estatística descritiva",
            "Análise de correlação",
            "Agrupamento de dados"
        ]
    },
    {
        id: "xxxbMD",
        category: "aws",
        image: course_images.aws_1,
        course_name: "Amazon Web Services (AWS) Certificado 2022 - 4 Certificações!",
        description: "Vídeos, laboratórios e exames práticos - AWS Certificado (Arquiteto de Soluções, Desenvolvedor, Administrador SysOps, Praticante de Nuvem)",
        rating_count: 21046,
        rating_star: 4.2,
        students: 134932,
        creator: "BackSpace Academy, Paul Coady",
        updated_date: "12/2021",
        lang: ["inglês", "árabe"],
        actual_price: 69.99,
        discounted_price: 11.99,
        what_you_will_learn: [
            "Você estará totalmente preparado para o",
            "AWS Certified Solutions Architect",
            "Associate, AWS Certified Developer",
            "Associate e AWS Certified SysOps ..."
        ],
        content: [
            "AWS Certified Cloud Practitioner",
            "Conhecimento Básico do AWS Certified Associate",
            "Preparação Final para AWS Certified Developer Associate",
            "Preparação Final para AWS Certified Solutions Architect Associate",
            "Preparação Final para AWS Certified SysOps Administrator Associate"
        ]
    },
    {
        id: "cIdBd2",
        category: "aws",
        image: course_images.aws_2,
        course_name: "AWS Certified Security Specialty 2022",
        description: "Tudo o que você precisa para dominar a certificação AWS Certified Security Specialty.",
        rating_count: 5387,
        rating_star: 4.5,
        students: 33385,
        creator: "Zeal Vora",
        updated_date: "12/2022",
        lang: ["inglês", "francês"],
        actual_price: 34.99,
        discounted_price: 10.99,
        what_you_will_learn: [
            "Estará preparado para fazer o exame AWS Certified Security Specialty",
            "Obterá insights profundos sobre a implementação de segurança de nível empresarial.",
            "Você será capaz de dominar o aspecto de segurança da AWS",
            "Será capaz de detectar ataques e proteger a infraestrutura da AWS contra hackers."
        ],
        content: [
            "Introdução ao curso",
            "Domínio 1 - Resposta a Incidentes",
            "Domínio 2 - Registro e Monitoramento",
            "Domínio 3 - Segurança da Infraestrutura",
            "Domínio 4 - Gerenciamento de Identidade e Acesso",
            "Domínio 5 - Proteção de Dados"
        ]
    },
    {
        id: "NkZeqm",
        category: "aws",
        image: course_images.aws_3,
        course_name: "Parte 1: AWS Certified Solutions Architect SAA C03 [Atualizado]",
        description: "Exame Associado da AWS - Domine os Fundamentos. Participe do Grupo de Estudo ao Vivo com Perguntas e Respostas!",
        rating_count: 1603,
        rating_star: 4.5,
        students: 10933,
        creator: "Chandra Lingam",
        updated_date: "8/2022",
        lang: "inglês",
        actual_price: 71.99,
        discounted_price: 15.99,
        what_you_will_learn: [
            "Amplitude de compreensão de vários serviços da AWS",
            "Como integrar serviços em uma solução completa",
            "Aprendizado prático baseado em cenários",
            "Sessões semanais de discussão em grupo de estudo",
            "Preparação concisa e precisa para a certificação AWS Solutions Architect"
        ],
        content: [
            "Organização",
            "Infraestrutura, Preços, Suporte - Revisão",
            "Introdução à Rede",
            "Nuvem Privada Virtual (VPC) - Infraestrutura de Rede",
            "Elastic Compute Cloud (EC2) - Serviço de Computação",
            "Monitoramento de Recursos na Nuvem"
        ]
    },
    {
        id: "NkZeqq",
        category: "design",
        image: course_images.design_2,
        course_name: "Curso Master de Photoshop: Do Iniciante ao Profissional em Photoshop",
        description: "Este curso de Photoshop para iniciantes ensinará a um usuário iniciante de Photoshop todos os essenciais do Adobe Photoshop CC.",
        rating_count: 5066,
        rating_star: 4.9,
        students: 143812,
        creator: "Manfred Werner",
        updated_date: "7/2020",
        lang: ["inglês", "espanhol"],
        actual_price: 13.99,
        discounted_price: 5.99,
        what_you_will_learn: [
            "O que é Photoshop e como começar a usá-lo!",
            "Personalizar o layout do programa e se sentir confortável",
            "Entender camadas e seus painéis",
            "Entender camadas de ajuste e como usá-las",
            "Entender como definir perfis de cores, salvar arquivos PSD e arquivos para web",
            "Entender como recortar objetos, corrigir pele e manipulação"
        ],
        content: [
            "Interface e Espaço de Trabalho do Photoshop - Para Iniciantes",
            "Ferramentas Importantes do Photoshop - Para Iniciantes",
            "Aula de Retoque - Curso de Retoque de Retratos em Photoshop",
            "Aula de Retoque 2 - Curso de Retoque de Retratos em Photoshop",
            "Aula de Retoque 3 - O Instagramer",
            "Aulas Bônus"
        ]
    },
    {
        id: "bLZepe",
        category: "design",
        image: course_images.design_1,
        course_name: "Experiência do Usuário (UX): O Guia Definitivo para Usabilidade e UX",
        description: "Conquiste um emprego em UX e desenvolva suas habilidades de pesquisa de usuários e design de UX com este curso prático de experiência do usuário.",
        rating_count: 6250,
        rating_star: 4.4,
        students: 22090,
        creator: "David Travis",
        updated_date: "4/2020",
        lang: ["inglês", "italiano"],
        actual_price: 79.99,
        discounted_price: 16.99,
        what_you_will_learn: [
            "Incorporar UX ao seu fluxo de trabalho seguindo uma estrutura de design centrada no usuário comprovada.",
            "Moderar um teste de usabilidade e priorizar as observações.",
            "Descobrir e descrever os modelos mentais dos usuários.",
            "Projetar e conduzir sessões de classificação de cartões online e offline.",
            "Desenvolver protótipos baratos e descartáveis para obter feedback rápido e frequente dos seus usuários."
        ],
        content: [
            "Indo onde a ação está: Entendendo os usuários em contexto",
            "Como se especializar rapidamente",
            "Atividades de Design UX - Construa seu Portfólio de UX",
            "O que um ônibus de Londres pode nos ensinar sobre usabilidade?",
            "Além de 'fácil de usar': Medindo a experiência do usuário",
            "Estrutura do site e navegação: Encontrar é o novo fazer",
            "Design de interação: Regras simples para projetar telas simples"
        ]
    },
    {
        id: "RkZecd",
        category: "marketing",
        image: course_images.marketing_1,
        course_name: "Copywriting - Torne-se um Copywriter Freelancer, seu próprio chefe",
        description: "Construa um negócio de copywriting freelance de sucesso - transforme habilidades básicas de escrita em um salário.",
        rating_count: 2779,
        rating_star: 4.8,
        students: 32657,
        creator: "Len Smith, Sean Kaye",
        updated_date: "4/2018",
        lang: "inglês",
        actual_price: 88.99,
        discounted_price: 16.99,
        what_you_will_learn: [
            "Parte um – tudo o que você precisa para um início rápido, incluindo seu primeiro artigo",
            "Parte três – as habilidades essenciais que distinguem um verdadeiro profissional",
            "Parte dois – o 'como fazer' do copywriter: copy de vendas, copy de especialista e mais!",
            "Parte quatro – como aumentar sua renda e transformar seu novo site em um ímã de dinheiro"
        ],
        content: [
            "Escolha projetos onde você se sinta confortável",
            "De volta ao básico II",
            "Como aumentar sua renda com copywriting",
            "Mais sobre como precificar seu trabalho",
            "Isso e aquilo",
            "Conclusão"
        ]
    },
    {
        id: "NrZ_qd",
        category: "marketing",
        image: course_images.marketing_2,
        course_name: "Como se Vender como Coach ou Consultor",
        description: "Aprenda um Processo Comprovado, Passo a Passo, que Você Pode Usar para Embalar, Marcar, Comercializar e Vender Seus Serviços de Coaching ou Consultoria",
        rating_count: 963,
        rating_star: 3.8,
        students: 11848,
        creator: "Debbie LaChusa",
        updated_date: "4/2022",
        lang: "inglês",
        actual_price: 40.99,
        discounted_price: 10.99,
        what_you_will_learn: [
            "Identificar quem são seus Clientes Ideais para saber exatamente quem comercializar e vender",
            "Aprender a criar um Programa Assinatura para que você possa parar de vender seu tempo ou criar propostas especulativas",
            "Aprender a escrever Copy de Marketing Atraente que você pode usar para atrair seus clientes ideais",
            "Aprender a criar um Negócio Financeiramente Viável e entender exatamente o que será necessário para alcançar suas metas financeiras",
            "Aprender a criar facilmente seu próprio Site de Coaching ou Consultoria em Wordpress"
        ],
        content: [
            "Construindo sua Fundação de Negócios e Marketing",
            "Embalando seus Serviços",
            "Construindo sua Marca e seu Negócio",
            "Desenvolvimento da Mensagem de Marketing",
            "Conseguindo clientes: Objetivos e estratégias",
            "Marketing Pessoal Online: Desenvolvimento de Site",
            "Implementação de Marketing: Crie um Plano de Marketing de 90 Dias"
        ]
    },
];

export const home_slider = [
    {
        img: other_images.home_image1,
        title: 'Prepare-se para a sua certificação de TI',
        description: 'Explore um futuro em TI. Comece a estudar para tirar a certificação AWS, CompTIA A+ e muito mais.',
    },
    {
        img: other_images.home_image2,
        title: 'Devagar e sempre',
        description: 'Tente estudar por 5 a 10 minutos por dia. Continue seu curso e alcance todo o seu potencial.',
    },
    {
        img: other_images.home_image3,
        title: 'Economize muito e aprenda muito',
        description: 'Compre nossa grande promoção de cursos a partir de R$24,90.',
    },
    {
        img: other_images.home_image4,
        title: 'Aprenda, pratique, prospere (e economize)',
        description: 'Cursos para cada etapa da sua jornada de aprendizado, a partir de R$24,90 cada. A promoção termina em 19 de dezembro.',
    },
];

export const footer_data = [
    {
        id: "sobre",
        title: "Sobre",
        items: [
          { text: "Quem somos" },
          { text: "Carreiras" },
          { text: "Fale Conosco" },
          { text: "Blog"},
          { text: "Investidores" },
        ],
    },
    {
        id: "conheca_udemy",
        title: "Conheça a Udemy",
        items: [
          { text: "Obtenha o Aplicativo" },
          { text: "Ensine na Udemy" },
          { text: "Planos e Preços" },
          { text: "Afiliado"},
          { text: "Ajuda e suporte" },
        ],
    },
    {
        id: "business",
        title: "Udemy for Business",
        items: [
          { text: "Udemy Business" },
        ],
    },
    {
        id: "juridico",
        title: "Jurídico e acessibilidade",
        items: [
          { text: "Declaração de acessibilidade" },
          { text: "Poítica de privacidade" },
          { text: "Mapa do site" },
          { text: "Termos"},
        ],
    }
]

export default courses;