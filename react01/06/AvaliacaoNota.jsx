import React from 'react';

const AvaliacaoNota = ({ nota }) => {
  if (nota >= 9) {
    return <p>Excelente</p>;
  } else if (nota >= 7 && nota < 9) {
    return <p>Bom</p>;
  } else {
    return <p>Precisa melhorar</p>;
  }
};

export default AvaliacaoNota;