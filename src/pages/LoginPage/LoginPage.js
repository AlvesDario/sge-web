import React from "react";
import './style.css';

import Login from '../../components/Login';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col bg-image"></div>
        <div className="col">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <img
                    className="logo-fatec"
                    src='https://logos-download.com/wp-content/uploads/2019/11/Fatec_Logo.png'
                    alt="Logo da Fatec"
                  />
                  <h3 className="login-heading mb-4">Acesse: </h3>
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
