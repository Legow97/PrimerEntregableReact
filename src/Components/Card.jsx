//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react';
import '../styles/Card.css'; // Importa el archivo CSS

function Card({ nombre, generoMusica }) {
  return (
    <div className="card-container">
      <h2 className="card-title">Hola {nombre}!</h2>
      <p>Sabemos que tu género de música favorito es:</p>
      <div className="card-genre">
        {generoMusica}
      </div>
    </div>
  );
}

export default Card;



