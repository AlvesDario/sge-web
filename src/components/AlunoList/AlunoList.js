import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css'
const App = props => {
  const [alunoList, setAlunoList] = useState([]);

  const logedInWith = sessionStorage.getItem('logedInWith');

  useEffect(() => {
    Axios.get(`https://jsonbox.io/box_1297d688082dece8e90d/alunos?q=avaliador:${logedInWith}`).then(({ data }) => {
      setAlunoList(data.filter(aluno => aluno.arquivos.length > 0))
    })
  }, [props]);

  return <div className="col container">
    <ul>
      {alunoList.map(aluno => 
      <div className={props.selected === aluno.email?'bg-gray':'bg-light-gray'} onClick={() => props.onSelect(aluno.email)}>
        <a >{aluno.email}</a>
      </div>)}
    </ul>
  </div>
};

export { App };