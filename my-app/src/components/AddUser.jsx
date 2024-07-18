import {Button, FormControl, FormGroup, InputLabel, Input, Typography, styled } from "@mui/material";
import {useState} from 'react';
import { addUser } from "../service/api";
const Container= styled(FormGroup)`
    width:50%;
    margin:2% auto;
    & > div {
        margin-top:20px;
    }
`
const defaultValue = {
    name: '',
    email:'',
    phone:'',
    college:'',
    branch:''
}

const AddUser=()=>{
    const [user,setUser]=useState(defaultValue);
    const onValueChange = (e) => {
        setUser({ ...user,[e.target.name]:[e.target.value]})
    }
    const addUserDetails = async() => {
        await addUser(user);
    }
    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <InputLabel>College</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="college"/>
            </FormControl>
            <FormControl>
                <InputLabel>Branch</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="branch"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={(e) => addUserDetails()}>Add</Button>      
            </FormControl>          
        </Container>
    )
}
export default AddUser;