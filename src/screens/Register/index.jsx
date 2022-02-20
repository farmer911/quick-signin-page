import Input from "../../Components/Input";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  let history = useHistory();

  const saveData = data => {
    let getLocalStore = JSON.parse(localStorage.getItem("accountRegister")) || []
    const newData = [...getLocalStore, data]
    localStorage.setItem("accountRegister", JSON.stringify(newData))
    history.push('/')
  }

  return (
    <div className="container">
      <main className="main" role="main">
        <div className="main-2">
          <span className="sub-title">Register Account</span>
          <form className="page-login row g-0" onSubmit={handleSubmit(saveData)}>
            <Input
              type="text"
              label="Name"
              register={register}
              errors={errors}
              minLength={{
                value: 2,
                message: "Full name needs more than 2 characters"
              }}
              required="Full name is required" />
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
            <div className="col-12 text-center btn-bar">
              <button type="submit" className="btn btn-primary text-uppercase" style={{ fontSize: 14 }}>Register</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Register;
