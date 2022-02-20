import Input from "../../Components/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

const Login = () => {

  let history = useHistory();

  const [listAccount, setListAccount] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const getLocalStore = JSON.parse(localStorage.getItem("accountRegister")) || [];
    setListAccount(getLocalStore)
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm();

  const login = data => {
    if(listAccount.length) {
      const findNameUser = listAccount.find(item => item.Email === data.Email && item.Password === data.Password)
      !findNameUser && setError(true)
      if (findNameUser) {
        history.push(`/repos/${findNameUser.Name}`)
      }
    } else setError(true)
  }

  return (
    <div className="container">
      <main className="main" role="main">
        <div className="main-2">
          <span className="sub-title">Login</span>
          <form className="page-login row g-0" onSubmit={handleSubmit(login)}>
            <Input
              type="text"
              label="Email"
              register={register}
              errors={errors}
              required="Email is required"
              pattern={{
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Email invalid"
              }}
            />
            <Input
              type="password"
              label="Password"
              register={register}
              errors={errors}
              required="Password is required"
              minLength={{
                value: 4,
                message: "Password needs more than 4 characters"
              }}
            />
            <div className="col-12 mb-3 text-end">
              <Link to="/register">Register Account</Link>
            </div>

            <span>{error && "Password and Email is not correct"}</span>
            <div className="col-12 text-center btn-bar">
              <button type="submit" className="btn btn-primary text-uppercase" style={{ fontSize: 14 }}>Login</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login;