import React from 'react';
import { useHistory } from 'react-router-dom';
import useArtigosController from '../../../../features/Artigos/useArtigosController';
import SessionService from '../../../../services/SessionService';

function Navbar() {
  const history = useHistory();
  const { getArtigos } = useArtigosController();
  const isAdmin = SessionService.isAdmin();

  const handleOnSearchClick = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const search = formData.get('search');

      await getArtigos(search);
    } catch (e) {}
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/login">
            Gestão de Artigos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-link nav-link"
                  onClick={() => history.push('/')}
                >
                  Home
                </button>
              </li>
              {isAdmin && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-link nav-link"
                    onClick={() => history.push('/add-artigo')}
                  >
                    Adicionar artigo
                  </button>
                </li>
              )}
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-link nav-link"
                  onClick={() => {
                    SessionService.clearSessionStorage();
                    history.push('/login');
                  }}
                >
                  Sair
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => handleOnSearchClick(e)}>
              <input
                name="search"
                className="form-control me-2"
                type="search"
                placeholder="Pesquisa"
                aria-label="Pesquisa"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
