import React, { useContext, useState } from 'react';
import ArtigoService from '../../services/ArtigoService';
import FormHelper from '../../shared/helpers/FormHelper';
import { ArtigosContext } from './ArtigosContext';

export default function useArtigosController(){

  const {artigos, setArtigos} = useContext(ArtigosContext);

  const getArtigos = async (search = null) => {
    try{
      const data = await ArtigoService.getArtigo({search: search});
      setArtigos(data);
    }catch(e){
      console.log(e);
    }
  }

  const getArtigo = async ({id}) => {
    try{
      return await ArtigoService.getArtigo({id});
    }catch(e){
      console.log(e);
    }
  }

  const deleteArtigo = async ({id}) => {
    try{
      const response = await ArtigoService.deleteArtigo({id});
      if(response.ok) {
        alert('Artigo removido com sucesso!');
        await getArtigos();
      }
    }catch (e) {
      console.log(e);
    }
  }

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

  const updateArtigo = async (event, id) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await ArtigoService.updateArtigo({
        formData: FormHelper.formDataToJson({formData}),
        id
      });

      if(response.status === 200) {
        alert('Artigo atualizado com sucesso!');
        event.target.reset();
      }

    } catch (e) {
      console.log(e);
    }
  };

  return {
    artigos,
    getArtigos,
    getArtigo,
    deleteArtigo,
    handleOnSubmit,
    updateArtigo,
  };
};