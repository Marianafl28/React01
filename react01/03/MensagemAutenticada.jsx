import React from 'react';

function MensagemAutenticada({ autenticado }) {
  if (autenticado) {
    return <h1>Bem-vindo, usuário!</h1>;
  }

  return null; 
}

export default MensagemAutenticada;
