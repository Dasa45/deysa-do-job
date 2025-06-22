function Chat() {
  const hora = new Date().getHours();

  let saudacao = '';
  if (hora < 12) {
    saudacao = 'Bom dia';
  } else if (hora < 18) {
    saudacao = 'Boa tarde';
  } else {
    saudacao = 'Boa noite';
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🤖 {saudacao}, eu sou a Deysa!</h1>
      <p>Tô pronta pra te ajudar no job — só dizer o que precisa!</p>
    </div>
  );
}

export default Chat;