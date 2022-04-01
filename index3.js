import { stripYamlComments } from 'config/parser';
import React from 'react';

const ListaDeNomes = () => {
  const  nomes = ['Baked salmon with fennel & fennek', 'Caju spiced fish tacos', 'Escovitch','Fish pie','Rouille','Garides','Grilled Portuguese','Honey Teriyaki','Kedgere','Kung Po' ]

  return (
    <ul>
      { nomes.map( (nome) => <li key = { nome.toString() }>{ nome }</li>) }
    </ul>
  );
}

export default ListaDeNomes;