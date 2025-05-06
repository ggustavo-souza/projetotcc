import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateUser() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)

        axios.post('http://localhost/projetotcc/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        })
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }



    return (
        <div>
            <h1 className="mb-3">Create Users</h1>
            <form onSubmit={handleSubmit} method="post">
                <label className="form-label" for="name">Nome: </label>
                <input 
                    className="form-control" 
                    type="text"
                    name="name" 
                    onChange={handleChange} 
                    maxLength="50"
                    />

                <label className="form-label" for="email">Email: </label>
                <input 
                    className="form-control" 
                    type="text" name="email" 
                    onChange={handleChange} 
                    maxLength="50"
                    />

                <label className="form-label" for="mobile">Tel: </label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="mobile" 
                    id="mobile" 
                    onChange={handleChange} 
                    maxLength="11"
                    />
                <button className="btn btn-success mt-3">Enviar</button>
            </form>
        </div>
    )
}