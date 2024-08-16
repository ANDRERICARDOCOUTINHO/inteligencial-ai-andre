const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Depois de terminar a escola, você se depara com uma nova tecnologia: um chat que responde a todas as suas dúvidas e cria imagens e áudios hiper-realistas. Qual é a sua primeira reação ao perceber o impacto potencial dessa inovação?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer, porque ela pode gerar vícios em tecnologias e pode afetar o bem-estar mental e ameaçar empregos criando insegurança no mercado de trabalho. ",
            },
            {
                texto: "Isso facilita a comunicação global e por isso pode otimizar processos e aumentar a produtividade..",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Após descobrir a nova tecnologia de Inteligência Artificial, uma professora de tecnologia decide dedicar uma série de aulas sobre o tema. No final de uma dessas aulas, ela solicita que você elabore um trabalho sobre como a IA pode ser utilizada no ambiente escolar. Como você abordaria essa tarefa.",
        alternativas: [
            {
                texto: "Para abordar o trabalho sobre o uso da IA em sala de aula, eu começaria explorando as diversas maneiras pelas quais a Inteligência Artificial pode enriquecer a experiência educacional. Destacaria como ferramentas de IA podem personalizar o aprendizado para atender às necessidades individuais dos alunos, oferecendo recursos adaptativos e suporte em tempo real. Descreveria também como chatbots e assistentes virtuais podem fornecer ajuda imediata e responder a perguntas frequentes, permitindo que os professores se concentrem em atividades mais interativas e criativas. Além disso, abordaria como a IA pode facilitar a análise de dados educacionais para identificar áreas de melhoria e criar estratégias mais eficazes para o ensino. Concluiria o trabalho com exemplos práticos e estudos de caso que demonstrem os benefícios reais da IA na educação.",
                afirmacao: "Para abordar o trabalho sobre o uso da IA em sala de aula, eu começaria discutindo as possíveis desvantagens e desafios associados à tecnologia. Destacaria preocupações sobre a dependência excessiva de ferramentas automatizadas, que podem diminuir a interação humana essencial para o desenvolvimento social e emocional dos alunos. Aprofundaria também a questão da privacidade e segurança dos dados, considerando que a coleta e análise de informações pessoais podem gerar riscos. Além disso, exploraria como a IA pode substituir empregos de professores e criar uma desigualdade na educação, onde apenas instituições com mais recursos têm acesso às melhores tecnologias. Concluiria o trabalho enfatizando a necessidade de uma abordagem crítica e equilibrada na integração da IA no ambiente escolar.",
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a entrega do trabalho escrito, a professora conduziu um debate com a turma para discutir a pesquisa e a elaboração dos trabalhos. Durante a conversa, surgiu uma questão crucial: o impacto da IA nas profissões do futuro. Como você se posiciona em relação a essa discussão?",
        alternativas: [
            {
                texto: "Durante o debate, eu me posicionaria favoravelmente ao impacto da IA no trabalho do futuro, destacando como a tecnologia pode criar novas oportunidades e melhorar a eficiência nas profissões. Argumentaria que a IA pode automatizar tarefas repetitivas, permitindo que os profissionais se concentrem em atividades mais criativas e estratégicas. Além disso, ressaltaria que a adoção de IA pode levar à criação de novas carreiras e setores, estimulando a inovação e o crescimento econômico. Enfatizaria a importância de preparar os alunos com habilidades tecnológicas para aproveitar essas novas oportunidades.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Durante o debate, eu abordaria o impacto negativo da IA no trabalho do futuro, ressaltando os possíveis desafios que a tecnologia pode trazer. Argumentaria que a automação pode levar à perda de empregos e à redução de oportunidades para trabalhadores menos qualificados. Também destacaria a preocupação com a crescente desigualdade no mercado de trabalho, onde apenas aqueles com habilidades avançadas terão acesso às novas oportunidades criadas pela IA. Enfatizaria a necessidade de políticas e treinamentos para ajudar os profissionais a se adaptarem às mudanças e minimizar os impactos negativos da tecnologia.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "As tecnologias de inteligência artificial podem ser tanto maravilhosas quanto desafiadoras. Elas têm o potencial de transformar a sociedade de maneiras profundas, desde melhorar a educação e a comunicação global até revolucionar o entretenimento e a pesquisa científica. Contudo, é crucial considerar as implicações negativas, como dependência, desigualdade digital, e impactos no mercado de trabalho. O equilíbrio entre aproveitar os benefícios e mitigar os riscos é a chave para um futuro sustentável com IA..",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
