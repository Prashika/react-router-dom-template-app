import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import { useForm } from "react-hook-form";

function FormValidation() {
    {/* register: To register the input, we’ll pass the register method into the input field  */ }
    {/*handleSubmit: manages form submission */ }
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegistration = (data) => {
        console.log('data-', data);
        data && alert('Submitted Successfully!!!');
    }

    const onErrors = (errors) => { console.log('errors-', errors); }

    return (
        <div className="container">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>Validate form with react-hook-form </h3>
                        {/* handleSubmit needs to be passed as the value to the onSubmit prop of the form component */}
                <form onSubmit={handleSubmit(handleRegistration, onErrors)}>
                        {/* The first function passed as an argument will be invoked along with the registered field values
                        when the form validation is successful. 
                        The second function is called with errors when the validation fails. */}

                    <div>
                        <label className="labels">Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* The register method helps you register an input field into React Hook Form 
                         *older than v7 versions: <input type="text" name="firstName" ref={register} />*/}
                        {/* spread operator enables strict type checking in Forms with Typescript:-- */}
                        <input type="text" name="Name" {...register('Name', { required: true })} />
                        <label className="errorMessage">{errors.Name && 'Name is required!'}</label>
                    </div>

                    <div>
                        <label className="labels">Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="email" {...register("email", { required: true })} />
                        <label className="errorMessage"> {errors.email && 'Email is required!'}</label>
                    </div>

                    <div>
                        <label className="labels">Phone:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="number" name="phone" {...register("phone", { required: true, minLength: 10, maxLength: 10 })} />
                        <label className="errorMessage">{errors.phone && 'Phone Number is required! Maximum length: 10'}</label>
                    </div>

                    <div>
                        <label className="labels">Subject:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="subject" {...register("subject", { required: true })} />
                        <label className="errorMessage">{errors.subject && 'Subject is required!'}</label>
                    </div>

                    <div>
                        <label className="labels">Message:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="message" {...register("message", { required: true })} />
                        <label className="errorMessage">{errors.message && 'Message is required!'}</label>
                    </div>
                    <center>
                        <div>
                            <input type="submit" name="submit" />
                        </div>
                    </center>
                </form>

            </header>
        </div>
    );
}

export default FormValidation;
