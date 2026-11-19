import { describe, it, expect } from 'vitest'
import { redact } from './storage'

describe('redact', () => {
  it('apaga CPF, telefone e e-mail', () => {
    const out = redact('meu cpf é 123.456.789-00, fone 71 3206-7800, email a@b.com')
    expect(out).not.toMatch(/\d{3}/)
    expect(out).toContain('[número]')
    expect(out).toContain('[e-mail]')
  })

  it('mantém perguntas normais', () => {
    expect(redact('Onde vejo minhas notas?')).toBe('Onde vejo minhas notas?')
  })

  it('limita o tamanho', () => {
    expect(redact('a'.repeat(500)).length).toBe(300)
  })
})