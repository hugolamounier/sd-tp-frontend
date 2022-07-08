import React from 'react';
import FormHelper from '../../shared/helpers/FormHelper';
import AuthenticationService from '../../services/AuthenticationService';

const Login = () => {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    await AuthenticationService.Authenticate({
      formData: FormHelper.formDataToJson({ formData }),
    });
  };

  return (
    <div
      className="bg-light d-flex align-items-center justify-content-center"
      style={{ height: '100vh', overflowY: 'hidden' }}
    >
      <div className="py-5 border-3 border-danger" style={{ width: '900px' }}>
        <div className="card shadow border-0 bg-light">
          <div className="card-body p-5">
            <h1 className="card-title text-center mb-5">Login</h1>
            <div>
              <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Usuário
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Logar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
