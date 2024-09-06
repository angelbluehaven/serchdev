let dados = [
    {
        titulo: "Introdução ao HTML",
        descricao: "Aprenda HTML, a linguagem básica de marcação usada para criar e estruturar conteúdo na web. Este curso cobre desde o básico até conceitos mais avançados para você começar a desenvolver páginas web.",
        link: "https://www.cursoemvideo.com/course/curso-html5/",
        tags: "HTML, Marcação, Desenvolvimento Web, Front-end, HTML5, Estruturação de Páginas, Semântica, Elementos HTML, Atributos HTML, Layout, Design Responsivo, Web Design, Desenvolvimento de Sites, Padrões Web, HTML Básico, HTML Avançado, Tecnologias Web, Web Development, Coding, Linguagem de Marcação, HTML5, HTML básico, HTML5 Curso, Desenvolver Web, Curso HTML"
    },
    {
        titulo: "Introdução ao Machine Learning com Gemini",
        descricao: "Explore o mundo do Machine Learning com o modelo de linguagem Gemini, desenvolvido pelo Google AI. Aprenda sobre técnicas e aplicações práticas de machine learning utilizando este avançado modelo.",
        link: "https://ai.google/education/",
        tags: "Machine Learning, Gemini, Google AI, Inteligência Artificial, Aprendizado de Máquina, Modelos de Linguagem, Algoritmos, Data Science, IA, Análise de Dados, Redes Neurais, Deep Learning, Treinamento de Modelos, Processamento de Linguagem Natural, Aplicações de Machine Learning, Google Cloud, Ferramentas de AI, Pesquisa em AI, Inovação, Tecnologias Emergentes, Machine Learing, Gemini AI, Google AI, Aprendizado Máquina, Dados Science"
    },
    {
        titulo: "Fundamentos da Programação com Alura para Iniciantes",
        descricao: "Conheça os conceitos básicos da programação e aprenda como começar a desenvolver suas habilidades. O curso abrange a lógica de programação e introduz as principais linguagens e ferramentas.",
        link: "https://www.alura.com.br/artigos/cursos-gratuitos-alura-start",
        tags: "Programação, Lógica de Programação, Iniciantes, Desenvolvimento, Alura, Fundamentos de Programação, Linguagens de Programação, Ferramentas de Desenvolvimento, Conceitos Básicos, Algoritmos, Estruturas de Dados, Código, Desenvolvimento de Software, Programação para Iniciantes, Curso Online, Educação em Programação, Tutoriais, Tecnologia, Desenvolvimento de Habilidades, Codificação, Fundamentos Programação, Alura Cursos, Lógica Programação"
    },
    {
        titulo: "Diferença entre JavaScript e TypeScript",
        descricao: "Aprenda as diferenças entre JavaScript e TypeScript, duas linguagens populares para desenvolvimento web. Entenda quando usar cada uma e como elas podem melhorar seu fluxo de trabalho e código.",
        link: "https://www.udemy.com/course/typescript-tutorial-and-javascript/",
        tags: "JavaScript, TypeScript, Desenvolvimento Web, Linguagens de Programação, JavaScript vs TypeScript, Tipagem Estática, Tipagem Dinâmica, Frameworks, Desenvolvimento Front-end, Tipos de Dados, Código Limpo, Manutenção de Código, Ferramentas de Desenvolvimento, Compilação, Transpiladores, Type Safety, Programação Orientada a Objetos, Linguagens de Script, Desenvolvimento de Aplicações, JavaScript x TypeScript, TypeScript vs JavaScript, Tipagem em TypeScript"
    },
    {
        titulo: "POO e seus conceitos",
        descricao: "Entenda os conceitos de Programação Orientada a Objetos (POO) e sua aplicação prática. Descubra como a POO pode ajudar na organização e estruturação de seu código para projetos mais robustos.",
        link: "https://www.devmedia.com.br/orientacao-a-objetos/29903",
        tags: "Programação Orientada a Objetos, POO, Conceitos de POO, Design de Software, Encapsulamento, Herança, Polimorfismo, Abstração, Classes, Objetos, Métodos, Atributos, Organização de Código, Estrutura de Código, Programação Modular, Projetos de Software, Arquitetura de Software, Código Reutilizável, Desenvolvimento de Software, Programação, Conceitos POO, POO Aplicações, Objetos e Classes"
    },
    {
        titulo: "Programação Procedural vs Funcional",
        descricao: "Descubra as diferenças entre programação procedural e funcional. Aprenda como cada abordagem afeta o design do seu software e qual delas é mais adequada para diferentes tipos de projetos.",
        link: "https://www.freecodecamp.org/news/procedural-vs-functional-programming/",
        tags: "Programação Procedural, Programação Funcional, Paradigmas de Programação, Design de Software, Procedural vs Funcional, Funcionalidade, Imutabilidade, Funções de Ordem Superior, Estruturas de Controle, Conceitos de Programação, Abordagens de Desenvolvimento, Fluxo de Trabalho, Código Funcional, Modularidade, Programação Declarativa, Algoritmos, Manipulação de Dados, Projeto de Sistemas, Desenvolvimento de Software, Estilos de Programação, Procedural Funcional, Programação Funcional vs Procedural"
    },
    {
        titulo: "O que é um Algoritmo?",
        descricao: "Aprenda o que é um algoritmo e como ele é fundamental para o desenvolvimento de software. Entenda como criar e otimizar algoritmos para resolver problemas e realizar tarefas específicas.",
        link: "https://www.devmedia.com.br/algoritmos/29899",
        tags: "Algoritmo, Desenvolvimento de Software, Lógica de Programação, Otimização, Algoritmos de Ordenação, Pesquisa, Estruturas de Dados, Complexidade, Eficiência, Problemas Computacionais, Solução de Problemas, Design de Algoritmos, Estruturas Algorítmicas, Programação, Processamento de Dados, Eficiência de Algoritmos, Teoria dos Algoritmos, Programação Competitiva, Técnicas de Algoritmos, Codificação, Algorítmo, Algoritimos, Ordenação Algoritmo"
    },
    {
        titulo: "Compilador vs Interpretador",
        descricao: "Entenda a diferença entre compiladores e interpretadores, e como cada um deles traduz o código para ser executado. Descubra as vantagens e desvantagens de cada abordagem na execução de programas.",
        link: "https://www.devmedia.com.br/compiladores-e-interpretadores/16767",
        tags: "Compilador, Interpretador, Linguagens de Programação, Tradução de Código, Execução de Código, Compilação, Interpretação, Vantagens e Desvantagens, Processamento de Linguagem, Sistemas de Desenvolvimento, Ambiente de Execução, Performance, Ferramentas de Desenvolvimento, Otimização, Tempo de Execução, Estratégias de Compilação, Código Fonte, Análise Léxica, Análise Sintática, Engenharia de Software, Compiladores vs Interpretadores, Interpretadores vs Compiladores"
    },
    {
        titulo: "O que é um Bug?",
        descricao: "Saiba o que são bugs em softwares e como identificá-los e corrigi-los. Este curso oferece técnicas e ferramentas para depuração eficaz e para a manutenção da qualidade do software.",
        link: "https://www.devmedia.com.br/debug/16774",
        tags: "Bugs, Depuração, Qualidade de Software, Correção de Erros, Debugging, Ferramentas de Debug, Testes de Software, Manutenção, Diagnóstico de Erros, Análise de Erros, Técnicas de Depuração, Teste de Aplicações, Ferramentas de Desenvolvimento, Erros de Código, Identificação de Problemas, Solução de Problemas, Análise de Código, Testes Unitários, Melhoria de Software, Processos de Desenvolvimento, Bugs de Software, Erro de Programação"
    },
    {
        titulo: "Para que serve o React?",
        descricao: "Aprenda a usar React, uma biblioteca JavaScript desenvolvida para construção de interfaces de usuário. Descubra como React facilita a criação de aplicações interativas e escaláveis.",
        link: "https://pt-br.reactjs.org/",
        tags: "React, Biblioteca JavaScript, Desenvolvimento Front-end, Interfaces de Usuário, Componentes, React Hooks, Aplicações Interativas, SPA, React Native, Estado de Componentes, Renderização, Virtual DOM, Desenvolvimento Web, Frameworks, UI/UX, Performance, Ferramentas de Front-end, Desenvolvimento de Aplicações, Bibliotecas de JavaScript, Componentização, React Hooks, React Native, UI com React"
    },
    {
        titulo: "O que é Node.js?",
        descricao: "Descubra como usar Node.js, um ambiente de execução para JavaScript no lado do servidor. Aprenda a construir aplicações de back-end e aproveite o ecossistema rico de módulos do Node.js.",
        link: "https://nodejs.org/pt-br/",
        tags: "Node.js, JavaScript, Back-end, Ambiente de Execução, Servidor, Desenvolvimento de Back-end, Node Package Manager, Módulos, APIs, Aplicações de Servidor, Express.js, Arquitetura de Software, Desenvolvimento de Sistemas, Programação Assíncrona, Eventos, Web Server, Performance, Escalabilidade, Ecossistema Node.js, Programação em JavaScript, Desenvolvimento Web, Desenvolvimento de APIs, Servidores Web, Node.js para Iniciantes, Node.js Básico, Aplicações Node.js"
    },
    {
        titulo: "Introdução ao Git e GitHub",
        descricao: "Aprenda a usar Git e GitHub para controle de versão e colaboração em projetos de software. Descubra como versionar seu código, colaborar com outros desenvolvedores e gerenciar projetos de forma eficiente.",
        link: "https://www.coursera.org/learn/git-github",
        tags: "Git, GitHub, Controle de Versão, Desenvolvimento de Software, Versionamento, Controle de Código, Colaboração em Projetos, Repositórios, Branches, Commits, Merge, Pull Requests, Desenvolvimento Colaborativo, Ferramentas de Desenvolvimento, Gerenciamento de Código, Repositórios Git, Histórico de Código, Git para Iniciantes, GitHub para Iniciantes, Git e GitHub, Controle de Versionamento"
    },
    {
        titulo: "O que é REST API?",
        descricao: "Entenda o conceito de REST API e como ele é utilizado para criar interfaces de comunicação entre sistemas. Aprenda os princípios do REST e como implementar APIs RESTful.",
        link: "https://restfulapi.net/",
        tags: "REST API, APIs, Desenvolvimento Web, Interface de Comunicação, RESTful, Princípios do REST, APIs Web, Endpoints, Requisições HTTP, JSON, XML, Web Services, Arquitetura REST, Implementação de APIs, Desenvolvimento de APIs, Comunicação entre Sistemas, API Design, Regras REST, Construção de APIs, Integração de Sistemas, REST API para Iniciantes, APIs RESTful"
    },
    {
        titulo: "O que é um Framework?",
        descricao: "Saiba o que são frameworks e como eles facilitam o desenvolvimento de software. Explore diferentes tipos de frameworks e como escolher o mais adequado para seus projetos.",
        link: "https://www.geeksforgeeks.org/what-is-a-framework/",
        tags: "Framework, Desenvolvimento de Software, Estruturas de Desenvolvimento, Frameworks de Programação, Ferramentas de Desenvolvimento, Arquitetura de Software, Bibliotecas, Frameworks Web, Frameworks de Front-end, Frameworks de Back-end, Desenvolvimento de Aplicações, Integração de Sistemas, Eficiência no Desenvolvimento, Frameworks Populares, Escolha de Framework, Desenvolvimento Ágil, Frameworks para Iniciantes, Conceitos de Framework, Frameworks e Ferramentas"
    },
    {
        titulo: "O que é a Programação Orientada a Objetos (POO)?",
        descricao: "Explore os princípios da Programação Orientada a Objetos (POO) e como aplicá-los para criar softwares mais organizados e reutilizáveis. Entenda conceitos-chave como classes, objetos, herança e polimorfismo.",
        link: "https://www.tutorialspoint.com/object_oriented_analysis_design/index.htm",
        tags: "Programação Orientada a Objetos, POO, Classes, Objetos, Herança, Polimorfismo, Encapsulamento, Abstração, Design de Software, Estruturas de Dados, Modelagem de Software, Desenvolvimento de Software, Arquitetura Orientada a Objetos, Princípios de POO, Aplicações de POO, Código Reutilizável, Programação Modular, Práticas de Desenvolvimento, POO Conceitos, Orientação a Objetos"
    }
];
