import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import FileList from "../../components/FileList";
import AlunoList from "../../components/AlunoList";

const App = props => {
  const [selected, setSelected] = useState('')

  return <>
  <div className='row'>
    <AlunoList onSelect={e => setSelected(e)} selected={selected}/>
    <FileList aluno={selected} />
  </div>
  </>
}

export { App };