import React, { useContext, useEffect } from 'react';
import Layout from '../../shared/components/Layout';
import useArtigosController from './useArtigosController';
import { useHistory } from 'react-router-dom';
import { ArtigosContext } from './ArtigosContext';
import useUser from '../../shared/hooks/useUser';
import SessionService from '../../services/SessionService';

function Artigos() {
  const history = useHistory();
  const { getArtigos, deleteArtigo } = useArtigosController();
  const { artigos } = useContext(ArtigosContext);
  const isAdmin = SessionService.isAdmin();

  useEffect(() => {
    void getArtigos();
  }, []);

  const handleDelete = async (id) => {
    await deleteArtigo({ id });
    await getArtigos();
  };

  return (
    <Layout>
      <h1>Lista de Artigos</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Título</th>
            <th scope="col">Autor</th>
            <th scope="col">Ano publicação</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {artigos?.map((artigo) => (
            <tr>
              <th scope="row">{artigo.id}</th>
              <td>{artigo.titulo}</td>
              <td>{artigo.autor}</td>
              <td>{artigo.anoPublicacao}</td>
              <td>
                <button
                  style={{ marginRight: '0.5rem' }}
                  type="button"
                  className="btn btn-info"
                  onClick={() => history.push(`/artigo/${artigo.id}`)}
                >
                  Visualizar
                </button>
                {isAdmin && (
                  <button
                    style={{ marginRight: '0.5rem' }}
                    type="button"
                    className="btn btn-primary"
                    onClick={() => history.push(`/edit-artigo/${artigo.id}`)}
                  >
                    Editar
                  </button>
                )}
                {isAdmin && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(artigo.id)}
                  >
                    Apagar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Artigos;
