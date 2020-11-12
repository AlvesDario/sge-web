import Axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = 
const DB_URL = 

const Login = () => {
  const [email, setEmail] = useState('');
  const [verifyCode, setVerifyCode] = useState('')
  const [code, setCode] = useState('');
  const [nome, setNome] = useState('');

  const sendEmail = async (cod) => {
    let user = await checkEmail(email);
    if (user == undefined) return alert("Email invalido");
    return await Axios.post(API_URL + '/sendMail', { email: email, code: cod }).then(() => {
      alert("Foi enviado um código de verificação para seu e-mail");
      setNome(user.nome);
      setCode(cod);
      return true;
    }).catch(err => {
      return false;
    })
  }

  const generateRandomKey = () => {
    let randomNumber = '' + Math.floor(Math.random() * 999999)
    randomNumber = ('0'.repeat(6 - randomNumber.length)) + randomNumber;
    return randomNumber;
  }

  const checkEmail = async () => {
    return await Axios.get(DB_URL + 'avaliadores').then(grupos => {
      if (Array.isArray(grupos.data) && grupos.data.length) {
        let [grupo] = grupos.data.filter(d => d.email.includes(email))
        return grupo;
      }
    })
  }

  const handleClick = async () => {

    // if (!email.toUpperCase().includes('@FATEC.SP.GOV.BR'))
    //   return alert('Precisa ser um email @fatec.sp.gov.br');

    if (code) {
      if (code === verifyCode) {
        sessionStorage.setItem('logedInWith', nome);
        location.href = '/home';
      } else {
        return alert('Codigo errado');
      }
    }


    // enviar email
    sendEmail(generateRandomKey());
  }

  useEffect(() => {
    if (code)
      setCode('');
  }, [email])

  return (
    <>
      <div className="form-label-group">
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Endereço de email"
          value={email}
          onChange={e => { setEmail(e.target.value) }}
        />

        <label
          for="inputEmail">
          Email
        </label>
      </div>

      <div className="form-label-group" hidden={!code}>
        <input
          type="codSeguranca"
          id="inputcodSeguranca"
          className="form-control"
          placeholder="codSeguranca"
          value={verifyCode}
          onChange={e => setVerifyCode(e.target.value)}
        />

        <label
          for="inputcodSeguranca">
          Codigo de verificação
        </label>
      </div>

      <div>
        <button
          className="btn btn-lg btn-dark btn-block btn-login text-uppercase font-weight-bold mb-2"
          onClick={handleClick}
        >
          Acessar
        </button>
      </div>
    </>
  );
};

export { Login };
