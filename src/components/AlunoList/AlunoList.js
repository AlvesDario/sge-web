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
    <h3><b>Alunos</b></h3>
    <div >
      {alunoList.map((aluno, index) =>
        <div key={index} className={props.selected === aluno.email ? 'list-item selected-list-item' : 'list-item'} onClick={() => props.onSelect(aluno.email)}>
          <a >{aluno.email}</a>
        </div>)}
    </div>

  </div>
};

export { App };