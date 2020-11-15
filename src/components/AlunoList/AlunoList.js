import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = props => {
  const [alunoList, setAlunoList] = useState([]);

  const logedInWith = sessionStorage.getItem('logedInWith');

  useEffect(() => {
    Axios.get(`https://jsonbox.io/box_1297d688082dece8e90d/alunos?q=avaliador:${logedInWith}`).then(({ data }) => {
      setAlunoList(data.filter(aluno => aluno.arquivos.length > 0))
    })
  }, [props]);

  return <div className="col">
    <ul>
      {alunoList.map(aluno => <li><a onClick={() => props.onSelect(aluno.email)} >{aluno.email}</a></li>)}
    </ul>
  </div>
};

export { App };