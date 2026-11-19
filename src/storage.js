import { GOOGLE_FORM } from './config'

const KEY = 'calouro-orientado:v2'
const empty = () => ({ logs: [], feedbacks: [], avaliacoes: [] })

// Remove e-mails e sequências longas de números (CPF, matrícula, telefone) antes de guardar ou enviar.
export function redact(text, max = 300) {
  return String(text ?? '')
    .replace(/\S+@\S+\.\S+/g, '[e-mail]')
    .replace(/\d[\d.\-\s]{5,}\d/g, '[número]')
    .slice(0, max)
}

function read() {
  try {
    return { ...empty(), ...(JSON.parse(localStorage.getItem(KEY)) ?? {}) }
  } catch {
    return empty()
  }
}

function write(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    /* sem armazenamento disponível: ignora */
  }
}

function sendRemote(row) {
  const { action, fields } = GOOGLE_FORM
  if (!action) return
  const body = new URLSearchParams()
  for (const [key, entry] of Object.entries(fields)) {
    if (entry && row[key] != null) body.append(entry, String(row[key]))
  }
  try {
    fetch(action, { method: 'POST', mode: 'no-cors', body }).catch(() => {})
  } catch {
    /* sem rede: ignora */
  }
}

const toRow = {
  logs: (r) => ({ tipo: 'pergunta', pergunta: r.question, resultado: r.result }),
  feedbacks: (r) => ({ tipo: 'feedback', pergunta: r.question, util: r.helpful ? 'sim' : 'nao' }),
  avaliacoes: (r) => ({
    tipo: 'avaliacao',
    clareza: r.clareza,
    facilidade: r.facilidade,
    utilidade: r.utilidade,
    comentario: r.comentario,
  }),
}

// type: 'logs' | 'feedbacks' | 'avaliacoes'
export function addRecord(type, record) {
  const clean = { ...record }
  if (clean.question != null) clean.question = redact(clean.question)
  if (clean.comentario != null) clean.comentario = redact(clean.comentario, 600)
  const data = read()
  data[type].push({ ts: new Date().toISOString(), ...clean })
  write(data)
  sendRemote(toRow[type](clean))
}

const COLS = ['tipo', 'data', 'pergunta', 'resultado', 'util', 'clareza', 'facilidade', 'utilidade', 'comentario']

function esc(v) {
  const s = String(v ?? '')
  const safe = /^[=+\-@]/.test(s) ? `'${s}` : s // evita fórmulas ao abrir no Excel
  return `"${safe.replace(/"/g, '""')}"`
}

export function exportCSV() {
  const d = read()
  const rows = [
    ...d.logs.map((r) => ({ tipo: 'pergunta', data: r.ts, pergunta: r.question, resultado: r.result })),
    ...d.feedbacks.map((r) => ({ tipo: 'feedback', data: r.ts, pergunta: r.question, util: r.helpful ? 'sim' : 'nao' })),
    ...d.avaliacoes.map((r) => ({
      tipo: 'avaliacao',
      data: r.ts,
      clareza: r.clareza,
      facilidade: r.facilidade,
      utilidade: r.utilidade,
      comentario: r.comentario,
    })),
  ]
  const csv = [COLS.join(','), ...rows.map((r) => COLS.map((c) => esc(r[c])).join(','))].join('\n')
  const url = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'calouro-orientado-dados.csv'
  a.click()
  URL.revokeObjectURL(url)
}