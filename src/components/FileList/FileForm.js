import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style.css";

const App = props => {
  const { id } = props;
  const [fileData, setFileData] = useState({});
  const [status, setStatus] = useState(fileData.status);
  const [notes, setNotes] = useState(fileData.notes);
  const [range, setRange] = useState(3);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    Axios.get(`https://jsonbox.io/box_1297d688082dece8e90d/arquivos/${id}`).then(({ data }) => {
      setFileData(data);
      setStatus(data.status)
      setNotes(data.notes);
    })
  }, [props]);

  // useEffect(() => {
  //   setStatus(fileData.status)
  //   setNotes(fileData.notes);
  // }, [fileData])

  return <div className=''>
    <div className='row justify-content-between'>
      <a className='' onClick={() => setShowForm(!showForm)}>
        {fileData.document}
      </a>
      <button className=''>download icon</button>
    </div>
    {showForm && <div >
      <div className='form-group'>
        <label for="customRange1">Example range</label>
        <input type="range" class="custom-range" min="0" max="5" id="customRange2" />
      </div>
      <div className='form-group'>
        <label
          for="inputStatus">
          Estado
        </label>
        <input id='inputStatus' type='text' value={status} onChange={e => setStatus(e.target.value)} className='form-control' />
      </div>
      <div className='form-group'>
        <label
          for="inputNotes">
          Anotacoes
        </label>
        <textarea id='inputNotes' value={notes} onChange={e => setNotes(e.target.value)} className='form-control' />

      </div>
      <div className='form-group align-self-end'>
        <button className='btn btn-secundary' onClick={() => setShowForm(false)}>Cancelar</button>
        <button className='btn btn-lg btn-dark btn-primary font-weight-bold mb-2'>Confirmar</button>
      </div>
    </div>}
  </div>
}

export default App;