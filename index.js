import React from 'react';
import ReactDOM from 'react-dom';

const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89]

let soma = array.reduce((soma, i) => {
    return soma + i
})

function somar(...valor){
    return valor.reduce((soma, i) => {
        return soma + i
    })
}

console.log(somar(...array));
