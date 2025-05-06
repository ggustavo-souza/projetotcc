import axios from "axios";
import { useEffect } from "react";
export default function ListUser() {

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/projetotcc/api/users').then(function response(){
            console.log(response.data);
        });
    }

    return (
        <div>
            <h1 className="mb-3">List Users</h1>
        </div>
    )
}