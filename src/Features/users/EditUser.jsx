import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { editUser } from './UserSlice'

const EditUser = () => {
    const params = useParams();
    // console.log(params.id);
    const dispatch = useDispatch();
    const Users = useSelector(store => store.users);
    const existingUser = Users.filter((user) => user.id === params.id );
    const { name, email } = existingUser[0];
    
    const navigate = useNavigate();
    // const [values, setValues] = useState({
    //     name: "",
    //     email: ""
    // });
    const [values, setValues] = useState({
        name,
        email
    });
    
    const handleEditValue = () => {
        setValues({ name: "", email:"" })
        console.log(values);
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }))
        navigate("/")
    }
    
      return (
        <div className='mt-10 max-w-xl mx-auto'>
            <TextField
            label="Name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value})}
            inputProps={{ type: "text", placeholder: "enter your name"}}/>
            <TextField
            label="Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value})}
            inputProps={{ type: "text", placeholder: "enter your email"}}/>
    
            <Button onClick={handleEditValue} dynamic="edit"/>
           
        </div>
      )
}

export default EditUser
