import Axios from "axios";
import { React, useEffect, useState } from "react";
import FileForm from './FileForm'

const App = props => {
  const [fileList, setFileList] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (!props.aluno) return;
    Axios.get(`https://jsonbox.io/box_1297d688082dece8e90d/arquivos?q=aluno:${props.aluno},link:http*`).then(({ data }) => {
      setFileList(data);
    })
  }, [props])

  return <div className="col container" style={{ backgroundColor: "#C4C4C4" }}>
    {props.aluno ? <>
      <h3><b>{props.aluno}</b></h3></> : <>
        <h3><b>Selecione um aluno</b></h3>
      </>
    }
    {fileList.length > 0 ? <>
      {fileList.map((file, index) => <div key={index} >
        <FileForm id={file._id} selected={selected} onClick={(e) => setSelected(e)} />
      </div>)}
    </> : <>
        <p>nenhum arquivo enviado por {props.aluno}</p>
      </>}

  </div>
}

export { App };