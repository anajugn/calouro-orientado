// Coleta central das respostas dos testes (opcional).
// Deixe `action` vazio para guardar os dados só no navegador de cada pessoa.
// Cada campo recebe o código "entry.XXXXXXX" da pergunta correspondente no seu Google Forms.
export const GOOGLE_FORM = {
  action: '', // ex.: https://docs.google.com/forms/d/e/SEU_ID/formResponse
  fields: {
    tipo: '',
    pergunta: '',
    resultado: '',
    util: '',
    clareza: '',
    facilidade: '',
    utilidade: '',
    comentario: '',
  },
}