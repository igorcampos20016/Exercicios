import { string } from "i/lib/util";
import React from 'react';
import ReactDOM from 'react-dom';

const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

let data = {
 [nome]: 'igor',
 [id]:'brasil',
 [ingredientes]:'Despeje uma xicara do molho por cima do frango. coloque no forno e asse por 35 minutos ou até ficar cozido. Retire dois garfos. ./r/nAdicione os legumes cozidos e arroz à caçarola com frango. Adicione a maior parte do molho restante, reservando um pouco parte do molho restante, reservando um pouco para  regar por cima na hora de servir. Delicadamente, misture tudo na caçarola ate combinado. Volte ao forno e cozine por 15 minutos. Retire do forno e deixe repousar 5 minutos antes de servir. Regue cada porçao com o molho restante. Aproveite!'
   
}

var request = new Request(url, {
	method: 'POST',
	body: data,
	headers: new Headers()
});

fetch(request)
.then(function() {
    // Handle response we get from the API
})