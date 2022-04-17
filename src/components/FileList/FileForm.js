import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style.css";

const App = props => {
  const { id } = props;
  const [fileData, setFileData] = useState({});
  const [status, setStatus] = useState(fileData.status);
  const [notes, setNotes] = useState('Revisar documento enviado');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    Axios.get(`https://jsonbox.io/box_1297d688082dece8e90d/arquivos/${id}`).then(({ data }) => {
      // console.log(data)
      // const arquivosenviados = data.map((arquivo) => arquivo.link != '');
      setFileData(data);
      // setStatus(data.status);
      // setNotes(data.notes);
    })
  }, [props]);

  // useEffect(() => {
  //   setStatus(fileData.status)
  //   setNotes(fileData.notes);
  // }, [fileData])

  return <div className='container' style={{backgroundColor:"#C4C4C4"}}>
    <div style={{boxShadow:"2px 2px 6px 2px rgba(0,0,0,0.25)"}} className={`row justify-content-between ${showForm ? 'list-item selected-list-item' : 'list-item'}`}>
      <a className='file-name' onClick={() => { setShowForm(!showForm); props.onClick(fileData.document) }}>
        {fileData.document}
      </a>
      <button className='btn btn-secundary' style={{ backgroundColor: 'white' }} onClick={() => window.open(fileData.link, "_blank")} >
        <img width='20' src='https://image.flaticon.com/icons/png/512/0/532.png' />
      </button>
    </div>
    {showForm && <div style={{backgroundColor:"#F6F6F6", marginBottom:10}} className="container" >
      <div className='form-group'>
        <label
          htmlFor="inputStatus">
          Estado
        </label>
        <div className="form-group" style={{boxShadow:"2px 2px 6px 2px rgba(0,0,0,0.25)"}}>
          <select id='inputStatus' className='form-control' value={status} onChange={e => {setStatus(e.target.value)}} >
            <option>Correcao</option>
            <option>Concluido</option>
          </select>
        </div>
      </div>
      <div className='form-group' >
        <label
          htmlFor="inputNotes">
          Anotacoes
        </label>
        <textarea style={{boxShadow:"2px 2px 6px 2px rgba(0,0,0,0.25)"}} id='inputNotes' value={notes} onChange={e => setNotes(e.target.value)} className='form-control' />

      </div>
      <div className='form-group text-right'>
        <button style={{boxShadow:"2px 2px 6px 2px rgba(0,0,0,0.25)"}} className='btn btn-secundary font-weight-bold mb-2' onClick={() => setShowForm(false)}>Cancelar</button>
        <button style={{boxShadow:"2px 2px 6px 2px rgba(0,0,0,0.25)", marginLeft:10}} className='btn btn-lg btn-dark btn-primary font-weight-bold mb-2'>Confirmar</button>
      </div>
    </div>}
  </div>
}

export default App;