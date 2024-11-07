import React, { useState } from 'react';
import Card from './Card';
import '../styles/FormularioMusica.css';

function FormularioMusica() {
  const [nombre, setNombre] = useState('');
  const [generoMusica, setGeneroMusica] = useState('');
  const [error, setError] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleGeneroMusicaChange = (e) => {
    setGeneroMusica(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación
    if (nombre.trim().length < 3 || nombre[0] === ' ' || generoMusica.trim().length < 6) {
      setError('Por favor revisa que la información sea correcta');
      setFormularioEnviado(false);
      return;
    }

    // Limpiamos el error y mostramos los datos
    setError('');
    setFormularioEnviado(true);
  };

  return (
    <div className="formulario-container">
      <h1 className="formulario-title">Elige tu género de música favorito</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={handleNombreChange}
          className="formulario-input"
        />
        <input
          type="text"
          placeholder="Ingresa tu género de música favorito"
          value={generoMusica}
          onChange={handleGeneroMusicaChange}
          className="formulario-input"
        />
        <button type="submit" className="formulario-button">Enviar</button>
      </form>

      {/* Mostrar mensaje de error si existe */}
      {error && <p className="error-message">{error}</p>}

      {/* Renderizar el componente Card solo si el formulario fue enviado sin errores */}
      {formularioEnviado && <Card nombre={nombre} generoMusica={generoMusica} />}
    </div>
  );
}

export default FormularioMusica;

