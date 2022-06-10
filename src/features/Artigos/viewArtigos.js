import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../shared/components/Layout';
import useArtigosController from './useArtigosController';

function ViewArtigos() {
  const [artigo, setArtigo] = useState([]);
  const {getArtigo} = useArtigosController();
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

  return (
    <Layout>
      <h1 style={{marginBottom: '1rem'}}>Artigo: #{loadedArtigo?.id}</h1>
      <h4><b>Título:</b> {loadedArtigo?.titulo}</h4>
      <h4><b>Autor:</b> {loadedArtigo?.autor}</h4>
      <h4><b>Ano de publicação:</b> {loadedArtigo?.anoPublicacao}</h4>
      <h4 style={{marginBottom: '2rem'}}><b>URL:</b> <a href={loadedArtigo?.url} target="_blank">{loadedArtigo?.url}</a></h4>
      <p>
        <h5>Descrição</h5>
        {loadedArtigo?.descricao}
      </p>
    </Layout>
  );
}

export default ViewArtigos;
