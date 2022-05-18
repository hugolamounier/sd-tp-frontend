import React from 'react';
import Layout from '../../shared/components/Layout';
import ArtigoService from '../../services/ArtigoService';
import FormHelper from '../../shared/helpers/FormHelper';

function Artigos() {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await ArtigoService.insertArtigo({ formData: FormHelper.formDataToJson({formData}) });

      if(response.status === 201) {
        alert('Artigo inserido com sucesso!');
        event.target.reset();
      }

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <h1>Cadastro de Artigo</h1>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input type="text" className="form-control" id="titulo" name="titulo" required />
        </div>
        <div className="mb-3">
          <label htmlFor="autor" className="form-label">
            Autor
          </label>
          <input type="text" className="form-control" id="autor" name="autor" required />
        </div>
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea className="form-control" id="descricao" name="descricao" required />
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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            URL do artigo
          </label>
          <input type="text" className="form-control" id="url" name="url" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    </Layout>
  );
}

export default Artigos;
