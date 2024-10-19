import React from 'react';

const VerificarDesconto = ({ temDesconto }) => {
  return (
    <p>{temDesconto ? "Desconto Aplicado" : "Sem Desconto"}</p>
  );
};

export default VerificarDesconto;