let dados = [
        {
            titulo: "Quem criou o HTML?",
            descricao: "Tim Berners-Lee criou o HTML e a World Wide Web, a rede que utilizamos para acessar informações.",
            link: "https://pt.wikipedia.org/wiki/Tim_Berners-Lee"
        },
        {
            titulo: "Quem criou o Gemini?",
            descricao: "O Gemini é um modelo de linguagem desenvolvido pelo Google AI para geração de texto e tradução de idiomas.",
            link: "https://gemini.google.com/app"
        },
        {
            titulo: "Quem fundou a Alura?",
            descricao: "Paulo Silveira fundou a Alura, uma plataforma que democratiza o acesso ao aprendizado de tecnologia online.",
            link: "https://www.alura.com.br/"
        },
        {
            titulo: "O que é JavaScript?",
            descricao: "JavaScript é uma linguagem de programação que permite criar interatividade e dinamismo em páginas web.",
            link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
        },
        {
            titulo: "O que é Python?",
            descricao: "Python é uma linguagem versátil e simples, utilizada em áreas como desenvolvimento web e ciência de dados.",
            link: "https://www.python.org/"
        },
        {
            titulo: "Quem criou o Linux?",
            descricao: "Linux, criado por Linus Torvalds, é um sistema operacional de código aberto usado em servidores e desktops.",
            link: "https://pt.wikipedia.org/wiki/Linux"
        },
        {
            titulo: "O que é GitHub?",
            descricao: "GitHub é uma plataforma que permite colaborar em projetos de código usando o controle de versão Git.",
            link: "https://github.com/"
        },
        {
            titulo: "O que é Machine Learning?",
            descricao: "Machine Learning é uma área da IA que permite que computadores aprendam com dados e façam previsões automáticas.",
            link: "https://pt.wikipedia.org/wiki/Aprendizado_de_m%C3%A1quina"
        },
        {
            titulo: "Quem fundou a Microsoft?",
            descricao: "Bill Gates e Paul Allen fundaram a Microsoft, uma gigante de tecnologia mundial, em 1975.",
            link: "https://pt.wikipedia.org/wiki/Microsoft"
        },
        {
            titulo: "O que é Docker?",
            descricao: "Docker é uma ferramenta que permite empacotar, distribuir e executar aplicativos em containers de forma eficiente.",
            link: "https://www.docker.com/"
        },
        {
            titulo: "Quem criou o Java?",
            descricao: "Java foi criado por James Gosling na Sun Microsystems em 1995 e é amplamente usado no desenvolvimento de apps.",
            link: "https://pt.wikipedia.org/wiki/Java_(linguagem_de_programa%C3%A7%C3%A3o)"
        },
        {
            titulo: "O que é React?",
            descricao: "React é uma biblioteca JavaScript desenvolvida pelo Facebook para construir interfaces de usuário interativas.",
            link: "https://reactjs.org/"
        },
        {
            titulo: "O que é API?",
            descricao: "API é um conjunto de ferramentas que permite que diferentes aplicativos interajam e compartilhem funcionalidades.",
            link: "https://pt.wikipedia.org/wiki/API"
        },
        {
            titulo: "Quem fundou a Google?",
            descricao: "Larry Page e Sergey Brin fundaram a Google, agora uma das maiores empresas de tecnologia do mundo, em 1998.",
            link: "https://pt.wikipedia.org/wiki/Google"
        },
        {
            titulo: "O que é Cloud Computing?",
            descricao: "Cloud Computing é a oferta de serviços de computação como armazenamento e processamento através da internet.",
            link: "https://azure.microsoft.com/pt-br/overview/what-is-cloud-computing/"
        },
        {
            titulo: "O que é IoT?",
            descricao: "IoT (Internet das Coisas) conecta dispositivos físicos à internet para coletar e trocar dados automaticamente.",
            link: "https://pt.wikipedia.org/wiki/Internet_das_coisas"
        },
        {
            titulo: "Quem criou o C++?",
            descricao: "C++ foi criado por Bjarne Stroustrup como uma extensão da linguagem C, amplamente usado em sistemas e jogos.",
            link: "https://pt.wikipedia.org/wiki/C%2B%2B"
        },
        {
            titulo: "O que é Kubernetes?",
            descricao: "Kubernetes é uma plataforma de código aberto para gerenciar containers, otimizando a distribuição de aplicativos.",
            link: "https://kubernetes.io/"
        },
        {
            titulo: "O que é uma VPN?",
            descricao: "VPN cria uma conexão segura entre o usuário e a internet, protegendo dados sensíveis e garantindo privacidade.",
            link: "https://pt.wikipedia.org/wiki/Rede_privada_virtual"
        },
        {
            titulo: "Quem fundou a Apple?",
            descricao: "A Apple foi fundada por Steve Jobs, Steve Wozniak e Ronald Wayne em 1976, e é líder em inovação tecnológica.",
            link: "https://pt.wikipedia.org/wiki/Apple"
        },
        {
            titulo: "O que é Blockchain?",
            descricao: "Blockchain é uma tecnologia de registro distribuído que oferece segurança e transparência em transações digitais.",
            link: "https://pt.wikipedia.org/wiki/Blockchain"
        },
        {
            titulo: "Quem fundou o Facebook?",
            descricao: "Mark Zuckerberg fundou o Facebook em 2004, e a plataforma rapidamente se tornou a maior rede social do mundo.",
            link: "https://pt.wikipedia.org/wiki/Meta_Platforms"
        },
        {
            titulo: "O que é SQL?",
            descricao: "SQL é uma linguagem de programação usada para gerenciar e consultar bancos de dados relacionais.",
            link: "https://pt.wikipedia.org/wiki/SQL"
        },
        {
            titulo: "O que é Big Data?",
            descricao: "Big Data é o termo usado para descrever o grande volume de dados que requer processamento e análise complexos.",
            link: "https://pt.wikipedia.org/wiki/Big_data"
        },
        {
            titulo: "O que é DevOps?",
            descricao: "DevOps combina desenvolvimento e operações para acelerar a entrega de software de alta qualidade de forma contínua.",
            link: "https://pt.wikipedia.org/wiki/DevOps"
        },
        {
            titulo: "Quem criou o WhatsApp?",
            descricao: "O WhatsApp foi criado por Jan Koum e Brian Acton em 2009, e tornou-se um dos principais apps de mensagens.",
            link: "https://pt.wikipedia.org/wiki/WhatsApp"
        },
        {
            titulo: "O que é um Firewall?",
            descricao: "Um firewall protege redes e sistemas contra acessos não autorizados, criando uma barreira de segurança digital.",
            link: "https://pt.wikipedia.org/wiki/Firewall_(inform%C3%A1tica)"
        },
        {
            titulo: "Quem criou o Twitter?",
            descricao: "Twitter foi fundado em 2006 por Jack Dorsey, Noah Glass, Biz Stone e Evan Williams como uma plataforma de microblogs.",
            link: "https://pt.wikipedia.org/wiki/Twitter"
        },
        {
            titulo: "O que é um Servidor Web?",
            descricao: "Um servidor web é um software que processa e entrega páginas web aos navegadores dos usuários pela internet.",
            link: "https://pt.wikipedia.org/wiki/Servidor_web"
        },
        {
            titulo: "O que é 5G?",
            descricao: "5G é a quinta geração de redes móveis, oferecendo alta velocidade e conectividade para dispositivos sem fio.",
            link: "https://pt.wikipedia.org/wiki/5G"
        },
        {
            titulo: "Quem fundou a Intel?",
            descricao: "A Intel foi fundada por Gordon Moore e Robert Noyce em 1968, e é uma das maiores fabricantes de chips do mundo.",
            link: "https://pt.wikipedia.org/wiki/Intel"
        }
    ];
    
