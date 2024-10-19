import React from 'react';
import BotaoLogin from './BotaoLogin';

function App() {
  return (
    <div>
      <h1>Controle de Sessão</h1>
      <BotaoLogin logado={false} />
    </div>
  );
}

export default App;