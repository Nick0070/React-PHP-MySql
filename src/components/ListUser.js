import axios from "axios" 
import '../scss/ListUsers.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ListUser() {
 
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
 
    function getUsers() {
        axios.get('http://localhost/react/api/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
 
    const deleteUser = (id) => {
        axios.delete(`http://localhost/react/api/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <div>
            <div>
            <table class="table">
                <thead>
                    <tr class="base">
                        <th>#</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Email</th>
                        <th>Старана</th>
                        <th>Город</th>
                        <th>Логин</th>
                        <th>Пароль</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr className="base" key={key}>
                            <td>{user.id}</td>
                            <td>{user.Surname}</td> 
                            <td>{user.Name}</td> 
                            <td>{user.Patronomic}</td> 
                            <td>{user.email}</td>
                            <td>{user.Country}</td> 
                            <td>{user.City}</td> 
                            <td>{user.Login}</td> 
                            <td>{user.Password}</td> 
                            <td>
                                <Link to={`user/${user.id}/edit`} className="btn btn-success" style={{marginRight: "10px"}}>Изменить</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Удалить</button>
                            </td>
                        </tr>
                    )}
                </tbody>
                
            </table>
            <div className="button">
                <Link to="user/create" className="btn btn-success">Добавить</Link>
            </div>
        </div>
    </div>
    )
}