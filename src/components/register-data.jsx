import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import { useForm } from "react-hook-form";

function Register() {
  {/* register: To register the input, we’ll pass the register method into the input field  */ }
  {/* handleSubmit: manages form submission */ }
  const { register, handleSubmit } = useForm();

  const handleRegistration = (data) => {
    console.log('dd', data);
    data && alert('Fields registered in react-hook-form successfully!!')
  }

  const onErrors = (errors) => console.error('err', errors);
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Registering input fields into react-hook-form</h3>
        {/* handleSubmit needs to be passed as the value to the onSubmit prop of the form component */}
        <form onSubmit={handleSubmit(handleRegistration, onErrors)}>

          <div>
            <label>Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            {/* The register method helps you register an input field into React Hook Form 
            older than v7 versions: <input type="text" name="firstName" ref={register} />*/}
            <input type="text" name="firstName" {...register('firstName')} />
            {/* spread operator enables strict type checking in Forms with Typescript */}
          </div>
          <br />
          <div>
            <label>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="email" {...register("email")} />
          </div>

          <div>
            <label>Phone:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" name="phone" {...register("phone")} />
          </div>

          <div>
            <label>Subject:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="subject" {...register("subject")} />
          </div>

          <div>
            <label>Message:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="message" {...register("message")} />
          </div>

          <center>
            <div>
              <button className='button'>Register fields in react-hook-form</button>
            </div>
          </center>

        </form>
      </header>
    </div>
  );
}

export default Register;
