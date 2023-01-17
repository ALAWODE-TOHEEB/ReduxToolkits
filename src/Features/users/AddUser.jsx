import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { addUsers } from './UserSlice'

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
const [values, setValues] = useState({
    name: "",
    email: ""
});

const handleAddValue = () => {
    setValues({ name: "", email:"" })
    dispatch(addUsers({
        id: uuidv4(),
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

        <Button onClick={handleAddValue} dynamic="submit"/>
       
    </div>
  )
}

export default AddUser
