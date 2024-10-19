import React from 'react';
import MensagemAutenticada from './MensagemAutenticada'; 

function App() {
  const usuarioAutenticado = true; 

  return (
    <div>
      <MensagemAutenticada autenticado={usuarioAutenticado} />
    </div>
  );
}

export default App;
