import React from 'react';
import StatusUsuario from './StatusUsuario';

function App() {
  return (
    <div>
      <h1>Status do Usuário</h1>
      <StatusUsuario online={true} />
    </div>
  );
}

export default App;