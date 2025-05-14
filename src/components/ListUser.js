import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ListUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/projetotcc/api/users').then(function(response){
            console.log(response.data);
            setUsers(response.data);
        });
    }

    return (
        <div>
            <h1 className="mb-3">List Users</h1>
            {users.map((user, key) => 
                <div key={key}>
                    <div className="card mt-4">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{user.id}
                                <Link to={`user/${user.id}/edit`} className="btn btn-outline-danger ms-2 me-2">Edit </Link>
                                <button className="btn btn-outline-danger">Delete</button>
                            </li>
                            <li className="list-group-item">{user.name}</li>
                            <li className="list-group-item">{user.email}</li>
                            <li className="list-group-item">{user.mobile}</li>
                        </ul>
                    </div>
                </div>)}
        </div>
    )
}