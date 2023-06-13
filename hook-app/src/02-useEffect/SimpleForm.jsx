import { useEffect, useState } from "react"

function SimpleForm() {
    const [formState, setformState] = useState({
        username: '',
        email: ''
    })

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

    const {username, email} = formState;
    return (
        <>
            <h1>Simple Formulario</h1>
            <hr />
            <input type="text"
                    className="form-control"
                    placeholder="Username"
                    name={username} 
                    onChange={onInputChange}/>
            <input 
                    type="email"
                    className="form-control mt-3"
                    placeholder="kevin@gmail.com"
                    name={email} 
                    onChange={onInputChange}/>
        </>
    )
}

export default SimpleForm