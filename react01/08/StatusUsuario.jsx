import React from 'react';

const StatusUsuario = ({ online }) => {
  return (
    <p>{online ? "Usuário online" : "Usuário offline"}</p>
  );
};

export default StatusUsuario;