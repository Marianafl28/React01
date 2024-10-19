import React, { useState } from 'react';
import VerificaEstudante from './VerificaEstudante'; 

function App() {
  const [estudante, setEstudante] = useState(true); 

  return (
    <div>
      <VerificaEstudante estudante={estudante} />
    </div>
  );
}

export default App;
