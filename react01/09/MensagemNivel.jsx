import React from 'react';

const MensagemNivel = ({ nivel }) => {
  return (
    <p>
      {nivel === "iniciante"
        ? "Bem-vindo, iniciante!"
        : nivel === "intermediário"
        ? "Você está progredindo!"
        : nivel === "avançado"
        ? "Parabéns, especialista!"
        : "Nível não reconhecido"}
    </p>
  );
};

export default MensagemNivel;