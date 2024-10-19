import React from 'react';
import VerificaIdade from './VerificaIdade'; 

function App() {
  const idadeUsuario = 18;

  return (
    <div>
      <VerificaIdade idade={idadeUsuario} />
    </div>
  );
}

export default App;
