import React from 'react';
import VerificarDesconto from './VerificarDesconto';

function App() {
  return (
    <div>
      <h1>Status do Desconto</h1>
      <VerificarDesconto temDesconto={true} />
    </div>
  );
}

export default App;