const Input = ({ type = "text", errors,label, register, required, ...rest }) => {

  return (
    <div className="col-12 mb-3">
      <div className={`form-floating ${errors[label] && 'error-text'}`}>
        <input
          className="form-control"
          type={type}
          {...register(label, { required, ...rest })}
        />
        <label htmlFor={label} className="form-label">{errors[label] ? errors[label].message : label}</label>
      </div>
    </div>
  )
}

export default Input;