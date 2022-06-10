import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../shared/components/Layout';
import useArtigosController from './useArtigosController';

function EditArtigos() {
  const [artigo, setArtigo] = useState([]);
  const {getArtigo, updateArtigo} = useArtigosController();
  const { id } = useParams();

  useEffect(() => {
    if(id)
    {
      getArtigo(id).then((data) => {
        setArtigo(data);
      });
    }
  }, []);

  useEffect(() => {
    if(id)
    {
      getArtigo(id).then((data) => {
        setArtigo(data);
      });
    }
  }, [id]);

  const loadedArtigo = artigo[0];

  const handleOnSubmit = async (e) => {
    await updateArtigo(e, id).then(() => {
      getArtigo(id).then((data) => {
        setArtigo(data);
      });
    })
  }

  return (
    <Layout>
      <h1>Artigo: #{loadedArtigo?.id}</h1>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input type="text" className="form-control" id="titulo" name="titulo" defaultValue={loadedArtigo?.titulo} required />
        </div>
        <div className="mb-3">
          <label htmlFor="autor" className="form-label">
            Autor
          </label>
          <input type="text" className="form-control" id="autor" name="autor" defaultValue={loadedArtigo?.autor} required />
        </div>
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea className="form-control" id="descricao" name="descricao" defaultValue={loadedArtigo?.descricao} required />
        </div>
        <div className="mb-3">
          <label htmlFor="anoPublicacao" className="form-label">
            Ano de publicação
          </label>
          <input
            type="number"
            minLength={4}
            maxLength={4}
            className="form-control"
            id="anoPublicacao"
            name="anoPublicacao"
            defaultValue={loadedArtigo?.anoPublicacao}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            URL do artigo
          </label>
          <input type="text" className="form-control" id="url" name="url" defaultValue={loadedArtigo?.url} required />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    </Layout>
  );
}

export default EditArtigos;
