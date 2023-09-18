import axios from "axios";
import '../scss/CreateUser.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
export default function ListUser() {
    const navigate = useNavigate();
 
    const [inputs, setInputs] = useState([]);
 
    const handleChange = (event) => {
        const id = event.target.id;
        const Surname = event.target.Surname;
        const Name = event.target.Name;
        const Patronomic = event.target.Patronomic;
        const email = event.target.email;
        const Country = event.target.Country;
        const City = event.target.City;
        const Login = event.target.Login;
        const Password = event.target.Password;





        const value = event.target.value;
        setInputs(values => ({...values, [id]: value}));
    }



 
    const handleSubmit = (event) => {
        event.preventDefault();
 
        axios.post('http://localhost/react/api/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
         
    }
    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <h1 className="label">Создать пользователя</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
              
                  <label className="label">Фамилия</label>
                  <input type="text" className="form-control" name="Surname" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="label">Имя</label>
                  <input type="text" className="form-control" name="Name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="label">Отчество</label>
                  <input type="text" className="form-control" name="Patronomic" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="label">Email</label>
                  <input type="text" className="form-control" name="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="label">Страна</label>
                  <input type="text" className="form-control" name="Country" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="label">Город</label>
                  <input type="text" className="form-control" name="City" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="label">Логин</label>
                  <input type="text" className="form-control" name="Login" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="label">Пароль</label>
                  <input type="text" className="form-control" name="Password" onChange={handleChange} />
                </div> 
                <button type="submit" name="add" className="btn btn-primary">Сохранить</button>
            </form>
            </div>
            <div className="col-2"></div>
        </div>
    )
}