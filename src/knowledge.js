// Base de conhecimento do Calouro Orientado.
//
// status 'verified': confirmado em fonte oficial (Manual do Aluno UCSal 2025, Cartilha do Estudante FIES da CAIXA) ou na base do projeto.
// status 'partial' : só parte está confirmada. `pending` diz o que falta e o app mostra os canais oficiais.
//
// Como o texto é comparado: sem acentos e sem maiúsculas. Uma palavra-chave casa quando começa
// uma palavra do texto ('emprest' casa 'emprestado'). Com espaço nas pontas (' ava ') exige a palavra inteira.
// Vence a entrada cuja palavra-chave encontrada for a mais longa.

export const MANUAL_URL = 'https://www.ucsal.br/wp-content/uploads/2025/08/Manual-do-Aluno-_-2025.pdf'
export const CARTILHA_URL = '' // cole aqui o link oficial da cartilha da CAIXA quando tiver

const manual = (secao) => ({ tipo: 'manual', secao })
const cartilha = (secao) => ({ tipo: 'cartilha', secao })
const base = { tipo: 'base' }
const E = (o) => ({ steps: [], notes: [], links: [], ordered: true, pending: '', ...o })

const WA = { label: 'WhatsApp (71) 3206-7800', href: 'https://wa.me/557132067800' }
const SIFES = { label: 'SIFESWeb (CAIXA)', href: 'http://sifesweb.caixa.gov.br/' }

export const canais = [
  { label: 'WhatsApp da UCSal: (71) 3206-7800', href: 'https://wa.me/557132067800' },
  { label: 'CRA – Central de Relacionamento com o Aluno (presencial): seg–sex 7h–20h30, sáb 7h–11h' },
  { label: 'Coordenação do seu curso' },
  { label: 'Site da UCSal', href: 'https://www.ucsal.br' },
]

export const knowledge = [
  // ---------------- Portal do Aluno ----------------
  E({
    id: 'portal',
    status: 'verified',
    title: 'Como usar o Portal do Aluno',
    keywords: ['como usar o portal', 'usar o portal', 'uso o portal', 'utilizar o portal', 'funcionamento do portal', 'como funciona o portal', 'o que tem no portal', 'menu do portal', 'navegar no portal'],
    intro: 'O menu lateral esquerdo do Portal do Aluno reúne as principais funções:',
    ordered: false,
    steps: [
      'Matriz Curricular: situação acadêmica, integralização e disciplinas de extensão.',
      'Faltas/Notas: consulta de notas e de faltas (clique na seta para expandir).',
      'Solicitações: Requerimentos acadêmicos e administrativos.',
      'Financeiro: mensalidades e pagamentos.',
      'Matrícula on-line: rematrícula para o semestre seguinte.',
      'Biblioteca → manuais → Minha Biblioteca: livros digitais.',
    ],
    fontes: [base],
  }),
  E({
    id: 'notas',
    status: 'verified',
    title: 'Consulta de notas',
    keywords: [' nota ', ' notas ', 'boletim'],
    intro: 'Para ver suas notas:',
    steps: [
      'Entre no Portal do Aluno e faça login.',
      'No menu lateral esquerdo, localize Faltas/Notas.',
      'Clique na seta ao lado para ver as funcionalidades.',
      'Selecione Notas.',
      'Consulte as notas registradas pelos professores.',
    ],
    notes: ['Quer entender como a média e a aprovação funcionam? Pergunte: "Como funciona a média?"'],
    fontes: [base],
  }),
  E({
    id: 'faltas',
    status: 'verified',
    title: 'Consulta de faltas',
    keywords: [' falta ', ' faltas ', 'frequencia', 'presenca', 'ausencia'],
    intro: 'Para consultar suas faltas:',
    steps: [
      'Acesse o Portal do Aluno.',
      'No menu lateral esquerdo, localize Faltas/Notas.',
      'Clique na seta para expandir as opções.',
      'Selecione Faltas.',
      'Consulte os registros de frequência.',
    ],
    notes: ['Para ser aprovado, é preciso ter pelo menos 75% de frequência, mesmo com nota acima da média.'],
    fontes: [base, manual('4.14')],
  }),
  E({
    id: 'matriz',
    status: 'verified',
    title: 'Matriz Curricular',
    keywords: ['matriz curricular', 'matriz', 'integralizacao', 'carga horaria', 'optativa', 'eletiva', 'obrigatoria', 'componentes curriculares', 'grade curricular'],
    intro: 'A Matriz Curricular fica no menu lateral esquerdo do Portal do Aluno. Nela você encontra um resumo da sua situação acadêmica:',
    ordered: false,
    steps: [
      'Integralização: carga horária total do curso e a já integralizada.',
      'Disciplinas obrigatórias: previstas, concluídas e pendentes.',
      'Disciplinas optativas: carga horária, concluídas e pendentes.',
      'Disciplinas eletivas: carga horária e situação de conclusão.',
      'Componentes curriculares: carga horária exigida, concluída e pendente.',
      'Extensão: informações das atividades extensionistas.',
    ],
    fontes: [base, manual('4.26')],
  }),
  E({
    id: 'extensao-disciplinas',
    status: 'verified',
    title: 'Disciplinas de extensão',
    keywords: ['disciplina de extensao', 'disciplinas de extensao', 'disciplina extensionista', 'extensionista', 'extensao'],
    intro: 'Para localizar suas disciplinas de extensão:',
    steps: [
      'Acesse o Portal do Aluno e faça login.',
      'No menu lateral esquerdo, clique em Matriz Curricular.',
      'Aguarde o carregamento das informações do curso.',
      'Localize a seção Resumo.',
      'Role a página até o quadro Extensão.',
      'Consulte as informações disponibilizadas.',
    ],
    notes: ['As atividades extensionistas são obrigatórias e correspondem a 10% da carga horária do curso; a quantidade de disciplinas varia conforme a matriz de cada curso.'],
    fontes: [base, manual('4.26.4')],
  }),
  E({
    id: 'requerimentos',
    status: 'verified',
    title: 'Requerimentos acadêmicos',
    keywords: ['requerimento', 'solicitacao', 'solicitacoes'],
    intro: 'Para fazer um requerimento:',
    steps: [
      'Entre no Portal do Aluno e faça login.',
      'No menu lateral esquerdo, localize Solicitações.',
      'Clique na seta ao lado para expandir o menu.',
      'Selecione Requerimentos.',
      'Veja as opções disponíveis e siga as orientações do sistema.',
    ],
    notes: [
      'Acompanhe as atualizações do requerimento depois de enviado.',
      'Aproveitamento de disciplinas, trancamento e colação de grau também são solicitados pelo Portal do Aluno.',
    ],
    fontes: [base, manual('4.5')],
  }),
  E({
    id: 'financeiro',
    status: 'verified',
    title: 'Financeiro: mensalidades e pagamentos',
    keywords: ['financeiro', 'mensalidade', 'pagamento', 'boleto', 'pagar', 'parcela', 'semestralidade', 'vencimento'],
    intro: 'Para consultar mensalidades e pagamentos:',
    steps: [
      'Acesse o Portal do Aluno e faça login.',
      'No menu lateral esquerdo, localize Financeiro.',
      'Clique na opção para abrir a área financeira.',
      'Consulte os serviços e informações disponíveis.',
    ],
    notes: [
      'A semestralidade é o número de disciplinas multiplicado pelo valor de cada uma, e pode ser dividida em até 6 parcelas.',
      'As mensalidades vencem no dia 5, salvo outro plano combinado na matrícula.',
      'Atraso pode gerar juros e multa, bloqueio da rematrícula e inclusão em lista de devedores.',
    ],
    fontes: [base, manual('5.1')],
  }),
  E({
    id: 'financiamento',
    status: 'verified',
    title: 'Bolsas, financiamento e descontos',
    keywords: ['credies', 'financiamento', 'bolsa', 'desconto', 'inscricao no fies', 'inscrever no fies', 'me inscrevo no fies', 'fiesselecao', 'fies selecao', 'enem'],
    intro: 'Programas citados no Manual do Aluno 2025:',
    ordered: false,
    steps: [
      'FIES (MEC): inscrição pelo FiesSeleção, com conta gov.br. Exige Enem a partir de 2010 (média de 450 ou mais e redação acima de zero) e renda familiar per capita de até 3 salários mínimos. O FIES Social reserva vagas para quem está no CadÚnico com renda per capita de até meio salário mínimo.',
      'CredIES: crédito educacional que permite pagar parte da mensalidade durante o curso e o restante depois, sem juros remuneratórios. Inscrição pelo site fundacred.org.br, com percentual de até 50%.',
      'Descontos da UCSal não são cumulativos e não valem para pagamento após o vencimento.',
    ],
    notes: [
      'Regras e prazos mudam a cada processo seletivo: confira nos sites oficiais e nos editais atuais.',
      'Já tem FIES? Pergunte "Como funciona o FIES?" ou "Como renovo meu FIES?".',
    ],
    links: [{ label: 'FiesSeleção', href: 'https://fiesselecaoaluno.mec.gov.br/' }],
    fontes: [manual('5.2 e 5.3')],
  }),

  // ---------------- FIES (Cartilha do Estudante CAIXA v4.7) ----------------
  E({
    id: 'fies',
    status: 'verified',
    title: 'FIES: o que é o Novo FIES e seus deveres',
    keywords: ['fies', 'financiamento estudantil', 'fundo de financiamento'],
    intro: 'O Novo FIES é o financiamento estudantil do governo (contratos a partir de 2018, Portaria MEC 209/2018). O que ele traz:',
    ordered: false,
    steps: [
      'Juros zero para quem tem renda bruta familiar per capita de até 3 salários mínimos.',
      'A amortização (pagamento do saldo devedor) começa logo depois do fim do curso, respeitando o limite de renda.',
      'Você paga a coparticipação, que é a parte da mensalidade não financiada.',
      'A CAIXA é o Agente Financeiro e o Agente Operador dos contratos.',
    ],
    notes: [
      'Como entrar: o pedido é feito no FIES Seleção (sistema do MEC). Quem é selecionado vai à instituição para entrevista e entrega de documentos, e recebe o DRI (Documento de Regularidade de Inscrição). Depois contrata pelo app FIES CAIXA (para quem não tem fiador, cônjuge ou representante legal; dias úteis, 9h às 19h) ou em uma agência da CAIXA.',
      'Deveres do estudante: estar matriculado, ter aproveitamento acadêmico de 75% das matérias do curso, manter o contrato em dia e fazer o aditamento de renovação (ou de suspensão) a cada semestre.',
      'Não precisa mais do financiamento? Formalize o encerramento no SIFESWeb e conclua na agência.',
      'Requisitos de inscrição e programas parecidos: pergunte "Tem bolsa de estudo?".',
      'Atendimento CAIXA: Alô CAIXA 4004 0104 (capitais e regiões metropolitanas) · 0800 104 0104 (demais regiões) · SAC 0800 726 0101 · Ouvidoria 0800 725 7474.',
    ],
    links: [{ label: 'FIES Seleção (MEC)', href: 'https://fiesselecaoaluno.mec.gov.br/' }, SIFES],
    fontes: [cartilha('1 e 11')],
  }),
  E({
    id: 'fies-sifes',
    status: 'verified',
    title: 'SIFESWeb e app FIES CAIXA: primeiro acesso',
    keywords: ['sifes', 'app fies', 'app do fies', 'aplicativo do fies', 'cadastro no fies', 'cadastro do fies', 'cadastrar no fies', 'acessar o fies', 'acesso ao fies', 'login caixa', 'hotmail', 'link invalido', 'link do email', 'link do e mail', 'link que recebi'],
    intro: 'O SIFESWeb é o sistema da CAIXA em que você opera seu contrato do Novo FIES (aditamento, suspensão, dilatação, encerramento e boletos). Para o primeiro acesso:',
    steps: [
      'Acesse sifesweb.caixa.gov.br e clique em "Cadastre-se". Se você já tem cadastro no login.caixa de outro sistema, não precisa se cadastrar: entre com a senha que já tem.',
      'Preencha CPF, nome completo, data de nascimento, e-mail e uma senha numérica de 6 posições. Marque "Não sou um robô" e clique em "Cadastre-se".',
      'Abra o e-mail da CAIXA (olhe o spam também) e clique no link de verificação, que expira em 15 minutos.',
      'Informe CPF e senha e clique em "Entrar". Repita quando o sistema redirecionar para o login.',
      'No primeiro acesso, confirme que quer entrar como "Estudante".',
    ],
    notes: [
      'Mensagem de que o MEC ainda não enviou seus dados: confira o calendário do MEC e tente outro dia. Mensagem pedindo a assinatura do contrato: ela é feita na agência da CAIXA (veja o prazo na sua DRI).',
      'E-mail @hotmail.com, @live.com ou @outlook.com: desmarque "Visualização de Links" em Opções > Layout > Visualizações de Links, porque ele invalida o link antes de você clicar. Depois, limpe cookies e histórico, reinicie o navegador e tente de novo.',
      'Se o SIFES mostrar tela de erro, limpe o histórico de navegação e entre de novo. A cartilha recomenda Windows 10 e os navegadores Chrome, Firefox ou Edge.',
      'Também dá para operar pelo app FIES CAIXA.',
    ],
    links: [SIFES],
    fontes: [cartilha('2 e 10')],
  }),
  E({
    id: 'fies-aditamento',
    status: 'partial',
    title: 'FIES: aditamento (renovação semestral)',
    keywords: ['aditament', 'aditar', 'renovar o fies', 'renovar meu fies', 'renovo meu fies', 'renovo o fies', 'renovar fies', 'renovacao do fies', 'renovacao do meu fies', 'renovar o contrato do fies', 'renovacao do contrato do fies', 'renovacao semestral', 'prazo do fies'],
    intro: 'O aditamento é a renovação semestral do contrato do Novo FIES. A CPSA da UCSal inicia o pedido e você valida no SIFESWeb ou no app FIES CAIXA:',
    steps: [
      'Espere a CPSA iniciar o aditamento do semestre e confira se o calendário está aberto. Sem isso, a opção não aparece para você.',
      'No SIFESWeb, vá em Contrato FIES > Manutenção > Aditamento Renovação. No app FIES CAIXA, toque no ícone Aditamento (ele aparece quando o aditamento está "Pendente de Validação").',
      'Confira os dados: instituição, curso, semestre a cursar, semestres já financiados, valor da semestralidade, percentual de financiamento e a parte que você paga.',
      'Responda se os valores da semestralidade, o turno, a duração do curso e os semestres concluídos estão corretos. No site, marque antes o Termo de Aceite de Condições Contratuais.',
      'Diga se quer alterar o percentual de financiamento (veja "FIES Social e percentual") e se quer alterar dados cadastrais ou fiador. Você só altera e-mail e telefones.',
      'Clique em "Confirmar aditamento". Simplificado: pegue com a CPSA a via do DRM assinada. Não simplificado (por exemplo, renda do fiador insuficiente ou troca de fiador): pegue o DRM na CPSA e vá à agência da CAIXA, com o fiador, para concluir.',
    ],
    notes: [
      'Você precisa estar adimplente. A CAIXA leva até 5 dias úteis para reconhecer um pagamento, então não deixe para pagar no último dia do prazo.',
      'Não dá para aditar com semestre anterior sem aditamento ou suspensão, nem com o contrato encerrado.',
      'Dados errados? Responda "Não" na pergunta sobre a semestralidade e confirme: o aditamento volta para a CPSA corrigir.',
      'Aditamento não simplificado que expirou: valide de novo para receber novo prazo na agência.',
      'Fiador: a soma da renda bruta mensal dos fiadores precisa ser de pelo menos 2 vezes o valor da mensalidade (1 vez para bolsista do Prouni).',
      'Perdeu um semestre anterior? Use Contrato FIES > Manutenção > Pendência de Aditamento (só para semestres anteriores ao atual e se estiver "Pendente de validação"). Nos outros status, peça à UCSal para iniciar o aditamento.',
    ],
    pending: 'O prazo final do aditamento do semestre atual (a CAIXA divulga o calendário a cada semestre) e o prazo interno da UCSal para a CPSA.',
    links: [SIFES],
    fontes: [cartilha('3 e 10')],
  }),
  E({
    id: 'fies-cpsa',
    status: 'partial',
    title: 'CPSA: a comissão do FIES na instituição',
    keywords: ['cpsa', 'comissao permanente', 'supervisao e acompanhamento', 'drm', 'drd', 'documento de regularidade'],
    intro: 'A CPSA (Comissão Permanente de Supervisão e Acompanhamento) é a comissão da instituição de ensino que cuida do FIES. Segundo a cartilha da CAIXA, ela:',
    ordered: false,
    steps: [
      'Valida as informações que você prestou na inscrição do FIES.',
      'Inicia o aditamento de renovação de todo semestre, que depois você valida no SIFESWeb ou no app.',
      'Corrige dados divergentes (semestralidade, turno, duração, semestres concluídos) quando você rejeita um aditamento.',
      'Valida pedidos de suspensão e de dilatação e entrega os documentos de regularidade: o DRM na renovação (assinado pela CPSA) e o DRD na dilatação (só para sua guarda).',
    ],
    pending: 'Local, horário de atendimento e contato da CPSA da UCSal.',
    fontes: [cartilha('3, 5 e 6')],
  }),
  E({
    id: 'fies-suspensao',
    status: 'verified',
    title: 'FIES: suspender o contrato',
    keywords: ['suspens', 'suspend', 'trancar o fies', 'trancar meu fies', 'trancar fies', 'pausar o fies', 'pausar meu fies', 'pausa do fies'],
    intro: 'Se em um semestre você não for usar o serviço educacional, é você quem precisa pedir a suspensão do contrato do FIES. Só trancar a matrícula na instituição NÃO suspende o financiamento.',
    steps: [
      'No SIFESWeb, vá em Contrato FIES > Manutenção > Solicitar Suspensão (ou toque em "Suspensão" no app FIES CAIXA).',
      'Confira os dados e o semestre, clique em "Confirmar" e aceite os termos.',
      'Procure a CPSA da UCSal para validar o pedido. O sistema mostra o prazo máximo que ela tem para analisar.',
      'Se quiser, imprima o Comprovante da Solicitação de Suspensão em "Ações".',
    ],
    notes: [
      'Dá para suspender por até 2 semestres consecutivos e, excepcionalmente, por mais 1, com justificativa formal (a 3ª solicitação exige justificativa).',
      'O semestre suspenso conta como semestre de utilização: o prazo total do financiamento fica 1 semestre menor.',
      'Depois de solicitada, a suspensão não pode ser cancelada. Também não dá para suspender o semestre atual se o anterior estiver sem aditamento ou suspensão.',
      'Suspensão integral (você não fez a contratação nem o aditamento do semestre): pode ser pedida a qualquer momento com o calendário aberto. Não há repasse do financiamento naquele semestre, mas a coparticipação é devida até o mês da suspensão.',
      'Suspensão parcial (você já fez o aditamento do semestre): pedir entre os dias 1 e 15 de janeiro a maio (1º semestre) ou de julho a novembro (2º semestre). Repasse e coparticipação valem até o mês da suspensão.',
      'Semestre anterior que ficou pendente: Contrato FIES > Manutenção > Pendência de Aditamento > Suspensão.',
    ],
    links: [SIFES],
    fontes: [cartilha('5')],
  }),
  E({
    id: 'fies-dilatacao',
    status: 'verified',
    title: 'FIES: dilatação (mais semestres de financiamento)',
    keywords: ['dilat', 'prazo de utilizacao'],
    intro: 'A dilatação é para quem está perto do fim do prazo de utilização do financiamento e precisa de mais semestres para concluir o curso.',
    steps: [
      'Peça no período certo: até o dia 15 do mês seguinte ao fim do período de utilização (1º semestre: de 01/12 a 15/01; 2º semestre: de 01/06 a 15/07).',
      'Com o contrato adimplente, entre no SIFESWeb em Contrato FIES > Manutenção > Solicitar Dilatação (ou toque em "Dilatação" no app, que só aparece para quem está apto).',
      'Confira os dados, clique em "Confirmar" e confirme de novo na pergunta.',
      'Acompanhe o prazo de validação da CPSA e vá à UCSal receber o DRD, que é um documento só de guarda.',
      'Depois da aprovação, peça já à instituição o aditamento de renovação do semestre vigente.',
    ],
    notes: [
      'Só dá para dilatar um semestre por vez, até 4 vezes. O valor dos semestres dilatados também tem um limite, ligado aos dois últimos semestres contratados (a cartilha da CAIXA detalha).',
    ],
    links: [SIFES],
    fontes: [cartilha('6')],
  }),
  E({
    id: 'fies-encerramento',
    status: 'verified',
    title: 'FIES: encerramento antecipado',
    keywords: ['encerro o fies', 'encerro meu fies', 'encerrar o fies', 'encerrar meu fies', 'encerrar o contrato', 'encerrar meu contrato', 'encerro o contrato', 'encerrar o financiamento', 'encerrar meu financiamento', 'encerramento antecipado', 'encerramento do contrato', 'encerramento do fies', 'amortiz', 'quitar o fies', 'quitar meu fies', 'liquidar o fies', 'liquidacao do fies', 'saldo devedor', 'sair do fies', 'cancelar o fies', 'cancelar meu fies', 'desistir do fies'],
    intro: 'O encerramento antecipado é para quem não precisa mais do financiamento. Só é possível com a coparticipação em dia e, depois de solicitado, não dá para cancelar.',
    steps: [
      'Se a CPSA já iniciou seu aditamento e você não quer validá-lo, rejeite o aditamento primeiro.',
      'No SIFESWeb, vá em Contrato FIES > Manutenção > Solicitar Encerramento (ou toque em "Encerramento" no app).',
      'Escolha uma das três opções: Liquidação (paga todo o saldo devedor na efetivação), Manter utilização (mantém o período restante e só começa a amortizar depois dele) ou Antecipar amortização (começa a amortizar logo).',
      'Marque o Termo de Aceite, se escolheu manter utilização ou antecipar amortização, e confirme.',
      'Compareça à agência da CAIXA nas datas informadas na tela para assinar o termo de encerramento.',
    ],
    notes: [
      'Encerramento integral (sem aditamento no semestre): pode ser pedido a qualquer momento com o calendário aberto. Não há repasse naquele semestre, e a coparticipação é devida até o mês do encerramento.',
      'Encerramento parcial (você já fez o aditamento): peça entre os dias 1 e 15 de janeiro a maio ou de julho a novembro. Repasse e coparticipação valem até o mês do encerramento.',
      'Escolhido "Manter utilização" ou "Antecipar amortização", você pode amortizar ou liquidar quando quiser, mas não pode trocar o tipo de encerramento.',
    ],
    links: [SIFES],
    fontes: [cartilha('7')],
  }),
  E({
    id: 'fies-coparticipacao',
    status: 'verified',
    title: 'FIES: coparticipação, boletos e atraso',
    keywords: ['copartic', 'reparcel', 'debito em conta', 'prestamista', 'pagamento do fies', 'pagar o fies', 'pagar meu fies', 'pago o fies', 'pago meu fies', 'boleto do fies', 'parcela do fies', 'parcelas do fies', 'vencimento do fies', 'mensalidade do fies', 'atraso do fies'],
    intro: 'Coparticipação é o pagamento da parte não financiada da mensalidade. O que você paga à CAIXA soma coparticipação, seguro prestamista, tarifa de serviço e taxa de administração.',
    ordered: false,
    steps: [
      'Vencimento: dia 15 de cada mês, e a data não pode ser alterada.',
      'Débito em conta: nos contratos assinados a partir do 2º semestre de 2019, o pagamento é por débito em conta. Mantenha saldo: depositar no dia do débito não faz o débito dar certo.',
      'Sem saldo ou sem débito em conta: gere o boleto no SIFESWeb em Contrato FIES > Contrato > "Boleto(s) em aberto" (dias úteis, 9h às 19h).',
      'Os meses anteriores ao início da cobrança pela CAIXA são pagos direto à instituição, conforme a data de assinatura do contrato (a cartilha da CAIXA traz a tabela).',
    ],
    notes: [
      'A CAIXA leva até 5 dias úteis para reconhecer o pagamento. Atraso impede validar o aditamento e pedir dilatação ou encerramento.',
      'Parcelas em atraso: existe o reparcelamento da coparticipação em Contrato FIES > Reparcelamento da Coparticipação. A instituição tem 5 dias para aceitar ou negar, e você paga um boleto de entrada.',
    ],
    links: [SIFES],
    fontes: [cartilha('8, 9 e 10')],
  }),
  E({
    id: 'fies-percentual',
    status: 'verified',
    title: 'FIES Social e percentual de financiamento',
    keywords: ['fies social', 'cadunico', 'cad unico', 'percentual de financiamento', 'percentual do fies', 'percentual do financiamento', 'aumentar o percentual', 'aumentar meu percentual', 'diminuir o percentual', 'diminuir meu percentual', 'alterar o percentual', 'alterar meu percentual', 'aumentar o financiamento', 'aumentar meu financiamento', 'diminuir o financiamento', 'diminuir meu financiamento', 'financiamento de 100', 'financiamento 100', 'prouni e fies', 'fies e prouni', 'fies com prouni', 'prouni com fies'],
    intro: 'O percentual de financiamento é definido pelo FNDE/MEC na contratação e não muda ao longo do contrato, a não ser que você decida diminuí-lo.',
    ordered: false,
    steps: [
      'Regra geral: você só pode diminuir o percentual, no aditamento de renovação. Depois de diminuído, não dá para aumentar de novo, e a sua coparticipação sobe.',
      'FIES Social (Portaria MEC 167/2024): para quem o MEC identifica pelo CadÚnico e pela renda per capita, o financiamento pode chegar a 100%. O SIFES avisa no primeiro aditamento em que você é identificado, e só nele você pode aumentar o percentual.',
      'No aditamento, responda "Sim" a "Você deseja alterar o seu percentual de financiamento?" e simule os valores (tecla TAB no site, lupa no app). O novo percentual só é gravado quando você confirma.',
      'Mesmo com 100% há seguro prestamista e encargos operacionais, e coparticipação se a mensalidade passar do teto de financiamento.',
    ],
    notes: [
      'Com bolsa parcial do Prouni, o FIES incide sobre a mensalidade já descontado o Prouni. Exemplo da cartilha: mensalidade de R$ 1.000 com 50% de Prouni e 50% de FIES. O FIES vale sobre R$ 500 e você paga R$ 250 de coparticipação, além de seguro e taxas.',
      'Dúvida sobre seu enquadramento no FIES Social: MEC, 0800 616161, ou pelo portal de atendimento do MEC.',
    ],
    links: [
      {
        label: 'Perguntas frequentes do FIES Social (CAIXA)',
        href: 'https://www.caixa.gov.br/programas-sociais/fies/perguntas-frequentes-fies-social/Paginas/default.aspx',
      },
    ],
    fontes: [cartilha('3.1, 3.5 e 10')],
  }),
  E({
    id: 'fies-compromisso',
    status: 'verified',
    title: 'Teto de financiamento e Compromisso FIES',
    keywords: ['compromisso fies', 'teto do fies', 'teto de financiamento', 'valor maximo financiado', 'valor maximo do fies', 'limite do fies', 'limite de financiamento', 'cobrar a diferenca', 'diferenca da mensalidade', 'diferenca entre a mensalidade', 'cobranca indevida'],
    intro: 'O valor financiado pelo FIES por semestre tem limites. Para contratos novos a partir de 1º/2026, a Resolução MEC nº 63/2025 criou o Compromisso FIES, um valor de referência que limita o que a instituição pode cobrar de quem tem FIES.',
    ordered: false,
    steps: [
      'Tetos (cartilha v4.7): R$ 42.983,70 por semestre; R$ 78.000,00 para Medicina (a partir do semestre 2/2025); mínimo de R$ 300,00.',
      'Com 100% de financiamento, não há coparticipação: o boleto traz só seguro prestamista e taxa administrativa.',
      'Abaixo de 100%, há coparticipação calculada sobre o Compromisso FIES. Exemplo da CAIXA em Medicina, com Compromisso de R$ 78.000: com 50% de financiamento, a coparticipação é de R$ 39.000, mais seguro e taxa.',
      'A instituição não pode cobrar de você a diferença entre a mensalidade dela e o Compromisso FIES, nem como complemento da coparticipação, taxa adicional ou outra cobrança.',
    ],
    notes: [
      'Viu uma cobrança assim? Procure imediatamente a instituição ou os canais oficiais do FIES (Alô CAIXA 4004 0104 nas capitais e regiões metropolitanas, 0800 104 0104 nas demais).',
    ],
    fontes: [cartilha('3.1 e 3.6')],
  }),

  E({
    id: 'rematricula',
    status: 'verified',
    title: 'Rematrícula on-line',
    keywords: ['rematricula', 'renovar matricula', 'renovar a matricula', 'renovar minha matricula', 'renovo minha matricula', 'renovacao de matricula', 'matricula on line', 'matricula online', 'proximo semestre', 'semestre seguinte'],
    intro: 'Para fazer sua rematrícula:',
    steps: [
      'Acesse o Portal do Aluno e faça login.',
      'No menu lateral esquerdo, localize Matrícula on-line.',
      'Clique na opção para acessar o procedimento.',
      'Leia as orientações apresentadas pelo sistema.',
      'Siga as etapas indicadas.',
      'Confira as disciplinas e demais informações antes de finalizar.',
      'Verifique a confirmação da operação no próprio portal.',
    ],
    notes: [
      'Segundo o Manual do Aluno 2025, são duas etapas obrigatórias: a financeira (gerar o boleto e pagar a matrícula) e a acadêmica (escolher as disciplinas). A matrícula só é efetivada com o pagamento da parcela da semestralidade, que pode ser gerada em qualquer uma das etapas.',
      'Respeite o edital de rematrícula e o prazo do Calendário Acadêmico. Pendências acadêmicas ou financeiras podem interferir.',
    ],
    links: [WA],
    fontes: [base, manual('4.3')],
  }),

  // ---------------- Vida acadêmica ----------------
  E({
    id: 'avaliacao',
    status: 'verified',
    title: 'Média, recuperação e segunda chamada',
    keywords: ['media', 'aprovacao', 'aprovado', 'aprovar', 'reprov', 'passar na disciplina', 'recuperacao', 'avaliacao final', 'segunda chamada', 'prova'],
    intro: 'Como a UCSal calcula a aprovação (Manual do Aluno 2025):',
    ordered: false,
    steps: [
      'Há três momentos de avaliação: Unidade 1 (U1), Unidade 2 (U2) e Avaliação Final (AF).',
      'Em cada unidade, a prova escrita vale 70% e as atividades avaliativas valem 30%.',
      'Média Final (MF) = (U1 + U2) ÷ 2. Com MF igual ou maior que 6,0, você está aprovado.',
      'Com MF a partir de 4,0 e abaixo de 5,8, você tem direito à Avaliação Final. O Resultado Final = (MF + AF) ÷ 2 precisa ser 6,0 ou mais, e resultado a partir de 5,8 é arredondado para 6,0.',
      'Frequência mínima de 75% das aulas, mesmo com nota acima da média.',
      'Faltou à prova da U1 ou da U2? Requeira a segunda chamada no prazo do Calendário Acadêmico. Não existe segunda chamada da Avaliação Final.',
    ],
    notes: ['Para ver suas notas no portal: Faltas/Notas → Notas.'],
    links: [
      {
        label: 'Resolução CONSUN 12/2024 (sistema de avaliação)',
        href: 'https://www.ucsal.br/wp-content/uploads/2024/10/Resoluc%CC%A7a%CC%83o-n.o-12-de-17-de-outubro-de-2024-Sistema-de-avaliac%CC%A7a%CC%83o-dos-cursos-de-Graduac%CC%A7a%CC%83o-UCSal.pdf',
      },
    ],
    fontes: [manual('4.11 a 4.14')],
  }),
  E({
    id: 'abono-faltas',
    status: 'verified',
    title: 'Justificar faltas e exercícios domiciliares',
    keywords: ['abono', 'abonar', 'atestado', 'justific', 'exercicios domiciliares', 'domiciliar', 'gestante', 'faltei'],
    intro: 'Regras do Manual do Aluno 2025:',
    ordered: false,
    steps: [
      'Atestado médico é só uma justificativa de ausência e não abona a falta. Peça ao professor da disciplina, em sala, que lance a justificativa no sistema de frequência, em até 48 horas após a falta.',
      'Exercícios domiciliares: valem para problema de saúde comprovado que impeça a frequência por um período e para gestantes (a partir do 8º mês, por 3 meses, conforme atestado). Não se aplicam a disciplinas com atividades práticas ou laboratoriais, nem a estágios.',
      'O abono de faltas só existe nos casos previstos em lei, como membro da CONAES em reunião e militar ou reservista convocado.',
      'Convicção religiosa: é preciso pedir, de forma prévia e motivada, no ato da matrícula, para cursar a disciplina em outro horário (estudo dirigido).',
    ],
    notes: ['Dúvida sobre o seu caso? Fale com a CRA pelo WhatsApp (71) 3206-7800.'],
    links: [WA],
    fontes: [manual('4.15 e 4.16')],
  }),
  E({
    id: 'trancamento',
    status: 'verified',
    title: 'Trancamento e cancelamento de curso',
    keywords: ['tranc', 'cancel', 'desist', 'abandon', 'reserva de vaga', 'reabertura', 'reingresso', 'voltar para a faculdade'],
    intro: 'Trancar (pausar) e cancelar (encerrar o vínculo) são coisas diferentes:',
    ordered: false,
    steps: [
      'Trancamento de disciplina ou de curso: possível a partir do 2º semestre letivo, dentro do prazo do Calendário Acadêmico, pelo Portal do Aluno. No trancamento de disciplina, devem restar pelo menos 4 disciplinas e o valor das trancadas é deduzido.',
      'O trancamento de curso vale por no máximo 4 semestres, consecutivos ou alternados. Para voltar, o próprio aluno faz o pedido na CRA ou pelo Portal do Aluno.',
      'Reserva de vaga (veterano): peça na CRA indicando o semestre de retorno. Sem retorno em 1 semestre, vira abandono.',
      'Cancelamento (calouro): WhatsApp (71) 3206-7800, e-mail ingresso@ucsal.br ou presencialmente no Setor de Matrículas (seg–sex 8h–21h, sáb 8h–12h).',
      'Cancelamento (veterano): WhatsApp (71) 3206-7800 ou presencialmente na CRA (seg–sex 7h–20h30, sáb 7h–11h).',
    ],
    notes: [
      'Quem não renova a matrícula entra em situação de abandono e perde a vaga se não pedir reingresso em até 4 semestres.',
      'Para voltar após trancamento ou abandono, também há o portal de inscrição, opção "Reingresso" (inscricao.ucsal.br).',
      'Tem FIES? Trancar na UCSal não suspende o contrato com a CAIXA: é preciso pedir a suspensão no SIFESWeb e a UCSal validar. Pergunte: "Como suspendo meu FIES?".',
    ],
    links: [WA, { label: 'inscricao.ucsal.br', href: 'https://inscricao.ucsal.br/' }],
    fontes: [manual('4.6 a 4.10 e 4.21')],
  }),
  E({
    id: 'transferencia-aproveitamento',
    status: 'verified',
    title: 'Transferência e aproveitamento de disciplinas',
    keywords: ['transfer', 'transfir', 'mudar de curso', 'mudar de turno', 'troca de curso', 'trocar de curso', 'aproveitamento', 'dispensa'],
    intro: 'O que o Manual do Aluno 2025 diz:',
    ordered: false,
    steps: [
      'Transferência interna (de curso ou turno): só para curso da mesma área de conhecimento e uma única vez na graduação. Quem tem bolsa, financiamento ou desconto deve falar antes com a CRA.',
      'Aproveitamento (dispensa) de disciplinas de outra instituição ou de outro curso da UCSal: pedido pelo Portal do Aluno, com histórico escolar e programas das disciplinas. O conteúdo e a carga horária precisam ser compatíveis.',
      'Transferência externa (sair da UCSal para outra instituição): abra protocolo presencialmente na CRA ou pelo WhatsApp (71) 3206-7800. Os documentos emitidos têm taxa institucional.',
    ],
    links: [WA],
    fontes: [manual('4.4, 4.5 e 4.20')],
  }),
  E({
    id: 'estagio',
    status: 'verified',
    title: 'Estágio: assinatura do contrato (TCE)',
    keywords: ['estagi', 'tce', 'termo de compromisso', 'cepro'],
    intro: 'O setor que apoia a formalização do estágio é o CEPRO (Centro de Excelência Profissional). Para a UCSal assinar o seu Termo de Compromisso de Estágio (TCE):',
    steps: [
      'Preencha o TCE com assinatura e carimbo da empresa e a sua assinatura. O supervisor da empresa precisa ter formação na sua área.',
      'No Portal do Aluno, vá em Solicitações → Requerimentos → Abertura de Requerimentos.',
      'No assunto "Atendimento", escolha "ASSINATURA DE CONTRATO DE ESTÁGIO-GRADUAÇÃO".',
      'Em "Adicionar anexo", informe o tipo de documento (TCE, relatório, distrato ou termo aditivo), envie o PDF e clique em "Adicionar requerimento".',
      'Descreva o pedido, clique em "Solicitar" e confirme. Será gerado um número de protocolo.',
    ],
    notes: [
      'O TCE volta assinado digitalmente para o seu e-mail institucional em até 5 dias úteis.',
      'Você pode fazer até 2 estágios ao mesmo tempo, com no máximo 30 h semanais e 6 h diárias, e até 2 anos na mesma empresa (exceto estagiário com deficiência).',
    ],
    fontes: [manual('4.22')],
  }),
  E({
    id: 'monitoria',
    status: 'verified',
    title: 'Monitoria',
    keywords: ['monitor'],
    intro: 'A monitoria é uma atividade acadêmica voluntária e auxiliar, que conta como atividade complementar.',
    ordered: false,
    steps: [
      'Você só pode atuar em uma monitoria por semestre. Ela dura um semestre letivo e você pode se candidatar de novo à mesma disciplina em novo processo seletivo.',
      'O monitor trabalha subordinado ao professor da disciplina e não o substitui em sala.',
      'As regras estão na Resolução CONSUN nº 1/2019, e as vagas costumam sair em edital no site da UCSal.',
    ],
    fontes: [manual('4.24')],
  }),
  E({
    id: 'atividades-complementares',
    status: 'partial',
    title: 'Atividades Complementares (horas complementares)',
    keywords: ['horas complementares', 'hora complementar', 'atividade complementar', 'atividades complementares', 'atvc', 'complementar'],
    intro: 'O que está confirmado no Manual do Aluno 2025:',
    ordered: false,
    steps: [
      'São atividades acadêmicas, culturais e científicas, componente curricular de cumprimento obrigatório nos cursos de graduação.',
      'Cada curso define, no projeto pedagógico, a política de integralização: quantas horas e quais atividades valem.',
      'Você pode começar já no 1º semestre. As atividades devem ser realizadas e computadas dentro do mesmo semestre letivo em que ocorrerem.',
      'A monitoria é uma das atividades que contam.',
    ],
    pending: 'Quantas horas o seu curso exige, quais atividades valem e como registrar os certificados. O Manual manda procurar a Coordenação do Curso.',
    fontes: [manual('4.25')],
  }),
  E({
    id: 'extensao-projetos',
    status: 'partial',
    title: 'Projetos de extensão e ações comunitárias',
    keywords: ['projeto de extensao', 'projetos de extensao', 'acao comunitaria', 'acoes comunitarias', 'caex', 'voluntari', 'extracurricular', 'liga academica', 'ligas academicas', 'evento'],
    intro: 'Os projetos e ações comunitárias da UCSal são organizados pelo CAEX (Centro de Ações Comunitárias e de Extensão).',
    ordered: false,
    steps: [
      'Para saber como participar, escreva para extensao@ucsal.br.',
      'As suas disciplinas de extensão (obrigatórias) ficam em Portal do Aluno → Matriz Curricular → Resumo → Extensão.',
    ],
    pending: 'A lista atual de projetos, ligas acadêmicas e eventos ainda não foi confirmada por aqui.',
    links: [{ label: 'extensao@ucsal.br', href: 'mailto:extensao@ucsal.br' }],
    fontes: [manual('7.1')],
  }),
  E({
    id: 'ava',
    status: 'partial',
    title: 'AVA, atividades e disciplinas digitais',
    keywords: [' ava ', 'ambiente virtual', 'atividade no ava', 'atividades no ava', 'aviso no ava', 'disciplina digital', 'disciplinas digitais', ' ead ', ' ned ', 'educacao digital'],
    intro: 'O que está confirmado no Manual do Aluno 2025:',
    ordered: false,
    steps: [
      'O AVA da UCSal fica em ead.ucsal.br.',
      'Nas disciplinas digitais (a distância), o cronograma de atividades é divulgado no AVA antes do início de cada semestre, e é por lá que você acessa as informações da disciplina.',
      'O NED (Núcleo de Educação Digital) ajuda com normas, procedimentos e o uso do AVA: WhatsApp (71) 3206-7844 · contatocead@ucsal.br.',
      'Dúvidas sobre o conteúdo: fale com o professor da disciplina.',
    ],
    pending: 'O passo a passo dentro do AVA (onde ficam atividades, avisos e prazos de cada disciplina) ainda está em validação. Enquanto isso, o NED e o professor podem orientar.',
    links: [
      { label: 'Abrir o AVA', href: 'https://ead.ucsal.br/' },
      { label: 'WhatsApp do NED', href: 'https://wa.me/557132067844' },
      { label: 'contatocead@ucsal.br', href: 'mailto:contatocead@ucsal.br' },
    ],
    fontes: [manual('4.26.6')],
  }),
  E({
    id: 'calendario',
    status: 'verified',
    title: 'Calendário Acadêmico e prazos',
    keywords: ['calendario', 'prazo', 'datas', 'quando comeca', 'inicio das aulas', 'inicio do semestre', 'fim do semestre'],
    intro: 'Os prazos (rematrícula, trancamento, segunda chamada etc.) seguem o Calendário Acadêmico:',
    ordered: false,
    steps: [
      'O calendário é enviado para o seu e-mail institucional e publicado a cada semestre na página da UCSal e nas redes sociais oficiais.',
      'O 1º semestre vai de fevereiro a junho e o 2º, de agosto a dezembro.',
      'A rematrícula segue um edital próprio, publicado a cada semestre.',
    ],
    fontes: [manual('4.2 e 5.1')],
  }),
  E({
    id: 'documentos-colacao',
    status: 'verified',
    title: 'Documentos, colação de grau e diploma',
    keywords: ['diploma', 'historico', 'certificado', 'colacao', 'formatura', 'enade', 'documento', 'declarac'],
    intro: 'O que o Manual do Aluno 2025 informa:',
    ordered: false,
    steps: [
      'Documentos em geral: peça pelo WhatsApp (71) 3206-7800 ou presencialmente na CRA (seg–sex 7h–20h30, sáb 7h–11h).',
      'Colação de grau: quem cumpriu todos os componentes curriculares solicita pelo Portal do Aluno. As coordenações agendam as sessões, a partir de 30 dias após o fim do semestre.',
      'Certificado e histórico de conclusão chegam automaticamente ao e-mail cadastrado em até 15 dias úteis após a colação.',
      'Diploma digital: peça pelo WhatsApp (71) 3206-7800, enviando em PDF RG, CPF, título de eleitor, histórico/certificado do ensino médio e certidão de nascimento ou casamento.',
      'ENADE: obrigatório para quem está concluindo em curso avaliado. Mantenha seus dados cadastrais atualizados.',
    ],
    links: [WA],
    fontes: [manual('4.17 a 4.19')],
  }),

  // ---------------- Biblioteca ----------------
  E({
    id: 'emprestimo',
    status: 'verified',
    title: 'Empréstimo de livros físicos',
    keywords: ['emprest', 'pegar livro', 'pegar um livro', 'pego um livro', 'pergamum', 'multa', 'renovar livro', 'renovar o livro', 'renovar emprestimo', 'devolver livro', 'devolver o livro', 'livro fisico', 'livros fisicos', 'reservar livro', 'biblioteca', 'livro'],
    intro: 'Para pegar um livro emprestado na biblioteca física:',
    steps: [
      'Acesse o catálogo da biblioteca pelo site da UCSal.',
      'Pesquise a obra pelo título, autor ou assunto.',
      'Verifique a disponibilidade do exemplar.',
      'Anote o número de chamada para localizar o livro no acervo.',
      'Vá até a biblioteca e solicite o empréstimo no atendimento.',
    ],
    notes: [
      'Leve um documento oficial com foto (físico ou digital).',
      'Pergamum: login = número da matrícula; senha = CPF (só números).',
      'Até 3 livros de títulos diferentes ao mesmo tempo, por 7 dias.',
      'Renovação: pelo site da biblioteca (até 8 vezes) ou presencialmente. Livro reservado não renova, e livro atrasado só renova presencialmente, levando o exemplar.',
      'Multa por atraso: R$ 0,90 por dia e por livro, paga na biblioteca (cartão ou Pix). Multa a partir de R$ 10,00 impede novos empréstimos, renovações e reservas.',
      'Em caso de dano ou extravio, é preciso repor com edição igual ou mais recente.',
    ],
    fontes: [base, manual('6.1.4')],
  }),
  E({
    id: 'minha-biblioteca',
    status: 'verified',
    title: 'Livros virtuais (Minha Biblioteca)',
    keywords: ['minha biblioteca', 'livro virtual', 'livros virtuais', 'livro digital', 'livros digitais', 'biblioteca virtual', 'biblioteca digital', 'ebook', 'e book', 'livro online', 'audiolivro', 'audio livro', 'biblioteca', 'livro'],
    intro: 'Para acessar os livros digitais:',
    steps: [
      'Entre no Portal do Aluno da UCSal.',
      'Faça login com suas credenciais acadêmicas.',
      'Procure a opção relacionada à Biblioteca.',
      'Acesse a seção de manuais.',
      'Selecione Minha Biblioteca.',
      'Siga as instruções para entrar na plataforma e consultar as obras.',
    ],
    notes: [
      'É preciso ter vínculo acadêmico ativo e acesso ao Portal do Aluno.',
      'Dá para consultar de qualquer lugar, sem retirada ou devolução no balcão. A plataforma tem recurso de audiolivro.',
    ],
    fontes: [base, manual('6.1')],
  }),
  E({
    id: 'biblioteca-horario',
    status: 'verified',
    title: 'Biblioteca: horários, contatos e serviços',
    keywords: ['horario da biblioteca', 'biblioteca abre', 'biblioteca fecha', 'biblioteca funciona', 'funcionamento da biblioteca', 'chromebook', 'contato da biblioteca', 'telefone da biblioteca', 'abnt', 'repositorio', 'copyspider', 'plagio', 'periodicos', 'capes'],
    intro: 'Biblioteca Dom Geraldo Majella Agnelo (Campus Pituaçu):',
    ordered: false,
    steps: [
      'Período acadêmico: segunda a sexta, 7h às 20h; sábado, 8h às 12h.',
      'Recesso acadêmico: segunda a sexta, 8h às 17h.',
      'Contato: bibpituacu@ucsal.br · (71) 3206-7816.',
      'Chromebooks: empréstimo para uso na biblioteca, por 3 horas (renovável se não houver fila), com devolução no mesmo dia.',
      'Também há normas da ABNT na íntegra, Repositório Institucional, Portal de Periódicos da CAPES e o antiplágio gratuito CopySpider.',
    ],
    links: [{ label: 'bibpituacu@ucsal.br', href: 'mailto:bibpituacu@ucsal.br' }],
    fontes: [manual('6.1.1 a 6.1.3')],
  }),

  // ---------------- Quem procurar e campus ----------------
  E({
    id: 'setores',
    status: 'verified',
    title: 'Quem procurar para cada assunto',
    keywords: ['setor', 'a quem recorr', 'quem procurar', 'quem devo procurar', 'recorr', 'canais de atendimento', 'central de relacionamento', ' cra ', 'whatsapp', 'telefone da ucsal', 'contato da ucsal', 'onde resolvo', 'quem resolve', 'servicos da universidade'],
    intro: 'Contatos oficiais citados no Manual do Aluno 2025:',
    ordered: false,
    steps: [
      'CRA (Central de Relacionamento com o Aluno): documentos, protocolos, transferência, reserva de vaga e cancelamento de veterano. Presencial: seg–sex 7h–20h30, sáb 7h–11h.',
      'WhatsApp institucional: (71) 3206-7800.',
      'Setor de Matrículas (calouros): cancelamento e ingresso · ingresso@ucsal.br · seg–sex 8h–21h, sáb 8h–12h.',
      'FIES: contrato, SIFESWeb e boletos com a CAIXA (Alô CAIXA 4004 0104 nas capitais e regiões metropolitanas; 0800 104 0104 nas demais). Aditamento, suspensão e dilatação passam pela CPSA da UCSal.',
      'Coordenação do curso: atividades complementares, estudo dirigido e dúvidas do seu curso.',
      'Biblioteca: bibpituacu@ucsal.br · (71) 3206-7816.',
      'NED (AVA e disciplinas digitais): (71) 3206-7844 · contatocead@ucsal.br.',
      'CAEX (extensão): extensao@ucsal.br.',
      'CEPRO (estágio): pedido pelo Portal do Aluno.',
      'PLENUS (escuta, apoio psicopedagógico e inclusão): plenus@ucsal.br.',
      'ARI (intercâmbio): ari@ucsal.br.',
      'Administração do Campus (sala B301): adm@ucsal.br.',
      'Ouvidoria: ouvidoria@ucsal.br.',
    ],
    notes: ['A Ouvidoria é segunda instância: antes, procure o setor responsável pelo assunto.'],
    links: [WA],
    fontes: [manual('4 e 6')],
  }),
  E({
    id: 'coordenacao',
    status: 'partial',
    title: 'Contato com a coordenação do curso',
    keywords: ['coordenacao', 'coordenador'],
    intro: 'A coordenação do curso é a referência para dúvidas específicas do seu curso. O que está confirmado:',
    ordered: false,
    steps: [
      'Atividades complementares e estudo dirigido: o Manual do Aluno manda procurar a coordenação do curso.',
      'Colação de grau: as coordenações de escola agendam as sessões oficiais.',
    ],
    pending: 'E-mail, telefone e local de atendimento da coordenação de cada curso ainda não foram confirmados. Pergunte à CRA pelo WhatsApp (71) 3206-7800 ou ao professor da sua turma.',
    links: [WA],
    fontes: [manual('4.18, 4.25 e 4.26.5')],
  }),
  E({
    id: 'salas-blocos',
    status: 'partial',
    title: 'Salas e blocos do campus',
    keywords: ['sala', 'bloco', 'mapa', 'campus', 'numeracao', 'como chegar', 'endereco', 'me perdi', 'perdido'],
    intro: 'O que está confirmado sobre o campus:',
    ordered: false,
    steps: [
      'Os serviços do Manual do Aluno ficam no Campus Pituaçu (Av. Prof. Pinto de Aguiar, 2589, Salvador).',
      'Nos exemplos do Manual, as salas B301, B304 e B322 ficam no Bloco B, o que indica que o código da sala começa pela letra do bloco.',
      'Locais citados: Bloco A (UNIENF, a enfermaria), Bloco B (Administração do Campus, sala B301; Sala de Apoio, B304; ARI, B322) e Bloco C (Ouvidoria).',
      'Dúvidas de logística no campus: Administração do Campus (sala B301, seg–sex 7h–20h, sáb 7h–13h) ou adm@ucsal.br.',
    ],
    pending: 'O mapa completo dos blocos e a regra de numeração das salas (andar e número) ainda estão em validação.',
    links: [{ label: 'adm@ucsal.br', href: 'mailto:adm@ucsal.br' }],
    fontes: [manual('4.26, 6.3, 6.6 e 6.8')],
  }),
  E({
    id: 'campus-servicos',
    status: 'verified',
    title: 'Serviços no campus',
    keywords: ['estacionamento', 'vigilancia', 'seguranca', 'enfermaria', 'unienf', 'primeiros socorros', 'passar mal', 'achados e perdidos', 'objeto perdido', 'objetos perdidos', 'vila universitaria', 'lanchonete', 'cantina', 'alimentacao', 'refeicao', 'almoco'],
    intro: 'Serviços citados no Manual do Aluno 2025:',
    ordered: false,
    steps: [
      'Estacionamento (mais de 500 vagas): seg–sex 6h–22h; sáb 6h–17h30.',
      'Vigilância 24 horas: (71) 3206-7953.',
      'UNIENF (enfermaria, Bloco A): seg–sex 7h–16h, por demanda espontânea ou agendamento pelo WhatsApp (71) 3206-7800. Também apoia urgências que acontecem no campus.',
      'Achados e perdidos: Administração do Campus (B301) ou Sala de Apoio (B304). Os itens ficam disponíveis até o fim do semestre.',
      'Vila Universitária: quiosques de alimentação e espaço de convivência.',
    ],
    fontes: [manual('6.3 a 6.7')],
  }),
  E({
    id: 'plenus',
    status: 'verified',
    title: 'PLENUS: escuta, acolhimento e inclusão',
    keywords: ['plenus', 'psicolog', 'saude mental', 'ansied', 'acolhimento', 'psicopedag', 'inclusao', 'necessidades especiais', 'necessidades educacionais', 'deficiencia', 'depress', 'apoio emocional', 'suicid', 'me matar', 'nao aguento mais'],
    intro: 'O PLENUS é o Centro de Escuta e Acolhimento da UCSal, com equipe de psicologia, psicopedagogia e assistência social. Atende alunos e colaboradores, inclusive alunos de inclusão e com necessidades educacionais especiais, com sigilo profissional.',
    ordered: false,
    steps: [
      'Presencialmente: vá ao PLENUS no horário de funcionamento.',
      'Por e-mail: plenus@ucsal.br.',
      'Online: agende pelo formulário do PLENUS.',
    ],
    notes: ['Se você está em sofrimento intenso ou em risco agora, ligue para o CVV (188, 24 horas) ou para o SAMU (192). Você não precisa passar por isso sozinho.'],
    links: [
      { label: 'Agendar atendimento online', href: 'https://forms.gle/Ee8Mpuazc1jNBd4z9' },
      { label: 'plenus@ucsal.br', href: 'mailto:plenus@ucsal.br' },
    ],
    fontes: [manual('6.2')],
  }),
  E({
    id: 'ouvidoria',
    status: 'verified',
    title: 'Ouvidoria',
    keywords: ['ouvidoria', 'reclam', 'denuncia', 'elogio', 'sugestao'],
    intro: 'A Ouvidoria recebe elogios, sugestões, solicitações, reclamações e denúncias, e acompanha o encaminhamento até a resposta oficial por e-mail.',
    ordered: false,
    steps: [
      'E-mail: ouvidoria@ucsal.br.',
      'Formulário online da Ouvidoria.',
      'Presencial, com agendamento prévio por e-mail: sala da Ouvidoria, Bloco C, seg–sex 8h–17h.',
    ],
    notes: [
      'Ela atua como segunda instância: antes, procure o setor responsável. A página de perguntas frequentes (FAQ) da UCSal pode resolver sem precisar de contato.',
      'A Ouvidoria não decide as demandas; ela media e registra as respostas institucionais.',
    ],
    links: [
      {
        label: 'Formulário da Ouvidoria',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSdFdcJMTaEUeFbZdrIp8iOSMIUxH-QF4qrYvwVYQdK6VXkraQ/viewform',
      },
      { label: 'ouvidoria@ucsal.br', href: 'mailto:ouvidoria@ucsal.br' },
    ],
    fontes: [manual('6.8')],
  }),
]

// Menu de perguntas: [pergunta, id da resposta esperada] (os testes conferem o par).
export const suggestionGroups = [
  {
    titulo: 'Portal do Aluno',
    itens: [
      ['Onde vejo minhas notas?', 'notas'],
      ['Como consulto minhas faltas?', 'faltas'],
      ['Onde encontro minhas disciplinas de extensão?', 'extensao-disciplinas'],
      ['Como faço um requerimento?', 'requerimentos'],
      ['Onde consulto minhas mensalidades?', 'financeiro'],
      ['Como faço minha rematrícula?', 'rematricula'],
      ['Onde encontro a matriz curricular do meu curso?', 'matriz'],
      ['Como uso o Portal do Aluno?', 'portal'],
    ],
  },
  {
    titulo: 'Biblioteca',
    itens: [
      ['Como pego um livro emprestado?', 'emprestimo'],
      ['Como acesso a Minha Biblioteca?', 'minha-biblioteca'],
      ['Que horas a biblioteca abre?', 'biblioteca-horario'],
    ],
  },
  {
    titulo: 'Vida acadêmica',
    itens: [
      ['Como funciona a média e a aprovação?', 'avaliacao'],
      ['Se eu quiser trancar meu curso?', 'trancamento'],
      ['Como cumpro as horas complementares?', 'atividades-complementares'],
      ['Onde encontro uma atividade no AVA?', 'ava'],
      ['Como encontro uma sala ou bloco?', 'salas-blocos'],
    ],
  },
  {
    titulo: 'FIES',
    itens: [
      ['O que é o Novo FIES?', 'fies'],
      ['Como acesso o SIFESWeb?', 'fies-sifes'],
      ['Como renovo meu FIES?', 'fies-aditamento'],
      ['O que é a CPSA?', 'fies-cpsa'],
      ['Como suspendo meu FIES?', 'fies-suspensao'],
      ['Como peço a dilatação do FIES?', 'fies-dilatacao'],
      ['Como encerro o FIES antes do fim?', 'fies-encerramento'],
      ['Como pago a coparticipação?', 'fies-coparticipacao'],
      ['Posso aumentar meu percentual de financiamento?', 'fies-percentual'],
      ['O que é o Compromisso FIES?', 'fies-compromisso'],
    ],
  },
  {
    titulo: 'Quem procurar',
    itens: [
      ['A qual setor eu recorro?', 'setores'],
      ['Como falo com a coordenação do meu curso?', 'coordenacao'],
      ['Onde peço apoio psicológico?', 'plenus'],
    ],
  },
]

// Atalhos fixos na barra inferior.
export const quickQuestions = [
  'Onde vejo minhas notas?',
  'Como consulto minhas faltas?',
  'Como faço minha rematrícula?',
  'Se eu quiser trancar meu curso?',
  'Como cumpro as horas complementares?',
  'A qual setor eu recorro?',
]

const clean = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')

// Devolve até 2 entradas empatadas na palavra-chave mais específica encontrada.
export function findAnswers(question) {
  const text = ` ${clean(question)} `
  const scored = knowledge
    .map((entry) => {
      const hits = entry.keywords
        .map(clean)
        .filter((k) => text.includes(k.startsWith(' ') ? k : ` ${k}`))
        .map((k) => k.trim().length)
      return { entry, score: hits.length ? Math.max(...hits) : 0 }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)

  if (scored.length === 0) return []
  const max = scored[0].score
  return scored.filter((x) => x.score === max).slice(0, 2).map((x) => x.entry)
}