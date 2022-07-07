import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <div className="p-5 text-center">
      <h1>Bem-vindo a Gestão de Artigos</h1>
      <div className="pt-5">
        <button type="button" className="btn btn-primary" onClick={() => history.push('/login')}>
          Acessar o sistema
        </button>
      </div>
    </div>
  );
};

export default Home;
