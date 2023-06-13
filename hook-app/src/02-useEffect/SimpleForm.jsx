import { useState } from "react"

function SimpleForm() {
    const [formState, setformState] = useState({
        username: '',
        email: ''
    })

    const {username, email} = formState;
    return (
        <>
            <h1>Simple Formulario</h1>
            <hr />
            <input type="text"
                    className="form-control"
                    placeholder="Username"
                    name={username} />
            <input 
                    type="email"
                    className="form-control mt-3"
                    placeholder="kevin@gmail.com"
                    name={email} />
        </>
    )
}

export default SimpleForm