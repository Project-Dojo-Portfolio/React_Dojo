import { useForm } from "../hooks/useForm";

function FormWithCustomHook() {
   const {formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
   })

   const {username, email, password} = formState
    

    return (
        <>
            <h1>Simple Formulario</h1>
            <hr />
            <input type="text"
                    className="form-control"
                    placeholder="Username"
                    name='username'
                    value={username} 
                    onChange={onInputChange}/>
            <input 
                    type="email"
                    className="form-control mt-3"
                    placeholder="kevin@gmail.com"
                    name='email'
                    value={email}
                    onChange={onInputChange}/>

            <input 
                    type="password"
                    className="form-control mt-3"
                    placeholder="Contraseña"
                    name='password'
                    value={password}
                    onChange={onInputChange}/>

            <button className="btn btn-primary" onClick={onResetForm}>Borrar</button>

            
        </>
    )
}

export default FormWithCustomHook