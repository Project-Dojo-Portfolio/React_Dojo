import { useEffect, useState } from "react"
import { Messaje } from "./Messaje";

function SimpleForm() {
    const [formState, setformState] = useState({
        username: '',
        email: ''
    })

    const {username, email} = formState;

    const onInputChange = (event) => {
        const {name, value} = event.target;
        setformState({
            ...formState,
            [name]: value
        });
    }


    useEffect(() => {
        console.log('components created');
    },[])

    useEffect(() => {
        console.log('formState Changed');
    },[formState])

    useEffect(() => {
        console.log('email changed');
    },[email])
    

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

            <Messaje />
        </>
    )
}

export default SimpleForm