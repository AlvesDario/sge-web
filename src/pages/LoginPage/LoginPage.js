import React from "react";
import './style.css';

import Login from '../../components/Login';

const App = () => {
  return (
    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="d-none d-md-flex col bg-image"></div>
        <div class="col">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <img
                    className="logo-fatec"
                    src='https://logos-download.com/wp-content/uploads/2019/11/Fatec_Logo.png'
                    alt="Logo da Fatec"
                  />
                  <h3 class="login-heading mb-4">Acesse: </h3>
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
