const messages = {
  geral: 'Olá! Gostaria de saber mais sobre as soluções da Click TI Suporte.',
  ti: 'Olá! Preciso de suporte de TI para minha empresa. Podemos conversar?',
  sites: 'Olá! Gostaria de um orçamento para criação ou manutenção de um site.',
  automacoes: 'Olá! Gostaria de conhecer as automações de WhatsApp e Instagram para meu negócio.'
};
document.querySelectorAll('[data-contact]').forEach(link => {
  link.href = 'https://wa.me/5511999929318?text=' + encodeURIComponent(messages[link.dataset.contact]);
});
const replies = {
  ti: ['Preciso de suporte de TI.', 'Claro! O problema está em um computador, na rede ou em outro equipamento? Com essas informações, uma pessoa da equipe pode avaliar o atendimento.'],
  sites: ['Quero criar um site.', 'Vamos entender sua ideia! Qual é o seu tipo de negócio e o que você gostaria de apresentar no site?'],
  automacoes: ['Quero automatizar meu atendimento.', 'Ótimo! Você atende pelo WhatsApp, Instagram ou pelos dois? Vamos entender quais perguntas mais se repetem na sua rotina.']
};
const answer = document.querySelector('.demo-answer');
const reset = document.querySelector('.reset-demo');
const options = document.querySelectorAll('[data-demo]');
options.forEach(button => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    options.forEach(option => option.setAttribute('aria-pressed', String(option === button)));
    answer.replaceChildren();
    replies[button.dataset.demo].forEach((text, index) => {
      const bubble = document.createElement('p');
      bubble.className = 'bubble ' + (index ? 'received' : 'sent');
      bubble.textContent = text;
      answer.append(bubble);
    });
    reset.hidden = false;
  });
});
reset.addEventListener('click', () => {
  const hint = document.createElement('p');
  hint.className = 'demo-hint';
  hint.textContent = '↑ Escolha uma opção para ver o próximo passo.';
  answer.replaceChildren(hint);
  options.forEach(button => button.setAttribute('aria-pressed', 'false'));
  reset.hidden = true;
  options[0].focus();
});
document.querySelector('#year').textContent = new Date().getFullYear();
