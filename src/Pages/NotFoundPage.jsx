import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <p>Ruta nu exista. 404</p>
      <button onClick={handleRedirect}>Inapoi la pagina principala!</button>
    </div>
  );
}
