import axios from "axios";
import { useEffect, useState } from "react";
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
                <div className="container">
                    <ul className="list-group list-group-horizontal">
                        {users.map((user, key) => 
                            <div key={key}>
                                <li className="list-group-item">{user.id}</li>
                                <li className="list-group-item">{user.name}</li>
                                <li className="list-group-item">{user.email}</li>
                                <li className="list-group-item">{user.mobile}</li>
                            </div>                         )}
                    </ul>
                </div>
        </div>
    )
}