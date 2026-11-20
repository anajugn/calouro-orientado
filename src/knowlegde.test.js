import { describe, it, expect } from 'vitest'
import { findAnswers, knowledge, quickQuestions, suggestionGroups } from './knowledge'

const firstId = (q) => findAnswers(q)[0]?.id
const menu = suggestionGroups.flatMap((g) => g.itens)

describe('menu de perguntas', () => {
  it.each(menu)('"%s" -> %s', (q, id) => {
    expect(firstId(q)).toBe(id)
  })

  it('atalhos existem no menu', () => {
    const perguntas = menu.map(([q]) => q)
    for (const q of quickQuestions) expect(perguntas).toContain(q)
  })
})

describe('perguntas livres de calouros', () => {
  it.each([
    ['Qual o prazo de empréstimo?', 'emprestimo'],
    ['Posso justificar uma falta com atestado?', 'abono-faltas'],
    ['Quando é a segunda chamada?', 'avaliacao'],
    ['Como assino meu contrato de estágio?', 'estagio'],
    ['Quero ser monitor de uma disciplina', 'monitoria'],
    ['Quais projetos de extensão existem?', 'extensao-projetos'],
    ['Preciso de ajuda com o AVA', 'ava'],
    ['Como cancelo meu curso?', 'trancamento'],
    ['Como transfiro de curso?', 'transferencia-aproveitamento'],
    ['Onde fica o estacionamento?', 'campus-servicos'],
    ['Como falar com a ouvidoria?', 'ouvidoria'],
    ['Qual o horário de atendimento da CRA?', 'setores'],
    ['Qual o WhatsApp da UCSal?', 'setores'],
    ['Onde fica o campus?', 'salas-blocos'],
    ['Quero meu diploma', 'documentos-colacao'],
    ['Tem bolsa de estudo?', 'financiamento'],
    ['Como vejo o calendário acadêmico?', 'calendario'],
    ['Estou pensando em me matar', 'plenus'],
    ['Como faço o aditamento do FIES?', 'fies-aditamento'],
    ['Posso renovar o FIES depois do prazo?', 'fies-aditamento'],
    ['Onde pego o DRM?', 'fies-cpsa'],
    ['Trancar a matrícula suspende o FIES?', 'fies-suspensao'],
    ['Como funciona a dilatação do FIES?', 'fies-dilatacao'],
    ['Quero encerrar meu contrato do FIES', 'fies-encerramento'],
    ['O boleto do FIES venceu, e agora?', 'fies-coparticipacao'],
    ['Como pago a mensalidade do FIES?', 'fies-coparticipacao'],
    ['Quero aumentar meu financiamento para 100%', 'fies-percentual'],
    ['Sou do FIES Social, o que muda?', 'fies-percentual'],
    ['A UCSal pode cobrar a diferença da mensalidade?', 'fies-compromisso'],
    ['Não consigo acessar o SIFESWeb', 'fies-sifes'],
    ['Como me inscrevo no FIES?', 'financiamento'],
    ['Quais os deveres de quem tem FIES?', 'fies'],
  ])('%s -> %s', (q, id) => {
    expect(firstId(q)).toBe(id)
  })
})

describe('regras do projeto', () => {
  it('ignora acentos e maiúsculas', () => {
    expect(firstId('COMO FAÇO MINHA REMATRÍCULA?')).toBe('rematricula')
  })

  it('não inventa resposta para assuntos fora da base', () => {
    expect(findAnswers('Qual a capital da França?')).toEqual([])
  })

  it('ids são únicos', () => {
    const ids = knowledge.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('toda entrada tem fonte e palavras-chave', () => {
    for (const e of knowledge) {
      expect(e.fontes.length, e.id).toBeGreaterThan(0)
      expect(e.keywords.length, e.id).toBeGreaterThan(0)
    }
  })

  it('entradas verificadas têm conteúdo', () => {
    for (const e of knowledge.filter((x) => x.status === 'verified')) {
      expect(e.steps.length, e.id).toBeGreaterThan(0)
    }
  })

  it('entradas parciais dizem o que falta confirmar', () => {
    for (const e of knowledge.filter((x) => x.status === 'partial')) {
      expect(e.pending.length, e.id).toBeGreaterThan(0)
    }
  })

  it('entradas de FIES citam a cartilha da CAIXA', () => {
    for (const e of knowledge.filter((x) => x.id.startsWith('fies'))) {
      expect(e.fontes.some((f) => f.tipo === 'cartilha'), e.id).toBe(true)
    }
  })
})