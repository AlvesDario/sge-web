import Axios from "axios";
import { React, useEffect, useState } from "react";
import FileForm from './FileForm'

const App = props => {
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    if(!props.aluno) return;
    Axios.get(`https://jsonbox.io/box_1297d688082dece8e90d/arquivos?q=aluno:${props.aluno}`).then(({ data }) => {
      setFileList(data);
    })
  }, [props])

  return <div className="col">
    <h3>{props.aluno}</h3>
      {fileList.map((file, index) => <div key={index}>
        <FileForm id={file._id} />
      </div>)}
  </div>
}

export { App };