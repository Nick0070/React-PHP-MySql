
import axios from "axios";
import '../scss/EditUser.scss';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
export default function ListUser() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();
 
    useEffect(() => {
        getUser();
    }, []);
 
    function getUser() {
        axios.get(`http://localhost/react/api/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost/react/api/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });   
    }

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                    <h1  className="label">Изменение пользователя</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label className="label" >Фамилия</label>
                    <input type="text" value={inputs.Surname} className="form-control" name="Surname" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label className="label" >Имя</label>
                    <input type="text" value={inputs.Name} className="form-control" name="Name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label className="label">Отчество</label>
                    <input type="text" value={inputs.Patronomic} className="form-control" name="Patronomic" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label className="label">Почта</label>
                    <input type="text" value={inputs.email} className="form-control" name="email" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label className="label">Страна</label>
                    <input type="text" value={inputs.Country} className="form-control" name="Country" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label className="label">Город</label>
                    <input type="text" value={inputs.City} className="form-control" name="City" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label  className="label">Логин</label>
                    <input type="text" value={inputs.Login} className="form-control" name="Login" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label  className="label">Пароль</label>
                    <input type="text" value={inputs.Password} className="form-control" name="Password" onChange={handleChange} />
                    </div>
                    <button type="submit" name="update" className="btn btn-primary">Сохранить</button>
                </form>
            </div>
            <div className="col-2"></div>
        </div>
    )
}