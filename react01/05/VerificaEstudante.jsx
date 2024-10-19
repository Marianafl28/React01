import React from 'react';

function VerificaEstudante({ estudante }) {
  if (estudante) {
    return <h1>Você é um estudante</h1>;
  } else {
    return <h1>Você não é um estudante</h1>;
  }
}

export default VerificaEstudante;
