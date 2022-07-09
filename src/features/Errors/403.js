import React from 'react';
import { useHistory } from 'react-router-dom';

const Forbidden = () => {
  const history = useHistory();
  return (
    <div
      className="container d-flex flex-column align-items-center py-5 justify-content-center"
      style={{ height: '100vh' }}
    >
      <h1 className="mb-5 text-primary">403 - Forbidden</h1>
      <h3 className="mb-5">Você não pode acessar está página.</h3>
      <button type="button" className="btn btn-danger" onClick={() => history.push('/login')}>
        Entendi!
      </button>
    </div>
  );
};

export default Forbidden;
