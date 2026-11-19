import { useEffect, useRef, useState } from 'react'
import { canais, findAnswers, MANUAL_URL, quickQuestions, suggestionGroups } from './knowledge'
import { addRecord } from './storage'
import { GOOGLE_FORM } from './config'

const FONTES = {
  manual: 'Manual do Aluno UCSal 2025',
  base: 'Base de conhecimento do projeto (Portal do Aluno)',
}

const welcome = {
  from: 'bot',
  text: 'Olá! Eu sou o Calouro Orientado 👋 Mostro o caminho dentro do Portal do Aluno e indico os setores da UCSal. Respondo só com informações confirmadas; quando algo ainda não foi confirmado, eu aviso e mostro onde buscar. Digite sua dúvida ou toque em "Temas" para ver os assuntos.',
}

function A({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  )
}

function Canais() {
  return (
    <ul className="canais">
      {canais.map((c) => (
        <li key={c.label}>{c.href ? <A href={c.href}>{c.label}</A> : c.label}</li>
      ))}
    </ul>
  )
}

function Fontes({ fontes }) {
  return (
    <p className="source">
      Fonte:{' '}
      {fontes.map((f, i) => (
        <span key={i}>
          {i > 0 && '; '}
          {f.tipo === 'manual' ? (
            <A href={MANUAL_URL}>
              {FONTES.manual}
              {f.secao ? `, seção ${f.secao}` : ''}
            </A>
          ) : (
            FONTES.base
          )}
        </span>
      ))}
    </p>
  )
}

function Answer({ e }) {
  const List = e.ordered === false ? 'ul' : 'ol'
  const ok = e.status === 'verified'
  return (
    <section className="answer">
      <h3>
        {e.title}
        <span className={`badge ${ok ? 'ok' : 'warn'}`}>{ok ? 'Verificado' : 'Parcial'}</span>
      </h3>
      <p>{e.intro}</p>
      {e.steps.length > 0 && (
        <List>
          {e.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </List>
      )}
      {e.pending && (
        <p className="pending">
          <strong>Ainda não confirmado:</strong> {e.pending}
        </p>
      )}
      {!ok && <Canais />}
      {e.notes.length > 0 && (
        <ul className="notes">
          {e.notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      )}
      {e.links.length > 0 && (
        <p className="links">
          {e.links.map((l) => (
            <A key={l.href} href={l.href}>
              {l.label}
            </A>
          ))}
        </p>
      )}
      <Fontes fontes={e.fontes} />
    </section>
  )
}

function Feedback({ question }) {
  const [voted, setVoted] = useState(null)

  function vote(helpful) {
    if (voted !== null) return
    setVoted(helpful)
    addRecord('feedbacks', { question, helpful })
  }

  if (voted !== null) return <p className="fb-thanks">Obrigado pelo retorno!</p>
  return (
    <div className="feedback">
      <span>Isso ajudou?</span>
      <button onClick={() => vote(true)} aria-label="Ajudou">👍</button>
      <button onClick={() => vote(false)} aria-label="Não ajudou">👎</button>
    </div>
  )
}

function Menu({ onPick }) {
  return (
    <>
      {suggestionGroups.map((g) => (
        <div key={g.titulo} className="group">
          <h4>{g.titulo}</h4>
          <div className="group-chips">
            {g.itens.map(([q]) => (
              <button key={q} onClick={() => onPick(q)}>{q}</button>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

function BotMessage({ msg }) {
  if (msg.text) return <p>{msg.text}</p>
  if (msg.entries) {
    return (
      <>
        {msg.entries.map((e) => (
          <Answer key={e.id} e={e} />
        ))}
        <Feedback question={msg.question} />
      </>
    )
  }
  return (
    <>
      <p>
        Não encontrei essa informação na minha base e prefiro não te passar nada sem confirmação. Tente reformular a
        pergunta ou use o botão "Temas". Para confirmar com a universidade:
      </p>
      <Canais />
      <Feedback question={msg.question} />
    </>
  )
}

export default function App() {
  const [messages, setMessages] = useState([welcome])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showTemas, setShowTemas] = useState(false)
  const endRef = useRef(null)
  const timer = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, typing])

  useEffect(() => () => clearTimeout(timer.current), [])

  useEffect(() => {
    if (!showTemas) return
    const onKey = (e) => e.key === 'Escape' && setShowTemas(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showTemas])

  function send(question) {
    const q = question.trim()
    if (!q || typing) return
    setShowTemas(false)
    setMessages((m) => [...m, { from: 'user', text: q }])
    setInput('')
    setTyping(true)

    timer.current = setTimeout(() => {
      const entries = findAnswers(q)
      let reply
      let result
      if (entries.length === 0) {
        result = 'sem_resposta'
        reply = { from: 'bot', fallback: true, question: q }
      } else {
        result = entries.some((e) => e.status !== 'verified') ? 'parcial' : 'respondida'
        reply = { from: 'bot', entries, question: q }
      }
      addRecord('logs', { question: q, result })
      setMessages((m) => [...m, reply])
      setTyping(false)
    }, 450)
  }

  function reset() {
    clearTimeout(timer.current)
    setTyping(false)
    setShowTemas(false)
    setInput('')
    setMessages([welcome])
  }

  return (
    <div className="app">
      <header>
        <div>
          <h1>Calouro Orientado</h1>
          <span>Universidade Católica do Salvador</span>
        </div>
        <div className="header-actions">
          <button className="btn-header" onClick={reset}>Nova conversa</button>
        </div>
      </header>

      <div className="notice">
        Apoio à orientação: não substitui os canais oficiais da UCSal. Não digite matrícula, CPF ou senha.{' '}
        {GOOGLE_FORM.action
          ? 'Perguntas são enviadas, sem identificação, à equipe do projeto para melhorar o protótipo.'
          : 'Perguntas ficam guardadas só neste navegador.'}
      </div>

      <main className="chat" aria-live="polite">
        {messages.map((msg, i) => (
          <div key={i} className={`bubble ${msg.from}`}>
            {msg.from === 'bot' ? <BotMessage msg={msg} /> : <p>{msg.text}</p>}
          </div>
        ))}
        {typing && (
          <div className="bubble bot" aria-label="digitando">
            <span className="dots"><span /><span /><span /></span>
          </div>
        )}
        <div ref={endRef} />
      </main>

      {showTemas && (
        <div id="temas" className="temas-panel">
          <Menu onPick={send} />
        </div>
      )}

      <div className="chips">
        <button
          className="more"
          onClick={() => setShowTemas((v) => !v)}
          aria-expanded={showTemas}
          aria-controls="temas"
        >
          Temas {showTemas ? '▴' : '▾'}
        </button>
        {quickQuestions.map((s) => (
          <button key={s} onClick={() => send(s)}>{s}</button>
        ))}
      </div>

      <form
        className="composer"
        onSubmit={(e) => {
          e.preventDefault()
          send(input)
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua dúvida…"
          aria-label="Digite sua dúvida"
          autoComplete="off"
          enterKeyHint="send"
          maxLength={300}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}